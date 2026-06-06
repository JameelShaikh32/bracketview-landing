import HoverArticle from "@/app/components/motion/HoverArticle";
import { formatBlogDate, type BlogPost } from "@/app/data/blog";
import { ArrowUpRight, Clock3 } from "lucide-react";

const BlogCard = ({
    title,
    excerpt,
    publishedAt,
    readTime,
    url,
    tags,
}: BlogPost) => {
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

            <h2 className="text-lg font-bold leading-snug sm:text-xl">{title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs opacity-70">
                <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
                <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={14} aria-hidden />
                    {readTime}
                </span>
            </div>

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-black dark:bg-accent-dark dark:group-hover:bg-foreground dark:group-hover:text-background sm:mt-12"
            >
                Read on Medium
                <ArrowUpRight size={16} aria-hidden />
            </a>
        </HoverArticle>
    );
};

export default BlogCard;
