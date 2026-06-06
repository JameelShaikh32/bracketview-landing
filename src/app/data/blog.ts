type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    readTime: string;
    url: string;
    tags: string[];
};

const blogPosts: BlogPost[] = [
    {
        slug: "bracketview-update-new-features-that-make-json-work-easier",
        title: "BracketView Update: New Features That Make JSON Work Easier",
        excerpt:
            "Shareable snapshots with annotations, 50 MB JSON support, AI mock data from schema, and JQ + JSONPath in one workspace — built for API testing and daily JSON work.",
        publishedAt: "2026-03-20",
        readTime: "2 min read",
        url: "https://dev-jameel.medium.com/bracketview-update-new-features-that-make-json-work-easier-e35012cb4c24",
        tags: ["Productivity", "AI", "JavaScript"],
    },
    {
        slug: "bracketview-nearby-share",
        title: "BracketView Now Has Nearby Share — Send JSONs Directly Between Browsers",
        excerpt:
            "Transfer JSON between two BracketView sessions in seconds via encrypted WebRTC — no server storage, no accounts, just a 6-character code or QR scan.",
        publishedAt: "2026-02-19",
        readTime: "2 min read",
        url: "https://dev-jameel.medium.com/bracketview-now-has-nearby-share-send-jsons-directly-between-browsers-7e983c24487e",
        tags: ["WebRTC", "Privacy", "Productivity"],
    },
    {
        slug: "bracketviews-jq-panel-just-got-smarter",
        title: "BracketView’s JQ Panel Just Got Smarter — AI-Powered Queries, Dynamic Filters & More",
        excerpt:
            "Generate jq queries in plain English with AI, and get quick-filter chips that adapt to your actual JSON structure — field names, types, and nesting included.",
        publishedAt: "2026-02-18",
        readTime: "3 min read",
        url: "https://dev-jameel.medium.com/bracketviews-jq-panel-just-got-smarter-ai-powered-queries-dynamic-filters-more-e5e705bed829",
        tags: ["AI", "JQ", "Developer Tools"],
    },
    {
        slug: "introducing-jq-filter-playground-dark-mode",
        title: "Introducing JQ Filter Playground & Dark Mode in BracketView",
        excerpt:
            "Run a full jq engine in your browser via WebAssembly — plus system-aware dark mode across every BracketView tool, with no white flash on load.",
        publishedAt: "2026-02-17",
        readTime: "2 min read",
        url: "https://dev-jameel.medium.com/introducing-jq-filter-playground-dark-mode-in-bracketview-36503a4f80bd",
        tags: ["JQ", "Dark Mode", "WebAssembly"],
    },
    {
        slug: "beyond-json-viewer-ai-powered-development-assistant",
        title: "Beyond JSON Viewer: How BracketView Just Became Your AI-Powered Development Assistant",
        excerpt:
            "Two AI-powered tools — Prompt Enhancer and Error Simplifier — that help you write better prompts and understand cryptic error messages in plain English.",
        publishedAt: "2025-12-31",
        readTime: "5 min read",
        url: "https://dev-jameel.medium.com/beyond-json-viewer-how-bracketview-just-became-your-ai-powered-development-assistant-e4eb7dba7a63",
        tags: ["Productivity", "Devtools", "AI"],
    },
    {
        slug: "from-json-to-code-five-powerful-features",
        title: "From JSON to Code: Five Powerful Features That Make BracketView Your Ultimate Development Companion",
        excerpt:
            "Type generation in 9 languages, JSON Schema generator, schema library, statistics view, and a universal encoder/decoder — five features that turn BracketView into a full dev companion.",
        publishedAt: "2025-12-25",
        readTime: "7 min read",
        url: "https://dev-jameel.medium.com/from-json-to-code-five-powerful-features-that-make-bracketview-your-ultimate-development-companion-12bcde3d30f5",
        tags: ["JSON", "Developer Tools", "AI"],
    },
    {
        slug: "visualize-and-repair-your-data",
        title: "Visualize and Repair Your Data: Two Major Upgrades to BracketView",
        excerpt:
            "Meet the JSON Galaxy visualizer for interactive graph views and the AI-powered auto-fixer that repairs broken JSON with one click.",
        publishedAt: "2025-12-07",
        readTime: "2 min read",
        url: "https://dev-jameel.medium.com/visualize-and-repair-your-data-two-major-upgrades-to-bracketview-af6124f80d39",
        tags: ["JSON", "Visualization", "AI"],
    },
    {
        slug: "is-your-go-to-json-tool-stuck-in-the-past",
        title: "Is Your Go-To JSON Tool Stuck in the Past? Why It’s Time for an Upgrade",
        excerpt:
            "A side-by-side look at cluttered legacy JSON viewers versus BracketView — built-in schema validation, cleaner UI, and a workflow designed for modern developers.",
        publishedAt: "2025-12-02",
        readTime: "4 min read",
        url: "https://dev-jameel.medium.com/is-your-go-to-json-tool-stuck-in-the-past-why-its-time-for-an-upgrade-cb828f76fa05",
        tags: ["JSON", "Developer Tools", "Productivity"],
    },
    {
        slug: "tired-of-cluttered-json-tools",
        title: "Tired of Cluttered JSON Tools? Try BracketView",
        excerpt:
            "A clean, fast JSON viewer with no ads, full-screen workspace, multiple fonts, comparison, export, and formatting — built to eliminate developer frustrations.",
        publishedAt: "2025-11-20",
        readTime: "3 min read",
        url: "https://dev-jameel.medium.com/tired-of-cluttered-json-tools-try-bracketview-988ca5841dc6",
        tags: ["JSON", "Developer Tools", "Productivity"],
    },
];

const formatBlogDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

export { blogPosts, formatBlogDate };
export type { BlogPost };
