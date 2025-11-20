import HeroAbout from "@/components/about/hero-about";
import Features from "@/components/home/features";
import StepByStep from "@/components/home/step-by-step";
import PrivacySection from "@/components/security/privacy-section";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroAbout />
      <PrivacySection />
      <Features />
      <StepByStep />
    </>
  );
}
