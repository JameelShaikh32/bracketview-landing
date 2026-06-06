import LegalDocument from "@/app/components/LegalDocument";
import { refundPolicy } from "@/app/data/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | BracketView",
    description:
        "How BracketView handles refund requests for Pro purchases made through Razorpay.",
};

export default function RefundPolicyPage() {
    return <LegalDocument {...refundPolicy} />;
}
