import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const CONTENT_SECURITY_POLICY = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.google.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com`,
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.google.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
    "img-src 'self' data: blob: https:",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "frame-src https://www.googletagmanager.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    { key: "X-XSS-Protection", value: "0" },
    { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
];

const nextConfig: NextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ["lucide-react", "motion/react", "react-icons"],
    },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.producthunt.com",
            },
            {
                protocol: "https",
                hostname: "cdn-b.saashub.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                has: [
                    {
                        type: "host",
                        value: "downloads.bracketview.in",
                    },
                ],
                destination: "https://bracketview.in/downloads",
                statusCode: 302,
            },
            {
                source: "/download",
                has: [
                    {
                        type: "host",
                        value: "downloads.bracketview.in",
                    },
                ],
                destination: "https://bracketview.in/downloads",
                statusCode: 302,
            },
            {
                source: "/download/",
                has: [
                    {
                        type: "host",
                        value: "downloads.bracketview.in",
                    },
                ],
                destination: "https://bracketview.in/downloads",
                statusCode: 302,
            },
            {
                source: "/downloads",
                has: [
                    {
                        type: "host",
                        value: "downloads.bracketview.in",
                    },
                ],
                destination: "https://bracketview.in/downloads",
                statusCode: 302,
            },
            {
                source: "/downloads/",
                has: [
                    {
                        type: "host",
                        value: "downloads.bracketview.in",
                    },
                ],
                destination: "https://bracketview.in/downloads",
                statusCode: 302,
            },
            {
                source: "/download",
                destination: "/downloads",
                permanent: true,
            },
            {
                source: "/download/",
                destination: "/downloads",
                permanent: true,
            },
            // SiteChecker / SEO: canonicalize index filenames to the clean root URL
            {
                source: "/index.html",
                destination: "/",
                permanent: true,
            },
            {
                source: "/index.php",
                destination: "/",
                permanent: true,
            },
            {
                source: "/index.htm",
                destination: "/",
                permanent: true,
            },
            // Alias paths for common search intents (keep primary indexed URLs)
            {
                source: "/jsonpath",
                destination: "/jsonpath-query",
                permanent: true,
            },
            {
                source: "/jsonpath/",
                destination: "/jsonpath-query",
                permanent: true,
            },
            {
                source: "/json-to-typescript",
                destination: "/json-type-generator",
                permanent: true,
            },
            {
                source: "/json-to-typescript/",
                destination: "/json-type-generator",
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
            {
                source: "/.well-known/security.txt",
                headers: [
                    {
                        key: "Content-Type",
                        value: "text/plain; charset=utf-8",
                    },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/security.txt",
                destination: "/.well-known/security.txt",
            },
        ];
    },
};

export default nextConfig;
