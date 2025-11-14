// components/Features.tsx
import Image from "next/image";

// Impor gambar ikon dari direktori public
import iconLegit from "@/public/images/features/super-legit.png";
import iconDisbursement from "@/public/images/features/full-disbursement.png";
import iconRepayment from "@/public/images/features/equal-repayment.png";
import iconSupport from "@/public/images/features/responsive-support.png";

// Struktur data untuk setiap item fitur
const features = [
  {
    icon: iconLegit,
    title: "Licensed & Trusted",
    description: "SEC & CIC licensed for trust and compliance.",
  },
  {
    icon: iconDisbursement,
    title: "Full Disbursement",
    description: "0 hidden fee, transparent and fair.",
  },
  {
    icon: iconRepayment,
    title: "Equal Monthly Repayment",
    description: "Fixed installments for easy budgeting.",
  },
  {
    icon: iconSupport,
    title: "Responsive Support",
    description: "Assistance available in 3 minutes.",
  },
];

export default function Features() {
  return (
    <section className="bg-custom-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Your Trusted Partner for Easy,
            <br />
            <span className="text-lime-400">Transparent Loans</span>
          </h2>
        </div>

        {/* Grid untuk item fitur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Ikon */}
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={128}
                  height={128}
                  className="h-auto"
                />
              </div>
              {/* Judul Fitur */}
              <h3 className="text-xl font-bold text-lime-400 mb-2">
                {feature.title}
              </h3>
              {/* Deskripsi Fitur */}
              <p className="text-gray-400 text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
