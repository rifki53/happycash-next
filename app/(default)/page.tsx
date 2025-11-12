import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import StepByStep from "@/components/home/step-by-step";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <StepByStep />
    </>
  );
}
