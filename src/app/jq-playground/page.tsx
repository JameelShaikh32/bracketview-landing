import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["jq-playground"];

export const metadata = createPageMetadata({
    path: "/jq-playground",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JqPlaygroundPage() {
    return <ToolLandingPage page={page} />;
}
