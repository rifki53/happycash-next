// components/testimonials/TestimonialCard.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";
import ModalVideo from "./modal-video";

// Definisikan tipe untuk objek testimonial
interface Testimonial {
  img: StaticImageData | string;
  name: string;
  date: string;
  videoThumb?: StaticImageData | string;
  videoUrl?: string;
}

// Definisikan tipe untuk props komponen
interface TestimonialCardProps {
  testimonial: Testimonial;
  children: React.ReactNode;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  children,
  className,
}: TestimonialCardProps) {
  return (
    <article
      // Tinggi kartu keseluruhan tetap h-[30rem]
      className={`relative flex h-[30rem] flex-col rounded-2xl bg-white p-5 shadow-lg ${className}`}
    >
      <header className="mb-4 flex items-center gap-3">
        <Image
          className="shrink-0 rounded-full"
          src={testimonial.img}
          width={44}
          height={44}
          alt={testimonial.name}
        />
        <div>
          <div className="font-bold">{testimonial.name}</div>
        </div>
      </header>

      {/* Jika ada video, tampilkan deskripsi dengan ikon dan thumbnail */}
      {testimonial.videoThumb && testimonial.videoUrl ? (
        // Wrapper ini akan 'tumbuh' mengisi ruang yang tersedia
        <div className="grow flex flex-col">
          {/* 2. Area deskripsi dengan tinggi tetap dan ikon play */}
          <div className="flex items-start gap-3 mb-4">
            <p className="h-11 overflow-y-auto text-sm text-gray-700 pr-2">
              {children}
            </p>
          </div>

          {/* mt-auto akan mendorong thumbnail video ke bagian bawah container */}
          <div className="mt-auto flex justify-center md:justify-start">
            <ModalVideo
              thumb={testimonial.videoThumb}
              thumbWidth={312}
              thumbHeight={180}
              thumbAlt="Modal video thumbnail"
              video={testimonial.videoUrl}
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      ) : (
        <div className="grow text-sm text-gray-700 overflow-y-auto">{children}</div>
      )}

      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}
