import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["json-viewer"];

export const metadata = createPageMetadata({
  path: "/json-viewer",
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [
    "free online JSON viewer",
    "JSON tree viewer",
    "online JSON viewer",
    "BracketView",
  ],
});

export default function JsonViewerPage() {
  return <ToolLandingPage page={page} />;
}
