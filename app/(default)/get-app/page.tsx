import GetApp from "@/components/get-app/get-app";
// import HeroSecurity from "@/components/security/hero-security";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("getApp");
export default function Home() {
  return (
    <>
      {/* <HeroSecurity /> */}
      <GetApp />
    </>
  );
}
