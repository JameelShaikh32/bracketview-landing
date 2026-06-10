import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-diff"];

export const metadata = createPageMetadata({
    path: "/json-diff",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonDiffPage() {
    return <ToolLandingPage page={page} />;
}
