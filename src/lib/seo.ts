import type { Metadata } from "next";
import { PLAN_LIMITS, PRICING, PRO_PRICING_FAQ_DETAIL, PRO_SNAPSHOT_EXPIRY_LABEL } from "@/app/data/planLimits";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bracketview.in";

const APP_URL = "https://app.bracketview.in";

const META_TITLE =
    "Online JSON Viewer, Formatter & Validator | BracketView";

/** Keep meta descriptions between 100–130 characters for SERP display. */
const META_DESCRIPTION =
    "Free online JSON viewer, formatter & validator. Beautify, validate & edit JSON in your browser — privacy-first, no install.";

const OG_IMAGE = "/og-image.webp";

const OG_IMAGE_ALT =
    "BracketView — Online JSON Viewer, Formatter & Validator";

const TWITTER_SITE = "@bracket_view";

const HOME_KEYWORDS = [
    "JSON viewer",
    "JSON formatter",
    "JSON validator",
    "JSON diff",
    "JSONPath",
    "jq",
    "BracketView",
] as const;

type FaqItem = {
    question: string;
    answer: string;
};

const SEO_FAQ_ITEMS: FaqItem[] = [
    {
        question: "Does BracketView show ads?",
        answer:
            "The BracketView JSON workspace at app.bracketview.in is ad-free — including the free tier. This marketing website (bracketview.in) may display third-party advertisements to help support free core tools. You can decline advertising cookies via the site banner.",
    },
    {
        question: "Is BracketView free to use?",
        answer:
            `BracketView is freemium. Core workspace tools — viewer, formatter, validator, tree, graph, JSONPath, diff, and schema — are free with no signup required. Free accounts include ${PLAN_LIMITS.free.uploadMb} MB uploads, ${PLAN_LIMITS.free.snapshotsPerMonth} snapshot links per month, and ${PLAN_LIMITS.free.aiActionsPerMonth} AI actions per month. Pro unlocks unlimited AI, ${PLAN_LIMITS.pro.uploadMb} MB uploads, and unlimited encrypted snapshot links.`,
    },
    {
        question: "Does my JSON data leave the browser?",
        answer:
            "Viewing, formatting, and validation run locally in your browser whenever possible. BracketView is privacy-first: core tools are 100% client-side. Snapshot links and AI-assisted features follow a different data path — review the privacy policy before using those with sensitive data.",
    },
    {
        question: "What does BracketView Pro include?",
        answer:
            `Pro unlocks unlimited AI across repair, mock data, jq assistant, and conversion helpers; uploads up to ${PLAN_LIMITS.pro.uploadMb} MB; Performance Mode for large JSON payloads; unlimited encrypted snapshot links with ${PRO_SNAPSHOT_EXPIRY_LABEL.toLowerCase()}; and priority email support. Pro is ${PRO_PRICING_FAQ_DETAIL}.`,
    },
    {
        question: "What is Performance Mode in BracketView?",
        answer:
            `Performance Mode is a Pro-only workspace setting that optimizes parsing and rendering for large JSON files (up to ${PLAN_LIMITS.pro.uploadMb} MB). It keeps tree, graph, and editor views responsive when you work with heavy API responses, exports, or log dumps. Free accounts see Performance Mode disabled — upgrade to Pro to turn it on.`,
    },
    {
        question: "How large can uploaded JSON files be?",
        answer:
            `Free accounts can upload documents up to ${PLAN_LIMITS.free.uploadMb} MB. Pro raises the limit to ${PLAN_LIMITS.pro.uploadMb} MB for larger API payloads, exports, and log files.`,
    },
    {
        question: "What is the best free online JSON viewer?",
        answer:
            "BracketView is a free online JSON viewer with advanced features including tree view, graph view, JSONPath queries, JQ filters, JSON diff, schema validation, type generation in TypeScript/Python/Go/Rust, and AI-powered repair — all running in the browser with no install required.",
    },
    {
        question: "How do I validate JSON online?",
        answer:
            "Paste your JSON into BracketView at app.bracketview.in. The real-time validator instantly highlights bracket mismatches, trailing commas, and unquoted keys as you type. For schema validation, use the Schema Validator tool to confirm data against OpenAPI definitions or custom JSON Schema rules.",
    },
    {
        question: "How do I format or beautify JSON online?",
        answer:
            "Open BracketView, paste your raw JSON, and click Format. The formatter beautifies JSON with readable indentation and consistent spacing in one click. You can also minify JSON for production payloads.",
    },
    {
        question: "Can I query JSON without writing code?",
        answer:
            "Yes. BracketView supports JSONPath expressions (like $.store.book[*].author) and a full JQ filter playground powered by WebAssembly. The AI Query Assistant lets you describe what you need in plain English and generates a valid jq filter instantly.",
    },
];

