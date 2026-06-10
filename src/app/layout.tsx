import {
    KEYWORDS,
    META_DESCRIPTION,
    META_TITLE,
    OG_IMAGE,
    OG_IMAGE_ALT,
    SITE_URL,
} from "@/lib/seo";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Code, Martian_Mono } from "next/font/google";
import Analytics, { GTM_ID } from "../components/Analytics";
import StructuredData from "../components/StructuredData";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import "./globals.css";

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: true,
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: true,
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: META_TITLE,
    description: META_DESCRIPTION,
    authors: [{ name: "Jameel Shaikh" }],
    robots: { index: true, follow: true },
    openGraph: {
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: SITE_URL,
        siteName: "BracketView",
        type: "website",
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: OG_IMAGE_ALT,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: META_TITLE,
        description: META_DESCRIPTION,
        images: [OG_IMAGE],
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    icons: {
        apple: [
            {
                url: "/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    other: {
        keywords: KEYWORDS.join(", "),
    },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${martianMono.variable} ${firaCode.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <meta httpEquiv="x-dns-prefetch-control" content="on" />
                <link rel="preconnect" href="https://app.bracketview.in" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link
                    rel="me"
                    href="https://www.linkedin.com/company/bracketview"
                />
                <link rel="me" href="https://x.com/bracket_view" />
                <link rel="me" href="https://medium.com/@dev-jameel" />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />
                <script
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
                <StructuredData />
                <Analytics />
            </head>
            <body className="min-h-full flex flex-col bg-background pt-20 text-foreground">
                {GTM_ID ? (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>
                ) : null}
                <Navbar />
                {children}
                <Footer />
                <SpeedInsights />
                <VercelAnalytics />
            </body>
        </html>
    );
}
