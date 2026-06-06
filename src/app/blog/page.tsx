import BlogCard from "@/app/components/BlogCard";
import PageHeader from "@/app/components/motion/PageHeader";
import StaggerGroup from "@/app/components/motion/StaggerGroup";
import { blogPosts } from "@/app/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | BracketView",
    description:
        "Articles about BracketView — JSON tooling, AI features, developer productivity, and product updates from Jameel Shaikh on Medium.",
};

export default function BlogPage() {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
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
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </StaggerGroup>
            </div>
        </main>
    );
}
