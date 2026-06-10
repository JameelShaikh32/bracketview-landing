import Contact from "@/components/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/contact",
    title: "Contact | BracketView",
    description:
        "Contact BracketView support for account, billing, privacy, and product questions. We respond within 1–2 business days.",
});

export default function ContactPage() {
    return <Contact />;
}
