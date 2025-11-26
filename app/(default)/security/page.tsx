import HeroSecurity from "@/components/security/hero-security";
import PrivacySection from "@/components/security/privacy-section";
import SecurityTips from "@/components/security/security-tips";
import StaySecure from "@/components/security/stay-secure";
import { getMetadata } from "@/lib/site-metadata"; // Import Helper

export const metadata = getMetadata("security");
export default function Home() {
  return (
    <>
      <HeroSecurity />
      <PrivacySection />
      <SecurityTips />
      <StaySecure />
    </>
  );
}
