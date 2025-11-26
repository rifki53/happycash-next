import Link from "next/link";
import Image from "next/image";
import { Post } from "@/hooks/strapi";

interface RelatedArticlesProps {
  posts: Post[];
}

function RelatedArticleCard({ post }: { post: Post }) {
  if (!post.metadata.image) {
    return null;
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group" aria-label={post.metadata.title}>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={post.metadata.image}
          alt={`Image for ${post.metadata.title}`}
          fill
          sizes="(max-width: 1023px) 100vw, 25vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h4 className="text-white text-lg font-bold leading-tight line-clamp-2">
            {post.metadata.title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        Related Articles
      </h3>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <RelatedArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
