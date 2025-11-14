import FeatureAbout from "@/components/about/features-about";
import HeroAbout from "@/components/about/hero-about";
import Features from "@/components/home/features";
import StepByStep from "@/components/home/step-by-step";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroAbout />
      <FeatureAbout />
      <Features />
      <StepByStep />
    </>
  );
}
