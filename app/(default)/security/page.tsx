import HeroAbout from "@/components/about/hero-about";
import PrivacySection from "@/components/security/privacy-section";
import SecurityTips from "@/components/security/security-tips";
import StaySecure from "@/components/security/stay-secure";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroAbout />
      <PrivacySection />
      <SecurityTips />
      <StaySecure />
    </>
  );
}
