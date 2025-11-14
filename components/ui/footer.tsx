// components/Footer.tsx
import Link from "next/link";
import Logo from "./logo";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-custom-slate text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Logo */}
        <div className="pt-12">
          <Logo isWhite={true} />
        </div>

        {/* Top area: Blocks */}
        <div className="grid gap-8 py-8 sm:grid-cols-12 md:pb-12">
          {/* 1st block: About */}
          <div className="space-y-4 sm:col-span-12 lg:col-span-5">
            <div className="text-sm text-slate-200">
              <p className="font-semibold text-lime-400 mb-2">
                Want to help accelerate financial inclusion in the Philippines?
              </p>
              <p className="text-slate-200">
                Happycash is a fintech platform that delivers digital credit to
                Filipinos – providing quick, seamless, affordable financial
                access to the credit-worthy yet underserved. Happycash is
                operated by Yinshan Lending Inc., a licensed financing company
                with SEC Registration No. CS201900108 and Certificate of
                Authority No. 2860. Please always study the{" "}
                <Link href="/terms" className="underline hover:text-lime-400">
                  terms and conditions
                </Link>
                ,{" "}
                <Link
                  href="/disclosure"
                  className="underline hover:text-lime-400"
                >
                  disclosure statement
                </Link>
                , and{" "}
                <Link href="/privacy" className="underline hover:text-lime-400">
                  privacy agreement
                </Link>{" "}
                before proceeding with any transaction.
              </p>
            </div>
          </div>

          {/* 2nd block: Contacts */}
          <div className="space-y-4 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-lime-400">Join us</h3>
            <a
              href="mailto:job@happycash.ph"
              className="text-sm text-slate-200 hover:text-white transition"
            >
              job@happycash.ph
            </a>

            <h3 className="text-sm font-semibold text-lime-400 mt-4">
              Hotline
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="tel:09102626060"
                  className="text-slate-200 hover:text-white transition"
                >
                  (+63)9102626060
                </a>
              </li>
              <li>
                <a
                  href="tel:09085848852"
                  className="text-slate-200 hover:text-white transition"
                >
                  (+63)9085848852
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block: Customer Service & Hours */}
          <div className="space-y-4 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-lime-400">
              Customer Service
            </h3>
            <a
              href="mailto:cs@happycash.ph"
              className="text-sm text-slate-200 hover:text-white transition"
            >
              cs@happycash.ph
            </a>

            <h3 className="text-sm font-semibold text-lime-400 mt-4">
              Office Hours
            </h3>
            <p className="text-sm text-slate-200">
              Monday-Sunday:
              <br />
              9:00-18:00
            </p>
          </div>

          {/* 4th block: Address */}
          <div className="space-y-4 sm:col-span-12 md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-semibold text-lime-400">Address</h3>
            <p className="text-sm text-slate-200">
              26th Floor, The World Center,
              <br />
              Gil Puyat Ave., Brgy, Bel-Air,
              <br />
              Makati City, Philippines
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-slate-700">
          {/* Copyright */}
          <div className="text-sm text-slate-500 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Yinshan Lending INC. All Rights
            Reserved
          </div>

          {/* Social links */}
          <ul className="flex space-x-2 order-1 sm:order-2">
            <li>
              <Link
                href="#0"
                className="flex justify-center items-center h-8 w-8 rounded-full bg-white text-slate-900 hover:bg-lime-400 transition"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="#0"
                className="flex justify-center items-center h-8 w-8 rounded-full bg-white text-slate-900 hover:bg-lime-400 transition"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="#0"
                className="flex justify-center items-center h-8 w-8 rounded-full bg-white text-slate-900 hover:bg-lime-400 transition"
              >
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
