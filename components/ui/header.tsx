import Link from "next/link";
import Logo from "./logo"; // Assuming this component renders your "Happycash" logo
import MobileMenu from "./mobile-menu"; // You may need to update the links inside MobileMenu separately

export default function Header() {
  return (
    // Header is now fixed to the top, with a white background and a subtle shadow
    <header className="fixed top-0 z-30 w-full bg-white shadow-md">
      {/* This div creates the thin blue line at the very top */}

      {/* Main container for header content */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Site branding (Logo) */}
        <div className="flex-shrink-0">
          <Logo isWhite={false} />
        </div>

        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden md:flex md:grow">
          {/* Links are centered */}
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

        {/* "Get the App" button on the right - hidden on mobile */}
        {/* <div className="hidden md:flex md:items-center">
          <Link
            href="/get-the-app"
            className="rounded-lg bg-custom-slate px-5 py-2.5 text-sm font-medium text-custom-yellow shadow-sm hover:bg-gray-900"
          >
            Get the App
          </Link>
        </div> */}

        {/* Mobile menu hamburger button - only visible on mobile */}
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
