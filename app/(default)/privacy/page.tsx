import dynamic from "next/dynamic";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

const ContentPrivacyPolicy = dynamic(() => import("@/components/html-content/content-privacy"));

export const metadata = getMetadata("privacy");

export default function PrivacyPolicy() {

  return (
    <>
      <ContentPrivacyPolicy />
    </>
  );
}
