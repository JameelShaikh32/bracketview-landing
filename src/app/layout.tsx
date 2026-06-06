import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import Script from "next/script";
import Analytics, { GTM_ID } from "./components/Analytics";
import StructuredData from "./components/StructuredData";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import {
    KEYWORDS,
    META_DESCRIPTION,
    META_TITLE,
    SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: META_TITLE,
    description: META_DESCRIPTION,
    authors: [{ name: "BracketView" }],
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
    openGraph: {
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: SITE_URL,
        siteName: "BracketView",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "BracketView — Online JSON Viewer, Formatter & Validator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: META_TITLE,
        description: META_DESCRIPTION,
        images: ["/og-image.png"],
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
            className={`${martianMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <meta httpEquiv="x-dns-prefetch-control" content="on" />
                <link
                    rel="sitemap"
                    type="application/xml"
                    href="/sitemap.xml"
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
                <Script id="theme-init" strategy="beforeInteractive">
                    {themeInitScript}
                </Script>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
