import { blogPosts, formatBlogDate, type BlogPost } from "@/app/data/blog";
import { toolPages } from "@/app/data/toolPages";
import AuthorBio from "@/components/AuthorBio";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildBlogPostingSchema,
    createPageMetadata,
} from "@/lib/seo";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return {};

    return createPageMetadata({
        path: `/blog/${post.slug}`,
        title: `${post.title} | BracketView Blog`,
        description: post.excerpt,
        type: "article",
        publishedTime: post.publishedAt,
        tags: post.tags,
    });
}

function getRelatedToolLinks(post: BlogPost) {
    const tagToTool: Record<string, string> = {
        JQ: "jq-playground",
        JSON: "json-formatter",
        "Developer Tools": "json-validator",
        AI: "json-formatter",
        WebRTC: "json-diff",
        Privacy: "json-validator",
        Visualization: "json-formatter",
        "Dark Mode": "jq-playground",
        WebAssembly: "jq-playground",
        Productivity: "json-formatter",
        JavaScript: "json-formatter",
        Devtools: "json-validator",
    };

    const slugs = [
        ...new Set(
            post.tags
                .map((tag) => tagToTool[tag])
                .filter((slug): slug is string => Boolean(slug)),
        ),
    ].slice(0, 3);

    return slugs.map((slug) => toolPages[slug]);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    const relatedTools = getRelatedToolLinks(post);

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={buildBlogPostingSchema(post)} />
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/70 transition-opacity hover:opacity-100 dark:text-foreground/70"
                >
                    <ArrowLeft size={16} aria-hidden />
                    Back to blog
                </Link>

                <article className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                    <div className="mb-5 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium dark:border-foreground/15"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                        {post.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-black/60 dark:text-foreground/60">
                        <time dateTime={post.publishedAt}>
                            {formatBlogDate(post.publishedAt)}
                        </time>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock3 size={14} aria-hidden />
                            {post.readTime}
                        </span>
                    </div>

                    <p className="mt-8 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                        {post.excerpt}
                    </p>

                    <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        Read full article on Medium
                        <ArrowUpRight size={16} aria-hidden />
                    </a>

                    <AuthorBio />

                    {relatedTools.length > 0 ? (
                        <section
                            aria-label="Related tools"
                            className="mt-12 border-t border-black/10 pt-8 dark:border-foreground/10"
                        >
                            <h2 className="text-lg font-bold">Related tools</h2>
                            <ul className="mt-4 space-y-2">
                                {relatedTools.map((tool) => (
                                    <li key={tool.slug}>
                                        <Link
                                            href={`/${tool.slug}`}
                                            className="text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                        >
                                            {tool.h1}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}
                </article>
            </div>
        </main>
    );
}
