// components/BlogList.tsx
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/strapi";
import type { Post, Category } from "@/utils/strapi";

interface BlogListProps {
  posts: Post[];
  categories: Category[];
  selectedCategory: string;
}

export default function BlogList({ posts, categories, selectedCategory }: BlogListProps) {
  return (
    <>
      {/* Tombol Kategori (Tidak berubah) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.name === "All" ? "/blog" : `/blog?category=${category.name}`}
            className={`btn-sm font-normal shadow-sm ${
              selectedCategory === category.name
                ? "text-gray-200 bg-gray-800 hover:bg-gray-900 pointer-events-none"
                : "text-gray-800 bg-white hover:bg-gray-50"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Daftar Artikel - Diubah menjadi Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="bg-custom-darkgreen rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Bagian Gambar */}
            {post.metadata.image && (
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.metadata.image}
                  alt={`Preview for ${post.metadata.title}`}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover" // Tinggi gambar tetap
                />
              </Link>
            )}

            {/* Bagian Konten */}
            <div className="p-6 flex flex-col flex-grow">
              <header className="flex-grow mb-4">
                <h2 className="text-2xl font-bold text-white">
                  <Link className="hover:underline" href={`/blog/${post.slug}`}>
                    {post.metadata.title}
                  </Link>
                </h2>
              </header>
              
              {/* Tombol "Read more" */}
              <footer>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-block bg-lime-300 hover:bg-lime-400 text-gray-900 font-bold py-2 px-5 rounded-lg transition-colors"
                >
                  Read more
                </Link>
              </footer>
            </div>
          </article>
        ))}
      </div>

      {/* Pesan jika tidak ada post */}
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
