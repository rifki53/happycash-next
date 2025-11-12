export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/del/hero-home";
import BusinessCategories from "@/components/del/business-categories";
import LargeTestimonial from "@/components/del/large-testimonial";
import FeaturesPlanet from "@/components/del/features-planet";
import Features from "@/components/del/features-home";
import TestimonialsCarousel from "@/components/del/testimonials-carousel";
import Cta from "@/components/del/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
