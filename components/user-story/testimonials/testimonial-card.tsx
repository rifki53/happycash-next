// components/user-story/testimonials/testimonial-card.tsx

import React from "react";
import { StaticImageData } from "next/image";
import ModalVideo from "./modal-video";
import { FaStar, FaQuoteRight } from "react-icons/fa";

// Definisikan tipe baru untuk objek testimonial
interface Testimonial {
  img: StaticImageData | string;
  name: string;
  role: string;
  stars: number;
  videoUrl?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  children: React.ReactNode;
}

// Komponen untuk menampilkan bintang
const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center gap-1">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className="text-lime-500" />
      ))}
  </div>
);

export default function TestimonialCard({
  testimonial,
  children,
}: TestimonialCardProps) {
  return (
    <article className="flex flex-col md:flex-row items-start rounded-2xl bg-white shadow-md overflow-hidden">
      {/* Kolom Kiri: Video */}
      <div className="w-full md:w-1/3 h-56 md:h-auto md:aspect-square flex-shrink-0">
        {testimonial.videoUrl && (
          <ModalVideo
            thumb={testimonial.img}
            thumbAlt={`Testimonial from ${testimonial.name}`}
            video={testimonial.videoUrl}
            videoWidth={1920}
            videoHeight={1080}
          />
        )}
      </div>

      {/* Kolom Kanan: Konten Teks */}
      <div className="relative flex h-full w-full flex-col justify-start p-5">
        {/* PERUBAHAN 2: Ganti div dengan ikon FaQuoteRight */}

        <div className="z-10">
          <div className="flex w-full flex-row justify-between items-start">
            <StarRating count={testimonial.stars} />
            {/* Ukuran ikon disesuaikan agar lebih seimbang */}
            <FaQuoteRight className="text-5xl text-yellow-500 opacity-70" />
          </div>

          {/* Anda mengubah font menjadi lebih besar, saya pertahankan */}
          <blockquote className="mt-4 text-lg text-gray-700 font-semibold">
            {children}
          </blockquote>
        </div>

        <footer className="mt-6">
          <div className="font-bold text-xl text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-md font-semibold text-gray-500">
            - {testimonial.role}
          </div>
        </footer>
      </div>
    </article>
  );
}
