// components/user-story/testimonials/TestimonialsSection.tsx

import React from "react";
import TestimonialCard from "./testimonial-card";

// Impor gambar (path diasumsikan sudah benar)
import catherineImage from "@/public/images/user-story/catherine.jpg";
import juvyImage from "@/public/images/user-story/juvy.jpg";
import mariaImage from "@/public/images/user-story/maria.jpg";

// PERUBAHAN: Memperbarui struktur data agar sesuai dengan desain baru
const testimonials = [
  {
    img: catherineImage,
    name: "Catherine",
    role: "Business owner",
    stars: 5,
    content:
      "Napakababa ng interest na ibinibigay ni Happycash. Bukod sa maliit ang interest ang gaaan pa ng hulog sa bayaran.",
    videoUrl:
      "https://assets.Happycash.com/Happycash/media/0920+60sec-App-landscape.mp4",
  },
  {
    img: juvyImage,
    name: "Juvy",
    role: "Business owner",
    stars: 5,
    content: "Ang kinaganda nun, kumbaga on the spot makukuha mo siya kaagad.",
    videoUrl:
      "https://assets.Happycash.com/Happycash/media/0920+60sec-App-landscape.mp4",
  },
  {
    img: mariaImage,
    name: "Maria",
    role: "BPO Employee",
    stars: 5,
    content: "Ang kinaganda nun, kumbaga on the spot makukuha mo siya kaagad.",
    videoUrl:
      "https://assets.Happycash.com/Happycash/media/0920+60sec-App-landscape.mp4",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50">
      {" "}
      {/* Ganti background jika perlu */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl flex flex-col gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial}>
              {testimonial.content}
            </TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
}
