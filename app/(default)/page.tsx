// app/(default)/page.tsx
import AccountSecuritySection from "@/components/home/account-security-section";
import Features from "@/components/home/features";
import GovernmentPartners from "@/components/home/government-partners";
import HeroHome from "@/components/home/hero-home";
import Partners from "@/components/home/partners";
import StepByStep from "@/components/home/step-by-step";
import Testimonials from "@/components/home/testimonial";
import TestimonialsSection from "@/components/home/testimonials/testimonials-section";

// Import helper
import { getMetadata } from "@/lib/site-metadata";

export const metadata = getMetadata("home");

export default function Home() {
  return (
    <>
      <HeroHome />
      <Features />
      <StepByStep />
      <GovernmentPartners />
      <AccountSecuritySection />
      <TestimonialsSection />
      <Partners />
      <Testimonials />
    </>
  );
}
