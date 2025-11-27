// app/layout.tsx
import "./css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Inter } from "next/font/google";
import { getMetadata } from "@/lib/site-metadata"; // Import helper kita

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = getMetadata("home");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
