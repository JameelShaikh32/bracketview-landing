import { toolPages } from "@/app/data/toolPages";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const APP_TOOL_URLS: Record<string, { label: string; url: string }> = {
    "json-formatter": {
        label: "JSON Formatter",
        url: toolPages["json-formatter"].appUrl,
    },
    "json-validator": {
        label: "JSON Validator",
        url: toolPages["json-validator"].appUrl,
    },
    "json-diff": {
        label: "JSON Diff",
        url: toolPages["json-diff"].appUrl,
    },
    "jsonpath-query": {
        label: "JSONPath Query",
        url: toolPages["jsonpath-query"].appUrl,
    },
    "jq-playground": {
        label: "JQ Playground",
        url: toolPages["jq-playground"].appUrl,
    },
    "json-schema-validator": {
        label: "JSON Schema Validator",
        url: toolPages["json-schema-validator"].appUrl,
    },
    "json-type-generator": {
        label: "Type Generator",
        url: toolPages["json-type-generator"].appUrl,
    },
};

type BlogPostMeta = {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    updatedAt: string;
    author: string;
    readTime: string;
    tags: string[];
    relatedTools: string[];
    relatedAppTools: string[];
    wordCount: number;
};

type BlogPost = BlogPostMeta & {
    content: string;
};

function countWords(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

function formatReadTime(wordCount: number): string {
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
}

function parsePostFile(filename: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    if (data.status === "draft") {
        return null;
    }

    const slug =
        typeof data.slug === "string"
            ? data.slug
            : filename.replace(/\.mdx$/, "");
    const wordCount = countWords(content);
    const publishedAt = String(data.publishedAt ?? "");
    const updatedAt = String(data.updatedAt ?? publishedAt);

    return {
        slug,
        title: String(data.title ?? ""),
        excerpt: String(data.excerpt ?? ""),
        publishedAt,
        updatedAt,
        author: String(data.author ?? "Jameel Shaikh"),
        readTime:
            typeof data.readTime === "string"
                ? data.readTime
                : formatReadTime(wordCount),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        relatedTools: Array.isArray(data.relatedTools)
            ? data.relatedTools.map(String)
            : [],
        relatedAppTools: Array.isArray(data.relatedAppTools)
            ? data.relatedAppTools.map(String)
            : [],
        wordCount,
        content,
    };
}

function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => parsePostFile(file))
        .filter((post): post is BlogPost => post !== null)
        .map(({ content: _content, ...meta }) => meta)
        .sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime(),
        );
}

function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        return null;
    }
    return parsePostFile(`${slug}.mdx`);
}

function getRelatedAppToolLinks(slugs: string[]) {
    return slugs
        .map((slug) => APP_TOOL_URLS[slug])
        .filter((tool): tool is { label: string; url: string } => Boolean(tool));
}

function getRelatedMarketingToolLinks(slugs: string[]) {
    return slugs
        .map((slug) => toolPages[slug as keyof typeof toolPages])
        .filter(Boolean)
        .map((tool) => ({
            label: tool.h1,
            href: `/${tool.slug}`,
        }));
}

const formatBlogDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

export {
    APP_TOOL_URLS,
    formatBlogDate,
    getAllPosts,
    getPostBySlug,
    getRelatedAppToolLinks,
    getRelatedMarketingToolLinks,
};
export type { BlogPost, BlogPostMeta };
