import { blogPosts } from "@/app/data/blog";
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
    title: "Blog | BracketView",
    description:
        "BracketView blog — JSON tooling guides, AI features, developer productivity tips, and product updates from Jameel Shaikh.",
});

export default function BlogPage() {
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
                    title="Updates, guides, and JSON workflow tips"
                    description="Product announcements, feature deep-dives, and developer stories from the BracketView team — published on Medium by Jameel Shaikh."
                    cta={{
                        label: "Follow on Medium",
                        href: "https://medium.com/@dev-jameel",
                        external: true,
                    }}
                />

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
