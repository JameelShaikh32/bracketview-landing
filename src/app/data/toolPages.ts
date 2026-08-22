import type { FaqItem } from "@/lib/seo";
import {
    APP_WEBHOOKS_URL,
    formatCount,
    PLAN_LIMITS,
} from "./planLimits";

const UPLOAD_FEATURE_LINE = `Upload .json files up to ${PLAN_LIMITS.free.uploadMb} MB (${PLAN_LIMITS.pro.uploadMb} MB on Pro)`;
const UPLOAD_FILES_LINE = `Upload files up to ${PLAN_LIMITS.free.uploadMb} MB (${PLAN_LIMITS.pro.uploadMb} MB on Pro)`;
const UPLOAD_FAQ_ANSWER = `Yes. Free accounts support uploads up to ${PLAN_LIMITS.free.uploadMb} MB. Pro raises the limit to ${PLAN_LIMITS.pro.uploadMb} MB.`;
const FREE_WEBHOOK_CAPS = `${PLAN_LIMITS.free.webhookEndpoints} endpoints, ${formatCount(PLAN_LIMITS.free.webhookRequestsPerEndpoint)} requests each, ${PLAN_LIMITS.free.webhookMaxRetentionDays}-day retention`;
const PRO_WEBHOOK_CAPS = `${PLAN_LIMITS.pro.webhookEndpoints} endpoints, ${formatCount(PLAN_LIMITS.pro.webhookRequestsPerEndpoint)} requests each, ${PLAN_LIMITS.pro.webhookMaxRetentionDays}-day retention`;

type ToolDemoVideo = {
    src?: string;
    poster?: string;
    label?: string;
};

type ToolUseCase = {
    title: string;
    description: string;
};

type ToolCodeExample = {
    title: string;
    language: string;
    code: string;
};

type ToolPage = {
    slug: string;
    h1: string;
    badge: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    problem?: string;
    useCases?: ToolUseCase[];
    codeExamples?: ToolCodeExample[];
    interactiveDemo?: "formatter" | "validator" | "viewer" | "diff";
    demoVideo?: ToolDemoVideo;
    features: string[];
    howToSteps: { position: number; name: string; text: string; url?: string }[];
    howToName: string;
    howToDescription: string;
    faqs: FaqItem[];
    appUrl: string;
    ctaLabel: string;
    relatedTools: string[];
};

