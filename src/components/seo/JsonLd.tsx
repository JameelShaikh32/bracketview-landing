type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

const JsonLd = ({ data }: JsonLdProps) => {
    const schemas = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`${schema["@type"] as string}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            ))}
        </>
    );
};

export default JsonLd;
