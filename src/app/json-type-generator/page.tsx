import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-type-generator"];

export const metadata = createPageMetadata({
    path: "/json-type-generator",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonTypeGeneratorPage() {
    return <ToolLandingPage page={page} />;
}
