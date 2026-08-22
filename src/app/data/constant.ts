import type { LucideIcon } from "lucide-react";
import {
    Braces,
    Code2,
    FileSearch,
    GitBranch,
    GitCompare,
    ScrollText,
    SearchCode,
    Settings2,
    Webhook,
} from "lucide-react";
import {
    APP_PRICING_MONTHLY_CHECKOUT_URL,
    APP_PRICING_YEARLY_CHECKOUT_URL,
    FREE_AI_LABEL,
    FREE_SNAPSHOT_EXPIRY_LABEL,
    FREE_SNAPSHOTS_LABEL,
    FREE_UPLOAD_LABEL,
    FREE_WEBHOOK_LABEL,
    PRICING,
    PRO_AI_LABEL,
    PRO_MONTHLY_PRICE_LABEL,
    PRO_PERFORMANCE_MODE_LABEL,
    PRO_SNAPSHOT_EXPIRY_LABEL,
    PRO_SNAPSHOTS_LABEL,
    PRO_UPLOAD_LABEL,
    PRO_WEBHOOK_LABEL,
    PRO_WEBHOOK_SHARE_LABEL,
    PRO_YEARLY_BILL_LABEL,
    PRO_YEARLY_MONTHLY_LABEL,
} from "./planLimits";

type FeatureItem = {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    cta: string;
};

type HowItWorksStep = {
    step: string;
    title: string;
    description: string;
};

const howItWorksSteps: HowItWorksStep[] = [
    {
        step: "01",
        title: "Paste or upload",
        description:
            "Drop JSON into the editor or import a file — no install required.",
    },
    {
        step: "02",
        title: "Format & validate",
        description:
            "Beautify, minify, and catch syntax errors as you type in real time.",
    },
    {
        step: "03",
        title: "Explore & export",
        description:
            "Browse the tree, run JSONPath queries, diff versions, and share results.",
    },
];

type RelatedLink = {
    label: string;
    href: string;
};

type UseCaseItem = {
    icon: LucideIcon;
    title: string;
    description: string;
    relatedLinks?: RelatedLink[];
};

const useCases: UseCaseItem[] = [
    {
        icon: Code2,
        title: "API debugging",
        description:
            "Inspect REST responses, trace nested fields, and debug endpoints without a local setup.",
        relatedLinks: [
            { label: "JSONPath query", href: "/jsonpath-query" },
            { label: "JQ playground", href: "/jq-playground" },
        ],
    },
    {
        icon: Webhook,
        title: "Webhook review",
        description:
            "Generate a disposable public URL, point Stripe, GitHub, or Shopify at it, and inspect live headers and bodies — then mock responses or replay to localhost.",
        relatedLinks: [
            { label: "Webhook Tester", href: "/webhook-tester" },
            { label: "Schema validator", href: "/json-schema-validator" },
        ],
    },
    {
        icon: Settings2,
        title: "Config management",
        description:
            "Format and validate hand-edited configs, env exports, and deployment manifests.",
    },
    {
        icon: FileSearch,
        title: "Log cleanup",
        description:
            "Repair broken JSON from log files, exports, and third-party integrations.",
    },
    {
        icon: GitCompare,
        title: "Release reviews",
        description:
            "Diff two API versions side by side and see exactly which fields changed.",
        relatedLinks: [{ label: "JSON diff", href: "/json-diff" }],
    },
    {
        icon: ScrollText,
        title: "Documentation",
        description:
            "Generate draft schemas from example objects and keep API docs accurate.",
        relatedLinks: [
            { label: "Schema validator", href: "/json-schema-validator" },
            { label: "Type generator", href: "/json-type-generator" },
        ],
    },
];

const features: FeatureItem[] = [
    {
        icon: GitBranch,
        title: "Tree & Graph Viewer",
        description: "Explore nested JSON with collapsible tree and graph views",
        href: "/json-viewer",
        cta: "Open JSON Viewer",
    },
    {
        icon: Braces,
        title: "Format & Validate",
        description: "Beautify, minify, and validate JSON as you type",
        href: "/json-formatter",
        cta: "Try formatter",
    },
    {
        icon: SearchCode,
        title: "JSONPath & JQ Query",
        description: "Query large documents with JSONPath or JQ expressions",
        href: "/jsonpath-query",
        cta: "Try JSONPath",
    },
    {
        icon: Webhook,
        title: "Webhook Tester",
        description:
            "Disposable public webhook URLs — capture live headers, bodies, and mock responses",
        href: "/webhook-tester",
        cta: "Open Webhook Tester",
    },
];

type PricingPlan = {
    name: string;
    price?: string;
    period?: string;
    originalPrice?: string;
    displayPrice?: string;
    billingNote?: string;
    saveTag?: string;
    description: string;
    features: string[];
    cta: string;
    ctaHref: string;
    highlighted?: boolean;
    offerSchema?: PricingOfferSchema;
};

