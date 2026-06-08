import {
    buildFaqPageSchema,
    buildOrganizationSchema,
    buildWebApplicationSchema,
    buildWebSiteSchema,
} from "@/lib/seo";

const StructuredData = () => {
    const schemas = [
        buildWebApplicationSchema(),
        buildOrganizationSchema(),
        buildWebSiteSchema(),
        buildFaqPageSchema(),
    ];

    return (
        <>
            {schemas.map((schema) => (
                <script
                
                    key={schema["@type"] as string}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            ))}
        </>
    );
};

export default StructuredData;
