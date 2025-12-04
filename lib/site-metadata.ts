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
  | "getApp"
  | "privacy"
  | "terms";

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
  privacy: {
    title: "Privacy Policy",
    description:
      "We protect your data and clearly explain how we collect, use, and keep your personal information safe.",
    keywords: ["data protection", "privacy policy"],
  },
  terms: {
    title: "Terms and Conditions",
    description:
      "Clear rules for using our services, outlining user responsibilities, limitations, and legal guidelines.",
    keywords: ["loan agreement", "user terms"],
  },
};

/**
 * Helper function untuk generate Metadata Next.js
 * @param page Key dari halaman (misal: 'home', 'about')
 * @returns Object Metadata Next.js
 */
export function getMetadata(page: PageKey): Metadata {
  const data = seoData[page] || {
    title: "Happycash",
    description: "Trusted Online Loan App in Philippines",
    keywords: [],
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    
    // --- OpenGraph Default ---
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      locale: "en_PH",
      siteName: "Happycash",
    },

    // --- IMPLEMENTASI ICON & FAVICON ---
    // Data ini diambil sesuai file yang ada di folder public Anda
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
        { url: '/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon-72x72.png', sizes: '72x72' },
        { url: '/apple-touch-icon-76x76.png', sizes: '76x76' },
        { url: '/apple-touch-icon-114x114.png', sizes: '114x114' },
        { url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
        { url: '/apple-touch-icon-144x144.png', sizes: '144x144' },
        { url: '/apple-touch-icon-152x152.png', sizes: '152x152' },
        { url: '/apple-touch-icon-180x180.png', sizes: '180x180' },
      ],
    },

    // --- IMPLEMENTASI MICROSOFT TILES ---
    other: {
      'application-name': 'Happycash',
      'msapplication-TileColor': '#FFFFFF',
      'msapplication-TileImage': '/mstile-144x144.png',
      'msapplication-square70x70logo': '/mstile-70x70.png',
      'msapplication-square150x150logo': '/mstile-150x150.png',
      'msapplication-wide310x150logo': '/mstile-310x150.png',
      'msapplication-square310x310logo': '/mstile-310x310.png',
    },
  };
}
