"use client"; // Komponen ini interaktif, jadi harus menjadi Client Component

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi"; // Impor ikon bintang

// Impor gambar-gambar untuk setiap langkah
import app1 from "@/public/images/app/1@2x.png";
import app2 from "@/public/images/app/2@2x.png";
import app3 from "@/public/images/app/3@2x.png";
import app4 from "@/public/images/app/4@2x.png";
import app5 from "@/public/images/app/5@2x.png";

// Definisikan data untuk gambar dan teks
const images: { [key: number]: StaticImageData } = {
  1: app1,
  2: app2,
  3: app3,
  4: app4,
  5: app5,
};
const alts: { [key: number]: string } = {
  1: "Download and Register",
  2: "Fill in the information",
  3: "Upload 1 valid ID",
  4: "Complete Face Recognition",
  5: "Apply and wait for review",
};
const stepTitles = [
  "Download and Register",
  "Fill in the information",
  "Upload 1 valid ID",
  "Complete Face Recognition",
  "Apply and wait for review",
];
const stepDescriptions = [
  "Download the Happycash application on Google Play or the App Store.",
  "Fill in your personal data, then follow the instructions in the application.",
  "Use one clear, government-issued ID to verify your identity.",
  "Make sure your face is clear and well-lit before scanning.",
  "Within a few minutes, the funds would be disbursed after your application is approved.",
];

export default function StepByStep() {
  // State untuk mengelola langkah yang sedang aktif
  const [stepActive, setStepActive] = useState(1);

  // Preload gambar untuk transisi yang lebih mulus
  useEffect(() => {
    Object.values(images).forEach((src) => {
      const img = new window.Image();
      img.src = src.src;
    });
  }, []);

  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div>
          {/* Judul Section dengan Ikon Bintang (disesuaikan dengan gambar) */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PiStarFourFill className="text-yellow-300 text-2xl" />
              <PiStarFourFill className="text-yellow-300 text-2xl" />
              <h3 className="h3 tracking-wide mx-2">User Guide</h3>
              <PiStarFourFill className="text-yellow-300 text-2xl" />
              <PiStarFourFill className="text-yellow-300 text-2xl" />
            </div>
            <h2 className="h2">5 Steps to Get Cash</h2>
          </div>

          {/* Kontainer Utama */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 items-center">
            {/* Kontainer Gambar dengan Animasi */}
            <div className="md:w-1/2 w-full">
              <div className="relative min-h-[450px] h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepActive}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -32 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 h-full w-full max-w-[25rem]"
                  >
                    <Image
                      src={images[stepActive]}
                      alt={alts[stepActive]}
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Kontainer Langkah-langkah */}
            <div className="md:w-1/2 md:pl-0 md:mt-4 pt-4 relative space-y-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className="flex cursor-pointer h-[6rem] rounded-md transition-all duration-200"
                  onClick={() => setStepActive(step)}
                >
                  <div className="w-1/6 relative flex justify-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 bg-white transition-transform duration-200">
                      <button
                        type="button"
                        aria-label={`Step ${step}`}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all duration-200 ${
                          stepActive >= step
                            ? "bg-custom-yellow text-gray-900" // Warna aktif
                            : "border-2 border-custom-yellow text-gray-900" // Warna tidak aktif
                        }`}
                      >
                        {step}
                      </button>
                    </div>

                    {/* Garis vertikal penghubung antar langkah */}
                    {step !== 5 && (
                      <div
                        className={`absolute top-10 h-full left-1/2 w-0.5 -translate-x-1/2 transition-colors duration-200 ${
                          stepActive > step
                            ? "bg-custom-yellow"
                            : "bg-custom-yellow"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div className="w-5/6 pl-4">
                    <h4 className="text-2xl font-bold mb-2">
                      {stepTitles[step - 1]}
                    </h4>
                    <p className="text-gray-600">
                      {stepDescriptions[step - 1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
