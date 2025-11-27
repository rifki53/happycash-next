// components/home/testimonials/TestimonialsSection.tsx
import TestimonialCard from "./testimonial-card"; // Impor komponen kartu

// Impor gambar untuk testimoni
import catherineImage from "@/public/images/user-story/catherine.jpg";
import juvyImage from "@/public/images/user-story/juvy.jpg";
import mariaImage from "@/public/images/user-story/maria.jpg";

// Data testimoni dari gambar test.png
const testimonials = [
  {
    img: catherineImage,
    name: "Catherine",
    date: "", // Tanggal tidak ada di desain, jadi dikosongkan
    content:
      "“Napakababa ng interest na ibinibigay ni happycash. Bukod sa maliit ang interest ang gaaan pa ng hulog sa bayaran”",
    videoThumb: catherineImage, // Menggunakan gambar utama sebagai thumbnail video
    videoUrl: "https://pub.happycash.ph/video/HC-CATHERINE-15SEC-1.3.mp4",
  },
  {
    img: juvyImage,
    name: "Juvy",
    date: "",
    content:
      "“Ang kinaganda nun, kumbaga on the spot makukuha mo siya kaagad.”",
    videoThumb: juvyImage,
    videoUrl: "https://pub.happycash.ph/video/HC-JUVY-15SEC-1.3.mp4",
  },
  {
    img: mariaImage,
    name: "Maria",
    date: "",
    content:
      "“From the word itself HappyCash kasi nakaka happy din naman ung option”",
    videoThumb: mariaImage,
    videoUrl: "https://pub.happycash.ph/video/HC-MARIA-30SEC-1.3.mp4",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-custom-darkgreen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Meet Our Happy Borrowers
            </h2>
            <p className="text-xl text-custom-yellow">User Stories</p>
          </div>

          {/* Grid Testimoni */}
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                className="w-full h-full"
              >
                {testimonial.content}
              </TestimonialCard>
            ))}
          </div>

          {/* Teks Deskripsi dan Tombol */}
          <div className="mx-auto max-w-3xl pt-12 text-center">
            <p className="mb-8 text-gray-300">
              Since our launch, Happycash has earned the trust of millions of
              Filipinos, helping them achieve their financial goals with ease
              and confidence. Here, we bring you real stories from our valued
              users—ordinary people who have experienced support through our
              services. From managing unexpected expenses to realizing personal
              goals, their journeys reflect our commitment to providing reliable
              and accessible financial solutions.
            </p>
            <a
              href="#0" // Ganti dengan URL yang sesuai
              className="inline-block rounded-xl bg-custom-yellow px-8 py-3 font-bold text-black hover:bg-yellow-500"
            >
              Watch Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
