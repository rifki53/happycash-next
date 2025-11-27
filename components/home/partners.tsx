// components/Partners.tsx
import Image from 'next/image';
import logoSkypay from '@/public/images/partners/skypay_logo@2x.png';
import logoXendit from '@/public/images/partners/xendit_logo@2x.png';
import logoAdvance from '@/public/images/partners/advance_logo@2x.png';
import logoCrif from '@/public/images/partners/crif_logo@2x.png';

const partners = [
  { logo: logoSkypay, name: 'Skypay' },
  { logo: logoXendit, name: 'Xendit' },
  { logo: logoAdvance, name: 'Advance.CBP' },
  { logo: logoCrif, name: 'CRIF' },
];

export default function Partners() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Working together to serve you
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            ✨ Our Partners ✨
          </p>
        </div>

        {/* 
           PERUBAHAN DI SINI:
           1. grid-cols-1    -> Default (Mobile) jadi 1 kolom.
           2. sm:grid-cols-2 -> Mulai ukuran 'sm' (tablet kecil ke atas) jadi 2 kolom.
        */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center bg-gray-200 rounded-3xl p-6 sm:p-8 h-32 sm:h-40"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                // Saya kembalikan max-h-16 agar ukurannya konsisten tidak terlalu besar
                className="md:max-h-16 max-h-20  max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
