import type { BlogPostMeta } from "@/lib/blog-content";
import Link from "next/link";

type RelatedArticlesProps = {
    currentSlug: string;
    posts: BlogPostMeta[];
    tags: string[];
    limit?: number;
};

function scoreRelated(post: BlogPostMeta, tags: string[]): number {
    return post.tags.filter((tag) => tags.includes(tag)).length;
}

const RelatedArticles = ({
    currentSlug,
    posts,
    tags,
    limit = 3,
}: RelatedArticlesProps) => {
    const related = posts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => ({ post, score: scoreRelated(post, tags) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ post }) => post);

    if (related.length === 0) {
        return null;
    }

    return (
        <section
            aria-label="Related articles"
            className="mt-12 border-t border-black/10 pt-8 dark:border-foreground/10"
        >
            <h2 className="text-lg font-bold">Related articles</h2>
            <ul className="mt-4 space-y-3">
                {related.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            {post.title}
                        </Link>
                        <p className="mt-1 text-xs text-black/60 dark:text-foreground/60">
                            {post.excerpt}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RelatedArticles;
