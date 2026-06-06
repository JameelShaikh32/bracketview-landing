import Contact from "@/app/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | BracketView",
    description:
        "Contact BracketView support for account, billing, privacy, and product questions.",
};

export default function ContactPage() {
    return <Contact />;
}
