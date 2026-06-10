import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-formatter"];

export const metadata = createPageMetadata({
    path: "/json-formatter",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function JsonFormatterPage() {
    return <ToolLandingPage page={page} />;
}
