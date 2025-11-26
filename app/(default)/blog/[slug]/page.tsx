import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

import {
  getStrapiPostBySlug,
  formatDate,
  getStrapiRelatedPosts,
  getStrapiMoreArticles,
} from "@/hooks/strapi";

import { CustomMDX } from "@/components/mdx/custom-mdx";

const MoreArticles = dynamic(() => import("@/components/mdx/more-articles"));
const RelatedArticles = dynamic(
  () => import("@/components/mdx/related-articles")
);
const AiShareButtons = dynamic(
  () => import("@/components/mdx/ai-share-buttons")
);
const TableOfContents = dynamic(
  () => import("@/components/mdx/table-of-contents")
);

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getStrapiPostBySlug(resolvedParams.slug);

  if (!data || !data.post) {
    return notFound();
  }

  const { post } = data;
  const postUrl = `https://www.adapundi.com/blog/${post.slug}`;

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: postUrl,
    },
  };
}

function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const data = await getStrapiPostBySlug(resolvedParams.slug);

  if (!data || !data.post) {
    return notFound();
  }

  const { post } = data;

  const headingRegex = /^(##|###)\s+(.*)/gm;
  const headings = Array.from(post.content.matchAll(headingRegex)).map(
    (match) => {
      const level = match[1].length;
      const text = match[2].trim();
      const id = createSlug(text);
      return { level, text, id };
    }
  );

  const [relatedPosts, moreArticles] = await Promise.all([
    getStrapiRelatedPosts(post.metadata.category, post.slug),
    getStrapiMoreArticles(post.slug),
  ]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="lg:flex lg:justify-between lg:gap-8">
            <div className="lg:w-full lg:max-w-3xl">
              <article>
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {post.metadata.title}
                  </h1>

                  <AiShareButtons
                    slug={post.slug}
                    title={post.metadata.title}
                  />

                  <div className="mt-4 text-sm text-gray-500">
                    By {post.metadata.author} ·{" "}
                    {formatDate(post.metadata.publishedAt)} ·{" "}
                    {post.metadata.readingTime} min read
                  </div>
                </header>

                {post.metadata.image && (
                  <figure className="mb-8">
                    <Image
                      className="w-full rounded-lg"
                      src={post.metadata.image}
                      width={1024}
                      height={576}
                      alt={post.metadata.title}
                      priority
                    />
                  </figure>
                )}

                <TableOfContents headings={headings} />

                <div className="prose lg:prose-lg max-w-none mt-8">
                  <CustomMDX source={post.content} />
                </div>
              </article>

              <MoreArticles posts={moreArticles} />
            </div>

            <aside className="mt-12 lg:mt-0 lg:w-1/4 lg:flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <RelatedArticles posts={relatedPosts} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
