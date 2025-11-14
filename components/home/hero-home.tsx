// components/Hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import your images from the public directory
import heroWoman from "@/public/images/hero-home/hero-woman-illustration@2x.png";
import appStoreButton from "@/public/images/hero-home/button-app-store@2x.png";
import googlePlayButton from "@/public/images/hero-home/button-google-play@2x.png";
import qrCode from "@/public/images/hero-home/qr-code-app-stores.png";

export default function HeroHome() {
  const [isQrVisible, setQrVisible] = useState(false);

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
              <span className="text-lime-400">Happy Cash,</span> Happy Life
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Happycash is dedicated to improving the lives of Filipinos ensuring transparency, fairness, and responsibility. Instant financial aid available anytime, with just one valid ID.
            </p>

            {/* Grup tombol dengan hover QR */}
            <div
              className="relative inline-flex flex-col items-center"
              onMouseEnter={() => setQrVisible(true)}
              onMouseLeave={() => setQrVisible(false)}
            >
              {/* Popup Kode QR (Hanya Desktop) */}
              <div
                className={`
                  hidden md:flex justify-center
                  absolute bottom-full mb-4 w-full
                  transition-all duration-300 ease-in-out
                  ${isQrVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
              >
                <div className="bg-white p-3 rounded-lg shadow-2xl">
                  <Image src={qrCode} width={128} height={128} alt="Download App QR Code" />
                </div>
              </div>

              {/* Tombol Aplikasi */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#download-app-store" aria-label="Get on App Store">
                  <Image src={appStoreButton} alt="Get on App Store" width={160} className="h-auto" />
                </Link>
                <Link href="#download-google-play" aria-label="Get on Google Play">
                  <Image src={googlePlayButton} alt="Get on Google Play" width={160} className="h-auto" />
                </Link>
              </div>
            </div>
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
