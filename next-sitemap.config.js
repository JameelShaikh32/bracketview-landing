/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://bracketview.in",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/api/*", "/_not-found", "/apple-icon.png"],
    robotsTxtOptions: {
        policies: [
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "ClaudeBot", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
            { userAgent: "Googlebot", allow: "/" },
            { userAgent: "BingBot", allow: "/" },
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
    },
    transform: async (config, path) => {
        const priorities = {
            "/": 1.0,
            "/about": 0.7,
            "/features": 0.9,
            "/pricing": 0.9,
            "/downloads": 0.85,
            "/learn": 0.9,
            "/blog": 0.8,
            "/glossary": 0.8,
            "/json-viewer": 0.85,
            "/json-formatter": 0.8,
            "/json-validator": 0.8,
            "/json-diff": 0.8,
            "/jsonpath-query": 0.8,
            "/jq-playground": 0.8,
            "/json-schema-validator": 0.8,
            "/json-type-generator": 0.8,
            "/ai-json-fixer": 0.8,
            "/webhook-tester": 0.8,
            "/contact": 0.5,
            "/privacy": 0.3,
            "/terms": 0.3,
            "/disclaimer": 0.3,
            "/refund-policy": 0.3,
            "/cancellation-policy": 0.3,
        };

        const frequencies = {
            "/": "daily",
            "/about": "monthly",
            "/features": "weekly",
            "/pricing": "weekly",
            "/downloads": "monthly",
            "/learn": "weekly",
            "/blog": "weekly",
            "/glossary": "monthly",
            "/json-viewer": "weekly",
            "/json-formatter": "weekly",
            "/json-validator": "weekly",
            "/json-diff": "weekly",
            "/jsonpath-query": "weekly",
            "/jq-playground": "weekly",
            "/json-schema-validator": "weekly",
            "/json-type-generator": "weekly",
            "/ai-json-fixer": "weekly",
            "/webhook-tester": "weekly",
            "/contact": "monthly",
        };

        const isBlogPost = path.startsWith("/blog/") && path !== "/blog";
        const isLearnPost = path.startsWith("/learn/") && path !== "/learn";

        return {
            loc: path,
            changefreq: isBlogPost || isLearnPost
                ? "monthly"
                : (frequencies[path] ?? "monthly"),
            priority: isLearnPost ? 0.75 : isBlogPost ? 0.7 : (priorities[path] ?? 0.5),
            lastmod: new Date().toISOString(),
        };
    },
};
