import Testimonials from "@/components/home/testimonial";
import HeroUserStory from "@/components/user-story/hero-user-story";
import TestimonialsSection from "@/components/user-story/testimonials/testimonials-section";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("userStory");
export default function Home() {
  return (
    <>
      <HeroUserStory />
      <TestimonialsSection />
      <Testimonials />
    </>
  );
}
