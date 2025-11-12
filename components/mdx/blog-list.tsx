import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/strapi";
import type { Post, Category } from "@/utils/strapi";

// Ini adalah SERVER COMPONENT. Tidak ada "use client", tidak ada hooks.
interface BlogListProps {
  posts: Post[];
  categories: Category[];
  selectedCategory: string;
}

export default function BlogList({ posts, categories, selectedCategory }: BlogListProps) {
  return (
    <>
      {/* Tombol Kategori sekarang adalah Link */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <Link
            key={category.id}
            // Arahkan ke URL dengan query parameter.
            // Jika kategori adalah "All", cukup ke /blog.
            href={category.name === "All" ? "/blog" : `/blog?category=${category.name}`}
            className={`btn-sm font-normal shadow-sm ${
              selectedCategory === category.name
                ? "text-gray-200 bg-gray-800 hover:bg-gray-900 pointer-events-none" // Non-aktifkan klik jika sudah aktif
                : "text-gray-800 bg-white hover:bg-gray-50"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Tidak perlu state loading/error karena data sudah di-resolve di server */}
      
      {/* Daftar Artikel */}
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col sm:flex-row items-start gap-6">
            {post.metadata.image && (
              <Link className="block w-full sm:w-1/3 shrink-0" href={`/blog/${post.slug}`}>
                <Image
                  src={post.metadata.image}
                  alt={`Preview for ${post.metadata.title}`}
                  width={400}
                  height={225}
                  className="w-full h-auto aspect-video object-cover rounded-md shadow-md hover:opacity-90 transition-opacity"
                />
              </Link>
            )}
            <div className="w-full">
              <header className="mb-2">
                <h2 className="text-2xl font-bold">
                  <Link className="hover:underline" href={`/blog/${post.slug}`}>
                    {post.metadata.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500 mt-2">
                  {post.metadata.author} · {formatDate(post.metadata.publishedAt)} · {post.metadata.readingTime} min read
                </div>
              </header>
              <p className="text-gray-700 my-4">{post.metadata.description}</p>
              <footer>
                <Link className="text-sm font-medium text-blue-500 hover:text-blue-600" href={`/blog/${post.slug}`}>
                  Baca selengkapnya <span className="tracking-normal text-blue-300">-&gt;</span>
                </Link>
              </footer>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-500">
            Tidak ada post yang ditemukan di kategori ini.
          </div>
        </div>
      )}
    </>
  );
}
