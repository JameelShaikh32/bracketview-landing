import { sendContactEmails } from "@/lib/email/send-contact";
import { getSmtpConfig } from "@/lib/email/transporter";
import {
    getClientIp,
    isAllowedOrigin,
    sanitizeText,
} from "@/lib/security";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 8_192;

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
        if (!isAllowedOrigin(request)) {
            return NextResponse.json({ error: "Forbidden." }, { status: 403 });
        }

        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
            return NextResponse.json(
                { error: "Invalid content type." },
                { status: 415 },
            );
        }

        const rawBody = await request.text();
        if (!rawBody || rawBody.length > MAX_BODY_BYTES) {
            return NextResponse.json(
                { error: "Request body is too large." },
                { status: 413 },
            );
        }

        let body: ContactRequestBody;
        try {
            body = JSON.parse(rawBody) as ContactRequestBody;
        } catch {
            return NextResponse.json(
                { error: "Invalid JSON payload." },
                { status: 400 },
            );
        }

        if (!getSmtpConfig()) {
            return NextResponse.json(
                {
                    error: "Email service is not configured. Please try again later.",
                },
                { status: 503 },
            );
        }

        if (body.company?.trim()) {
            return NextResponse.json({ success: true });
        }

        const name = sanitizeText(body.name ?? "", 120);
        const email = sanitizeText(body.email ?? "", 254);
        const subject = sanitizeText(body.subject ?? "", 80);
        const message = sanitizeText(body.message ?? "", 5000);

        if (!name) {
            return NextResponse.json(
                { error: "Please enter a valid name." },
                { status: 400 },
            );
        }

        if (!email || !EMAIL_PATTERN.test(email)) {
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

        if (!message || message.length < 10) {
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
        console.error("Contact form error:", getClientIp(request), error);

        return NextResponse.json(
            {
                error: "Unable to send your message right now. Please try again later.",
            },
            { status: 500 },
        );
    }
}
