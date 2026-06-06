import LegalDocument from "@/app/components/LegalDocument";
import { privacyPolicy } from "@/app/data/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | BracketView",
    description:
        "How BracketView handles your data — local browser processing, snapshots, AI features, and privacy practices.",
};

export default function PrivacyPage() {
    return <LegalDocument {...privacyPolicy} />;
}
