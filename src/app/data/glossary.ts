import type { DefinedTerm } from "@/lib/seo";

type GlossaryTerm = DefinedTerm & {
    relatedLink?: { label: string; href: string };
};

const glossaryTerms: GlossaryTerm[] = [
    {
        name: "JSON",
        slug: "json",
        description:
            "JSON (JavaScript Object Notation) is a lightweight, text-based data format for storing and exchanging structured data. It uses key-value pairs and arrays, and is the standard format for REST API responses, configuration files, and webhook payloads.",
    },
    {
        name: "JSON Formatter",
        slug: "json-formatter",
        description:
            "A tool that takes raw or minified JSON and reformats it with readable indentation and consistent spacing. Also called a JSON beautifier or JSON pretty-printer.",
        relatedLink: {
            label: "Try JSON Formatter",
            href: "/json-formatter",
        },
    },
    {
        name: "JSON Validator",
        slug: "json-validator",
        description:
            "A tool that checks whether a text string is syntactically valid JSON. It detects errors like missing brackets, trailing commas, unquoted keys, and invalid escape sequences.",
        relatedLink: {
            label: "Try JSON Validator",
            href: "/json-validator",
        },
    },
    {
        name: "JSON Beautifier",
        slug: "json-beautifier",
        description:
            "Another name for a JSON formatter. A beautifier adds indentation and line breaks to minified JSON, making nested structures easier to read and debug.",
        relatedLink: {
            label: "Try JSON Formatter",
            href: "/json-formatter",
        },
    },
    {
        name: "JSON Minify",
        slug: "json-minify",
        description:
            "The process of removing all unnecessary whitespace from JSON to produce the smallest possible payload. Used in production APIs and network transfers where size matters.",
        relatedLink: {
            label: "Try JSON Formatter",
            href: "/json-formatter",
        },
    },
    {
        name: "JSONPath",
        slug: "jsonpath",
        description:
            "A query language for JSON, similar to XPath for XML. JSONPath expressions let you extract specific values from nested JSON structures. Example: $.store.book[*].author extracts all book authors.",
        relatedLink: {
            label: "Try JSONPath Query",
            href: "/jsonpath-query",
        },
    },
    {
        name: "JQ",
        slug: "jq",
        description:
            "jq is a lightweight command-line JSON processor for filtering, transforming, and extracting data. BracketView runs a full jq engine in the browser via WebAssembly.",
        relatedLink: { label: "Try JQ Playground", href: "/jq-playground" },
    },
    {
        name: "JSON Diff",
        slug: "json-diff",
        description:
            "A comparison tool that shows differences between two JSON documents — highlighting added, removed, and changed keys and values side by side.",
        relatedLink: { label: "Try JSON Diff", href: "/json-diff" },
    },
    {
        name: "JSON Tree View",
        slug: "json-tree-view",
        description:
            "A visual representation of JSON as a collapsible tree of nodes. Each key and value is displayed as an expandable branch, making deeply nested structures easy to navigate.",
    },
    {
        name: "JSON Schema",
        slug: "json-schema",
        description:
            "A vocabulary and specification for describing the structure, types, and constraints of JSON data. Used to validate API payloads and generate documentation.",
        relatedLink: {
            label: "Try Schema Validator",
            href: "/json-schema-validator",
        },
    },
    {
        name: "OpenAPI",
        slug: "openapi",
        description:
            "A specification for describing REST APIs, including endpoints, request/response schemas, and authentication. OpenAPI schemas can be used to validate JSON payloads in BracketView.",
        relatedLink: {
            label: "Try Schema Validator",
            href: "/json-schema-validator",
        },
    },
    {
        name: "JSON-LD",
        slug: "json-ld",
        description:
            "JSON-LD (JSON for Linked Data) is a method of encoding structured data using JSON. It is used in schema markup to help search engines and AI systems understand page content.",
    },
    {
        name: "REST API",
        slug: "rest-api",
        description:
            "REST (Representational State Transfer) is an architectural style for web APIs. REST APIs typically exchange data in JSON format via HTTP methods like GET, POST, PUT, and DELETE.",
    },
    {
        name: "TypeScript Interface Generation",
        slug: "typescript-interface-generation",
        description:
            "The process of automatically creating TypeScript interface or type definitions from a JSON object. BracketView generates accurate interfaces from API response examples in one click.",
        relatedLink: {
            label: "Try Type Generator",
            href: "/json-type-generator",
        },
    },
    {
        name: "WebAssembly (Wasm)",
        slug: "webassembly",
        description:
            "A binary instruction format that runs at near-native speed in web browsers. BracketView uses WebAssembly to run the jq engine client-side without a server round-trip.",
        relatedLink: { label: "Try JQ Playground", href: "/jq-playground" },
    },
    {
        name: "Client-Side Processing",
        slug: "client-side-processing",
        description:
            "Running data operations entirely in the user's browser without sending data to a remote server. BracketView's core JSON tools are client-side for privacy-first processing.",
    },
    {
        name: "JSON Graph View",
        slug: "json-graph-view",
        description:
            "A visual mode that maps JSON relationships as a dynamic node network instead of a hierarchical tree. Useful for understanding complex object references and nested structures.",
    },
    {
        name: "Encrypted Snapshot",
        slug: "encrypted-snapshot",
        description:
            "A shareable link that stores an encrypted copy of a JSON document with optional expiry. Used for async debugging and team collaboration without exposing raw data publicly.",
    },
    {
        name: "Mock Data Generator",
        slug: "mock-data-generator",
        description:
            "A tool that creates realistic test data rows from a JSON Schema definition. BracketView's AI Mock Data Generator produces sample payloads for API testing and development.",
    },
    {
        name: "AI JSON Fixer",
        slug: "ai-json-fixer",
        description:
            "An AI-powered tool that automatically repairs broken JSON syntax — fixing missing commas, unquoted keys, trailing commas, and other common errors with one click.",
    },
];

export { glossaryTerms };
export type { GlossaryTerm };
