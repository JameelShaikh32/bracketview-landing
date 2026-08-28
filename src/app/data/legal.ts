import {
    formatCount,
    formatExpiryMinutes,
    PLAN_LIMITS,
} from "./planLimits";

type LegalSection = {
    title: string;
    paragraphs: string[];
};

type LegalDocument = {
    title: string;
    intro: string;
    sections: LegalSection[];
    contactLine: string;
    lastUpdated?: string;
};

const supportEmail = "support@bracketview.in";

const privacyPolicy: LegalDocument = {
    title: "Privacy Policy",
    lastUpdated: "2026-07-01",
    intro:
        "BracketView is built so most JSON work stays in your browser. Optional features (AI repair, shareable snapshots, Webhook Tester) can send or store data on our servers only when you choose to use them. Read the sections below for specifics.",
    sections: [
        {
            title: "Data controller",
            paragraphs: [
                "BracketView is operated by Jameel Shaikh. For privacy questions or data requests, contact support@bracketview.in. See also our Disclaimer and Terms of Service.",
            ],
        },
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
            title: "Webhook Tester",
            paragraphs: [
                "Webhook Tester provides public disposable endpoints that record incoming HTTP requests (headers, body, query, and related metadata) so you can debug integrations. Captures are stored for a limited retention period (by plan) and then expire. Anyone who knows the endpoint URL can POST data to it — treat webhook URLs like short-lived public channels and do not send secrets you would not expose.",
                "This is different from client-side JSON editing: webhook traffic must reach our capture infrastructure so third-party services can deliver events. History is short-lived by design, not long-term storage.",
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
                "If you use AI-powered features (such as JSON repair, conversion helpers, mock data generation, or the jq assistant), BracketView may send your JSON (or an excerpt) to third-party AI providers (currently Groq and/or Google Gemini) via our servers. API keys for those providers are held by BracketView on the server; you do not need to supply your own keys for standard product AI features. Review each provider's privacy terms before using AI with sensitive data.",
            ],
        },
        {
            title: "Advertising on this website",
            paragraphs: [
                "The BracketView marketing site (bracketview.in) may display third-party advertisements through Google AdSense to help support free core product features. The BracketView application workspace at app.bracketview.in does not show advertisements.",
                "When ads are enabled, Google may use cookies and similar technologies to serve and measure advertising. You can manage ad personalization in your Google Ads Settings.",
            ],
        },
        {
            title: "Analytics",
            paragraphs: [
                "We may use privacy-conscious analytics (such as Vercel Analytics and optional Google Tag Manager) to understand how the marketing site is used. These are separate from advertising cookies and are only loaded when configured.",
            ],
        },
        {
            title: "Data we do not sell",
            paragraphs: [
                "We do not sell your personal data or build advertising profiles ourselves. Third-party ad and analytics partners process limited data under their own policies when those features are enabled on this site.",
            ],
        },
    ],
    contactLine:
        "If you have questions about this policy, contact the site owner at",
};

const termsOfService: LegalDocument = {
    title: "Terms and Conditions",
    lastUpdated: "2026-07-01",
    intro:
        "By using BracketView, you agree to these terms. If you do not agree, please do not use the service. For warranty and liability limitations, see our Disclaimer.",
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
            title: "Free and Pro usage limits",
            paragraphs: [
                `Core JSON tools (viewer, formatter, validator, tree, graph, node, table, JSONPath, jq, diff, and schema) and Webhook Tester are available on the free tier. Free signed-in accounts include uploads up to ${PLAN_LIMITS.free.uploadMb} MB, ${PLAN_LIMITS.free.snapshotsPerMonth} encrypted snapshot links per month (up to ${formatExpiryMinutes(PLAN_LIMITS.free.snapshotMaxExpiryMinutes)} expiry), ${PLAN_LIMITS.free.aiActionsPerMonth} AI actions per month, and Webhook Tester with up to ${PLAN_LIMITS.free.webhookEndpoints} active endpoints, ${formatCount(PLAN_LIMITS.free.webhookRequestsPerEndpoint)} requests per endpoint, and up to ${PLAN_LIMITS.free.webhookMaxRetentionDays}-day retention.`,
                `BracketView Pro unlocks uploads up to ${PLAN_LIMITS.pro.uploadMb} MB, Performance Mode for large JSON payloads, unlimited encrypted snapshot links (up to ${formatExpiryMinutes(PLAN_LIMITS.pro.snapshotMaxExpiryMinutes)} expiry), unlimited AI features, Webhook Tester with up to ${PLAN_LIMITS.pro.webhookEndpoints} endpoints, ${formatCount(PLAN_LIMITS.pro.webhookRequestsPerEndpoint)} requests per endpoint, and up to ${PLAN_LIMITS.pro.webhookMaxRetentionDays}-day retention, plus encrypted share of a single captured webhook request, and priority email support. Limits may change with notice; see bracketview.in for current plan details.`,
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
                'The service is provided "as is" without warranties of any kind. To the extent permitted by law, BracketView is not liable for indirect, incidental, or consequential losses resulting from use of the service. See our full Disclaimer for details on processed data, AI output, and user responsibilities.',
            ],
        },
    ],
    contactLine: "For questions about these terms, contact",
};

const disclaimer: LegalDocument = {
    title: "Disclaimer",
    lastUpdated: "2026-07-01",
    intro:
        "BracketView provides browser-based JSON tools for developers. This disclaimer explains the limits of the service and your responsibilities when using it.",
    sections: [
        {
            title: "No warranty on processed data",
            paragraphs: [
                'BracketView is provided "as is" and "as available" without warranties of any kind, whether express or implied, including fitness for a particular purpose or accuracy of output.',
                "Formatting, validation, diff, schema checks, type generation, and AI-assisted repairs are helpers — not guarantees. Always verify results before using them in production systems, deployments, or compliance workflows.",
            ],
        },
        {
            title: "User responsibility for pasted content",
            paragraphs: [
                "You are solely responsible for the JSON and other data you paste, upload, or share through BracketView. Do not submit secrets, credentials, personal data, or regulated information unless you understand and accept the risks.",
                "Optional snapshot links and public webhook endpoint URLs are accessible to anyone with the link. Core formatting and validation run locally in your browser; optional features (snapshots, AI, Webhook Tester) may transmit or store data as described in our Privacy Policy.",
            ],
        },
        {
            title: "AI output limitations",
            paragraphs: [
                "AI-powered features may suggest fixes, generate mock data, or rewrite queries. AI output can be incorrect, incomplete, or unsafe for your use case. Review all AI-generated content before relying on it.",
                "BracketView routes standard product AI requests through its servers to configured providers. BracketView does not control how those providers process data once received. Do not send secrets or regulated data to AI features unless you accept that risk.",
            ],
        },
        {
            title: "Not professional advice",
            paragraphs: [
                "Content on bracketview.in — including blog articles and glossary entries — is for general developer education. It is not legal, financial, security, or compliance advice.",
            ],
        },
        {
            title: "Limitation of liability",
            paragraphs: [
                "To the fullest extent permitted by law, BracketView and its operator are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, revenue, or business arising from use of the service.",
                "Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the maximum extent permitted by applicable law.",
            ],
        },
        {
            title: "Third-party services",
            paragraphs: [
                "BracketView may link to or integrate with third-party services (payment processors, analytics, advertising, AI providers). Those services operate under their own terms and policies.",
            ],
        },
    ],
    contactLine: "For questions about this disclaimer, contact",
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
    disclaimer,
    privacyPolicy,
    refundPolicy,
    supportEmail,
    termsOfService,
};
export type { LegalDocument, LegalSection };
