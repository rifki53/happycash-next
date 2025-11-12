// lib/strapi.ts

import { notFound } from 'next/navigation';

// --- Konstanta & Tipe Data ---
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://cms.adapundi.com";
const DEBUG = process.env.NODE_ENV === 'development';

// --- Tipe Data ---
export interface PostSummary {
  slug: string;
  title: string;
}

export interface PostMetadata {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  image: string | null;
  readingTime: number;
}

export interface Post {
  slug: string;
  content: string; // Konten MDX
  metadata: PostMetadata;
}

export interface Category {
  id: number;
  name: string;
}


// --- Fungsi Helper Internal ---
function logDebug(...args: any[]) {
  if (DEBUG) console.debug("[Strapi API]", ...args);
}

const calculateReadingTime = (blocks: any[] | null): number => {
    if (!blocks || !blocks.length) return 1;
    const richTextBlock = blocks.find(
      (block) => block.__component === "shared.rich-text"
    );
    if (!richTextBlock || !richTextBlock.body) return 1;
    const words = richTextBlock.body.split(/\s+/).length;
    const wordsPerMinute = 225;
    return Math.ceil(words / wordsPerMinute);
};

/**
 * Mengubah data mentah dari Strapi menjadi format Post yang konsisten.
 */
function transformStrapiData(item: any): Post {
  const richTextBlock = item.blocks?.find(
    (block: any) => block.__component === "shared.rich-text"
  );

  // Menggunakan gambar format 'small' untuk list, dan fallback ke URL utama
  const imageUrl = item.cover?.formats?.small?.url
    ? `${STRAPI_API_URL}${item.cover.formats.small.url}`
    : (item.cover?.url ? `${STRAPI_API_URL}${item.cover.url}` : null);

  return {
    slug: item.slug,
    content: richTextBlock ? richTextBlock.body : "",
    metadata: {
      title: item.title,
      description: item.description || '',
      publishedAt: item.publishedAt,
      updatedAt: item.updatedAt,
      author: item.author?.name || "Adapundi Team",
      category: item.category?.name || "General",
      image: imageUrl,
      readingTime: calculateReadingTime(item.blocks),
    }
  };
}

// --- Fungsi Ekspor untuk API ---

/**
 * Mengambil semua kategori post.
 */
export async function getStrapiCategories(): Promise<Category[]> {
  logDebug("Fetching categories...");
  const url = `${STRAPI_API_URL}/api/categories`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache 1 jam
    if (!response.ok) throw new Error("Gagal mengambil kategori.");
    const jsonResponse = await response.json();
    return jsonResponse.data.map((cat: any) => ({ id: cat.id, name: cat.name })) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/**
 * Mengambil semua postingan blog dari Strapi, dengan opsi filter berdasarkan kategori.
 */
export async function getStrapiPosts(categoryName?: string): Promise<Post[]> {
  logDebug(`Fetching posts for category: ${categoryName || 'All'}`);
  let url = `${STRAPI_API_URL}/api/articles?populate=*&sort[0]=publishedAt:desc`;

  if (categoryName && categoryName !== "All") {
    url += `&filters[category][name][$eq]=${categoryName}`;
  }

  try {
    // Gunakan revalidate 60 detik untuk daftar post agar lebih sering update
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error("Gagal mengambil daftar post dari Strapi.");
    
    const jsonResponse = await response.json();
    if (!jsonResponse.data) return [];

    return jsonResponse.data.map(transformStrapiData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

/**
 * Mengambil satu post berdasarkan slug-nya, beserta data navigasi (prev/next).
 */
export async function getStrapiPostBySlug(slug: string) {
  logDebug(`Fetching post by slug: ${slug}`);
  
  const postUrl = `${STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;
  const allPostsNavUrl = `${STRAPI_API_URL}/api/articles?sort[0]=publishedAt:desc&fields[0]=slug&fields[1]=title`;

  try {
    const [postResponse, allPostsNavResponse] = await Promise.all([
      fetch(postUrl, { next: { revalidate: 60 } }), // Cache post individu
      fetch(allPostsNavUrl, { next: { revalidate: 60 } }) // Cache data navigasi
    ]);

    if (!postResponse.ok) throw new Error(`Gagal mengambil data post untuk slug: ${slug}`);
    if (!allPostsNavResponse.ok) throw new Error("Gagal mengambil data navigasi post.");

    const postJson = await postResponse.json();
    if (!postJson.data || postJson.data.length === 0) {
      return notFound();
    }

    // Gunakan transformStrapiData untuk konsistensi, tapi ambil gambar ukuran penuh
    const post = transformStrapiData(postJson.data[0]);
    if (postJson.data[0].cover?.url) {
        post.metadata.image = `${STRAPI_API_URL}${postJson.data[0].cover.url}`;
    }

    // Logika untuk menemukan post sebelum dan sesudahnya
    const allPostsNavData = (await allPostsNavResponse.json()).data as PostSummary[];
    const currentIndex = allPostsNavData.findIndex(p => p.slug === slug);

    const nextPost = currentIndex > 0 ? allPostsNavData[currentIndex - 1] : null;
    const prevPost = currentIndex < allPostsNavData.length - 1 ? allPostsNavData[currentIndex + 1] : null;

    logDebug("Navigation found:", { prev: prevPost, next: nextPost });

    return { post, prevPost, nextPost };

  } catch (error) {
    console.error(`Error fetching post by slug (${slug}):`, error);
    return notFound();
  }
}

/**
 * Fungsi utilitas untuk memformat tanggal, bisa digunakan di mana saja.
 */
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
};
