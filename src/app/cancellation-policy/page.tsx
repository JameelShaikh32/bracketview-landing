import LegalDocument from "@/app/components/LegalDocument";
import { cancellationPolicy } from "@/app/data/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cancellation Policy | BracketView",
    description:
        "How to cancel your BracketView Pro subscription and what to expect after cancellation.",
};

export default function CancellationPolicyPage() {
    return <LegalDocument {...cancellationPolicy} />;
}
