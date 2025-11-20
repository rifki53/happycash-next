// components/ui/logo.tsx (atau lokasi file Anda)
import Link from "next/link";
import Image from "next/image";

// Definisikan tipe untuk props
interface LogoProps {
  isWhite?: boolean; // isWhite adalah opsional dan bertipe boolean
}

export default function Logo({ isWhite = false }: LogoProps) {
  // Tentukan path gambar berdasarkan nilai props isWhite
  const logoSrc = isWhite
    ? "/logo-with-text-white.png"
    : "/logo-with-text.png";

  return (
    <Link href="/" className="inline-flex" aria-label="Happycash">
      <Image
        src={logoSrc}
        width={150}
        height={28}
        alt="Happycash logo"
      />
    </Link>
  );
}
