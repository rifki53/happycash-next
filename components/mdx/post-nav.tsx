import Link from "next/link";

interface NavPost {
  slug: string;
  title: string;
}

interface PostNavProps {
  previousPost?: NavPost | null;
  nextPost?: NavPost | null;
}

export default function PostNav({ previousPost, nextPost }: PostNavProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 border-t border-gray-200 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
      
      {previousPost && (
        <div>
          <div className="text-sm text-gray-500 mb-1">
            ← Previous Post
          </div>
          <h4 className="text-lg font-medium">
            <Link
              className="text-gray-800 hover:underline"
              href={`/blog/${previousPost.slug}`}
            >
              {previousPost.title}
            </Link>
          </h4>
        </div>
      )}

      {nextPost && (
        <div>
          <div className="text-sm text-gray-500 mb-1">
            Next Post →
          </div>
          <h4 className="text-lg font-medium">
            <Link
              className="text-gray-800 hover:underline"
              href={`/blog/${nextPost.slug}`}
            >
              {nextPost.title}
            </Link>
          </h4>
        </div>
      )}
      
    </div>
  );
}
