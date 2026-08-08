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
        href: "https://app.bracketview.in",
        cta: "Open tree viewer",
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

type PricingOfferSchema = {
    price: string;
    priceCurrency: string;
};

const footerLinks = {
    product: [
        { label: "All features", href: "/features" },
        { label: "View pricing", href: "/#pricing" },
        { label: "How BracketView works", href: "/#how-it-works" },
        { label: "Launch workspace", href: "https://app.bracketview.in", rel: "" },
    ],
    tools: [
        { label: "JSON Formatter", href: "/json-formatter" },
        { label: "JSON Validator", href: "/json-validator" },
        { label: "JSON Diff", href: "/json-diff" },
        { label: "JSONPath Query", href: "/jsonpath-query" },
        { label: "JQ Playground", href: "/jq-playground" },
        { label: "Schema Validator", href: "/json-schema-validator" },
        { label: "Type Generator", href: "/json-type-generator" },
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
        href: "/#pricing",
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
        label: "FAQ",
        href: "/#faq",
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
    pricingPlans,
    socialLinks,
    useCases
};
export type {
    FeatureItem,
    HowItWorksStep,
    PricingOfferSchema,
    PricingPlan,
    RelatedLink,
    UseCaseItem
};

