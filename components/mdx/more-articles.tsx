import Link from "next/link";
import Image from "next/image";
import { Post, formatDate } from "@/hooks/strapi";

interface MoreArticlesProps {
  posts: Post[];
}

export default function MoreArticles({ posts }: MoreArticlesProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
        More Articles
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block group flex flex-col h-full"
            >
              {post.metadata.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-2 flex items-center">
                  <span className="font-semibold text-slate-800">
                    {post.metadata.category}
                  </span>
                  <span className="mx-2 text-gray-400">·</span>
                  <span>{formatDate(post.metadata.publishedAt)}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2 h-14 line-clamp-2">
                  {post.metadata.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                  {post.metadata.description}
                </p>

                <div className="mt-4">
                  <span className="inline-block bg-gray-900 text-white text-sm font-semibold py-2 px-4 rounded-md group-hover:bg-slate-700 transition-colors">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
