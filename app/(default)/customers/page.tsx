export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/del/wall-of-love";
import Cta from "@/components/del/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
