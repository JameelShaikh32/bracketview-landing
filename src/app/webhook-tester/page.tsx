import { toolPages } from "@/app/data/toolPages";
import ToolLandingPage from "@/components/ToolLandingPage";
import { createPageMetadata } from "@/lib/seo";

const page = toolPages["webhook-tester"];

export const metadata = createPageMetadata({
    path: "/webhook-tester",
    title: page.metaTitle,
    description: page.metaDescription,
});

export default function WebhookTesterPage() {
    return <ToolLandingPage page={page} />;
}