const FEATURE_LIST = [
    "JSON Tree View",
    "JSON Graph View",
    "JSON Formatter & Beautifier",
    "JSON Minifier",
    "JSON Validator",
    "JSONPath Query",
    "JQ Filter Playground (WebAssembly)",
    "AI JSON Fixer",
    "AI Mock Data Generator",
    "JSON Diff & Compare",
    "JSON Schema Validator",
    "JSON Schema Generator",
    "TypeScript/Python/Go/Rust Type Generator",
    "Encrypted Snapshot Links",
    "Performance Mode (Pro)",
    "WebRTC Nearby Share",
    "JSON Annotations",
    "Encoder/Decoder",
];

const SAME_AS = [
    APP_URL,
    "https://www.linkedin.com/company/bracketview",
    "https://x.com/bracket_view",
    "https://www.facebook.com/bracketview",
    "https://www.instagram.com/bracketview",
    "https://www.youtube.com/@bracketview",
    "https://medium.com/@dev-jameel",
];

type PageMetadataOptions = {
    path: string;
    title: string;
    description: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
    keywords?: readonly string[];
};

function createPageMetadata({
    path,
    title,
    description,
    type = "website",
    publishedTime,
    modifiedTime,
    tags,
    keywords,
}: PageMetadataOptions): Metadata {
    const canonicalPath = path === "/" ? "" : path;
    const url = `${SITE_URL}${canonicalPath}`;

    return {
        title,
        description,
        ...(keywords ? { keywords: [...keywords] } : {}),
        alternates: {
            canonical: url,
            languages: {
                en: url,
                "x-default": url,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "BracketView",
            type,
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(tags ? { tags } : {}),
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: OG_IMAGE_ALT,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: TWITTER_SITE,
            creator: TWITTER_SITE,
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}

function buildSoftwareApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BracketView",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        url: SITE_URL,
        sameAs: SAME_AS,
        description:
            "BracketView is a freemium online JSON viewer, formatter, validator, and query workspace. Features include tree view, graph view, JSONPath, JQ filters, AI JSON repair, JSON diff, schema validation, type generation in 9+ languages, encrypted shareable snapshots, and more — all client-side.",
        featureList: FEATURE_LIST,
        offers: [
            {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description:
                    `Core JSON workspace — ${PLAN_LIMITS.free.uploadMb} MB uploads, ${PLAN_LIMITS.free.snapshotsPerMonth} snapshots/month, ${PLAN_LIMITS.free.aiActionsPerMonth} AI actions/month`,
            },
            {
                "@type": "Offer",
                name: "Pro Monthly",
                price: String(PRICING.monthlyUsd),
                priceCurrency: "USD",
                billingDuration: "P1M",
            },
            {
                "@type": "Offer",
                name: "Pro Yearly",
                price: String(PRICING.yearlyUsd),
                priceCurrency: "USD",
                billingDuration: "P1Y",
            },
        ],
        author: {
            "@type": "Person",
            name: "Jameel Shaikh",
            url: "https://medium.com/@dev-jameel",
        },
    };
}

function buildProductSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "BracketView Pro",
        description:
            `Unlimited AI, ${PLAN_LIMITS.pro.uploadMb} MB uploads, unlimited encrypted snapshot links, and ${PRO_SNAPSHOT_EXPIRY_LABEL.toLowerCase()} for BracketView.`,
        brand: {
            "@type": "Brand",
            name: "BracketView",
        },
        offers: [
            {
                "@type": "Offer",
                name: "Pro Monthly",
                price: String(PRICING.monthlyUsd),
                priceCurrency: "USD",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    price: String(PRICING.monthlyUsd),
                    priceCurrency: "USD",
                    billingDuration: "P1M",
                },
            },
            {
                "@type": "Offer",
                name: "Pro Yearly",
                price: String(PRICING.yearlyUsd),
                priceCurrency: "USD",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    price: String(PRICING.yearlyUsd),
                    priceCurrency: "USD",
                    billingDuration: "P1Y",
                },
            },
        ],
    };
}

function buildOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BracketView",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.webp`,
        foundingDate: "2025",
        founder: {
            "@type": "Person",
            name: "Jameel Shaikh",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: `${SITE_URL}/contact`,
        },
        memberOf: [
            {
                "@type": "Organization",
                name: "Product Hunt",
                url: "https://www.producthunt.com",
            },
            {
                "@type": "Organization",
                name: "SaaSHub",
                url: "https://www.saashub.com",
            },
        ],
        sameAs: [
            "https://www.linkedin.com/company/bracketview",
            "https://x.com/bracket_view",
            "https://www.facebook.com/bracketview",
            "https://www.instagram.com/bracketview",
            "https://www.youtube.com/@bracketview",
            "https://medium.com/@dev-jameel",
            "https://www.producthunt.com/products/bracketview",
            "https://www.saashub.com/bracketview",
        ],
        knowsAbout: [
            "JSON formatting",
            "JSON validation",
            "JSON Schema",
            "JQ filter",
            "Developer tools",
            "JSON diff",
        ],
    };
}

function buildWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "BracketView",
        url: SITE_URL,
        description: "Online JSON Viewer, Formatter & Validator",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${APP_URL}?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

function buildFaqPageSchema(items: FaqItem[] = SEO_FAQ_ITEMS) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

type HowToStep = {
    position: number;
    name: string;
    text: string;
    url?: string;
};

function buildHowToSchema(
    name: string,
    description: string,
    steps: HowToStep[],
) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        step: steps.map((step) => ({
            "@type": "HowToStep",
            position: step.position,
            name: step.name,
            text: step.text,
            ...(step.url ? { url: step.url } : {}),
        })),
        tool: {
            "@type": "HowToTool",
            name: "BracketView",
            url: APP_URL,
        },
    };
}

function buildHomepageHowToSchema() {
    return buildHowToSchema(
        "How to Format and Validate JSON Online with BracketView",
        "Format, validate, and explore JSON in your browser in three steps using BracketView — no install required.",
        [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in in any browser. No login or installation required.",
                url: APP_URL,
            },
            {
                position: 2,
                name: "Paste or upload your JSON",
                text: `Paste raw JSON into the editor or upload a .json file up to ${PLAN_LIMITS.free.uploadMb} MB (${PLAN_LIMITS.pro.uploadMb} MB on Pro). The real-time validator highlights syntax errors instantly.`,
            },
            {
                position: 3,
                name: "Format, explore, or query",
                text: "Click Format to beautify, switch to Tree View to explore nested objects, run JSONPath or JQ queries to filter data, or use Diff to compare two versions.",
            },
        ],
    );
}

function buildSpeakableSchema(pageUrl: string = SITE_URL) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#what-is-bracketview", ".hero-description", "#faq"],
        },
        url: pageUrl,
    };
}

function buildItemListSchema(
    name: string,
    items: { name: string; description?: string; url?: string }[],
) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.description ? { description: item.description } : {}),
            ...(item.url ? { url: item.url } : {}),
        })),
    };
}

function buildWebPageSchema(path: string, name: string, description: string) {
    const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        description,
        url,
        isPartOf: {
            "@type": "WebSite",
            name: "BracketView",
            url: SITE_URL,
        },
    };
}

type BlogPostInput = {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    updatedAt?: string;
    author?: string;
    tags: string[];
    wordCount?: number;
};

function buildBlogSchema(posts: BlogPostInput[]) {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "BracketView Blog",
        url: `${SITE_URL}/blog`,
        description:
            "Practical JSON tooling guides for developers — validation, querying, schema, diff, and API debugging.",
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            url: `${SITE_URL}/blog/${post.slug}`,
        })),
    };
}

function buildBlogPostingSchema(post: BlogPostInput) {
    const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        author: {
            "@type": "Person",
            name: post.author ?? "Jameel Shaikh",
            url: `${SITE_URL}/about`,
        },
        publisher: {
            "@type": "Organization",
            name: "BracketView",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.webp`,
            },
        },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
        },
        url: articleUrl,
        image: `${SITE_URL}/og-image.webp`,
        keywords: post.tags.join(", "),
        ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    };
}

type DefinedTerm = {
    name: string;
    description: string;
    slug: string;
};

function buildDefinedTermSetSchema(terms: DefinedTerm[]) {
    return {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "JSON Developer Glossary",
        url: `${SITE_URL}/glossary`,
        hasDefinedTerm: terms.map((term) => ({
            "@type": "DefinedTerm",
            name: term.name,
            description: term.description,
            url: `${SITE_URL}/glossary#${term.slug}`,
        })),
    };
}

function buildToolSoftwareApplicationSchema(
    name: string,
    description: string,
    url: string,
) {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        url,
        description,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free core tools with optional Pro subscription",
        },
    };
}

export {
    APP_URL,
    buildBlogPostingSchema,
    buildBlogSchema,
    buildDefinedTermSetSchema,
    buildFaqPageSchema,
    buildHomepageHowToSchema,
    buildHowToSchema,
    buildItemListSchema,
    buildOrganizationSchema,
    buildProductSchema,
    buildSoftwareApplicationSchema,
    buildSpeakableSchema,
    buildToolSoftwareApplicationSchema,
    buildWebPageSchema,
    buildWebSiteSchema,
    createPageMetadata,
    FEATURE_LIST,
    HOME_KEYWORDS,
    META_DESCRIPTION,
    META_TITLE,
    OG_IMAGE,
    OG_IMAGE_ALT,
    SEO_FAQ_ITEMS,
    SITE_URL,
    TWITTER_SITE
};
export type { BlogPostInput, DefinedTerm, FaqItem, HowToStep, PageMetadataOptions };

