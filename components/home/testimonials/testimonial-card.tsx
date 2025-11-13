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
  // PERUBAHAN 1: Tambahkan 'className' sebagai prop opsional
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  children,
  // PERUBAHAN 2: Terima prop 'className'
  className,
}: TestimonialCardProps) {
  return (
    // PERUBAHAN 3: Gabungkan className dasar dengan className dari props
    <article
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

      {/* Jika ada video, tampilkan deskripsi dan thumbnail video */}
      {testimonial.videoThumb && testimonial.videoUrl ? (
        <div className="grow">
          <p className="mb-4">{children}</p>
          <div className="flex justify-center md:justify-start">
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
        // Jika tidak ada video, tampilkan teks saja
        <div className="grow text-sm text-gray-700">{children}</div>
      )}

      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}
