// components/Partners.tsx
import Image from 'next/image';

// Asumsikan Anda menyimpan logo di dalam folder public/images/partners/
// Ganti path jika lokasi file Anda berbeda.
import logoSkypay from '@/public/images/partners/skypay_logo@2x.png';
import logoXendit from '@/public/images/partners/xendit_logo@2x.png';
import logoAdvance from '@/public/images/partners/advance_logo@2x.png';
import logoCrif from '@/public/images/partners/crif_logo@2x.png';

// Struktur data untuk setiap partner
const partners = [
  {
    logo: logoSkypay,
    name: 'Skypay',
  },
  {
    logo: logoXendit,
    name: 'Xendit',
  },
  {
    logo: logoAdvance,
    name: 'Advance.CBP',
  },
  {
    logo: logoCrif,
    name: 'CRIF',
  },
];

export default function Partners() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Working together to serve you
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            ✨ Our Partners ✨
          </p>
        </div>

        {/* Grid untuk logo partner */}
        {/* Menggunakan max-w-3xl dan mx-auto untuk memusatkan grid 2x2 */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center bg-gray-200 rounded-3xl sm:p-8"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                className="max-h-16 w-auto object-contain" // Atur agar logo pas dan tidak terdistorsi
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
