import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/404",
    title: "Page Not Found | BracketView",
    description:
        "The page you requested was not found. Browse JSON guides, tools, or return to the BracketView homepage.",
    noIndex: true,
});

export default function NotFound() {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium text-black/60 dark:text-foreground/60">
                    404
                </p>
                <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Page not found
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                    The page you are looking for does not exist or may have
                    moved. Try one of the links below.
                </p>
                <ul className="mt-10 flex flex-col items-center gap-3 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className="text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            JSON guides (Blog)
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            About BracketView
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Contact support
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://app.bracketview.in"
                            className="text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Open JSON workspace
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}
