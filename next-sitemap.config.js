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
    additionalPaths: async () => [
        {
            loc: "https://bracketview.in/#pricing",
            changefreq: "weekly",
            priority: 0.8,
            lastmod: new Date().toISOString(),
        },
    ],
    transform: async (config, path) => {
        const priorities = {
            "/": 1.0,
            "/features": 0.9,
            "/blog": 0.8,
            "/glossary": 0.8,
            "/json-formatter": 0.8,
            "/json-validator": 0.8,
            "/json-diff": 0.8,
            "/jsonpath-query": 0.8,
            "/jq-playground": 0.8,
            "/json-schema-validator": 0.8,
            "/json-type-generator": 0.8,
            "/contact": 0.5,
            "/privacy": 0.3,
            "/terms": 0.3,
            "/refund-policy": 0.3,
            "/cancellation-policy": 0.3,
        };

        const frequencies = {
            "/": "daily",
            "/features": "weekly",
            "/blog": "daily",
            "/glossary": "monthly",
            "/json-formatter": "weekly",
            "/json-validator": "weekly",
            "/json-diff": "weekly",
            "/jsonpath-query": "weekly",
            "/jq-playground": "weekly",
            "/json-schema-validator": "weekly",
            "/json-type-generator": "weekly",
            "/contact": "monthly",
        };

        const isBlogPost = path.startsWith("/blog/") && path !== "/blog";

        return {
            loc: path,
            changefreq: isBlogPost
                ? "monthly"
                : (frequencies[path] ?? "monthly"),
            priority: isBlogPost ? 0.7 : (priorities[path] ?? 0.5),
            lastmod: new Date().toISOString(),
        };
    },
};
