// components/Hero.tsx
"use client";

import Image from "next/image";

// Import your images from the public directory
import heroWoman from "@/public/images/about/model@2x.png";

export default function HeroAbout() {
  return (
    // Jadikan <section> sebagai konteks pemosisian (relative)
    // overflow-hidden akan memastikan gambar tidak keluar dari section
    <section className="relative bg-custom-darkgreen text-white overflow-hidden">
      {/* Wadah untuk konten teks, tetap terpusat dan terbatas lebarnya */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Batasi konten teks hanya di sisi kiri pada tampilan desktop */}
        <div className="md:w-1/2 py-8">
          <div className="py-12 md:py-20 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="text-lime-400">Fast Digital Credit</span> for
              Filipinos
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Happycash is a fintech platform that delivers digital credit to
              Filipinos - providing quick, seamless, affordable financial access
              to the credit-worthy yet underserved. Happycash is operated by
              Yinshan Lending Inc., a licensed lending company with SEC
              Registration No. CS201900108 and Certificate of Authority No.
              2860.
            </p>

            {/* Tombol telah dihapus sesuai permintaan */}
          </div>
        </div>
      </div>

      {/* Gambar yang diposisikan secara absolut untuk desktop */}
      {/* Kelas 'hidden md:block' membuatnya hanya muncul di layar medium ke atas */}
      <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block">
        <Image
          src={heroWoman}
          alt="A happy woman feeling financially secure"
          layout="fill"
          objectFit="contain"
          objectPosition="right bottom"
          priority
        />
      </div>

      {/* Gambar statis untuk tampilan mobile */}
      <div className="md:hidden">
        <Image
          src={heroWoman}
          alt="A happy woman feeling financially secure"
          width={500}
          height={500}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
