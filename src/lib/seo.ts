const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bracketview.in";

const APP_URL = "https://app.bracketview.in";

const META_TITLE =
    "Online JSON Viewer, Formatter & Validator | BracketView";

const META_DESCRIPTION =
    "Freemium online JSON viewer, formatter & validator. Beautify, pretty-print, validate & edit JSON in your browser — privacy-first, no install. Try BracketView.";

const OG_IMAGE = "/og-image.webp";

const OG_IMAGE_ALT =
    "BracketView — Online JSON Viewer, Formatter & Validator";

const KEYWORDS = [
    "BracketView",
    "bracketview",
    "json viewer",
    "json formatter",
    "json validator",
    "json beautifier",
    "json editor",
    "json pretty print",
    "json diff",
    "json viewer tool",
    "json viewer chrome",
    "json viewer mac",
    "dadroit json viewer",
    "lottie json viewer",
    "json viewer pro",
    "best json viewer",
    "beautify json",
    "pretty print json",
    "pretty json viewer",
    "validate json",
    "diff json",
    "jsonviewer",
    "jsonviewer stack",
    "json viewer stack hu",
    "react json viewer",
    "download json viewer",
    ".json viewer",
    "json viewer awesome",
    "onlinejson viewer",
    "online json formatter",
    "online json validator",
    "online json beautifier",
    "online json editor",
    "online json pretty print",
    "online json diff",
    "online json viewer tool",
    "format json",
    "validate json",
    "json formatter online",
    "best json formatter",
    "json formatter chrome extension",
    "json formatter and validator",
    "json formatter extension",
    "string to json formatter",
    "text to json formatter",
    "xml to json formatter",
    "json formatter & validator",
    "json formatter compare",
    "json formatter online free",
    "json formatter extension chrome",
    "json formatter viewer",
    "json formatter validator",
    "json formatter chrome",
    "json formatter download",
    "json formatter onlin",
    "json viewer online",
    "json validator online",
    "json beautifier online",
    "json editor online",
    "free json viewer",
    "json pretty print online",
    "format json online",
    "validate json online",
    "json diff online",
    "bracketview json viewer",
    "bracketview json formatter",
    "bracketview json validator",
    "bracketview json beautifier",
    "bracketview json editor",
    "bracketview json pretty print",
    "bracketview json diff",
    "bracketview json viewer tool",
] as const;

type FaqItem = {
    question: string;
    answer: string;
};

const SEO_FAQ_ITEMS: FaqItem[] = [
    {
        question: "What is a JSON Viewer?",
        answer:
            "A JSON viewer is an online tool that displays JSON data in a readable, structured format. BracketView lets you paste or upload JSON and explore it as a collapsible tree or graph — making nested objects and arrays easy to navigate without installing software.",
    },
    {
        question: "How do I format JSON online?",
        answer:
            "Paste your raw JSON into BracketView and click Format. The JSON formatter online beautifies (pretty-prints) or minifies your data instantly, with proper indentation and syntax highlighting — all in your browser.",
    },
    {
        question: "How do I validate JSON?",
        answer:
            "BracketView validates JSON in real time as you type. Syntax errors are highlighted with line numbers so you can fix issues quickly. Use the JSON validator online to confirm your data is well-formed before sharing or deploying.",
    },
    {
        question:
            "What is the difference between JSON formatter and validator?",
        answer:
            "A JSON formatter rearranges your data for readability — adding indentation, line breaks, and consistent spacing. A JSON validator checks whether the syntax is correct and flags errors. BracketView combines both: format JSON online for clarity and validate JSON online for correctness in one tool.",
    },
    {
        question: "Is BracketView free to use?",
        answer:
            "BracketView is a freemium, privacy-first JSON tool. Core workspace features — viewing, formatting, validation, tree navigation, JSONPath, diff, and schema tools — are available at no cost with no signup required. Pro subscription unlocks unlimited AI, higher upload limits, and unlimited encrypted snapshot links.",
    },
    {
        question: "What is JQ filter and how do I use it online?",
        answer:
            "JQ is a lightweight command-line JSON processor. BracketView includes an in-browser JQ filter tool — paste your JSON and write JQ expressions like '.users[] | .name' to query, transform, or extract data without installing anything.",
    },
    {
        question: "How do I compare two JSON files online?",
        answer:
            "Use BracketView's Diff tool: paste your original JSON on the left and the modified JSON on the right. The diff viewer highlights added, removed, and changed keys side-by-side, making it easy to spot differences instantly.",
    },
    {
        question: "What is JSON Schema validation?",
        answer:
            "JSON Schema is a standard for describing the structure of JSON data. BracketView's schema validator lets you paste a JSON Schema and validate your JSON against it, showing exactly which fields are missing or have incorrect types.",
    },
    {
        question: "Is my JSON data private when using BracketView?",
        answer:
            "Yes. BracketView is privacy-first — all JSON processing happens in your browser. Your data is never sent to any server unless you explicitly create an encrypted snapshot link, which is stored temporarily and encrypted.",
    },
    {
        question: "What is an alternative to JSONLint or JSON Formatter & Validator?",
        answer:
            "BracketView is a modern alternative to JSONLint, JSON Formatter & Validator, and jsonformatter.org. It combines viewing, formatting, validation, diff, schema validation, and JQ filtering in a single privacy-first tool — no install required.",
    },
];

function buildWebApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "BracketView",
        url: APP_URL,
        description: META_DESCRIPTION,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        featureList: [
            "JSON viewer with collapsible tree",
            "Beautify and minify JSON",
            "Real-time JSON validation with error highlighting",
            "JSON diff tool",
            "JSON schema validation",
            "JQ filter support",
            "Encrypted snapshot sharing",
            "JSON annotation",
            "Dark mode",
            "Mock data generator",
            "Base64 encoder/decoder",
            "Privacy-first (all processing in your browser)"
        ],
        screenshot: `${SITE_URL}/og-image.webp`,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description:
                "Freemium — core JSON workspace free. Pro subscription available for unlimited AI and higher limits.",
        },
    };
}

function buildOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BracketView",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        founder: {
            "@type": "Person",
            name: "Jameel Shaikh",
        },
        sameAs: [
            "https://x.com/bracket_view",
            "https://www.linkedin.com/company/bracketview",
            "https://www.youtube.com/@bracketview",
            "https://www.instagram.com/bracketview",
            "https://www.facebook.com/bracketview",
            "https://www.producthunt.com/products/bracketview",
            "https://www.saashub.com/bracketview"
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
        description: META_DESCRIPTION,
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

function buildFaqPageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: SEO_FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

export {
    APP_URL,
    buildFaqPageSchema, buildOrganizationSchema, buildWebApplicationSchema, buildWebSiteSchema,
    KEYWORDS,
    META_DESCRIPTION,
    META_TITLE,
    OG_IMAGE,
    OG_IMAGE_ALT,
    SEO_FAQ_ITEMS,
    SITE_URL
};
export type { FaqItem };

