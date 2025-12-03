// components/Features.tsx
import Image from "next/image";

// Import new icons based on the file list provided
import icon1 from "@/public/images/features/1@1.5x.png";
import icon2 from "@/public/images/features/2@1.5x.png";
import icon3 from "@/public/images/features/3@1.5x.png";
import icon4 from "@/public/images/features/4@1.5x.png";

// Updated data structure with new content and mapped icons
const features = [
  {
    icon: icon1,
    title: "Instant Cash, High Limit",
    description:
      "Get up to ₱25,000 in 3 minutes. Quick application with rates as low as 0.2%/day.",
  },
  {
    icon: icon2,
    title: "100% Transparency",
    description:
      "Zero hidden charges. We disburse the full amount—no upfront deductions, no surprises.",
  },
  {
    icon: icon3,
    title: "Stress-Free Repayment",
    description:
      "Equal monthly installments. Enjoy flexible terms up to 6 months to pay back with ease.",
  },
  {
    icon: icon4,
    title: "Fully Licensed & Trusted",
    description:
      "SEC & CIC Certified. Borrow with confidence from a compliant and secure provider.",
  },
];

export default function Features() {
  return (
    <section className="bg-custom-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-custom-yellow">
            Your Trusted Partner for Easy,
            <br />
            <span className="text-white">Transparent Loans</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={128}
                  height={128}
                  className="h-auto"
                />
              </div>
              {/* Feature Title */}
              <h3 className="text-xl font-bold text-custom-yellow mb-2">
                {feature.title}
              </h3>
              {/* Feature Description */}
              <p className="text-gray-100 text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
