// components/ui/header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-md border-b border-gray-200">
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
                className={`flex items-center border-b-2 py-2 transition duration-150 ease-in-out ${
                  pathname === "/about"
                    ? "border-custom-darkgreen text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/user-story"
                className={`flex items-center border-b-2 py-2 transition duration-150 ease-in-out ${
                  pathname === "/user-story"
                    ? "border-custom-darkgreen text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                User Story
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`flex items-center border-b-2 py-2 transition duration-150 ease-in-out ${
                  pathname === "/blog"
                    ? "border-custom-darkgreen text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/security"
                className={`flex items-center border-b-2 py-2 transition duration-150 ease-in-out ${
                  pathname === "/security"
                    ? "border-custom-darkgreen text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Account Security
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`flex items-center border-b-2 py-2 transition duration-150 ease-in-out ${
                  pathname === "/faq"
                    ? "border-custom-darkgreen text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-end md:flex-1">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/get-app"
                className="rounded-lg bg-custom-darkgreen px-5 py-2.5 text-sm font-medium text-custom-yellow shadow-sm hover:bg-gray-900"
              >
                Get the App
              </Link>
            </li>
          </ul>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
