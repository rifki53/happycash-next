import AccountSecuritySection from "@/components/home/account-security-section";
import Features from "@/components/home/features";
import GovernmentPartners from "@/components/home/government-partners";
import HeroHome from "@/components/home/hero-home";
import Partners from "@/components/home/partners";
import StepByStep from "@/components/home/step-by-step";
import Testimonials from "@/components/home/testimonial";
import TestimonialsSection from "@/components/home/testimonials/testimonials-section";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

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
