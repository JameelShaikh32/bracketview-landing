import { getAllPosts } from "@/lib/blog-content";
import AdPlacement from "@/components/ads/AdPlacement";
import BlogCard from "@/components/BlogCard";
import PageHeader from "@/components/motion/PageHeader";
import StaggerGroup from "@/components/motion/StaggerGroup";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildBlogSchema,
    buildItemListSchema,
    createPageMetadata,
    SITE_URL,
} from "@/lib/seo";

export const metadata = createPageMetadata({
    path: "/blog",
    title: "JSON Guides & Developer Articles | BracketView Blog",
    description:
        "In-depth JSON tooling guides — syntax errors, JSONPath vs jq, schema validation, diff strategies, security, and API debugging workflows for developers.",
});

export default function BlogPage() {
    const blogPosts = getAllPosts();

    const schemas = [
        buildBlogSchema(blogPosts),
        buildItemListSchema(
            "BracketView Blog Posts",
            blogPosts.map((post) => ({
                name: post.title,
                description: post.excerpt,
                url: `${SITE_URL}/blog/${post.slug}`,
            })),
        ),
    ];

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schemas} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Blog"
                    title="JSON guides for developers"
                    description="Practical articles on validating, querying, comparing, and securing JSON — written for API engineers and daily debugging workflows."
                    cta={{
                        label: "Open JSON workspace",
                        href: "https://app.bracketview.in",
                        external: true,
                    }}
                />

                <AdPlacement variant="blog" className="mt-10" />

                <StaggerGroup className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {blogPosts.map((post) => (
                        <article key={post.slug}>
                            <BlogCard {...post} />
                        </article>
                    ))}
                </StaggerGroup>
            </div>
        </main>
    );
}
