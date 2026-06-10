import { refundPolicy } from "@/app/data/legal";
import LegalDocument from "@/components/LegalDocument";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/refund-policy",
    title: "Refund Policy | BracketView",
    description:
        "BracketView refund policy — eligibility, process, and timelines for Pro subscription refunds processed via Razorpay.",
});

export default function RefundPolicyPage() {
    return <LegalDocument {...refundPolicy} />;
}
