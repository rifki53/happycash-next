import Testimonials from "@/components/home/testimonial";
import HeroUserStory from "@/components/user-story/hero-user-story";
import TestimonialsSection from "@/components/user-story/testimonials/testimonials-section";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroUserStory />
      <TestimonialsSection />
      <Testimonials />
    </>
  );
}
