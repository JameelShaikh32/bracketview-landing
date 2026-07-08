import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["ai-json-fixer"];

export const metadata = createPageMetadata({
    path: "/ai-json-fixer",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function AiJsonFixerPage() {
    return <ToolLandingPage page={page} />;
}
