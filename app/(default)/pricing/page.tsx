export const metadata = {
  title: "Pricing - Simple",
  description: "Page description",
};

import PricingTables from "@/components/del/pricing-tables";
import ComparePlans from "@/components/del/compare-plans";
import TestimonialsGrid from "@/components/del/testimonials-grid";
import Faqs from "@/components/del/faqs";
import Cta from "@/components/del/cta-alternative";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
