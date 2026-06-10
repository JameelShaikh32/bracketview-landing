import { termsOfService } from "@/app/data/legal";
import LegalDocument from "@/components/LegalDocument";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/terms",
    title: "Terms of Service | BracketView",
    description:
        "Terms and conditions for using BracketView — service scope, acceptable use, billing, and liability for the JSON workspace.",
});

export default function TermsPage() {
    return <LegalDocument {...termsOfService} />;
}
