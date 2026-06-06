type LegalSection = {
    title: string;
    paragraphs: string[];
};

type LegalDocument = {
    title: string;
    intro: string;
    sections: LegalSection[];
    contactLine: string;
};

const supportEmail = "support@bracketview.in";

const privacyPolicy: LegalDocument = {
    title: "Privacy Policy",
    intro:
        "BracketView is built so most JSON work stays in your browser. Optional features (AI repair, shareable snapshots) can send data to our servers or third parties only when you choose to use them. Read the sections below for specifics.",
    sections: [
        {
            title: "Local Processing",
            paragraphs: [
                "By default, formatting, validation, comparison, and visualization of JSON are performed in your browser. That data does not leave your device for those features.",
            ],
        },
        {
            title: "JSON snapshots (optional sharing)",
            paragraphs: [
                "If you create a temporary snapshot link, your JSON text and any annotations you add are uploaded and stored until the expiry time you select so anyone with the link can open it. Payloads are encrypted at rest (AES-256-GCM).",
                "Links use hard-to-guess ids but are public to anyone who has the URL — do not snapshot secrets, personal data, or anything you would not want exposed. After expiry, snapshots are intended to be removed from storage. Do not rely on snapshots for long-term backup.",
            ],
        },
        {
            title: "Input safety",
            paragraphs: [
                "We apply validation on snapshot uploads (including checks for invalid JSON, unsafe patterns in titles and notes, and limits on size and structure) to reduce abuse and common injection-style payloads. This is not a guarantee that all malicious content is blocked; you remain responsible for what you paste and share.",
            ],
        },
        {
            title: "AI Features",
            paragraphs: [
                "If you enable AI-powered fixing, the application may send the JSON data (or a minimal excerpt necessary to produce a fix) to the configured AI provider. You must configure any API keys yourself; we do not ship or store keys on our servers. Please review your provider's privacy terms for details on how they handle data.",
            ],
        },
        {
            title: "No Tracking",
            paragraphs: [
                "We do not track users across sites or collect personal identifiers beyond optional analytics if configured explicitly in environment variables. You can opt out by not providing analytics keys.",
            ],
        },
    ],
    contactLine:
        "If you have questions about this policy, contact the site owner at",
};

const termsOfService: LegalDocument = {
    title: "Terms and Conditions",
    intro:
        "By using BracketView, you agree to these terms. If you do not agree, please do not use the service.",
    sections: [
        {
            title: "Service scope",
            paragraphs: [
                "BracketView provides browser-based JSON tools and optional paid Pro access. Features can evolve over time to improve reliability and user experience.",
            ],
        },
        {
            title: "Acceptable use",
            paragraphs: [
                "You agree not to misuse the service, attempt unauthorized access, interfere with normal operation, or upload unlawful or malicious content.",
            ],
        },
        {
            title: "Accounts and billing",
            paragraphs: [
                "Paid features are billed through our payment partners. You are responsible for the accuracy of account and payment information associated with your plan.",
            ],
        },
        {
            title: "Disclaimer and liability",
            paragraphs: [
                'The service is provided "as is" without warranties of any kind. To the extent permitted by law, BracketView is not liable for indirect, incidental, or consequential losses resulting from use of the service.',
            ],
        },
    ],
    contactLine: "For questions about these terms, contact",
};

const refundPolicy: LegalDocument = {
    title: "Refund Policy",
    intro:
        "Effective date: April 19, 2026. This policy explains how refund requests are handled for BracketView Pro purchases made through Razorpay.",
    sections: [
        {
            title: "Eligible cases",
            paragraphs: [
                "Refunds are considered for duplicate payments, accidental double charges, failed service activation after successful payment, or other verified billing errors.",
            ],
        },
        {
            title: "Non-refundable cases",
            paragraphs: [
                "Charges are generally non-refundable once Pro benefits have been successfully activated and used, except where required by law or when a verified billing error is found.",
            ],
        },
        {
            title: "Request window",
            paragraphs: [
                "Please submit refund requests within 7 days of the charge date so the payment can be investigated quickly.",
            ],
        },
        {
            title: "Review and processing timeline",
            paragraphs: [
                "We review requests within 2–5 business days. If approved, refunds are initiated to the original payment method and may take an additional 5–10 business days to reflect, depending on your bank or payment provider.",
            ],
        },
        {
            title: "How to request a refund",
            paragraphs: [
                "Send a request to support@bracketview.in with your account email, Razorpay payment ID or order ID, charge date, and reason for the request.",
            ],
        },
    ],
    contactLine: "For questions about refunds, contact",
};

const cancellationPolicy: LegalDocument = {
    title: "Cancellation Policy",
    intro:
        "Effective date: April 19, 2026. You may request cancellation of your BracketView Pro subscription at any time.",
    sections: [
        {
            title: "How cancellation works",
            paragraphs: [
                "After cancellation is confirmed, auto-renewal is stopped for the next billing cycle. Your Pro access remains active until the end of the current paid period, unless stated otherwise in writing.",
            ],
        },
        {
            title: "When to submit",
            paragraphs: [
                "To avoid the next renewal charge, submit your cancellation request at least 24 hours before your renewal date.",
            ],
        },
        {
            title: "Confirmation timeline",
            paragraphs: [
                "We normally confirm cancellation requests within 1–3 business days by email.",
            ],
        },
        {
            title: "How to request cancellation",
            paragraphs: [
                "Email support@bracketview.in with your account email and Razorpay payment ID or order ID so we can process your request quickly.",
            ],
        },
    ],
    contactLine: "For questions about cancellation, contact",
};

export {
    cancellationPolicy,
    privacyPolicy,
    refundPolicy,
    supportEmail,
    termsOfService,
};
export type { LegalDocument, LegalSection };
