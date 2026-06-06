import { sendContactEmails } from "@/lib/email/send-contact";
import { getSmtpConfig } from "@/lib/email/transporter";
import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactSubjects = new Set([
    "General inquiry",
    "Account and sign-in",
    "Billing and subscriptions",
    "Privacy and data",
    "Product feedback",
]);

type ContactRequestBody = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    company?: string;
};

export async function POST(request: Request) {
    try {
        if (!getSmtpConfig()) {
            return NextResponse.json(
                {
                    error: "Email service is not configured. Please try again later.",
                },
                { status: 503 },
            );
        }

        const body = (await request.json()) as ContactRequestBody;

        if (body.company?.trim()) {
            return NextResponse.json({ success: true });
        }

        const name = body.name?.trim() ?? "";
        const email = body.email?.trim() ?? "";
        const subject = body.subject?.trim() ?? "";
        const message = body.message?.trim() ?? "";

        if (!name || name.length > 120) {
            return NextResponse.json(
                { error: "Please enter a valid name." },
                { status: 400 },
            );
        }

        if (!email || !EMAIL_PATTERN.test(email) || email.length > 254) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        if (!subject || !contactSubjects.has(subject)) {
            return NextResponse.json(
                { error: "Please select a valid subject." },
                { status: 400 },
            );
        }

        if (!message || message.length < 10 || message.length > 5000) {
            return NextResponse.json(
                {
                    error: "Message must be between 10 and 5000 characters.",
                },
                { status: 400 },
            );
        }

        await sendContactEmails({ name, email, subject, message });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                error: "Unable to send your message right now. Please try again later.",
            },
            { status: 500 },
        );
    }
}
