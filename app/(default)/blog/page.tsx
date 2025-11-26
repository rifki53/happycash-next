import { getStrapiPosts, getStrapiCategories } from "@/hooks/strapi";
import type { Category } from "@/hooks/strapi";
import BlogList from "@/components/mdx/blog-list";
import HeroBlog from "@/components/mdx/hero-blog";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("blog");

interface BlogPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;

  const selectedCategory = resolvedSearchParams.category || "All";
  const [posts, categoriesData] = await Promise.all([
    getStrapiPosts(selectedCategory),
    getStrapiCategories(),
  ]);
  const allCategories: Category[] = [{ id: 0, name: "All" }, ...categoriesData];

  return (
    <>
      <section className="relative">
        <HeroBlog />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mx-auto pt-10 pb-12 md:pb-20">
            <BlogList
              posts={posts}
              categories={allCategories}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </section>
    </>
  );
}
