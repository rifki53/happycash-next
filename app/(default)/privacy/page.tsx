import dynamic from "next/dynamic";
const ContentPrivacyPolicy = dynamic(() => import("@/components/html-content/content-privacy"));

export default function PrivacyPolicy() {

  return (
    <>
      <ContentPrivacyPolicy />
    </>
  );
}
