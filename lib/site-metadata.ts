// lib/site-metadata.ts
import { Metadata } from "next";

// Tipe data untuk konfigurasi kita
type PageSEO = {
  title: string;
  description: string;
  keywords: string[];
};

// Kunci halaman yang tersedia (untuk type safety)
export type PageKey =
  | "home"
  | "about"
  | "userStory"
  | "blog"
  | "security"
  | "faq"
  | "getApp";

// Database SEO Anda
const seoData: Record<PageKey, PageSEO> = {
  home: {
    title: "Happycash: Easy & Fast Online Loan App Philippines",
    description:
      "Get up to ₱25,000 instantly! 0% processing fee & low interest. SEC-registered & safe. Apply now with 1 Valid ID.",
    keywords: [
      "online loan Philippines",
      "cash loan app",
      "Happycash loan legit",
    ],
  },
  about: {
    title: "About Happycash",
    description:
      "Happycash — a trusted, SEC-registered fintech lender ready to deliver fast, safe online loans in Philippines.",
    keywords: [
      "SEC registered company",
      "trusted lender",
      "Happycash mission",
      "Secure OLP",
    ],
  },
  userStory: {
    title: "User Stories: How Happycash Helps Filipinos",
    description:
      "Real Happycash reviews & success stories: Filipinos used our loans for bills, business or emergencies—trusted & quick.",
    keywords: ["Happycash reviews", "loan testimonials", "success stories"],
  },
  blog: {
    title: "Happycash Blog",
    description:
      "Discover financial tips, loan guides & money-management advice to help you borrow smart and fund life goals.",
    keywords: ["financial tips", "loan guide", "money management"],
  },
  security: {
    title: "Account Security & Data Privacy",
    description:
      "We protect your privacy & guard against fraud. Happycash secures your data so you borrow with full peace of mind.",
    keywords: ["data privacy", "safe loan app", "anti-fraud"],
  },
  faq: {
    title: "Happycash Help Center: Requirements & Repayment",
    description:
      "Find answers on how to apply, interest rates, and repayment channels (GCash, 7-11, Banks) here.",
    keywords: ["loan requirements", "repayment channels", "how to apply"],
  },
  getApp: {
    title: "Download Happycash App",
    description:
      "Download the Happycash loan app — get instant access to ₱25,000 cash and manage repayments smoothly.",
    keywords: ["download loan app", "apk download", "install Happycash"],
  },
};

/**
 * Helper function untuk generate Metadata Next.js
 * @param page Key dari halaman (misal: 'home', 'about')
 * @returns Object Metadata Next.js
 */
export function getMetadata(page: PageKey): Metadata {
  const data = seoData[page];

  if (!data) {
    // Fallback jika key salah ketik
    return {
      title: "Happycash",
      description: "Trusted Online Loan App in Philippines",
    };
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    // Anda bisa menambahkan OpenGraph default disini agar otomatis terisi semua
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: "en_PH", // Target market Philippines
    },
  };
}
