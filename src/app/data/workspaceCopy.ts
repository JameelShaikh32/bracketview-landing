/** Product facts for marketing — keep in sync with app.bracketview.in. */

const APP_WORKSPACE_URL = "https://app.bracketview.in";
const OPEN_WORKSPACE_CTA = "Open the workspace";

type WorkspaceTab = {
    id: "text" | "tree" | "graph" | "node" | "table" | "stats" | "jq";
    label: string;
    kind: "view" | "tool";
    summary: string;
};

const WORKSPACE_TABS: WorkspaceTab[] = [
    {
        id: "text",
        label: "Text",
        kind: "view",
        summary:
            "Monaco editor — paste, format, minify, stringify",
    },
    {
        id: "tree",
        label: "Tree",
        kind: "view",
        summary:
            "Virtualized collapsible tree, search, breadcrumbs, path copy",
    },
    {
        id: "graph",
        label: "Graph",
        kind: "view",
        summary: "Force-directed galaxy map of the payload",
    },
    {
        id: "node",
        label: "Node",
        kind: "view",
        summary:
            "JSON Crack–style canvas: object cards, bezier edges, arrays of objects as table-shaped nodes, zoom/fit/lock, search. Nested objects stay inside the parent until they need their own card.",
    },
    {
        id: "table",
        label: "Table",
        kind: "view",
        summary:
            "Nested spreadsheet: objects as Key/Value, arrays of objects as columns, expand/collapse, virtualized long lists",
    },
    {
        id: "stats",
        label: "Stats",
        kind: "tool",
        summary: "Counts, types, depth",
    },
    {
        id: "jq",
        label: "JQ Filter",
        kind: "tool",
        summary: "jq + JSONPath playground",
    },
];

const VIEW_TABS = WORKSPACE_TABS.filter((tab) => tab.kind === "view");
const TOOL_TABS = WORKSPACE_TABS.filter((tab) => tab.kind === "tool");

const VIEW_TAB_LABELS = VIEW_TABS.map((tab) => tab.label);
const ALL_TAB_LABELS = WORKSPACE_TABS.map((tab) => tab.label);

const VIEW_TABS_PHRASE = "text, tree, graph, node cards, or a nested table";
const VIEW_TABS_LIST = "text, tree, graph, node, and table";
const SEVEN_TABS_PHRASE =
    "seven tabs: Text, Tree, Graph, Node, Table, Stats, and JQ Filter";

type UiLanguage = {
    id: string;
    label: string;
    native?: string;
};

const UI_LANGUAGES: UiLanguage[] = [
    { id: "en", label: "English" },
    { id: "zh-CN", label: "Simplified Chinese", native: "简体中文" },
    { id: "ja", label: "Japanese", native: "日本語" },
    { id: "ko", label: "Korean", native: "한국어" },
    { id: "pt-BR", label: "Português (Brasil)" },
    { id: "es", label: "Spanish" },
    { id: "fr", label: "French" },
    { id: "de", label: "German" },
    { id: "ru", label: "Russian" },
];

const UI_LANGUAGE_COUNT = UI_LANGUAGES.length;

const UI_LANGUAGE_LIST = UI_LANGUAGES.map((lang) =>
    lang.native ? `${lang.label} (${lang.native})` : lang.label,
).join(", ");

const UI_LANGUAGE_FOOTER_LIST = UI_LANGUAGES.map(
    (lang) => lang.native ?? lang.label,
).join(" · ");

const UI_LANGUAGES_WHERE =
    "Workspace settings in the header gear — not on the profile page";

const TYPE_GENERATOR_LANGUAGES =
    "TypeScript, Python, Go, and Rust";

const PRO_WHEN_LINE =
    "Free to see the JSON. Pro when the file is huge, the link has to last, or AI shouldn’t run out.";

const PRODUCT_SHOTS = {
    tabs: {
        src: "/images/product/workspace-tabs-dark.webp",
        alt: "BracketView workspace tabs: Tree, Graph, Node, Table, Text, Stats, and JQ",
        width: 1440,
        height: 900,
    },
    node: {
        src: "/images/product/node-view-dark.webp",
        alt: "BracketView Node view with object cards and a table-shaped node for an array of objects",
        width: 1440,
        height: 900,
    },
    table: {
        src: "/images/product/table-view-dark.webp",
        alt: "BracketView Table view showing nested Key/Value rows and a columnar array of objects",
        width: 1440,
        height: 900,
    },
    settings: {
        src: "/images/product/workspace-settings-dark.webp",
        alt: "BracketView workspace settings: theme, editor font, and UI language",
        width: 1440,
        height: 900,
    },
    aiPanel: {
        src: "/images/product/ai-panel-dark.webp",
        alt: "BracketView AI panel sliding in from the right of the workspace",
        width: 1440,
        height: 900,
    },
    downloadMore: {
        src: "/images/product/windows-download-more-dark.webp",
        alt: "Download the Windows app from BracketView’s More menu",
        width: 1440,
        height: 900,
    },
} as const;

export {
    ALL_TAB_LABELS,
    APP_WORKSPACE_URL,
    OPEN_WORKSPACE_CTA,
    PRODUCT_SHOTS,
    PRO_WHEN_LINE,
    SEVEN_TABS_PHRASE,
    TOOL_TABS,
    TYPE_GENERATOR_LANGUAGES,
    UI_LANGUAGE_COUNT,
    UI_LANGUAGE_FOOTER_LIST,
    UI_LANGUAGE_LIST,
    UI_LANGUAGES,
    UI_LANGUAGES_WHERE,
    VIEW_TAB_LABELS,
    VIEW_TABS,
    VIEW_TABS_LIST,
    VIEW_TABS_PHRASE,
    WORKSPACE_TABS,
};
export type { UiLanguage, WorkspaceTab };
