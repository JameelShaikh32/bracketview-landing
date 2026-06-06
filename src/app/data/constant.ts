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

type FeatureItem = {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
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

type UseCaseItem = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const useCases: UseCaseItem[] = [
    {
        icon: Code2,
        title: "API debugging",
        description:
            "Inspect REST responses, trace nested fields, and debug endpoints without a local setup.",
    },
    {
        icon: Webhook,
        title: "Webhook review",
        description:
            "Validate incoming payloads, spot schema drift, and share snapshots with your team.",
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
    },
    {
        icon: ScrollText,
        title: "Documentation",
        description:
            "Generate draft schemas from example objects and keep API docs accurate.",
    },
];

const features: FeatureItem[] = [
    {
        icon: GitBranch,
        title: "Tree & Graph Viewer",
        description: "Explore nested JSON with collapsible tree and graph views",
        href: "https://app.bracketview.in",
    },
    {
        icon: Braces,
        title: "Format & Validate",
        description: "Beautify, minify, and validate JSON as you type",
        href: "https://app.bracketview.in",
    },
    {
        icon: SearchCode,
        title: "JSONPath & JQ Query",
        description: "Query large documents with JSONPath or JQ expressions",
        href: "https://app.bracketview.in",
    },
    {
        icon: GitCompare,
        title: "Diff & Export",
        description: "Compare versions and export formatted output",
        href: "https://app.bracketview.in/json-diff",
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
};

const pricingPlans: PricingPlan[] = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description:
            "No credit card. Full workspace with monthly AI limits.",
        features: [
            "JSON viewer, editor, format, validate & minify",
            "Tree, graph, JSONPath, JQ, diff & schema tools",
            "Type generators, compare view & utility tools",
            "Encrypted snapshots (up to 50 lifetime links)",
            "Document uploads up to 10 MB",
            "AI repair & helpers with monthly usage limits",
        ],
        cta: "Get started free",
        ctaHref: "https://bracketview.in",
    },
    {
        name: "Monthly",
        price: "$6",
        period: "per month",
        description:
            "Unlimited AI and higher limits, billed monthly.",
        features: [
            "Everything in Free",
            "Uploads up to 50 MB",
            "Unlimited encrypted snapshot links",
            "Unlimited AI across all AI features",
            "No monthly AI caps",
            "Priority for future Pro capabilities",
        ],
        cta: "Upgrade to Pro",
        ctaHref: "https://bracketview.in/pricing",
    },
    {
        name: "Yearly",
        originalPrice: "$6",
        displayPrice: "$4.50 / mo",
        billingNote: "Annual bill of $54 with no usage limitations.",
        saveTag: "SAVE 25%",
        description:
            "Best value — same Pro power, billed once a year.",
        features: [
            "Everything in Free",
            "Uploads up to 50 MB",
            "Unlimited encrypted snapshot links",
            "Unlimited AI across all AI features",
            "No monthly AI caps",
            "Priority for future Pro capabilities",
        ],
        cta: "Get Started",
        ctaHref: "https://bracketview.in/pricing",
        highlighted: true,
    },
];

type FaqItem = {
    question: string;
    answer: string;
};

const faqItems: FaqItem[] = [
    {
        question: "Is BracketView free to use?",
        answer:
            "Yes. The full JSON workspace — viewer, formatter, validator, tree, graph, JSONPath, diff, and schema tools — is free. Pro adds unlimited AI and higher upload limits.",
    },
    {
        question: "Does my JSON data leave the browser?",
        answer:
            "Viewing, formatting, and validation run locally in your browser whenever possible. Snapshot links and AI-assisted features follow a different data path — review our privacy policy before using those with sensitive data.",
    },
    {
        question: "What does Pro include?",
        answer:
            "Pro unlocks unlimited AI across repair, mock data, and conversion helpers, uploads up to 50 MB, unlimited encrypted snapshot links, and no monthly AI caps for signed-in accounts.",
    },
    {
        question: "How large can uploaded files be?",
        answer:
            "Free accounts can upload documents up to 10 MB. Pro raises the limit to 50 MB for larger API payloads, exports, and log files.",
    },
];

const footerLinks = {
    product: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Open app", href: "https://app.bracketview.in" },
    ],
    company: [
        { label: "About", href: "/#about" },
        { label: "Blog", href: "/blog" },
        { label: "Use cases", href: "/#use-cases" },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
};

const featuredOnLinks = [
    {
        label: "Product Hunt",
        type: "producthunt" as const,
        href: "https://www.producthunt.com/products/bracketview/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-bracketview",
        imageSrc:
            "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1134106&theme=light",
        imageAlt:
            "BracketView - Free Advanced JSON viewer with AI fix, JQ, JSON share & more | Product Hunt",
        imageWidth: 250,
        imageHeight: 54,
    },
    {
        label: "SaaSHub",
        type: "saashub" as const,
        href: "https://www.saashub.com/bracketview?utm_source=badge&utm_campaign=badge&utm_content=bracketview&badge_variant=color&badge_kind=approved",
        imageSrc:
            "https://cdn-b.saashub.com/img/badges/approved-color.png?v=1",
        imageAlt: "BracketView badge",
        imageMaxWidth: 150,
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/bracketview",
    },
    {
        label: "Twitter",
        href: "https://x.com/bracket_view",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/bracketview",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@bracketview",
    },
    {
        label: "Medium",
        href: "https://medium.com/@dev-jameel",
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
        href: "/#about",
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
    faqItems,
    featuredOnLinks,
    features,
    footerLinks,
    howItWorksSteps,
    navLinks,
    pricingPlans,
    socialLinks,
    useCases
};
export type { FaqItem, FeatureItem, HowItWorksStep, PricingPlan, UseCaseItem };

