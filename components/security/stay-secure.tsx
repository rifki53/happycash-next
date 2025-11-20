import Image from "next/image";
import React from "react";

export default function StaySecure() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            Stay Safe, Stay Secure!{" "}
            <span role="img" aria-label="sparkles">
              ✨
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We are committed to providing you with a safe and reliable lending
            experience.
          </p>
          <div className="mt-8">
            <a
              href="/contact-us" // Or the appropriate link
              className="bg-slate-800 text-custom-yellow font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Real vs. Fake Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Real Column */}
          <div className="relative">
            <Image
              src="/images/security/real@2x.png"
              alt="Real HappyCash social media accounts"
              width={540}
              height={960}
              className="rounded-4xl rounded-tl-none shadow-lg"
            />
          </div>

          {/* Fake Column */}
          <div className="relative">
            <Image
              src="/images/security/fake@2x.png"
              alt="Examples of fake and scam accounts"
              width={540}
              height={960}
              className="rounded-4xl rounded-tr-none shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
