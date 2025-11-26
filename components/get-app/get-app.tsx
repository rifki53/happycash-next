// components/GetApp.tsx

import Image from "next/image";
import Link from "next/link";

// --- Aset untuk Kolom Kiri ---
import qrCode from "@/public/images/hero-home/qr-code-app-stores.png";
// Menggunakan gambar tombol yang sudah jadi
import androidButton from "@/public/images/hero-home/button-google-play@2x.png";
import iosButton from "@/public/images/hero-home/button-app-store@2x.png";

// --- Aset untuk Kolom Kanan ---
import single from "@/public/images/get-app/single.png";

// Data untuk grup download (QR + Tombol)
const downloadInfo = [
  {
    href: "#",
    qr: qrCode,
    buttonImage: iosButton,
    alt: "Download on the App Store",
  },
  {
    href: "#",
    qr: qrCode,
    buttonImage: androidButton,
    alt: "Get it on Google Play",
  },
];

export default function GetApp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-20">
          {/* === Kolom Kiri (Struktur Baru) === */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
              Trusted Financial Services
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Reliable support for personal and business needs, anytime.
            </p>

            {/* Wadah untuk Grup QR & Tombol */}
            <div className="flex justify-center gap-6 md:justify-between">
              {downloadInfo.map((item) => (
                <div
                  key={item.alt}
                  className="flex flex-col items-center gap-4"
                >
                  {/* QR Code dengan sudut membulat */}
                  <Image
                    src={item.qr}
                    width={20}
                    height={210}
                    alt={`${item.alt} QR Code`}
                    className="rounded-xl border border-gray-900"
                  />
                  {/* Tombol (gambar utuh) */}
                  <Link href={item.href}>
                    <Image
                      src={item.buttonImage}
                      alt={item.alt}
                      className="h-auto w-[210px] border border-gray-900 rounded-lg transition-transform hover:scale-105"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* === Kolom Kanan (Dengan Efek Kartu) === */}
          <div className="flex items-center justify-center">
            {/* Pembungkus untuk menciptakan efek kartu yang membulat */}
            {/* UPDATED: Added border-2, border-gray-200, and overflow-hidden */}
            <div className="rounded-3xl shadow-2xl border-3 border-gray-400 overflow-hidden">
              <Image
                src={single}
                alt="HappyCash App Interface"
                width={400}
                height={400}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
