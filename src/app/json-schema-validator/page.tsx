import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-schema-validator"];

export const metadata = createPageMetadata({
    path: "/json-schema-validator",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonSchemaValidatorPage() {
    return <ToolLandingPage page={page} />;
}
