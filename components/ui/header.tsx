// components/ui/header.tsx (atau lokasi file Anda)

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex-shrink-0">
          <Link href="/" className="inline-flex" aria-label="Happycash">
            <Image
              src="/logo-with-text.png"
              width={150}
              height={28}
              className="w-auto object-contain"
              alt="Happycash-logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex md:grow">
          <ul className="flex grow flex-wrap items-center justify-center gap-6 text-sm lg:gap-10">
            <li>
              <Link
                href="/about"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/user-story"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                User Story
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/security"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Account Security
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex flex-1 items-center justify-end gap-3">
          <li>
            <Link
              href="/get-the-app"
              className="rounded-lg bg-custom-slate px-5 py-2.5 text-sm font-medium text-custom-yellow shadow-sm hover:bg-gray-900"
            >
              Get the App
            </Link>
          </li>
        </ul>

        <MobileMenu />
      </div>
    </header>
  );
}
