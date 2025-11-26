// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

// Import gambar Anda dari direktori public
import homepage from "@/public/images/hero-banner/homepage@2x.png";
import qrCode from "@/public/images/hero-home/qr-code-app-stores.png";
// Menggunakan logo transparan seperti di referensi
import androidLogo from "@/public/images/hero-home/android-cta-logo.png";
import iosLogo from "@/public/images/hero-home/ios-cta-logo.png";

// Data untuk tombol download disesuaikan dengan referensi
const downloadButtons = [
  {
    href: "#",
    logo: iosLogo,
    alt: "Download on the App Store",
  },
  {
    href: "#",
    logo: androidLogo,
    alt: "Get it on Google Play",
  },
];

export default function Hero() {
  return (
    <section className="bg-custom-darkgreen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
          {/* Kolom Konten Teks */}
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
              <span className="text-custom-yellow">Happy Cash,</span>
              <br />
              Happy Life
            </h1>
            <div className="mx-auto max-w-lg md:mx-0">
              <p className="mb-8 text-lg text-gray-300">
                Happycash is dedicated to improving the lives of Filipinos
                ensuring transparency, fairness, and responsibility. Instant
                financial aid available anytime, with just one valid ID.
              </p>
            </div>

            {/* === Tombol Aplikasi DIBUAT ULANG sesuai referensi === */}
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              {downloadButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  aria-label={button.alt}
                  className="group relative flex items-center justify-center rounded-xl bg-custom-yellow  p-3 transition-all duration-200 hover:bg-custom-yellow md:hover:rounded-b-xl md:hover:rounded-t-none"
                >
                  {/* Logo di dalam tombol (dibuat putih dengan 'invert') */}
                  <Image
                    src={button.logo}
                    alt={button.alt}
                    className="h-[29px] w-auto"
                  />

                  {/* Popup Kode QR */}
                  <div
                    className="
                      absolute bottom-full left-0 right-0 z-20
                      hidden justify-center rounded-t-xl bg-white
                      px-4 pt-4 pb-2 shadow-lg
                      md:group-hover:flex"
                  >
                    <Image
                      src={qrCode}
                      width={120}
                      height={120}
                      alt="Download App QR Code"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Kolom Gambar */}
          <div className="flex items-center justify-center">
            <Image
              src={homepage}
              alt="Happy Cash hero banner"
              width={550}
              height={550}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
