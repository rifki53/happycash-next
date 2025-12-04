// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import LogoWhite from "./logo-white";

export default function Footer() {
  return (
    <footer className="bg-custom-slate text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12">
          {/* Top area: Logo, Socials, and Contacts */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* 1st block: Logo and Socials */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <LogoWhite />
              </div>
              <div className="mt-6">
                <h4 className="text-sm text-slate-200 mb-2">
                  Follow Happycash
                </h4>
                <ul className="flex space-x-2">
                  <li>
                    <Link
                      href="https://www.facebook.com/HappyCash.official.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900 transition hover:bg-custom-yellow"
                      aria-label="Facebook"
                    >
                      <FaFacebookF size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/happycash_ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900 transition hover:bg-custom-yellow"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@Happycash-Official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900 transition hover:bg-custom-yellow"
                      aria-label="YouTube"
                    >
                      <FaYoutube size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd block: Contacts */}
            <div className="md:col-span-1">
              <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                <div>
                  <h3 className="mb-2 font-semibold text-custom-yellow">
                    Hotline
                  </h3>
                  <ul className="space-y-1 text-slate-200">
                    <li>
                      <a
                        href="tel:+63277770111"
                        className="transition hover:text-white"
                      >
                        (+63)277770111
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+639102626060"
                        className="transition hover:text-white"
                      >
                        (+63)9102626060
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+639085848852"
                        className="transition hover:text-white"
                      >
                        (+63)9085848852
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-custom-yellow">
                    Customer Service
                  </h3>
                  <a
                    href="mailto:cs@happycash.ph"
                    className="text-slate-200 transition hover:text-white"
                  >
                    cs@happycash.ph
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-custom-yellow">
                    Join us
                  </h3>
                  <a
                    href="mailto:job@happycash.ph"
                    className="text-slate-200 transition hover:text-white"
                  >
                    job@happycash.ph
                  </a>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
                <div>
                  <h3 className="mb-2 font-semibold text-custom-yellow">
                    Office Hours:
                  </h3>
                  <p className="text-slate-200">
                    Monday-Sunday:
                    <br />
                    7:00 AM - 9:00 PM
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="mb-2 font-semibold text-custom-yellow">
                    Address
                  </h3>
                  <p className="text-slate-200">
                    26th Floor, The World Center, Gil Puyat Ave., Brgy. Bel-Air,
                    Makati City, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle area: About Text and Map */}
          <div className="grid grid-cols-1 gap-8 pt-8 mt-8 md:grid-cols-2">
            {/* About Text */}
            <div className="text-sm text-slate-200">
              <p className="mb-4 font-semibold text-custom-yellow">
                Want to help accelerate financial inclusion in the Philippines?
              </p>
              <p>
                Happycash is a fintech platform that delivers digital credit to
                Filipinos – providing quick, seamless, affordable financial
                access to the credit-worthy yet underserved. Happycash is
                operated by Yinshan Lending Inc., a licensed financing company
                with SEC Registration No. CS201900108 and Certificate of
                Authority No. 2860. Please always study the{" "}
                <Link
                  href="/terms"
                  className="underline hover:text-custom-yellow"
                >
                  terms and conditions
                </Link>
                , disclosure statement , and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-custom-yellow"
                >
                  privacy agreement
                </Link>{" "}
                before proceeding with any transaction.
              </p>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6589310423055!2d121.02125579999999!3d14.5614865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e0d5121841%3A0x88d4beacd0cc6f79!2sThe%20World%20Centre%20Bldg.!5e0!3m2!1sen!2sid!4v1763116065625!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Bottom area: Copyright */}
          <div className="border-t border-slate-700 pt-6 mt-8 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Yinshan Lending INC. All Rights
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
