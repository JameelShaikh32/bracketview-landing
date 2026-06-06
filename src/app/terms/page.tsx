import LegalDocument from "@/app/components/LegalDocument";
import { termsOfService } from "@/app/data/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | BracketView",
    description:
        "Terms and conditions for using BracketView — service scope, acceptable use, billing, and liability.",
};

export default function TermsPage() {
    return <LegalDocument {...termsOfService} />;
}