const pricingPlans: PricingPlan[] = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description:
            "Core JSON workspace at no cost. Upload, snapshot, AI, and Webhook Tester limits apply.",
        features: [
            "JSON viewer, editor, format, validate & minify",
            "Tree, graph, JSONPath, JQ, diff & schema tools",
            "Type generators, compare view & utility tools",
            FREE_WEBHOOK_LABEL,
            `Uploads up to ${FREE_UPLOAD_LABEL}`,
            FREE_SNAPSHOTS_LABEL,
            FREE_SNAPSHOT_EXPIRY_LABEL,
            FREE_AI_LABEL,
        ],
        cta: "Get started free",
        ctaHref: "https://app.bracketview.in",
        offerSchema: { price: "0", priceCurrency: "USD" },
    },
    {
        name: "Monthly",
        price: PRO_MONTHLY_PRICE_LABEL,
        period: "per month",
        description:
            "For developers who work in JSON daily — higher caps on uploads, webhooks, AI, and sharing.",
        features: [
            "Everything in Free",
            `Uploads up to ${PRO_UPLOAD_LABEL}`,
            PRO_WEBHOOK_LABEL,
            PRO_WEBHOOK_SHARE_LABEL,
            PRO_SNAPSHOTS_LABEL,
            PRO_SNAPSHOT_EXPIRY_LABEL,
            PRO_AI_LABEL,
            PRO_PERFORMANCE_MODE_LABEL,
            "Priority email support",
            "Priority for future Pro capabilities",
        ],
        cta: "Start monthly plan",
        ctaHref: APP_PRICING_MONTHLY_CHECKOUT_URL,
        offerSchema: { price: String(PRICING.monthlyUsd), priceCurrency: "USD" },
    },
    {
        name: "Yearly",
        originalPrice: PRO_MONTHLY_PRICE_LABEL,
        displayPrice: PRO_YEARLY_MONTHLY_LABEL,
        billingNote: `Annual bill of ${PRO_YEARLY_BILL_LABEL} with raised Pro caps.`,
        saveTag: `SAVE ${PRICING.annualDiscountPercent}%`,
        description:
            "Best value for power users — same Pro benefits, billed once a year.",
        features: [
            "Everything in Free",
            `Uploads up to ${PRO_UPLOAD_LABEL}`,
            PRO_WEBHOOK_LABEL,
            PRO_WEBHOOK_SHARE_LABEL,
            PRO_SNAPSHOTS_LABEL,
            PRO_SNAPSHOT_EXPIRY_LABEL,
            PRO_AI_LABEL,
            PRO_PERFORMANCE_MODE_LABEL,
            "Priority email support",
            "Priority for future Pro capabilities",
        ],
        cta: "Start yearly plan",
        ctaHref: APP_PRICING_YEARLY_CHECKOUT_URL,
        highlighted: true,
        offerSchema: { price: String(PRICING.yearlyUsd), priceCurrency: "USD" },
    },
];

const pricingFaqs = [
    {
        question: "Is BracketView privacy-first?",
        answer:
            "Yes. Viewing, formatting, and validation run client-side in your browser whenever possible. Your JSON does not leave the device for core tools. Snapshot links, AI features, and Webhook Tester follow a different path — review the privacy policy before using them with sensitive data.",
    },
    {
        question: "Do you collect my JSON payloads?",
        answer:
            "Core workspace processing is designed so payloads stay local. We do not sell customer JSON. Optional cloud features store only what those features need (encrypted snapshots, webhook captures, AI prompts) under stated retention limits.",
    },
    {
        question: "What is the ROI of Pro?",
        answer:
            "Pro removes AI and snapshot friction for daily API work, raises upload and webhook caps, and unlocks Performance Mode for large payloads — typically replacing multiple paid single-purpose tools.",
    },
];

type PricingOfferSchema = {
    price: string;
    priceCurrency: string;
};

type Testimonial = {
    name: string;
    role: string;
    quote: string;
    title?: string;
    rating?: number;
    source?: string;
    sourceUrl?: string;
};

/** Verified reviews from Software Advice (https://www.softwareadvice.com/product/560735-BracketView/) */
const testimonials: Testimonial[] = [
    {
        name: "Ritesh Shrichandra Y.",
        role: "Computer & Network Security · 2–10 employees",
        title: "Bracket viewer for everyone",
        rating: 5,
        quote:
            "Its UI and interface is so attractive. And also it has great functions that help to visualise things easily.",
        source: "Software Advice",
        sourceUrl:
            "https://www.softwareadvice.com/product/560735-BracketView/#reviews",
    },
    {
        name: "Musab M.",
        role: "Marketing and Advertising · 201–500 employees",
        title: 'More than just "A JSON Viewer"',
        rating: 5,
        quote:
            "BracketView is more than just a JSON viewer. It has a large deck of functionality which makes it the default choice for working with JSON. You don't need another Chrome tab once you are at BracketView — AI support, Graph View, JQ filters, and TS generator. Usually buffet tools mess up UI/UX, but not BracketView. Pocket-friendly pricing too.",
        source: "Software Advice",
        sourceUrl:
            "https://www.softwareadvice.com/product/560735-BracketView/#reviews",
    },
    {
        name: "Sachin Y.",
        role: "Information Technology and Services · 501–1000 employees",
        title: "Clean, lightweight, and super fast for daily JSON debugging",
        rating: 5,
        quote:
            "It's become my go-to web tool whenever I need to inspect or format JSON quickly without opening a heavy desktop app. It eliminates the usual clutter and ads and just gives you a clean workspace. A lot of online JSON formatters get laggy with huge payloads, but BracketView handles large datasets smoothly.",
        source: "Software Advice",
        sourceUrl:
            "https://www.softwareadvice.com/product/560735-BracketView/#reviews",
    },
];

