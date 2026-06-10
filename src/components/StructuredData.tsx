import { buildOrganizationSchema } from "@/lib/seo";
import JsonLd from "./seo/JsonLd";

const StructuredData = () => {
    return <JsonLd data={buildOrganizationSchema()} />;
};

export default StructuredData;
