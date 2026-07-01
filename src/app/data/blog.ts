export {
    formatBlogDate,
    getAllPosts,
    getPostBySlug,
    getRelatedAppToolLinks,
    getRelatedMarketingToolLinks,
} from "@/lib/blog-content";
export type { BlogPost, BlogPostMeta } from "@/lib/blog-content";

// Backward-compatible alias for pages that imported blogPosts
import { getAllPosts } from "@/lib/blog-content";

const blogPosts = getAllPosts();

export { blogPosts };
