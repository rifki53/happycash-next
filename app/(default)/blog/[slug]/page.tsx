import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

// Updated imports
import {
  getStrapiPostBySlug,
  formatDate,
  getStrapiMoreArticles,
} from "@/utils/strapi";

import { CustomMDX } from "@/components/mdx/custom-mdx";
import MoreArticles from "@/components/mdx/more-articles"; // Corrected import path

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getStrapiPostBySlug(resolvedParams.slug);

  if (!data || !data.post) {
    return {
      title: "Post Not Found",
    };
  }
  
  const post = data.post;

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.metadata.image || "/fallback-image.png",
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  // Removed prevPost and nextPost from destructuring
  const { post } = await getStrapiPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  // Fetch additional articles to display at the bottom
  const moreArticles = await getStrapiMoreArticles(post.slug);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* --- CHANGES START HERE --- */}
          {/* Centered container for the article content */}
          <div className="max-w-6xl mx-auto">
            <article>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.metadata.title}</h1>
                <div className="text-lg text-gray-500">
                  By {post.metadata.author} · {formatDate(post.metadata.publishedAt)} · {post.metadata.readingTime} min read
                </div>
              </header>

              {post.metadata.image && (
                <figure className="mb-8">
                  <Image
                    className="w-full rounded"
                    src={post.metadata.image}
                    width={1024}
                    height={576}
                    alt={post.metadata.title}
                    priority
                  />
                </figure>
              )}

              <div className="prose lg:prose-lg max-w-none">
                <CustomMDX source={post.content} />
              </div>
            </article>
          </div>

          {/* "More Articles" section is now outside the centered article container */}
          <MoreArticles posts={moreArticles} />

        </div>
      </div>
    </section>
  );
}
