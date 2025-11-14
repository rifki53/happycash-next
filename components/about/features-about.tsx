// components/Stats.tsx
import Image from 'next/image';

// Impor gambar peta yang sudah ada avatarnya
import map from "@/public/images/about/map.png";

export default function FeatureAbout() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Card utama */}
        <div className="bg-custom-slate rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center">
            
            {/* Kolom Kiri: Peta */}
            <div className="relative w-full md:w-1/2">
              {/* Gambar Peta dengan Avatar */}
              <Image
                src={map}
                alt="Map of the Philippines with user avatars"
                width={500} // Atur width dan height sesuai aspek rasio gambar Anda
                height={350}
                className="mx-auto"
              />
            </div>

            {/* Kolom Kanan: Teks Statistik */}
            <div className="w-full md:w-1/2 text-center md:text-left p-8 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Served Over
                <br />
                <span className="text-lime-400 font-extrabold text-4xl md:text-5xl">1,600,000</span>
                <br />
                Filipinos
              </h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
