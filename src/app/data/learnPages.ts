import {
  HOMEPAGE_LEARN_COMPARISON,
  JSON_VIEWER_LISTED_TOOLS,
  type LearnComparisonTable,
  type ListedJsonTool,
} from "@/app/data/jsonToolComparison";
import type { FaqItem } from "@/lib/seo";

export type LearnPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  cluster:
    | "viewer"
    | "jsonpath"
    | "jq"
    | "api"
    | "fundamentals"
    | "comparisons";
  answerFirst: string;
  sections?: { heading: string; body: string }[];
  comparison?: LearnComparisonTable;
  listedTools?: ListedJsonTool[];
  steps?: { name: string; text: string }[];
  examples?: { title: string; code: string }[];
  faqs: FaqItem[];
  relatedTools: string[];
  relatedLearn: string[];
};

export const learnPages: Record<string, LearnPage> = {
  "what-is-json": {
    slug: "what-is-json",
    title: "What is JSON?",
    metaTitle: "What is JSON? — Definition, Examples & Guide | BracketView",
    metaDescription:
      "JSON is a lightweight text format for structured data. Learn the definition, syntax rules, examples, and how to view JSON online.",
    cluster: "fundamentals",
    answerFirst:
      "JSON (JavaScript Object Notation) is a lightweight, text-based format for representing structured data as objects and arrays. It is language-independent, human-readable, and the dominant payload format for REST APIs, configs, and webhooks.",
    steps: [
      {
        name: "Recognize the building blocks",
        text: "JSON values are objects {}, arrays [], strings, numbers, booleans, or null.",
      },
      {
        name: "Follow syntax rules",
        text: "Keys must be double-quoted strings. No trailing commas. No comments in strict JSON.",
      },
      {
        name: "Validate before shipping",
        text: "Paste payloads into a JSON validator to catch syntax errors early.",
      },
    ],
    examples: [
      {
        title: "Minimal object",
        code: '{\n  "id": 1,\n  "name": "Ada",\n  "active": true\n}',
      },
    ],
    faqs: [
      {
        question: "Is JSON the same as JavaScript?",
        answer:
          "No. JSON is a data format inspired by JavaScript object literal syntax, but it is used across many languages and has stricter rules than JS.",
      },
      {
        question: "Where is JSON used?",
        answer:
          "APIs, configuration files, webhook bodies, log events, and browser storage commonly use JSON.",
      },
    ],
    relatedTools: ["json-viewer", "json-formatter", "json-validator"],
    relatedLearn: ["how-to-validate-json", "json-vs-yaml", "best-json-viewer"],
  },
  "what-is-jsonpath": {
    slug: "what-is-jsonpath",
    title: "What is JSONPath?",
    metaTitle: "What is JSONPath? — Syntax & Examples | BracketView",
    metaDescription:
      "JSONPath is a query language for JSON documents. Learn the definition, core syntax, and practical examples.",
    cluster: "jsonpath",
    answerFirst:
      "JSONPath is a query language for selecting and extracting values from JSON documents, similar to how XPath works for XML. Expressions typically start with $ (the root) and use dots, brackets, and wildcards to navigate nested fields.",
    steps: [
      {
        name: "Start at the root",
        text: "Use $ to refer to the entire document.",
      },
      {
        name: "Walk properties",
        text: "Use .field or ['field'] to descend into objects.",
      },
      {
        name: "Select arrays",
        text: "Use [0], [*], or [?(@.price<10)] style filters depending on your engine.",
      },
    ],
    examples: [
      {
        title: "Select all author names",
        code: "$.store.book[*].author",
      },
      {
        title: "First item SKU",
        code: "$.data.items[0].sku",
      },
      {
        title: "Nested preference",
        code: "$.user.profile.preferences.theme",
      },
    ],
    faqs: [
      {
        question: "Is JSONPath standardized?",
        answer:
          "Implementations vary. Stick to widely supported features (root, property access, array indexes, wildcards) for portability.",
      },
      {
        question: "JSONPath vs jq?",
        answer:
          "JSONPath focuses on selection. jq is a full programming language for transforming JSON streams.",
      },
    ],
    relatedTools: ["jsonpath-query", "jq-playground", "json-viewer"],
    relatedLearn: ["what-is-jq", "what-is-json", "how-to-compare-json-files"],
  },
  "how-to-validate-json": {
    slug: "how-to-validate-json",
    title: "How to validate JSON",
    metaTitle: "How to Validate JSON Online — Steps & FAQ | BracketView",
    metaDescription:
      "Learn how to validate JSON syntax and JSON Schema. Step-by-step instructions with free browser tools.",
    cluster: "viewer",
    answerFirst:
      "To validate JSON, parse it with a strict JSON parser (or online validator). If you also need structure guarantees, validate the parsed value against a JSON Schema. BracketView highlights syntax errors as you type and supports schema validation in the workspace.",
    steps: [
      {
        name: "Paste the payload",
        text: "Open BracketView and paste your JSON into the editor.",
      },
      {
        name: "Fix syntax errors",
        text: "Resolve missing commas, unquoted keys, and trailing commas until the document parses.",
      },
      {
        name: "Validate against schema (optional)",
        text: "Open the Schema tool, paste a JSON Schema, and review field-level errors.",
      },
    ],
    examples: [
      {
        title: "Invalid (missing comma)",
        code: '{\n  "ok": false\n  "code": 400\n}',
      },
      {
        title: "Valid",
        code: '{\n  "ok": false,\n  "code": 400\n}',
      },
    ],
    faqs: [
      {
        question: "What is the difference between syntax validation and schema validation?",
        answer:
          "Syntax validation checks whether text is valid JSON. Schema validation checks whether the data matches an expected shape.",
      },
    ],
    relatedTools: ["json-validator", "json-schema-validator", "ai-json-fixer"],
    relatedLearn: ["how-to-fix-invalid-json", "what-is-json", "best-json-viewer"],
  },
  "how-to-fix-invalid-json": {
    slug: "how-to-fix-invalid-json",
    title: "How to fix invalid JSON",
    metaTitle: "How to Fix Invalid JSON — Common Errors & AI Repair | BracketView",
    metaDescription:
      "Fix invalid JSON caused by missing commas, trailing commas, and truncated payloads. Steps and AI repair options.",
    cluster: "viewer",
    answerFirst:
      "Invalid JSON is usually caused by trailing commas, missing commas between properties, single quotes, comments, or truncated responses. Fix by locating the first parse error, correcting syntax, then re-validating. BracketView can attempt local repair and optional AI repair when local fixes fail.",
    steps: [
      {
        name: "Read the parser error",
        text: "Note the line/position of the unexpected token.",
      },
      {
        name: "Apply common fixes",
        text: "Add missing commas, remove trailing commas, convert single quotes, strip comments.",
      },
      {
        name: "Use AI repair if needed",
        text: "For large or messy dumps, run Fix JSON / AI repair, then re-validate.",
      },
    ],
    examples: [
      {
        title: "Trailing comma (invalid)",
        code: '{\n  "a": 1,\n}',
      },
    ],
    faqs: [
      {
        question: "Why do APIs return invalid JSON?",
        answer:
          "Proxies may truncate bodies, loggers may concatenate lines, or serializers may emit JS-like objects with trailing commas.",
      },
    ],
    relatedTools: ["ai-json-fixer", "json-validator", "json-formatter"],
    relatedLearn: ["how-to-validate-json", "what-is-json"],
  },
  "how-to-compare-json-files": {
    slug: "how-to-compare-json-files",
    title: "How to compare JSON files",
    metaTitle: "How to Compare JSON Files — Structural Diff Guide | BracketView",
    metaDescription:
      "Compare two JSON documents with a structural diff. See added, removed, and changed fields step by step.",
    cluster: "viewer",
    answerFirst:
      "To compare JSON files, run a structural diff that walks both documents and reports added, removed, and changed paths—not just a line-by-line text diff. BracketView’s JSON Diff tool highlights field-level changes even when key order differs.",
    steps: [
      {
        name: "Open JSON Diff",
        text: "Go to the Diff tool in BracketView.",
      },
      {
        name: "Paste left and right documents",
        text: "Use the before/after API responses or config versions you want to compare.",
      },
      {
        name: "Review changed paths",
        text: "Focus on semantic changes (values and missing keys) rather than formatting noise.",
      },
    ],
    faqs: [
      {
        question: "Why not use a text diff?",
        answer:
          "Pretty-printing and key order changes create noisy text diffs. Structural diffs ignore formatting and compare the data model.",
      },
    ],
    relatedTools: ["json-diff", "json-viewer", "json-formatter"],
    relatedLearn: ["what-is-json", "best-json-viewer", "bracketview-vs-jsonlint"],
  },
  "what-is-jq": {
    slug: "what-is-jq",
    title: "What is JQ?",
    metaTitle: "What is JQ? — Filters, Examples & Playground | BracketView",
    metaDescription:
      "jq is a lightweight command-line JSON processor. Learn what jq is, core filters, and try examples in the browser.",
    cluster: "jq",
    answerFirst:
      "jq is a lightweight, flexible command-line processor for JSON. Filters like .items[] | select(.active) let you slice, map, and transform JSON streams. BracketView embeds a WebAssembly jq playground so you can run filters without installing the CLI.",
    steps: [
      {
        name: "Identity filter",
        text: "`.` returns the whole input document.",
      },
      {
        name: "Iterate arrays",
        text: "`.[]` or `.items[]` walks array elements.",
      },
      {
        name: "Filter and map",
        text: "Pipe into `select(...)` and project fields with `{id, name}`.",
      },
    ],
    examples: [
      {
        title: "Active users",
        code: ".users[] | select(.active == true) | .email",
      },
      {
        title: "Map names",
        code: "[.items[] | .name]",
      },
    ],
    faqs: [
      {
        question: "Do I need to install jq?",
        answer:
          "For local scripting, yes. For experimentation, BracketView’s browser playground runs jq via WebAssembly.",
      },
    ],
    relatedTools: ["jq-playground", "jsonpath-query", "json-viewer"],
    relatedLearn: ["what-is-jsonpath", "what-is-json"],
  },
  "json-vs-yaml": {
    slug: "json-vs-yaml",
    title: "JSON vs YAML",
    metaTitle: "JSON vs YAML — Differences, Pros & When to Use | BracketView",
    metaDescription:
      "Compare JSON and YAML for APIs and configs. Learn differences, trade-offs, and when each format wins.",
    cluster: "fundamentals",
    answerFirst:
      "JSON is stricter and ubiquitous for APIs; YAML is more human-friendly for configs and supports comments. Choose JSON for machine interchange and YAML for editable infrastructure manifests—then convert when needed.",
    examples: [
      {
        title: "JSON",
        code: '{\n  "replicas": 3,\n  "image": "api:1.2"\n}',
      },
      {
        title: "YAML",
        code: "replicas: 3\nimage: api:1.2  # comment allowed",
      },
    ],
    faqs: [
      {
        question: "Which is better for APIs?",
        answer:
          "JSON is the default for HTTP APIs because parsers are everywhere and the grammar is simple and strict.",
      },
      {
        question: "Can BracketView edit YAML?",
        answer:
          "BracketView focuses on JSON workflows; export helpers can bridge formats when converting payloads.",
      },
    ],
    relatedTools: ["json-formatter", "json-viewer", "json-type-generator"],
    relatedLearn: ["what-is-json", "best-json-viewer"],
  },
  "best-json-viewer": {
    slug: "best-json-viewer",
    title: "Best JSON Viewer",
    metaTitle: "Best Free Online JSON Viewer (2026) — Criteria & Tools | BracketView",
    metaDescription:
      "Compare free online JSON viewers: JSONLint, JSON Editor Online, JSONCrack, and BracketView. Criteria: tree navigation, privacy, search, and adjacent tools.",
    cluster: "viewer",
    answerFirst:
      "The best free online JSON viewer depends on the job. Use JSONLint to validate and pretty-print, JSON Editor Online for a classic tree-and-code editor, JSONCrack for a graph map of nested data, and BracketView when you want a free browser workspace that combines tree and graph viewing with JSONPath, jq, diff, schema, and an ad-free app. Prefer tools that parse JSON in the browser for sensitive payloads.",
    sections: [
      {
        heading: "How to choose a JSON viewer",
        body: "Look for a collapsible tree, search, and path copy before cosmetics. For API work, format and validate should sit next to the viewer so you are not bouncing between sites. If the payload is private, confirm that viewing runs in the browser and that ads or share links do not upload the document by default.",
      },
      {
        heading: "JSONLint — best for a one-shot syntax check",
        body: "JSONLint is the default name for “is this valid JSON?” Paste, validate, pretty-print, done. It is not a tree viewer: you still read a wall of text after formatting. Many lint-style sites also process JSON on a server, which is a poor fit for tokens or production dumps.",
      },
      {
        heading: "JSON Editor Online — best for classic tree plus code",
        body: "JSON Editor Online is the long-standing tree, code, and table editor. It is the right pick when you already know the UI and only need to inspect or tweak a document. The trade-off is ads in the free experience and fewer query, diff, and schema tools in the same workspace.",
      },
      {
        heading: "JSONCrack — best for a graph of nested JSON",
        body: "JSONCrack renders JSON as a node graph, which helps when relationships matter more than a nested list. Use it to see structure at a glance. You will still want a tree, formatter, and query tools for everyday debugging — JSONCrack is strongest as a visualizer, not a full workspace.",
      },
      {
        heading: "BracketView — best for a free JSON workspace",
        body: "BracketView is a free online JSON viewer with tree and graph views, path copy, search, formatter, validator, JSONPath, a WebAssembly jq playground, JSON diff, schema tools, and type export. Core viewing, formatting, and validation run in the browser. The app workspace is ad-free; Pro raises upload, AI, snapshot, and webhook limits. Choose BracketView when the viewer has to sit next to the rest of the debug loop.",
      },
    ],
    comparison: HOMEPAGE_LEARN_COMPARISON,
    listedTools: JSON_VIEWER_LISTED_TOOLS,
    steps: [
      {
        name: "Prioritize privacy",
        text: "Prefer tools that process JSON in the browser for sensitive payloads.",
      },
      {
        name: "Require navigation features",
        text: "Tree view, path copy, and search matter more than pretty colors alone.",
      },
      {
        name: "Check adjacent workflows",
        text: "Diff, schema, and query tools should live beside the viewer so you do not switch sites mid-debug.",
      },
    ],
    faqs: [
      {
        question: "What is the best free online JSON viewer?",
        answer:
          "There is no single winner. JSONLint is best for a quick validate-and-format pass, JSON Editor Online for a familiar tree editor, JSONCrack for graphs, and BracketView for a free online JSON viewer that also formats, validates, queries, and diffs in one ad-free app.",
      },
      {
        question: "Is BracketView a free JSON viewer?",
        answer:
          "Yes. Core viewer, formatter, and validator features are free with no signup required. Pro raises AI, upload, snapshot, and webhook limits.",
      },
      {
        question: "Should I paste secrets into an online JSON viewer?",
        answer:
          "Prefer client-side viewers and redact tokens. Review whether the tool uploads JSON before you paste production data.",
      },
    ],
    relatedTools: ["json-viewer", "json-formatter", "json-diff"],
    relatedLearn: [
      "bracketview-vs-jsonlint",
      "bracketview-vs-json-editor-online",
      "bracketview-vs-jsoncrack",
      "json-formatter-vs-viewer",
    ],
  },
  "jsonpath-cheatsheet": {
    slug: "jsonpath-cheatsheet",
    title: "JSONPath cheatsheet",
    metaTitle: "JSONPath Cheatsheet — Operators & Examples | BracketView",
    metaDescription:
      "Quick JSONPath cheatsheet: root, wildcards, filters, and common API extraction patterns.",
    cluster: "jsonpath",
    answerFirst:
      "A JSONPath cheatsheet covers root ($), child access (.key), descendants (..key), wildcards (*), array slices, and filters. Use it to extract nested API fields without writing custom parsers.",
    examples: [
      { title: "All values under data", code: "$.data.*" },
      { title: "Recursive search", code: "$..id" },
      { title: "Array wildcard", code: "$.items[*].name" },
    ],
    faqs: [
      {
        question: "Where can I practice JSONPath?",
        answer:
          "Use BracketView’s JSONPath query tool with a sample payload and iterate live.",
      },
    ],
    relatedTools: ["jsonpath-query", "json-viewer"],
    relatedLearn: ["what-is-jsonpath", "what-is-jq"],
  },
  "bracketview-vs-jsonlint": {
    slug: "bracketview-vs-jsonlint",
    title: "BracketView vs JSONLint",
    metaTitle: "BracketView vs JSONLint — Viewer vs Validator | BracketView",
    metaDescription:
      "JSONLint validates and pretty-prints JSON. BracketView is a free online JSON viewer with tree, query, diff, and client-side core tools. When to use each.",
    cluster: "comparisons",
    answerFirst:
      "Use JSONLint when you only need to know whether a string is valid JSON and want it pretty-printed. Use BracketView when you also need a tree viewer, search, JSONPath or jq, diff, or schema tools, and you want viewing to stay in the browser. JSONLint is a linter; BracketView is a workspace.",
    sections: [
      {
        heading: "What JSONLint is for",
        body: "JSONLint is the fastest path from “this might be broken” to a syntax error or a formatted document. That single-purpose flow is why it still shows up in “free JSON viewer” lists even though it is not a tree viewer. If your job ends after validate-and-beautify, JSONLint is enough.",
      },
      {
        heading: "What BracketView adds",
        body: "After the payload parses, most API work is navigation: expand one branch, copy a path, search a key, compare two versions, or extract a field. BracketView’s free online JSON viewer runs those steps in the same tab, with core viewing and formatting in the browser and an ad-free app workspace.",
      },
      {
        heading: "Privacy and ads",
        body: "Lint websites often send the document to a server to validate. BracketView’s core viewer, formatter, and validator run locally. The marketing site may show ads; the app at app.bracketview.in does not. Optional AI, encrypted snapshots, and Webhook Tester use the server only when you choose them.",
      },
      {
        heading: "When to pick JSONLint anyway",
        body: "Pick JSONLint for a throwaway syntax check on non-sensitive sample data, or when a teammate already expects that URL. Pick BracketView when the JSON is nested, large, or private, or when you will query or diff it next.",
      },
    ],
    comparison: {
      caption:
        "JSONLint is a validator and formatter. BracketView is a free JSON viewer plus the rest of the debug loop.",
      columns: ["BracketView", "JSONLint"],
      rows: [
        { feature: "Tree viewer", values: ["Yes", "No"] },
        { feature: "Format and validate", values: ["Yes", "Yes"] },
        { feature: "JSONPath / jq", values: ["Yes", "No"] },
        { feature: "JSON diff", values: ["Yes", "No"] },
        { feature: "Ad-free app workspace", values: ["Yes", "No"] },
        { feature: "Browser-first core tools", values: ["Yes", "Often server-side"] },
        { feature: "Free core use", values: ["Yes", "Yes"] },
      ],
    },
    faqs: [
      {
        question: "Is JSONLint a JSON viewer?",
        answer:
          "It is a validator and pretty-printer. You read formatted text, not a collapsible tree. BracketView is the viewer when you need to expand nested objects.",
      },
      {
        question: "Is BracketView free like JSONLint?",
        answer:
          "Core viewing, formatting, and validation are free with no signup. Pro is optional for higher AI, upload, snapshot, and webhook limits.",
      },
    ],
    relatedTools: ["json-viewer", "json-validator", "json-formatter"],
    relatedLearn: [
      "best-json-viewer",
      "bracketview-vs-json-editor-online",
      "how-to-validate-json",
    ],
  },
  "bracketview-vs-json-editor-online": {
    slug: "bracketview-vs-json-editor-online",
    title: "BracketView vs JSON Editor Online",
    metaTitle:
      "BracketView vs JSON Editor Online — JSON Workspace Comparison",
    metaDescription:
      "JSON Editor Online is the classic tree and code editor. BracketView is a free online JSON viewer with jq, JSONPath, diff, schema, and an ad-free app.",
    cluster: "comparisons",
    answerFirst:
      "Choose JSON Editor Online if you want the familiar tree-plus-code-plus-table editor you have used for years. Choose BracketView if you want that tree in a free workspace that also runs JSONPath and jq, diffs two documents, validates schemas, and keeps the app ad-free with client-side core tools.",
    sections: [
      {
        heading: "Where JSON Editor Online wins",
        body: "It defined the “online JSON editor” pattern: code on one side, collapsible tree on the other, table mode for arrays. If you only need to inspect or tweak a document and you already know the UI, it is still a strong default.",
      },
      {
        heading: "Where BracketView wins",
        body: "Debugging an API rarely stops at the tree. BracketView keeps formatter, validator, JSONPath, a WebAssembly jq playground, JSON diff, schema generate/validate, and type export beside the viewer. Graph view (JSON Galaxy) sits next to the tree when a list of nodes is not enough.",
      },
      {
        heading: "Ads, accounts, and privacy",
        body: "JSON Editor Online’s free experience includes ads and optional accounts for extra features. BracketView’s app workspace is ad-free on the free tier. Core viewing and formatting run in the browser; encrypted snapshot links and AI are opt-in.",
      },
      {
        heading: "When to stay on JSON Editor Online",
        body: "Stay if your workflow is “open JSON, edit a value, copy it back.” Switch to BracketView when you need queries, diffs, schema, webhooks, or a quieter editor for longer sessions.",
      },
    ],
    comparison: {
      caption:
        "Both offer a collapsible tree. BracketView adds query, diff, schema, and an ad-free app.",
      columns: ["BracketView", "JSON Editor Online"],
      rows: [
        { feature: "Tree + code views", values: ["Yes", "Yes"] },
        { feature: "Table view for arrays", values: ["Stats + tree", "Yes"] },
        { feature: "Graph view", values: ["Yes", "No"] },
        { feature: "JSONPath and jq", values: ["Yes", "No"] },
        { feature: "JSON diff", values: ["Yes", "Limited"] },
        { feature: "Schema and types", values: ["Yes", "Limited"] },
        { feature: "Ad-free app workspace", values: ["Yes", "No"] },
        { feature: "Free core use", values: ["Yes", "Yes"] },
      ],
    },
    faqs: [
      {
        question: "Is JSON Editor Online still a good JSON viewer?",
        answer:
          "Yes, for classic tree-and-code editing. It is less of a fit if you need jq, JSONPath, structural diff, or an ad-free workspace.",
      },
      {
        question: "Does BracketView replace JSON Editor Online?",
        answer:
          "For most API debugging, yes: you get a tree viewer plus formatter and query tools. If you only need the old split editor and already prefer that layout, JSON Editor Online remains a valid choice.",
      },
    ],
    relatedTools: ["json-viewer", "json-formatter", "jsonpath-query"],
    relatedLearn: [
      "best-json-viewer",
      "bracketview-vs-jsoncrack",
      "json-formatter-vs-viewer",
    ],
  },
  "bracketview-vs-jsoncrack": {
    slug: "bracketview-vs-jsoncrack",
    title: "BracketView vs JSONCrack",
    metaTitle: "BracketView vs JSONCrack — Tree Workspace vs Graph Viewer",
    metaDescription:
      "JSONCrack maps JSON as a graph. BracketView is a free online JSON viewer with tree and graph views plus JSONPath, jq, diff, and schema tools.",
    cluster: "comparisons",
    answerFirst:
      "Use JSONCrack when you want a graph of nested JSON and that picture is the whole job. Use BracketView when you still need a tree, search, path copy, formatter, and queries after you see the graph. BracketView includes a graph view (JSON Galaxy) inside a broader free workspace; JSONCrack is strongest as a dedicated visualizer.",
    sections: [
      {
        heading: "What JSONCrack is for",
        body: "JSONCrack turns objects and arrays into a node network. That is the right mental model for deeply nested configs, CMS payloads, or anything where “what points at what” matters more than line numbers. It is a visualizer first.",
      },
      {
        heading: "What BracketView is for",
        body: "BracketView is a free online JSON viewer for the full debug loop: paste, validate, expand a tree, copy a path, run JSONPath or jq, diff two versions, and optionally capture a webhook. Graph view is one tab, not the only product.",
      },
      {
        heading: "Privacy",
        body: "JSONCrack’s editor is typically client-side, which is a good default for sensitive JSON. BracketView’s core viewer, formatter, validator, JSONPath, and jq also run in the browser. Treat share links and AI features as a different path on both products.",
      },
      {
        heading: "When to pick JSONCrack anyway",
        body: "Pick JSONCrack for a presentation-quality graph or when you already live in that UI. Pick BracketView when the graph is a step toward fixing a field, writing a filter, or comparing two API versions.",
      },
    ],
    comparison: {
      caption:
        "JSONCrack is a graph visualizer. BracketView is a viewer workspace that also includes a graph.",
      columns: ["BracketView", "JSONCrack"],
      rows: [
        { feature: "Graph / visual map", values: ["Yes", "Yes"] },
        { feature: "Collapsible tree", values: ["Yes", "Limited"] },
        { feature: "Format and validate", values: ["Yes", "Yes"] },
        { feature: "JSONPath / jq", values: ["Yes", "No"] },
        { feature: "JSON diff", values: ["Yes", "No"] },
        { feature: "Webhook tester", values: ["Yes", "No"] },
        { feature: "Browser-first core", values: ["Yes", "Yes"] },
        { feature: "Ad-free app workspace", values: ["Yes", "Mostly"] },
      ],
    },
    faqs: [
      {
        question: "Does BracketView have a graph view like JSONCrack?",
        answer:
          "Yes. JSON Galaxy maps nested data as a node network. Use it beside the tree when you need both a map and path copy.",
      },
      {
        question: "Which is better for large JSON?",
        answer:
          "Graphs get busy on huge payloads. BracketView’s tree plus search is usually faster for large API dumps; Pro Performance Mode is built for that case. JSONCrack remains excellent for medium documents you want to see as a diagram.",
      },
    ],
    relatedTools: ["json-viewer", "jsonpath-query", "json-diff"],
    relatedLearn: [
      "best-json-viewer",
      "bracketview-vs-json-editor-online",
      "how-to-compare-json-files",
    ],
  },
  "jq-filter-examples": {
    slug: "jq-filter-examples",
    title: "JQ filter examples",
    metaTitle: "JQ Filter Examples — Practical Recipes | BracketView",
    metaDescription:
      "Practical jq filter examples for mapping, selecting, grouping, and reshaping API JSON.",
    cluster: "jq",
    answerFirst:
      "Common jq recipes include mapping fields, selecting with predicates, sorting, and building new objects. Start with `.items[] | select(.active) | {id, name}` and expand as needed.",
    examples: [
      {
        title: "Select and project",
        code: ".items[] | select(.qty > 0) | {sku, qty}",
      },
      {
        title: "Sort descending",
        code: ".items | sort_by(.qty) | reverse",
      },
      {
        title: "Keys only",
        code: "keys",
      },
    ],
    faqs: [
      {
        question: "Can I run these in the browser?",
        answer:
          "Yes. BracketView’s JQ playground runs a WebAssembly jq engine client-side.",
      },
    ],
    relatedTools: ["jq-playground", "jsonpath-query"],
    relatedLearn: ["what-is-jq", "jsonpath-cheatsheet"],
  },
  "webhook-debugging-guide": {
    slug: "webhook-debugging-guide",
    title: "Webhook debugging guide",
    metaTitle: "Webhook Debugging Guide — Capture, Inspect, Replay | BracketView",
    metaDescription:
      "Debug webhooks by capturing live requests, inspecting headers and bodies, verifying signatures, and replaying to localhost.",
    cluster: "api",
    answerFirst:
      "To debug webhooks, generate a public catcher URL, point your provider at it, inspect headers and JSON bodies, verify HMAC signatures, then replay to localhost. BracketView Webhook Tester provides disposable endpoints with short retention for this workflow.",
    steps: [
      {
        name: "Create a catcher endpoint",
        text: "Open Webhook Tester and create a named endpoint.",
      },
      {
        name: "Send a test event",
        text: "Configure Stripe/GitHub/Shopify (or curl) to POST to the public URL.",
      },
      {
        name: "Inspect and replay",
        text: "Open the capture, verify signatures client-side, and replay to your local server.",
      },
    ],
    faqs: [
      {
        question: "Are webhook URLs secret?",
        answer:
          "No. Treat them as public. Do not send long-lived secrets you would not put in a short-lived channel.",
      },
    ],
    relatedTools: ["webhook-tester", "json-viewer", "json-schema-validator"],
    relatedLearn: ["how-to-validate-json", "what-is-json"],
  },
  "api-debugging-with-json": {
    slug: "api-debugging-with-json",
    title: "API debugging with JSON",
    metaTitle: "API Debugging with JSON — Workflow Guide | BracketView",
    metaDescription:
      "A practical API debugging workflow: capture responses, validate JSON, query fields, and diff versions.",
    cluster: "api",
    answerFirst:
      "Effective API debugging means capturing the raw JSON response, validating syntax, navigating nested fields with a tree/JSONPath, and diffing against a known-good payload. Keep sensitive data local with client-side tools whenever possible.",
    steps: [
      {
        name: "Capture the payload",
        text: "Copy the response body from your client, proxy, or webhook catcher.",
      },
      {
        name: "Validate and view",
        text: "Paste into BracketView, fix syntax if needed, then open the tree.",
      },
      {
        name: "Query and compare",
        text: "Use JSONPath/jq to extract suspects, then Diff against a previous version.",
      },
    ],
    faqs: [
      {
        question: "Should I paste production secrets into online tools?",
        answer:
          "Prefer client-side tools and redact secrets. Review privacy policies before using cloud AI or share links.",
      },
    ],
    relatedTools: ["json-viewer", "jsonpath-query", "json-diff", "webhook-tester"],
    relatedLearn: ["webhook-debugging-guide", "how-to-compare-json-files"],
  },
  "json-formatter-vs-viewer": {
    slug: "json-formatter-vs-viewer",
    title: "JSON formatter vs JSON viewer",
    metaTitle: "JSON Formatter vs Viewer — Which Do You Need? | BracketView",
    metaDescription:
      "Formatters pretty-print text; viewers help you navigate structure. Learn when to use each — BracketView includes both.",
    cluster: "viewer",
    answerFirst:
      "A JSON formatter beautifies or minifies text. A JSON viewer presents structure as a tree/graph for navigation. You usually need both: format to read, view to explore. BracketView combines them in one privacy-first workspace.",
    faqs: [
      {
        question: "Can one tool replace both?",
        answer:
          "Yes. Modern workspaces like BracketView include formatter, validator, and tree viewer together.",
      },
    ],
    relatedTools: ["json-formatter", "json-viewer"],
    relatedLearn: [
      "best-json-viewer",
      "bracketview-vs-json-editor-online",
      "what-is-json",
    ],
  },
};

export const learnPageList = Object.values(learnPages);

export const learnClusters = [
  {
    id: "fundamentals",
    title: "JSON fundamentals",
    description: "Definitions and format comparisons for answer engines.",
  },
  {
    id: "viewer",
    title: "View, validate, fix, compare",
    description: "Practical how-tos tied to BracketView tools.",
  },
  {
    id: "jsonpath",
    title: "JSONPath",
    description: "Query language guides and examples.",
  },
  {
    id: "jq",
    title: "JQ",
    description: "Filters, tutorials, and playground links.",
  },
  {
    id: "api",
    title: "API & webhooks",
    description: "Debugging guides for integrations.",
  },
  {
    id: "comparisons",
    title: "Comparisons",
    description:
      "Fair, named comparisons with JSONLint, JSON Editor Online, and JSONCrack.",
  },
] as const;
