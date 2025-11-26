import Faqs from "@/components/faq/faqs";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("faq");
export default function Pricing() {
  return (
    <>
    <Faqs />
    </>
  );
}
