import AuthorBio from "@/components/AuthorBio";
import BlogAppCta from "@/components/BlogAppCta";
import RelatedArticles from "@/components/RelatedArticles";
import AdPlacement from "@/components/ads/AdPlacement";
import JsonLd from "@/components/seo/JsonLd";
import {
    formatBlogDate,
    getAllPosts,
    getPostBySlug,
    getRelatedAppToolLinks,
    getRelatedMarketingToolLinks,
} from "@/lib/blog-content";
import { buildBlogPostingSchema, createPageMetadata } from "@/lib/seo";
import mdxComponents from "@/mdx-components";
import { ArrowLeft, Clock3 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const relatedAppTools = getRelatedAppToolLinks(post.relatedAppTools);
    const relatedMarketingTools = getRelatedMarketingToolLinks(
        post.relatedTools,
    );
    const allPosts = getAllPosts();

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
                        <span>{post.author}</span>
                        <time dateTime={post.publishedAt}>
                            {formatBlogDate(post.publishedAt)}
                        </time>
                        {post.updatedAt !== post.publishedAt ? (
                            <time dateTime={post.updatedAt}>
                                Updated {formatBlogDate(post.updatedAt)}
                            </time>
                        ) : null}
                        <span className="inline-flex items-center gap-1.5">
                            <Clock3 size={14} aria-hidden />
                            {post.readTime}
                        </span>
                    </div>

                    <p className="mt-8 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                        {post.excerpt}
                    </p>

                    <AdPlacement variant="blog" className="mt-10" />

                    <div className="prose-blog mt-10 max-w-none">
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                        />
                    </div>

                    {relatedAppTools.length > 0 ? (
                        <BlogAppCta tools={relatedAppTools} />
                    ) : null}

                    <AuthorBio authorName={post.author} />

                    {relatedMarketingTools.length > 0 ? (
                        <section
                            aria-label="Related tools"
                            className="mt-12 border-t border-black/10 pt-8 dark:border-foreground/10"
                        >
                            <h2 className="text-lg font-bold">
                                Related BracketView tools
                            </h2>
                            <ul className="mt-4 space-y-2">
                                {relatedMarketingTools.map((tool) => (
                                    <li key={tool.href}>
                                        <Link
                                            href={tool.href}
                                            className="text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                        >
                                            {tool.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    <RelatedArticles
                        currentSlug={post.slug}
                        posts={allPosts}
                        tags={post.tags}
                    />
                </article>
            </div>
        </main>
    );
}
