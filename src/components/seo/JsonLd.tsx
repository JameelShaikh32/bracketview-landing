type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Escapes characters that could break out of the `<script>` tag or trip up
 * strict JS parsers when JSON is embedded as HTML: `<` (prevents `</script>`
 * injection), and the U+2028/U+2029 line/paragraph separators (valid in JSON
 * strings but illegal as raw line terminators in JS).
 */
function sanitizeJsonLd(json: string): string {
    return json
        .replace(/</g, "\\u003c")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
}

const JsonLd = ({ data }: JsonLdProps) => {
    const schemas = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`${schema["@type"] as string}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: sanitizeJsonLd(JSON.stringify(schema)),
                    }}
                />
            ))}
        </>
    );
};

export default JsonLd;
