const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bracketview.in";

const APP_URL = "https://app.bracketview.in";

const META_TITLE =
    "Online JSON Viewer, Formatter & Validator | BracketView";

const META_DESCRIPTION =
    "Freemium online JSON viewer, formatter & validator. Beautify, pretty-print, validate & edit JSON in your browser — privacy-first, no install. Try BracketView.";

const KEYWORDS = [
    "json viewer online",
    "json formatter online",
    "json validator online",
    "json beautifier online",
    "json editor online",
    "free json viewer",
    "json pretty print online",
    "json viewer tool",
    "format json online",
    "validate json online",
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
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description:
                "Freemium — core JSON workspace free. Pro subscription available for unlimited AI and higher limits.",
        },
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
    buildFaqPageSchema,
    buildWebApplicationSchema,
    buildWebSiteSchema,
    KEYWORDS,
    META_DESCRIPTION,
    META_TITLE,
    SEO_FAQ_ITEMS,
    SITE_URL,
};
export type { FaqItem };
