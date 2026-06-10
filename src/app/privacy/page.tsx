import { privacyPolicy } from "@/app/data/legal";
import LegalDocument from "@/components/LegalDocument";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/privacy",
    title: "Privacy Policy | BracketView",
    description:
        "How BracketView handles your data — local browser processing, snapshots, AI features, and privacy practices for the JSON workspace.",
});

export default function PrivacyPage() {
    return <LegalDocument {...privacyPolicy} />;
}
