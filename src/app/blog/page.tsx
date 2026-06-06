import BlogCard from "@/app/components/BlogCard";
import { blogPosts } from "@/app/data/blog";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog | BracketView",
    description:
        "Articles about BracketView — JSON tooling, AI features, developer productivity, and product updates from Jameel Shaikh on Medium.",
};

export default function BlogPage() {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        Blog
                    </span>

                    <h1 className="mt-8 text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        Updates, guides, and JSON workflow tips
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/70">
                        Product announcements, feature deep-dives, and developer
                        stories from the BracketView team — published on Medium by
                        Jameel Shaikh.
                    </p>

                    <Link
                        href="https://medium.com/@dev-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        Follow on Medium
                        <ArrowUpRight size={18} aria-hidden />
                    </Link>
                </div>

                <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </div>
        </main>
    );
}
