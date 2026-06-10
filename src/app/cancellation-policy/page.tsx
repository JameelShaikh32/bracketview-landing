import { cancellationPolicy } from "@/app/data/legal";
import LegalDocument from "@/components/LegalDocument";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/cancellation-policy",
    title: "Cancellation Policy | BracketView",
    description:
        "How to cancel your BracketView Pro subscription — steps, billing cycle rules, and what happens after cancellation.",
});

export default function CancellationPolicyPage() {
    return <LegalDocument {...cancellationPolicy} />;
}
