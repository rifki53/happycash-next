import HeroAbout from "@/components/about/hero-about";
import Testimonials from "@/components/home/testimonial";
import TestimonialsSection from "@/components/user-story/testimonials/testimonials-section";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroAbout />
      <TestimonialsSection />
      <Testimonials />
    </>
  );
}
