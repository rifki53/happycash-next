import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Happycash">
      <Image
        src="/Logo-with-text.png"
        width={150}
        height={28}
        alt="Happycash logo"
      />
    </Link>
  );
}
