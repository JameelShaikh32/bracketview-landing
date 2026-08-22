import { formatBlogDate, type BlogPostMeta } from "@/lib/blog-content";
import HoverArticle from "@/components/motion/HoverArticle";
import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";

const BlogCard = ({
    slug,
    title,
    excerpt,
    publishedAt,
    readTime,
    tags,
}: BlogPostMeta) => {
    return (
        <HoverArticle className="group flex min-h-full flex-col rounded-4xl bg-white p-6 text-black transition-colors duration-300 hover:bg-accent sm:p-8 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white">
            <div className="mb-5 flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium transition-colors group-hover:border-white/30 group-hover:text-white dark:border-foreground/15"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h2 className="text-lg font-bold leading-snug sm:text-xl">
                <Link href={`/blog/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs opacity-70">
                <time dateTime={publishedAt}>
                    {formatBlogDate(publishedAt)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={14} aria-hidden />
                    {readTime}
                </span>
            </div>

            <Link
                href={`/blog/${slug}`}
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-black sm:mt-12 dark:bg-accent-dark dark:group-hover:bg-foreground dark:group-hover:text-background"
            >
                Read article
                <ArrowRight size={16} aria-hidden />
            </Link>
        </HoverArticle>
    );
};

export default BlogCard;
