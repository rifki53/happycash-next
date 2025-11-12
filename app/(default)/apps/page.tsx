export const metadata = {
  title: "Apps - Simple",
  description: "Page description",
};

import Hero from "./hero";
import AppList from "@/components/del/app-list";
import Cta from "@/components/del/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
