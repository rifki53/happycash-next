import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getStrapiPostBySlug, formatDate } from "@/hooks/strapi"; 
import PostNav from "@/components/del/mdx/post-nav";
import { CustomMDX } from "@/components/del/mdx/custom-mdx";

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
  const { post, prevPost, nextPost } = await getStrapiPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* --- PERUBAHAN DIMULAI DI SINI --- */}
          {/* Menggunakan Flexbox untuk layout 2 kolom di layar besar (lg) */}
          <div className="lg:flex lg:justify-between">

            {/* Kolom Kiri: Konten Artikel */}
            <div className="lg:w-full lg:max-w-3xl">
              <article>
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.metadata.title}</h1>
                  <div className="text-lg text-gray-500">
                    Oleh {post.metadata.author} · {formatDate(post.metadata.publishedAt)} · {post.metadata.readingTime} mnt baca
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

                {/* Footer navigasi telah dipindahkan */}
              </article>
            </div>

            {/* Kolom Kanan: Sidebar Navigasi */}
            <aside className="mt-12 lg:mt-0 lg:w-1/4 lg:pl-8">
              <div className="lg:sticky lg:top-24"> {/* Membuat sidebar "lengket" saat scroll */}
                <PostNav previousPost={prevPost} nextPost={nextPost} />
              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  );
}