const footerLinks = {
    product: [
        { label: "All features", href: "/features" },
        { label: "View pricing", href: "/pricing" },
        { label: "Download for Windows", href: "/downloads" },
        { label: "How BracketView works", href: "/#how-it-works" },
        { label: "Learn hub", href: "/learn" },
        { label: "Best JSON viewer", href: "/learn/best-json-viewer" },
        { label: "Launch workspace", href: "https://app.bracketview.in", rel: "" },
    ],
    tools: [
        { label: "JSON Viewer", href: "/json-viewer" },
        { label: "JSON Formatter", href: "/json-formatter" },
        { label: "JSON Validator", href: "/json-validator" },
        { label: "JSON Diff", href: "/json-diff" },
        { label: "JSONPath Query", href: "/jsonpath-query" },
        { label: "JQ Playground", href: "/jq-playground" },
        { label: "Schema Validator", href: "/json-schema-validator" },
        { label: "Type Generator", href: "/json-type-generator" },
        { label: "AI JSON Fixer", href: "/ai-json-fixer" },
        { label: "Webhook Tester", href: "/webhook-tester" },
        { label: "Glossary", href: "/glossary" },
    ],
    company: [
        { label: "About us", href: "/about" },
        { label: "Read the blog", href: "/blog" },
        { label: "JSON use cases", href: "/#use-cases" },
        { label: "Help & FAQ", href: "/#faq" },
        { label: "Contact support", href: "/contact" },
    ],
    legal: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
};

const featuredOnLinks = [
    {
        label: "Product Hunt",
        href: "https://www.producthunt.com/products/bracketview/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-bracketview",
        imageSrc: "/images/featured-logo/product_hunt_badge.webp",
        imageAlt:
            "BracketView - Free Advanced JSON viewer with AI fix, JQ, JSON share & more | Product Hunt",
        imageWidth: 250,
        imageHeight: 54,
    },
    {
        label: "SaaSHub",
        href: "https://www.saashub.com/bracketview?utm_source=badge&utm_campaign=badge&utm_content=bracketview&badge_variant=color&badge_kind=approved",
        imageSrc: "/images/featured-logo/saashub-badge.webp",
        imageAlt: "BracketView on SaaSHub",
        imageWidth: 200,
        imageHeight: 67,
    },
    {
        label: "G2",
        href: "https://www.g2.com/products/bracketview",
        imageSrc: "/images/featured-logo/g2-logo.webp",
        imageAlt: "BracketView on G2",
        imageWidth: 180,
        imageHeight: 180,
    },
    {
        label: "Capterra",
        href: "https://www.capterra.com/p/10053145/BracketView/",
        imageSrc: "/images/featured-logo/capterra.webp",
        imageAlt: "BracketView on Capterra",
        imageWidth: 256,
        imageHeight: 59,
    },
    {
        label: "Software Advice",
        href: "https://www.softwareadvice.com/product/560735-BracketView/",
        imageSrc: "/images/featured-logo/software-advice.webp",
        imageAlt: "BracketView on Software Advice",
        imageWidth: 320,
        imageHeight: 104,
    },
    {
        label: "GetApp",
        href: "https://www.getapp.com/all-software/a/bracketview/",
        imageSrc: "/images/featured-logo/getapp.webp",
        imageAlt: "BracketView on GetApp",
        imageWidth: 320,
        imageHeight: 119,
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/bracketview",
        rel: "",
    },
    {
        label: "Twitter",
        href: "https://x.com/bracket_view",
        rel: "",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/bracketview",
        rel: "",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/bracketview",
        rel: "",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@bracketview",
        rel: "",
    },
    {
        label: "Medium",
        href: "https://medium.com/@dev-jameel",
        rel: "",
    },
];

const navLinks = [
    {
        label: "Features",
        href: "/features",
    },
    {
        label: "Pricing",
        href: "/pricing",
    },
    {
        label: "Download",
        href: "/downloads",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export {
    featuredOnLinks,
    features,
    footerLinks,
    howItWorksSteps,
    navLinks,
    pricingFaqs,
    pricingPlans,
    socialLinks,
    testimonials,
    useCases
};
export type {
    FeatureItem,
    HowItWorksStep,
    PricingOfferSchema,
    PricingPlan,
    RelatedLink,
    Testimonial,
    UseCaseItem
};

