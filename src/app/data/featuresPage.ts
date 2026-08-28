import type { LucideIcon } from "lucide-react";
import {
    BarChart3,
    Binary,
    Braces,
    ClipboardCopy,
    Code2,
    FileJson,
    FileSpreadsheet,
    Gauge,
    GitBranch,
    GitCompare,
    Languages,
    Layers,
    LayoutGrid,
    Network,
    PenLine,
    SearchCode,
    Share2,
    Shield,
    Sparkles,
    StickyNote,
    Table2,
    Terminal,
    Wand2,
    Webhook,
    Zap,
} from "lucide-react";
import {
    APP_PRICING_MONTHLY_CHECKOUT_URL,
    APP_WEBHOOKS_URL,
    FREE_WEBHOOK_LABEL,
} from "./planLimits";

type FeaturePageItem = {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    cta: string;
};

type FeatureCategory = {
    title: string;
    description: string;
    features: FeaturePageItem[];
};

const featureCategories: FeatureCategory[] = [
    {
        title: "View & Navigate",
        description:
            "Five ways to look at JSON — text, tree, graph, node, and table — plus Stats and JQ. All free.",
        features: [
            {
                icon: GitBranch,
                title: "Interactive Tree View",
                description:
                    "Virtualized collapsible tree, search on the toolbar, breadcrumbs, and path copy.",
                href: "https://app.bracketview.in",
                cta: "Open tree view",
            },
            {
                icon: Network,
                title: "Graph View",
                description:
                    "Force-directed galaxy map of the payload — relationships instead of a flat list.",
                href: "https://app.bracketview.in",
                cta: "Open graph view",
            },
            {
                icon: LayoutGrid,
                title: "Node View",
                description:
                    "JSON Crack–style canvas: object cards, bezier edges, arrays of objects as table-shaped nodes, zoom/fit/lock, and search. Nested objects stay inside the parent until they need their own card. Free.",
                href: "https://app.bracketview.in",
                cta: "Open node view",
            },
            {
                icon: Table2,
                title: "Table View",
                description:
                    "Nested spreadsheet: objects as Key/Value, arrays of objects as columns, expand/collapse, virtualized long lists. Free.",
                href: "https://app.bracketview.in",
                cta: "Open table view",
            },
            {
                icon: FileJson,
                title: "Syntax-Highlighted Editor",
                description:
                    "Monaco editor — paste, format, minify, and stringify with colour-coded JSON.",
                href: "https://app.bracketview.in",
                cta: "Open editor",
            },
            {
                icon: BarChart3,
                title: "Stats View",
                description:
                    "Counts, types, and depth at a glance — a tool next to the five views.",
                href: "https://app.bracketview.in",
                cta: "View JSON stats",
            },
            {
                icon: Languages,
                title: "Nine UI languages",
                description:
                    "Switch the workspace in Workspace settings (header gear): English, Simplified Chinese (简体中文), Japanese (日本語), Korean (한국어), Português (Brasil), Spanish, French, German, Russian. Not on the profile page. Free.",
                href: "https://app.bracketview.in",
                cta: "Open workspace settings",
            },
            {
                icon: Gauge,
                title: "Performance Mode",
                description:
                    "Pro-only optimization for large JSON payloads — keeps tree, graph, node, table, and editor views responsive on files up to 50 MB. Node and Table stay available on Free; Performance Mode is the upgrade for huge files.",
                href: APP_PRICING_MONTHLY_CHECKOUT_URL,
                cta: "Unlock with Pro",
            },
        ],
    },
    {
        title: "Format & Validate",
        description:
            "Clean up payloads and catch syntax issues before they reach your app.",
        features: [
            {
                icon: Braces,
                title: "JSON Formatter",
                description:
                    "Beautify with readable indentation and consistent spacing in one click.",
                href: "https://app.bracketview.in",
                cta: "Try formatter",
            },
            {
                icon: Zap,
                title: "Minify",
                description:
                    "Compress JSON for production payloads and compact storage.",
                href: "https://app.bracketview.in",
                cta: "Try minifier",
            },
            {
                icon: Shield,
                title: "Real-Time Validator",
                description:
                    "Surface bracket mismatches, trailing commas, and unquoted keys as you type.",
                href: "https://app.bracketview.in",
                cta: "Try validator",
            },
        ],
    },
    {
        title: "Query & Filter",
        description:
            "Pull exactly the slice you need from large documents without writing a script.",
        features: [
            {
                icon: Terminal,
                title: "JQ Filter Playground",
                description:
                    "Run full jq in the browser via WebAssembly with quick filters and syntax help.",
                href: "https://app.bracketview.in",
                cta: "Try JQ filters",
            },
            {
                icon: SearchCode,
                title: "JSONPath Query",
                description:
                    "Use familiar path expressions like $.store.book[*].author on any payload.",
                href: "https://app.bracketview.in",
                cta: "Try JSONPath",
            },
            {
                icon: Sparkles,
                title: "AI Query Assistant",
                description:
                    "Describe what you need in plain English and get a valid jq filter instantly.",
                href: "https://app.bracketview.in",
                cta: "Try AI queries",
            },
        ],
    },
    {
        title: "AI-Powered Tools",
        description:
            "Fix broken data, generate test rows, and speed up AI workflows.",
        features: [
            {
                icon: Wand2,
                title: "AI JSON Fixer",
                description:
                    "Repair missing commas, unquoted keys, and common syntax errors automatically.",
                href: "https://app.bracketview.in",
                cta: "Try AI fixer",
            },
            {
                icon: Layers,
                title: "AI Mock Data Generator",
                description:
                    "Generate realistic test rows from a schema with custom profiles and row counts.",
                href: "https://app.bracketview.in/json-schema",
                cta: "Generate mock data",
            },
            {
                icon: PenLine,
                title: "AI Prompt Enhancer",
                description:
                    "Refine and improve LLM prompts directly inside your JSON workspace.",
                href: "https://app.bracketview.in/prompt-enhancer",
                cta: "Enhance prompts",
            },
        ],
    },
    {
        title: "Schema & Types",
        description: "Validate payloads and keep documentation accurate.",
        features: [
            {
                icon: Shield,
                title: "Schema Validator",
                description:
                    "Confirm data against OpenAPI definitions or custom JSON Schema rules.",
                href: "https://app.bracketview.in/json-schema",
                cta: "Validate schema",
            },
            {
                icon: ClipboardCopy,
                title: "Schema Generator",
                description:
                    "Create a draft schema from an example object for docs and contracts.",
                href: "https://app.bracketview.in/json-schema",
                cta: "Generate schema",
            },
            {
                icon: Code2,
                title: "Type Generator",
                description:
                    "Export types and interfaces for TypeScript, Python, Go, Rust, and more — this is code generation, not the nine UI languages in Workspace settings.",
                href: "https://app.bracketview.in/json-types",
                cta: "Generate types",
            },
        ],
    },
    {
        title: "Compare & Export",
        description:
            "Review changes and move data between formats without leaving the tab.",
        features: [
            {
                icon: GitCompare,
                title: "JSON Diff",
                description:
                    "Side-by-side comparison highlighting added, removed, and modified fields.",
                href: "https://app.bracketview.in/json-diff",
                cta: "Compare JSON",
            },
            {
                icon: Layers,
                title: "Compare View",
                description:
                    "Paste two versions and see exactly what changed — including offline text compare in the Windows app.",
                href: "https://app.bracketview.in/compare-view",
                cta: "Open compare view",
            },
            {
                icon: FileSpreadsheet,
                title: "Import & Export",
                description:
                    "Upload files from disk and export formatted JSON, CSV, and more.",
                href: "https://app.bracketview.in",
                cta: "Import & export",
            },
        ],
    },
    {
        title: "Sharing & Collaboration",
        description: "Collaborate without attaching files to chat.",
        features: [
            {
                icon: Share2,
                title: "Shareable Snapshots",
                description:
                    "Generate encrypted links with optional expiry for async reviews and bug reports.",
                href: "https://app.bracketview.in",
                cta: "Share snapshots",
            },
            {
                icon: StickyNote,
                title: "Annotate",
                description:
                    "Attach notes to keys and values, including JSONPath context for teammates.",
                href: "https://app.bracketview.in",
                cta: "Try annotations",
            },
        ],
    },
    {
        title: "Developer Utilities",
        description:
            "Extra tools that keep you in one workspace instead of tab-hopping.",
        features: [
            {
                icon: Webhook,
                title: "Webhook Tester",
                description: `Generate disposable public webhook URLs, capture live HTTP requests, mock responses, and verify signatures. Free tier: ${FREE_WEBHOOK_LABEL.replace("Webhook Tester: ", "")}.`,
                href: APP_WEBHOOKS_URL,
                cta: "Open Webhook Tester",
            },
            {
                icon: Binary,
                title: "Encoder / Decoder",
                description:
                    "Handle common encoding and decoding tasks alongside your JSON editor. Included in the Windows app offline.",
                href: "https://app.bracketview.in/encoder-decoder",
                cta: "Open encoder tool",
            },
        ],
    },
];

export { featureCategories };
export type { FeatureCategory, FeaturePageItem };

