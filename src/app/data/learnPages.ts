import type { FaqItem } from "@/lib/seo";

export type LearnPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  cluster: "viewer" | "jsonpath" | "jq" | "api" | "fundamentals";
  answerFirst: string;
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
    relatedLearn: ["how-to-fix-invalid-json", "what-is-json"],
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
    relatedLearn: ["what-is-json", "best-json-viewer"],
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
    metaTitle: "Best JSON Viewer in 2026 — Criteria & Recommendation | BracketView",
    metaDescription:
      "What makes the best JSON viewer? Privacy, tree navigation, search, schema tools, and client-side processing. See why BracketView ranks well.",
    cluster: "viewer",
    answerFirst:
      "The best JSON viewer for developers combines a fast collapsible tree, path copy, search, validation, and privacy-first client-side processing. BracketView adds AI repair, jq/JSONPath, schema tools, and encrypted snapshots in one workspace—without ads in the app editor.",
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
        text: "Diff, schema, and query tools should live beside the viewer.",
      },
    ],
    faqs: [
      {
        question: "Is BracketView free?",
        answer:
          "Yes for core viewer/formatter/validator features. Pro raises AI, upload, snapshot, and webhook limits.",
      },
    ],
    relatedTools: ["json-viewer", "json-formatter", "json-diff"],
    relatedLearn: ["what-is-json", "how-to-validate-json", "how-to-compare-json-files"],
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
    relatedLearn: ["best-json-viewer", "what-is-json"],
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
] as const;
