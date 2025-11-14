// components/GovernmentPartners.tsx
import Image from 'next/image';

// 1. Impor semua logo dari direktori public
// Pastikan path ini sesuai dengan struktur folder Anda
import secLogo from '@/public/images/govt/sec-logo.png';
import npcLogo from '@/public/images/govt/npc-logo.png';
import amlcLogo from '@/public/images/govt/amlc-logo.png';
import ciLogo from '@/public/images/govt/ci-logo.png';

// 2. Siapkan data untuk setiap partner dalam sebuah array
const partners = [
  {
    src: secLogo,
    alt: 'Securities and Exchange Commission Philippines Logo',
  },
  {
    src: npcLogo,
    alt: 'National Privacy Commission Logo',
  },
  {
    src: amlcLogo,
    alt: 'Anti-Money Laundering Council (AMLC) Logo',
  },
  {
    src: ciLogo,
    alt: 'Credit Information Corporation Logo',
  },
];

export default function GovernmentPartners() {
  return (
    <section className="bg-custom-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Judul Utama */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            <span className="text-custom-yellow">Your Trusted and Legitimate</span>
            <br />
            Lending Partner
          </h2>

          {/* Paragraf Pembuka */}
          <p className="mt-6 text-gray-400">
            Yinshan Lending Inc. operating under the name of Happycash, is a
            compliant organized corporation, fully registered with and recognized
            by the primary government agencies.
          </p>

          {/* Sub-judul untuk Logo */}
          <p className="mt-12 font-semibold text-white">
            We are proud to be registered with the:
          </p>
        </div>

        {/* Kontainer untuk Logo */}
        <div className="mt-10">
          <div className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-14 gap-y-8">
            {partners.map((partner, index) => (
              <div key={index}>
                {/* Komponen Image dari Next.js */}
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  // Atur tinggi yang konsisten, lebar akan menyesuaikan otomatis
                  className="h-12 md:h-14 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Paragraf Penutup */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="mt-12 text-gray-400">
            Our operations are fully compliant with all applicable laws and
            regulations. Choose a lender that guarantees security, transparency,
            and lawful conduct.
          </p>
        </div>
      </div>
    </section>
  );
}
