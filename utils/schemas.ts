// Definisikan tipe untuk satu item breadcrumb
interface BreadcrumbItem {
  name: string;
  item: string;
}

// Definisikan tipe untuk objek BREADCRUMB_ITEMS secara keseluruhan
type BreadcrumbItems = Record<string, BreadcrumbItem>;

// --- PERBAIKAN DIMULAI DI SINI ---

// 1. Definisikan tipe untuk satu item dalam breadcrumb list secara terpisah
interface ListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

// Definisikan tipe untuk skema yang dihasilkan
interface BreadcrumbListSchema {
  "@context": "https://schema.org/";
  "@type": "BreadcrumbList";
  itemListElement: ListItem[]; // 2. Gunakan interface ListItem yang baru
}

// --- PERBAIKAN SELESAI ---

export const BREADCRUMB_ITEMS: BreadcrumbItems = {
  home: { name: "Home", item: "https://www.adapundi.com/" },
  loans: { name: "Pinjaman", item: "https://www.adapundi.com/loans" },
  investment: {
    name: "Pendanaan",
    item: "https://www.adapundi.com/investment",
  },
  about: { name: "Tentang Adapundi", item: "https://www.adapundi.com/about" },
  testimonial: {
    name: "Kisah Inspiratif",
    item: "https://www.adapundi.com/testimonial",
  },
  blog: { name: "Artikel", item: "https://www.adapundi.com/blog" },
  riplay: { name: "RIPLAY", item: "https://www.adapundi.com/riplay" },
  antifraud: { name: "Antifraud", item: "https://www.adapundi.com/antifraud" },
  faq: { name: "FAQ", item: "https://www.adapundi.com/faq" },
  terms: {
    name: "Syarat dan Ketentuan",
    item: "https://www.adapundi.com/term-condition",
  },
  privacy: {
    name: "Kebijakan Privasi",
    item: "https://www.adapundi.com/privacy-policy",
  },
};

/**
 * Menghasilkan skema BreadcrumbList berdasarkan kunci halaman yang diberikan.
 * @param pages - Array kunci dari BREADCRUMB_ITEMS yang akan disertakan.
 */
export function generateBreadcrumbSchema(
  pages: Array<keyof typeof BREADCRUMB_ITEMS>
): BreadcrumbListSchema {
  // 3. Tambahkan tipe kembalian `: ListItem` pada arrow function di dalam map
  const itemListElement = pages.map((key, index): ListItem => {
    const itemData = BREADCRUMB_ITEMS[key];
    if (!itemData) {
      throw new Error(`Breadcrumb item with key "${key}" not found.`);
    }
    // Objek yang dikembalikan sekarang akan divalidasi terhadap tipe ListItem
    return {
      "@type": "ListItem",
      position: index + 1,
      name: itemData.name,
      item: itemData.item,
    };
  });

  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

// Gunakan 'as const' untuk membuat tipe lebih spesifik dan readonly
export const homePageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adapundi",
    url: "https://www.adapundi.com/",
    logo: "https://www.adapundi.com/assets/AP-logo-BCx-qDrM.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+626250860666",
        contactType: "cs Adapundi",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      {
        "@type": "ContactPoint",
        email: "cs@adapundi.com",
        contactType: "email Adapundi",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      {
        "@type": "ContactPoint",
        telephone: "+6281299925778",
        contactType: "WhatsApp Adapundi",
        areaServed: "ID",
        availableLanguage: "Indonesian",
        url: "https://wa.me/6281299925778",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Capital Place, Jl. Gatot Subroto No.18, RT.6/RW.1, Kuningan Barat, Mampang Prapatan, Kota Jakarta Selatan, Jakarta",
      addressLocality: "Jakarta Selatan",
      addressCountry: "ID",
      addressRegion: "DKI Jakarta",
      postalCode: "12710",
    },
    sameAs: [
      "https://www.facebook.com/adapundi.official.indonesia",
      "https://www.instagram.com/adapundi_official_id/",
      "https://www.tiktok.com/@adapundi_official_id",
      "https://www.youtube.com/@adapundiofficialid",
      "https://www.linkedin.com/company/adapundi/",
    ],
  },
] as const;

export const aboutPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang Adapundi",
    url: "https://www.adapundi.com/about",
    description:
      "Temukan informasi tentang aplikasi Adapundi. Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
  },
] as const;

