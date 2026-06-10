import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["jsonpath-query"];

export const metadata = createPageMetadata({
    path: "/jsonpath-query",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonPathQueryPage() {
    return <ToolLandingPage page={page} />;
}
