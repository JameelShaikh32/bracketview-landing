import { disclaimer } from "@/app/data/legal";
import LegalDocument from "@/components/LegalDocument";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/disclaimer",
    title: "Disclaimer | BracketView",
    description:
        "BracketView disclaimer — no warranty on processed JSON, user responsibilities, AI output limitations, and liability limits for the JSON workspace.",
});

export default function DisclaimerPage() {
    return <LegalDocument {...disclaimer} />;
}
