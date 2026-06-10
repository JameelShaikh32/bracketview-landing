import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-validator"];

export const metadata = createPageMetadata({
    path: "/json-validator",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonValidatorPage() {
    return <ToolLandingPage page={page} />;
}