export const faqPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PT. Info Tekno Siaga (Adapundi) adalah perusahaan pendanaan berbasis teknologi yang telah terdaftar dan diawasi OJK. Berdiri sejak tahun 2021, diunduh lebih dari 10 juta penguna di PlayStore dan App store dengan banyak ulasan positif. Adapundi berkomitmen untuk selalu ada bagi mereka yang membutuhkan bantuan dana sementara dengan memberikan akses kemudahan, cepat dan menetapkan standar tertinggi dalam perlindungan dan kerahasiaan data nasabah.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah Adapundi terdaftar OJK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adapundi telah terdaftar dan diawasi Otoritas Jasa Keuangan (OJK) dengan nomor KEP-48/D/05/2021 tanggal 2 Juni 2021.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa limit dan tenor pinjaman yang bisa diajukan di Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Produk pinjaman Adapundi memiliki limit pinjaman mulai dari Rp100.000 hingga Rp100.000.000, dengan tenor 30 sampai dengan 360 hari. Bunga pinjaman berkisar antara 0,03% hingga 0,3% per hari.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara mengajukan pinjaman di Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unduh aplikasi Adapundi, daftar/masuk, isi data pribadi dan pekerjaan, unggah KTP dan foto diri, tentukan limit dan tenor, lalu klik Cairkan Dana Sekarang. Setelah verifikasi berhasil, dana akan segera cair.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja persyaratan untuk mengajukan pinjaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. WNI dengan KTP sah\n2. Usia 18-64 tahun\n3. Nomor ponsel aktif\n4. Memiliki penghasilan tetap",
        },
      },
      {
        "@type": "Question",
        name: "Mengapa pengajuan pinjaman saya ditolak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pengajuan Anda mungkin ditolak karena analisis risiko internal, data tidak lengkap atau skor kredit kurang memadai. Cek aplikasi secara berkala dan pastikan data akurat.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara melihat status pinjaman di Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Klik 'Saya' lalu 'Pinjaman Saya', kemudian klik nilai pinjaman untuk melihat detail status pinjaman Anda.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa membatalkan pinjaman yang sudah dicairkan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak bisa. Pinjaman yang sudah dicairkan tidak dapat dibatalkan. Waspadai penipuan atas nama Adapundi yang menjanjikan pembatalan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara melakukan pembayaran pinjaman Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Klik 'Bayar' di aplikasi, salin kode VA, dan lakukan pembayaran melalui ATM, mobile banking, internet banking, atau Alfamart. Jangan gunakan info dari luar aplikasi.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara mendapatkan kode pelunasan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Masuk ke menu 'Pinjaman', klik 'Bayar', lalu pilih metode pembayaran untuk melihat kode VA pelunasan.",
        },
      },
      {
        "@type": "Question",
        name: "Apa yang harus dilakukan jika tidak mendapatkan OTP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Coba ulangi permintaan kode setelah 15 menit. Jika masih gagal, restart ponsel atau gunakan ponsel lain. Pastikan koneksi baik. Jika tetap gagal, hubungi layanan pelanggan di cs@adapundi.com.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana jika perangkat yang saya gunakan hilang, apa yang harus saya lakukan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hubungi layanan pelanggan di cs@adapundi.com atau (021) 50860666 untuk membekukan akun dan mencegah penyalahgunaan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimanakah cara untuk mengecek keaslian informasi terkait Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hubungi layanan pelanggan resmi Adapundi melalui (021) 50860666, chat di aplikasi, atau media sosial resmi Adapundi yang memiliki lencana verifikasi.",
        },
      },
      {
        "@type": "Question",
        name: "Apa yang harus dilakukan jika saya menerima tawaran bantuan pencairan pinjaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adapundi tidak pernah menjanjikan bantuan pencairan di luar aplikasi. Hati-hati terhadap penipuan. Pastikan hanya menerima info dari saluran resmi.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah saya akan dikenakan biaya saat melakukan proses pengaduan di Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adapundi tidak mengenakan biaya atas pelayanan pengaduan. Biaya komunikasi seperti pulsa atau kuota internet ditanggung pengguna.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana jika saya mengalami masalah terkait aplikasi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hubungi Layanan Pengaduan Adapundi setiap hari pukul 08:00–20:00, melalui live chat aplikasi, telepon (021) 50860666, email cs@adapundi.com, atau media sosial resmi.",
        },
      },
    ],
  },
] as const;
