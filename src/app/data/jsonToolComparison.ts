export const JSON_TOOL_COMPARISON_COLUMNS = [
    "BracketView",
    "JSONLint",
    "JSON Editor Online",
    "JSONCrack",
] as const;

export type JsonToolComparisonRow = {
    feature: string;
    values: [string, string, string, string];
};

export const JSON_TOOL_COMPARISON_ROWS: JsonToolComparisonRow[] = [
    {
        feature: "Free to use (core)",
        values: ["Yes", "Yes", "Yes", "Yes"],
    },
    {
        feature: "Ad-free workspace",
        values: ["Yes (app)", "No", "No", "Mostly"],
    },
    {
        feature: "Collapsible tree viewer",
        values: ["Yes", "No", "Yes", "Limited"],
    },
    {
        feature: "Graph / visual map",
        values: ["Yes", "No", "No", "Yes"],
    },
    {
        feature: "Search and path copy",
        values: ["Yes", "No", "Yes", "Limited"],
    },
    {
        feature: "Format and validate",
        values: ["Yes", "Yes", "Yes", "Yes"],
    },
    {
        feature: "JSONPath queries",
        values: ["Yes", "No", "No", "No"],
    },
    {
        feature: "jq playground",
        values: ["Yes (Wasm)", "No", "No", "No"],
    },
    {
        feature: "JSON diff",
        values: ["Yes", "No", "Limited", "No"],
    },
    {
        feature: "JSON Schema + types",
        values: ["Yes", "No", "Limited", "No"],
    },
    {
        feature: "AI JSON repair",
        values: ["Yes", "No", "No", "No"],
    },
    {
        feature: "Webhook tester",
        values: ["Yes", "No", "No", "No"],
    },
    {
        feature: "Encrypted snapshots",
        values: ["Yes", "No", "Share links", "Share links"],
    },
    {
        feature: "Browser-first core tools",
        values: ["Yes", "Often server-side", "Mixed", "Yes"],
    },
    {
        feature: "Requires install",
        values: ["No", "No", "No", "No"],
    },
];

export type ListedJsonTool = {
    name: string;
    description: string;
    url: string;
};

export const JSON_VIEWER_LISTED_TOOLS: ListedJsonTool[] = [
    {
        name: "JSONLint",
        description:
            "Fast online JSON validator and pretty-printer. Best for a one-shot syntax check.",
        url: "https://jsonlint.com",
    },
    {
        name: "JSON Editor Online",
        description:
            "Classic tree, code, and table JSON editor. Best for everyday inspect-and-edit.",
        url: "https://jsoneditoronline.org",
    },
    {
        name: "JSONCrack",
        description:
            "Graph-first JSON visualizer. Best when you need a map of nested relationships.",
        url: "https://jsoncrack.com",
    },
    {
        name: "BracketView",
        description:
            "Free online JSON viewer and workspace: tree, graph, JSONPath, jq, diff, schema, and an ad-free app.",
        url: "https://bracketview.in/json-viewer",
    },
];

export type LearnComparisonTable = {
    caption?: string;
    columns: string[];
    rows: { feature: string; values: string[] }[];
};

export const HOMEPAGE_LEARN_COMPARISON: LearnComparisonTable = {
    caption:
        "How a free online JSON viewer compares on navigation, privacy, and adjacent workflows.",
    columns: [...JSON_TOOL_COMPARISON_COLUMNS],
    rows: JSON_TOOL_COMPARISON_ROWS.map((row) => ({
        feature: row.feature,
        values: [...row.values],
    })),
};