const toolPages: Record<string, ToolPage> = {
    "json-viewer": {
        slug: "json-viewer",
        h1: "Free Online JSON Viewer",
        badge: "JSON Viewer",
        metaTitle:
            "Free Online JSON Viewer – Tree View & Formatter | BracketView",
        metaDescription:
            "Free online JSON viewer with collapsible tree, graph view, path copy, and search. Privacy-first — your data stays in the browser.",
        intro:
            "A JSON viewer turns opaque payloads into a navigable structure. BracketView's online JSON viewer lets you expand nested objects, jump to paths, copy values, and switch between tree and graph views — entirely in your browser. Paste an API response, explore keys without scrolling a wall of text, and share an encrypted snapshot when you need a second pair of eyes.",
        problem:
            "Large API responses and nested configs are hard to read as raw text. Developers waste time hunting keys, copying fragile paths by hand, and losing context when switching tools.",
        useCases: [
            {
                title: "Debug API responses",
                description:
                    "Paste a REST or GraphQL payload and walk the tree to the failing field.",
            },
            {
                title: "Inspect webhook bodies",
                description:
                    "Open a captured event and expand only the branches that matter.",
            },
            {
                title: "Review config dumps",
                description:
                    "Browse environment exports and deployment manifests without pretty-printing in the terminal.",
            },
        ],
        codeExamples: [
            {
                title: "Copy a JSONPath from the tree",
                language: "jsonpath",
                code: "$.data.items[0].sku",
            },
            {
                title: "Sample nested payload",
                language: "json",
                code: '{\n  "data": {\n    "items": [{ "sku": "A-1", "qty": 3 }]\n  }\n}',
            },
        ],
        interactiveDemo: "viewer",
        features: [
            "Collapsible tree with type-aware coloring",
            "Graph view for relationship exploration",
            "Copy node value, path, or JSON snippet",
            "Search keys and values in the tree",
            "Path breadcrumbs and node statistics",
            UPLOAD_FEATURE_LINE,
            "Browser-side viewing — data stays local for core tools",
        ],
        howToName: "How to View JSON Online with BracketView",
        howToDescription:
            "Inspect nested JSON in three steps using BracketView's free online viewer.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in in any browser.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Paste your JSON",
                text: "Paste a payload into the editor. Invalid syntax is highlighted instantly.",
            },
            {
                position: 3,
                name: "Open the Viewer tab",
                text: "Switch to Viewer to expand the tree, copy paths, and explore the graph.",
            },
        ],
        faqs: [
            {
                question: "What is a JSON viewer?",
                answer:
                    "A JSON viewer displays structured JSON as a navigable tree or graph so you can inspect nested fields without reading minified text. BracketView's JSON viewer runs free in the browser.",
            },
            {
                question: "Is the JSON viewer free?",
                answer:
                    "Yes. Core viewing, formatting, and validation are free with no signup required.",
            },
            {
                question: "Does viewing JSON send data to a server?",
                answer:
                    "No. Tree and graph viewing run client-side. Optional features like encrypted snapshots and AI repair use a different path — see the privacy policy.",
            },
            {
                question: "Can I search inside large JSON?",
                answer:
                    "Yes. Use tree search to highlight matching keys and values, then copy the path of the match.",
            },
            {
                question: "What is the best free online JSON viewer?",
                answer:
                    "It depends on the job. JSONLint is a validator, JSON Editor Online is a classic tree editor, and JSONCrack is a graph visualizer. BracketView is a free online JSON viewer with tree and graph views plus formatter, JSONPath, jq, and diff in an ad-free app. See the comparison at bracketview.in/learn/best-json-viewer.",
            },
        ],
        appUrl: "https://app.bracketview.in/?sample=api-error",
        ctaLabel: "Open JSON Viewer",
        relatedTools: [
            "json-formatter",
            "json-validator",
            "jsonpath-query",
            "json-diff",
        ],
    },
    "json-formatter": {
        slug: "json-formatter",
        h1: "JSON Formatter Online",
        badge: "JSON Formatter",
        metaTitle: "JSON Formatter Online – Beautify and Minify JSON | BracketView",
        metaDescription:
            "Free online JSON formatter. Beautify, pretty-print, and minify JSON in your browser with real-time validation.",
        intro:
            "A JSON formatter takes raw or minified JSON and reformats it with readable indentation and consistent spacing. BracketView's online JSON formatter lets you beautify (pretty-print) or minify JSON in one click — directly in your browser with no installation. Paste your payload, click Format, and get clean, readable output instantly. The real-time validator highlights syntax errors as you type, so you can fix issues before exporting. Formatting and validation run in your browser. Optional AI and snapshots use the server when you choose them.",
        problem:
            "Minified API payloads and log dumps are unreadable. Manual indentation is error-prone and slow when you need to share or debug quickly.",
        useCases: [
            {
                title: "Pretty-print API responses",
                description:
                    "Format a production payload before pasting into a ticket or PR.",
            },
            {
                title: "Minify for transport",
                description:
                    "Strip whitespace before embedding JSON in configs or CLI args.",
            },
            {
                title: "Clean exports",
                description:
                    "Normalize indentation across team-shared sample files.",
            },
        ],
        codeExamples: [
            {
                title: "Before (minified)",
                language: "json",
                code: '{"user":{"id":1,"name":"Ada"}}',
            },
            {
                title: "After (formatted)",
                language: "json",
                code: '{\n  "user": {\n    "id": 1,\n    "name": "Ada"\n  }\n}',
            },
        ],
        interactiveDemo: "formatter",
        features: [
            "One-click beautify with consistent 2-space indentation",
            "Minify JSON for production payloads",
            "Real-time syntax validation as you type",
            "Syntax highlighting and line numbers",
            UPLOAD_FEATURE_LINE,
            "Copy formatted output in one click",
            "Works in any modern browser — no install",
        ],
        howToName: "How to Format JSON Online with BracketView",
        howToDescription:
            "Beautify or minify JSON in three steps using BracketView's free online formatter.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in in any browser.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Paste your JSON",
                text: "Paste raw or minified JSON into the editor. Errors are highlighted instantly.",
            },
            {
                position: 3,
                name: "Click Format",
                text: "Click Format to beautify with readable indentation, or Minify for compact output.",
            },
        ],
        faqs: [
            {
                question: "What is a JSON formatter?",
                answer:
                    "A JSON formatter (also called a JSON beautifier or pretty-printer) reformats JSON with readable indentation and line breaks. BracketView formats JSON online for free in your browser.",
            },
            {
                question: "How do I pretty print JSON online?",
                answer:
                    "Paste your JSON into BracketView and click Format. The formatter adds indentation and spacing automatically — no command-line tools required.",
            },
            {
                question: "Can I minify JSON with BracketView?",
                answer:
                    "Yes. BracketView can both beautify and minify JSON. Minify removes whitespace for smaller production payloads.",
            },
            {
                question: "Is the JSON formatter free?",
                answer:
                    "Yes. BracketView's JSON formatter is free with no signup required. Core formatting runs entirely in your browser.",
            },
            {
                question: "Does formatting send my data to a server?",
                answer:
                    "No. BracketView formats JSON locally in your browser. Your data stays on your device.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Format JSON now",
        relatedTools: [
            "json-viewer",
            "json-validator",
            "ai-json-fixer",
            "json-diff",
        ],
    },
    "json-validator": {
        slug: "json-validator",
        h1: "JSON Validator Online",
        badge: "JSON Validator",
        metaTitle: "JSON Validator Online – Validate JSON Syntax | BracketView",
        metaDescription:
            "Validate JSON in real time as you type. Catch bracket mismatches, trailing commas, and unquoted keys. Free online validator — no install.",
        intro:
            "Validating JSON online means checking whether your data is syntactically correct before you deploy, share, or process it. BracketView's real-time JSON validator highlights errors as you type — bracket mismatches, trailing commas, unquoted keys, and invalid escape sequences are flagged with line numbers so you can fix them fast. Paste a payload from an API response, log file, or config export and get instant feedback. Core validation runs 100% in your browser with no data sent to any server.",
        problem:
            "A single syntax error can break pipelines, webhook handlers, and client parsers — and error messages are often hard to locate in large payloads.",
        useCases: [
            {
                title: "Pre-commit checks",
                description: "Validate configs before they hit CI.",
            },
            {
                title: "API response QA",
                description: "Confirm a partner payload is well-formed.",
            },
            {
                title: "Log triage",
                description: "Find the first bad token in a dumped body.",
            },
        ],
        interactiveDemo: "validator",
        features: [
            "Real-time validation as you type",
            "Inline error highlighting with line numbers",
            "Detects trailing commas and unquoted keys",
            "Bracket and brace mismatch detection",
            "Works alongside formatter and tree view",
            UPLOAD_FILES_LINE,
            "Browser-side validation — privacy-first",
        ],
        howToName: "How to Validate JSON Online with BracketView",
        howToDescription:
            "Check JSON syntax in three steps using BracketView's free online validator.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in in any browser.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Paste your JSON",
                text: "Paste or upload your JSON. The validator runs automatically as you type.",
            },
            {
                position: 3,
                name: "Fix highlighted errors",
                text: "Review inline error markers and line numbers, then correct syntax issues.",
            },
        ],
        faqs: [
            {
                question: "How do I validate JSON online?",
                answer:
                    "Paste your JSON into BracketView at app.bracketview.in. The validator runs in real time and highlights syntax errors instantly.",
            },
            {
                question: "What errors does BracketView detect?",
                answer:
                    "BracketView catches bracket mismatches, trailing commas, unquoted keys, invalid escape sequences, and other JSON syntax issues.",
            },
            {
                question: "Is JSON validation free?",
                answer:
                    "Yes. BracketView's JSON validator is free with no signup. Validation runs locally in your browser.",
            },
            {
                question: "Can I validate JSON against a schema?",
                answer:
                    "Yes. Use BracketView's JSON Schema Validator to check data against OpenAPI or custom JSON Schema definitions.",
            },
            {
                question: "Is my data private when validating?",
                answer:
                    "Yes. Core validation runs in your browser. Your JSON does not leave the device for validation.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Validate JSON now",
        relatedTools: ["json-formatter", "ai-json-fixer", "json-schema-validator"],
    },
    "json-diff": {
        slug: "json-diff",
        h1: "Compare JSON Online",
        badge: "JSON Diff",
        metaTitle: "Compare JSON Online – JSON Diff Tool | BracketView",
        metaDescription:
            "BracketView compares two JSON documents side by side. Highlight added, removed, and changed keys instantly. Free online JSON diff tool — no install.",
        intro:
            "Comparing JSON online helps you spot differences between two API versions, config files, or webhook payloads without manual line-by-line review. BracketView's JSON diff tool shows original and modified JSON side by side, highlighting added, removed, and changed keys in real time. Paste both versions, and the compare view makes structural changes obvious at a glance. Ideal for release reviews, API version audits, and debugging config drift — all running in your browser.",
        features: [
            "Side-by-side JSON comparison",
            "Highlights added, removed, and changed keys",
            "Works with large nested objects",
            "Pair with formatter for readable input",
            "No install — runs in the browser",
            UPLOAD_FILES_LINE,
            "Export or copy diff results",
        ],
        howToName: "How to Compare JSON Online with BracketView",
        howToDescription:
            "Diff two JSON documents in three steps using BracketView's free compare tool.",
        howToSteps: [
            {
                position: 1,
                name: "Open JSON Diff",
                text: "Go to app.bracketview.in/json-diff in your browser.",
                url: "https://app.bracketview.in/json-diff",
            },
            {
                position: 2,
                name: "Paste both versions",
                text: "Paste the original JSON on the left and the modified JSON on the right.",
            },
            {
                position: 3,
                name: "Review highlighted changes",
                text: "Inspect added, removed, and changed keys highlighted in the compare view.",
            },
        ],
        faqs: [
            {
                question: "How do I compare two JSON files online?",
                answer:
                    "Open BracketView's Diff tool, paste your original JSON on the left and modified JSON on the right. Changes are highlighted side by side.",
            },
            {
                question: "What does JSON diff show?",
                answer:
                    "JSON diff highlights keys and values that were added, removed, or changed between two JSON documents.",
            },
            {
                question: "Is JSON diff free?",
                answer:
                    "Yes. BracketView's JSON diff tool is free with no signup required.",
            },
            {
                question: "Can I diff large JSON files?",
                answer:
                    UPLOAD_FAQ_ANSWER,
            },
            {
                question: "Does diffing send data to a server?",
                answer:
                    "Core diff operations run in your browser. Your data stays local unless you create a snapshot link.",
            },
        ],
        appUrl: "https://app.bracketview.in/json-diff",
        ctaLabel: "Compare JSON now",
        relatedTools: ["json-formatter", "json-validator", "json-schema-validator"],
    },
    "jsonpath-query": {
        slug: "jsonpath-query",
        h1: "JSONPath Tester Online",
        badge: "JSONPath",
        metaTitle: "JSONPath Tester Online | BracketView",
        metaDescription:
            "BracketView runs JSONPath queries in your browser. Extract nested values with expressions like $.store.book[*].author. Free online JSONPath tool — no install.",
        intro:
            "JSONPath is a query language for JSON, similar to XPath for XML. It lets you extract specific values from nested structures using expressions like $.store.book[*].author. BracketView includes a built-in JSONPath query tool so you can filter large API responses, debug webhook payloads, and explore nested data without writing custom scripts. Paste your JSON, enter a JSONPath expression, and see matching results instantly — all in your browser with no installation.",
        features: [
            "Full JSONPath expression support",
            "Live query results as you type",
            "Works with deeply nested objects and arrays",
            "Pair with tree view for exploration",
            "AI Query Assistant for plain-English to jq",
            "No install — runs in the browser",
            "Browser-side for core queries",
        ],
        howToName: "How to Query JSON with JSONPath in BracketView",
        howToDescription:
            "Extract data from JSON using JSONPath expressions in three steps.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in and paste your JSON.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Enter a JSONPath expression",
                text: "Type an expression like $.users[*].email in the JSONPath panel.",
            },
            {
                position: 3,
                name: "Review matching results",
                text: "See filtered results instantly. Refine the expression to drill into nested data.",
            },
        ],
        faqs: [
            {
                question: "What is JSONPath?",
                answer:
                    "JSONPath is a query language for JSON. Expressions like $.store.book[*].author extract specific values from nested JSON structures.",
            },
            {
                question: "Can I query JSON without code?",
                answer:
                    "Yes. BracketView supports JSONPath expressions and an AI Query Assistant that converts plain English into jq filters.",
            },
            {
                question: "Is JSONPath free in BracketView?",
                answer:
                    "Yes. JSONPath querying is included in the free workspace with no signup required.",
            },
            {
                question: "JSONPath vs JQ — which should I use?",
                answer:
                    "JSONPath is simpler for basic extraction. JQ is more powerful for transformations. BracketView supports both in one workspace.",
            },
            {
                question: "Does querying send my data to a server?",
                answer:
                    "Core JSONPath queries run locally in your browser.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Query JSON now",
        relatedTools: ["jq-playground", "json-formatter", "json-validator"],
    },
    "jq-playground": {
        slug: "jq-playground",
        h1: "Online jq Playground",
        badge: "JQ Playground",
        metaTitle: "Online jq Playground | BracketView",
        metaDescription:
            "Online JQ playground powered by WebAssembly (Wasm) — run a full jq engine in your browser. Filter, transform & extract JSON with jq expressions. Free — no install.",
        intro:
            "BracketView's JQ Playground runs a full jq engine online via WebAssembly (Wasm) — filter, transform, and extract JSON directly in your browser with no terminal or installation required. jq is a lightweight, powerful JSON processor for pipelines like .users[] | select(.active) | .name; write expressions and see results instantly, or use the AI Query Assistant to generate filters from plain English. Ideal for API debugging, log analysis, and data exploration when JSONPath alone isn't enough.",
        features: [
            "Full jq engine via WebAssembly in the browser",
            "Live filter results as you type",
            "AI Query Assistant — plain English to jq",
            "Dynamic quick-filter chips from your JSON structure",
            "Pair with JSONPath for complete query coverage",
            "No install or command line required",
            "Browser-side jq execution (WebAssembly)",
        ],
        howToName: "How to Run JQ Filters Online with BracketView",
        howToDescription:
            "Filter and transform JSON with jq in three steps — no command line needed.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in and paste your JSON.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Open the JQ panel",
                text: "Switch to the JQ Filter Playground and enter a jq expression.",
            },
            {
                position: 3,
                name: "Run and refine your filter",
                text: "See filtered output instantly. Use AI Query Assistant for complex expressions.",
            },
        ],
        faqs: [
            {
                question: "What is jq?",
                answer:
                    "jq is a command-line JSON processor for filtering and transforming JSON. BracketView runs jq in your browser via WebAssembly.",
            },
            {
                question: "Can I use jq without installing it?",
                answer:
                    "Yes. BracketView's JQ Filter Playground runs a full jq engine in the browser — no terminal required.",
            },
            {
                question: "Can AI write jq queries for me?",
                answer:
                    "Yes. BracketView's AI Query Assistant converts plain English descriptions into valid jq expressions.",
            },
            {
                question: "Is the JQ playground free?",
                answer:
                    "Yes. JQ filtering is included in the free workspace. AI-assisted query generation has monthly limits on free accounts.",
            },
            {
                question: "JQ vs JSONPath — when to use each?",
                answer:
                    "Use JSONPath for simple extraction. Use jq when you need filtering, transformations, or complex pipelines.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Try JQ playground",
        relatedTools: ["jsonpath-query", "json-formatter", "json-validator"],
    },
    "json-schema-validator": {
        slug: "json-schema-validator",
        h1: "JSON Schema Validator Online",
        badge: "Schema Validator",
        metaTitle: "JSON Schema Validator Online — Validate Against Schema | BracketView",
        metaDescription:
            "BracketView validates JSON against JSON Schema and OpenAPI definitions. See exactly which fields are missing or wrong. Free online schema validator — no install.",
        intro:
            "JSON Schema validation confirms that your JSON data matches an expected structure — required fields, correct types, and allowed values. BracketView's schema validator lets you paste a JSON Schema or OpenAPI definition alongside your data and see exactly which fields are missing, have wrong types, or violate constraints. Essential for API contract testing, webhook payload review, and keeping documentation accurate. Generate schemas from example objects, validate against them, and iterate fast — all in your browser.",
        features: [
            "Validate JSON against JSON Schema",
            "Support for OpenAPI schema definitions",
            "Detailed error messages per field",
            "Schema generator from example JSON",
            "Schema library for common patterns",
            "Pair with type generator for code export",
            "Free core validation — no install",
        ],
        howToName: "How to Validate JSON Against a Schema with BracketView",
        howToDescription:
            "Check JSON against a JSON Schema in three steps using BracketView.",
        howToSteps: [
            {
                position: 1,
                name: "Open Schema Validator",
                text: "Go to app.bracketview.in/json-schema in your browser.",
                url: "https://app.bracketview.in/json-schema",
            },
            {
                position: 2,
                name: "Paste schema and JSON",
                text: "Paste your JSON Schema and the JSON data you want to validate.",
            },
            {
                position: 3,
                name: "Review validation results",
                text: "See which fields fail validation with specific error messages.",
            },
        ],
        faqs: [
            {
                question: "What is JSON Schema validation?",
                answer:
                    "JSON Schema validation checks whether JSON data conforms to a defined structure — required fields, types, and constraints.",
            },
            {
                question: "Can I validate against OpenAPI schemas?",
                answer:
                    "Yes. BracketView supports JSON Schema and OpenAPI schema definitions for validation.",
            },
            {
                question: "Can BracketView generate a schema from JSON?",
                answer:
                    "Yes. BracketView includes a Schema Generator that creates a JSON Schema draft from an example object.",
            },
            {
                question: "Is schema validation free?",
                answer:
                    "Yes. Core schema validation is included in the free BracketView workspace.",
            },
            {
                question: "What happens when validation fails?",
                answer:
                    "BracketView shows specific errors — which fields are missing, have wrong types, or violate schema rules.",
            },
        ],
        appUrl: "https://app.bracketview.in/json-schema",
        ctaLabel: "Validate schema now",
        relatedTools: ["json-validator", "json-type-generator", "json-diff"],
    },
    "json-type-generator": {
        slug: "json-type-generator",
        h1: "Generate TypeScript from JSON",
        badge: "Type Generator",
        metaTitle: "Convert JSON to TypeScript Online — 9+ Languages | BracketView",
        metaDescription:
            "Convert JSON to TypeScript online for free. Generate TypeScript interfaces, plus Python, Go & Rust types, from any JSON object. No install — runs in your browser.",
        intro:
            "Converting JSON to TypeScript online saves hours of manual interface writing when integrating APIs or parsing responses. BracketView's Type Generator converts any JSON object into accurate TypeScript interfaces — plus Python, Go, Rust, and 9+ other languages. Paste an API response or example payload, pick your target language, and copy production-ready types instantly. Pair with the Schema Generator to keep types and validation rules in sync across your stack.",
        features: [
            "TypeScript interfaces and type aliases",
            "Python dataclasses and TypedDict",
            "Go structs with json tags",
            "Rust structs with serde derives",
            "Java, C#, Swift, Kotlin, and more",
            "Nested object and array support",
            "Copy-ready output in one click",
        ],
        howToName: "How to Generate TypeScript from JSON with BracketView",
        howToDescription:
            "Export TypeScript interfaces (or 9+ other languages) from JSON in three steps.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in and paste your JSON example.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Open Type Generator",
                text: "Navigate to the Type Generator tool and select your target language.",
            },
            {
                position: 3,
                name: "Copy generated types",
                text: "Review the generated interfaces or structs and copy them into your project.",
            },
        ],
        faqs: [
            {
                question: "What languages does BracketView support?",
                answer:
                    "BracketView generates types for TypeScript, Python, Go, Rust, Java, C#, Swift, Kotlin, and more — 9+ languages total.",
            },
            {
                question: "How do I generate TypeScript from JSON?",
                answer:
                    "Paste your JSON into BracketView, open the Type Generator, select TypeScript, and copy the generated interfaces.",
            },
            {
                question: "Does it handle nested objects?",
                answer:
                    "Yes. The Type Generator handles nested objects, arrays, and optional fields accurately.",
            },
            {
                question: "Is type generation free?",
                answer:
                    "Yes. Type generation is included in the free BracketView workspace.",
            },
            {
                question: "Can I generate a schema and types together?",
                answer:
                    "Yes. Use the Schema Generator to create a JSON Schema, then generate matching types for your language.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Generate types now",
        relatedTools: ["json-schema-validator", "json-formatter", "json-validator"],
    },
    "ai-json-fixer": {
        slug: "ai-json-fixer",
        h1: "Fix Broken JSON Online with AI",
        badge: "AI JSON Fixer",
        metaTitle: "AI JSON Fixer — Repair Broken JSON Online | BracketView",
        metaDescription:
            "Fix broken JSON online with AI. Repair missing brackets, trailing commas, unquoted keys & truncated payloads instantly. Free AI JSON syntax repair — no install.",
        intro:
            "Malformed JSON — from hand-edited configs, truncated API responses, or copy-pasted payloads — often breaks standard parsers with a single missing bracket or trailing comma. BracketView's AI JSON Fixer analyzes broken JSON and automatically repairs syntax errors while preserving your original structure and values as closely as possible. Paste JSON that fails to parse, click Fix, and get valid, well-formed output in seconds — no manual bracket-hunting required. The AI runs as a request to BracketView's servers, so it's not part of the local-only core toolset; review the privacy policy before repairing sensitive data.",
        features: [
            "AI-powered repair for missing or mismatched brackets",
            "Fixes trailing commas and unquoted keys automatically",
            "Handles unescaped characters and truncated payloads",
            "Preserves original structure and values where possible",
            "Pairs with the real-time validator to confirm the fix",
            UPLOAD_FEATURE_LINE,
            "Copy repaired JSON in one click",
        ],
        howToName: "How to Fix Broken JSON Online with AI Using BracketView",
        howToDescription:
            "Repair malformed JSON in three steps using BracketView's AI JSON Fixer.",
        howToSteps: [
            {
                position: 1,
                name: "Open BracketView",
                text: "Go to app.bracketview.in in any browser.",
                url: "https://app.bracketview.in",
            },
            {
                position: 2,
                name: "Paste your broken JSON",
                text: "Paste JSON that fails to parse — the validator flags it as invalid.",
            },
            {
                position: 3,
                name: "Click AI Fix",
                text: "Run the AI JSON Fixer to repair syntax errors and get valid, formatted output.",
            },
        ],
        faqs: [
            {
                question: "How does the AI fix broken JSON?",
                answer:
                    "BracketView's AI JSON Fixer analyzes malformed JSON — missing brackets, trailing commas, unquoted keys, unescaped characters, and truncated payloads — and reconstructs valid, well-formed JSON while preserving your original data and structure as closely as possible.",
            },
            {
                question: "Is my JSON data sent to a server?",
                answer:
                    "For AI-assisted repair specifically, yes — the JSON is sent to process the AI request. Core tools like the formatter and validator remain browser-local. Review the privacy policy before repairing sensitive data with AI.",
            },
            {
                question: "What kinds of JSON errors can it fix?",
                answer:
                    "The AI Fixer handles common syntax issues: missing or mismatched brackets and braces, trailing commas, unquoted keys, invalid escape sequences, and truncated or cut-off payloads.",
            },
            {
                question: "Is the AI JSON Fixer free?",
                answer:
                    `Yes. Free accounts get ${PLAN_LIMITS.free.aiActionsPerMonth} AI actions per month, including AI JSON repair. Pro unlocks unlimited AI actions.`,
            },
            {
                question: "Will fixing my JSON change my data?",
                answer:
                    "The AI Fixer aims to preserve your original keys, values, and structure exactly — it only corrects syntax errors that prevent parsing. Always review the repaired output before using it in production.",
            },
        ],
        appUrl: "https://app.bracketview.in",
        ctaLabel: "Fix my JSON now",
        relatedTools: ["json-formatter", "json-validator", "json-schema-validator"],
    },
    "webhook-tester": {
        slug: "webhook-tester",
        h1: "Webhook Tester Online",
        badge: "Webhook Tester",
        metaTitle:
            "Webhook Tester — Capture & Inspect Webhooks Online | BracketView",
        metaDescription:
            "Free webhook tester and catcher. Generate a disposable public webhook URL, capture live headers and bodies, mock responses, and verify Stripe, GitHub, and Shopify signatures. Try free with clear freemium caps.",
        intro:
            "Generate a public webhook URL, send events from any service, and debug the payload in real time—next to the rest of your JSON toolkit. BracketView Webhook Tester gives you disposable endpoints for Stripe, GitHub, Shopify, and custom APIs: inspect method, headers, query params, and body (JSON, form, XML, or text), build mock responses for future requests, replay captures to localhost or staging, and verify HMAC signatures in the browser. URL shape: https://hooks.bracketview.in/e/{token}. Endpoints are public—anyone with the link can POST—and history expires on a short retention schedule by design.",
        features: [
            "Disposable named endpoints (e.g. “Stripe test”) with free and Pro caps",
            "Capture GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS",
            "Live request feed without full-page refresh; pause while inspecting",
            "Inspect method, path, timestamp, headers (sensitive values masked), query, body, and returned response",
            "Mock response builder: status, headers, body, optional delay — applies to future requests only",
            "Replay or edit-and-resend captures to a target URL with status, body, and timing",
            "Client-side HMAC helpers for Stripe, GitHub, and Shopify — secret stays in the browser",
            "History: filter, search, delete one, clear all, export JSON",
            `Free: ${FREE_WEBHOOK_CAPS}; Pro: ${PRO_WEBHOOK_CAPS} plus encrypted share of a single capture`,
        ],
        howToName: "How to Capture and Inspect Webhooks with BracketView",
        howToDescription:
            "Create a disposable webhook URL and inspect live HTTP captures in three steps.",
        howToSteps: [
            {
                position: 1,
                name: "Open Webhook Tester",
                text: "Go to app.bracketview.in/webhooks and create an endpoint (name it for your integration).",
                url: APP_WEBHOOKS_URL,
            },
            {
                position: 2,
                name: "Point your service at the public URL",
                text: "Paste the endpoint URL into Stripe, GitHub, Shopify, a tunnel, or any API that POSTs events.",
            },
            {
                position: 3,
                name: "Inspect, mock, or replay",
                text: "Watch requests land live. Expand headers and body, set a mock response for future hits, or resend to localhost.",
            },
        ],
        faqs: [
            {
                question: "What is a webhook tester?",
                answer:
                    "A webhook tester (or webhook catcher) gives you a public URL that records incoming HTTP requests so you can debug integrations without standing up your own server. BracketView includes a Webhook Tester next to its JSON viewer and formatter.",
            },
            {
                question: "Is Webhook Tester free?",
                answer:
                    `Yes — free and guest use is real, with caps. Free: ${FREE_WEBHOOK_CAPS}. Pro: ${PRO_WEBHOOK_CAPS}, plus encrypted read-only share links for a single captured request.`,
            },
            {
                question: "Are webhook URLs private?",
                answer:
                    "No. Webhook URLs are public — anyone who has the link can POST data to it. Do not send secrets you would not put in a short-lived public channel. Endpoints and history expire on a retention schedule.",
            },
            {
                question: "Does mock response apply to past requests?",
                answer:
                    "No. The mock response builder (custom status, headers, body, optional delay) applies only to future requests that hit the endpoint after you save the mock.",
            },
            {
                question: "Can multiple teammates share one live endpoint in real time?",
                answer:
                    "v1 is designed for personal debugging sessions, not true multi-user collaboration on one endpoint. Pro can share a single captured request via an encrypted snapshot-style link.",
            },
            {
                question: "How is this different from client-side JSON tools?",
                answer:
                    "Core format/validate tools keep JSON in your browser. Webhook Tester stores short-lived captures so services can POST to a public URL — data is temporary by design, not unlimited long-term storage.",
            },
        ],
        appUrl: APP_WEBHOOKS_URL,
        ctaLabel: "Open Webhook Tester",
        relatedTools: [
            "json-viewer",
            "json-formatter",
            "json-diff",
            "json-schema-validator",
        ],
    },
};

const toolPagesWithDemo = Object.fromEntries(
    Object.entries(toolPages).map(([key, page]) => [
        key,
        {
            ...page,
            demoVideo: {
                src: `/videos/${page.slug}-demo.webm`,
                poster: `/videos/${page.slug}-demo-poster.webp`,
                label: page.badge,
            },
        },
    ]),
) as Record<string, ToolPage>;

const toolPageList = Object.values(toolPagesWithDemo);

const relatedToolsMap: Record<
    string,
    { slug: string; title: string; description: string }[]
> = Object.fromEntries(
    Object.values(toolPagesWithDemo).map((page) => [
        page.slug,
        page.relatedTools.map((slug) => ({
            slug,
            title: toolPagesWithDemo[slug].h1,
            description: toolPagesWithDemo[slug].badge,
        })),
    ]),
);

export { relatedToolsMap, toolPageList, toolPagesWithDemo as toolPages };
export type { ToolDemoVideo, ToolPage };
