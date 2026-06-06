import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BracketView",
  description: "BracketView is a tool for creating and managing brackets.",
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
      <body className="min-h-full flex flex-col bg-background pt-20 text-foreground">
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
