import GetApp from "@/components/get-app/get-app";
import HeroSecurity from "@/components/security/hero-security";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <HeroSecurity />
      <GetApp />
    </>
  );
}
