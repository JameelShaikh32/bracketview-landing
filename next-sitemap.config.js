/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://bracketview.in",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/api/*", "/_not-found"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
    },
    additionalPaths: async () => [
        {
            loc: "https://app.bracketview.in",
            changefreq: "weekly",
            priority: 0.8,
            lastmod: new Date().toISOString(),
        },
    ],
    transform: async (config, path) => {
        const priorities = {
            "/": 1.0,
            "/features": 0.7,
            "/blog": 0.6,
            "/contact": 0.5,
            "/privacy": 0.4,
            "/terms": 0.4,
            "/refund-policy": 0.3,
            "/cancellation-policy": 0.3,
        };

        const frequencies = {
            "/": "weekly",
            "/features": "monthly",
            "/blog": "weekly",
            "/contact": "monthly",
        };

        return {
            loc: path,
            changefreq: frequencies[path] ?? "monthly",
            priority: priorities[path] ?? 0.5,
            lastmod: new Date().toISOString(),
        };
    },
};
