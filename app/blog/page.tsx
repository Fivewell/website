import MediaContnent from "@/components/Media";
// import { getBlogPosts } from "@/lib/contentful";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agricultural Insights Blog | FiveWell Africa",
  description:
    "Explore the latest trends, expert analysis, and case studies in African agriculture. Our blog covers everything from agritech to sustainable farming and market insights.",
};

// Revalidate the data every hour
export const revalidate = 3600;

// Safely extract an image URL from a Contentful Asset or an unresolved link
// function getAssetUrl(asset: unknown): string | null {
//   if (asset && typeof asset === "object" && "fields" in asset) {
//     const a = asset as { fields?: { file?: { url?: string } } };
//     const url = a.fields?.file?.url;
//     return url ? `https:${url}` : null;
//   }
//   return null;
// }

const BlogPage = async () => {
  // Removed unused blogPosts since we're not using Contentful for now

  return (
    <div className="min-h-screen pt-18">
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 dark:from-primary/90 dark:to-primary/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
           
               <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Stay connected with Fivewell Africa&apos;s latest updates, stories, and
              thought leadership.
            </h1>
          </div>
        </div>
      </section>
      <MediaContnent />
      {/* Main Content */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <BlogPostList posts={blogPosts} />
      </div> */}
    </div>
  );
};

export default BlogPage;
