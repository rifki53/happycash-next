// components/ui/logo.tsx (atau lokasi file Anda)
import Link from "next/link";
import Image from "next/image";

export default function LogoWhite() {
  return (
    <Link href="/" className="inline-flex" aria-label="Happycash">
      <Image
        src="/logo-with-text-white.png"
        width={150}
        height={28}
        alt="Happycash logo"
      />
    </Link>
  );
}
