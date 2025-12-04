
import ContentTermCondition from "@/components/html-content/content-term";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("terms");

export default function TermCondition() {

  return (
    <>
      <ContentTermCondition />
    </>
  );
}
