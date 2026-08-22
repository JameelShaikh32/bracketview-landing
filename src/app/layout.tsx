import {
    META_DESCRIPTION,
    META_TITLE,
    OG_IMAGE,
    OG_IMAGE_ALT,
    SITE_URL,
    TWITTER_SITE,
} from "@/lib/seo";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Code, Martian_Mono } from "next/font/google";
import Script from "next/script";
import SiteProviders from "../components/ads/SiteProviders";
import Analytics, { GTM_ID } from "../components/Analytics";
import StructuredData from "../components/StructuredData";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
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

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: META_TITLE,
    description: META_DESCRIPTION,
    authors: [{ name: "Jameel Shaikh" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: SITE_URL,
        languages: {
            en: SITE_URL,
            "x-default": SITE_URL,
        },
    },
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
        site: TWITTER_SITE,
        creator: TWITTER_SITE,
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
                    rel="dns-prefetch"
                    href="https://pagead2.googlesyndication.com"
                />
                <link
                    rel="me"
                    href="https://www.linkedin.com/company/bracketview"
                />
                <link rel="me" href="https://x.com/bracket_view" />
                <link rel="me" href="https://www.facebook.com/bracketview" />
                <link rel="me" href="https://medium.com/@dev-jameel" />
                <link
                    rel="me"
                    href="https://www.instagram.com/bracketview"
                />
                <link
                    rel="me"
                    href="https://www.youtube.com/@bracketview"
                />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
                />
                <StructuredData />
                <Analytics />
            </head>
            <body className="min-h-full flex flex-col bg-background pt-20 text-foreground">
                <Script
                    id="theme-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
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
                <SiteProviders>
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollToTop />
                    <SpeedInsights />
                    <VercelAnalytics />
                </SiteProviders>
            </body>
        </html>
    );
}
