import Image from "next/image";
import Link from "next/link";

const NotFoundSection = () => {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 pt-28 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center md:flex-row md:items-start">
          <div className="flex w-full items-center justify-center p-4 md:w-1/2 md:justify-end md:p-6">
            {/* 
              ✅ CHANGED: Removed 'w-full' 
              Added 'w-64' (256px) for mobile and 'md:w-80' (320px) for desktop 
            */}
            <Image
              src="/images/404-mascot.png"
              alt="Not Found Illustration"
              width={288}
              height={288}
              className="h-auto w-64 md:w-120"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center p-4 text-center md:w-1/2 md:items-start md:p-8 md:text-left">
            <h1 className="mb-2 text-6xl font-bold text-gray-800 sm:text-7xl md:text-[12rem]">
              404
            </h1>
            <h2 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl md:text-5xl">
              Page Not Found
            </h2>
            <p className="mb-6 text-base text-gray-600 sm:text-lg">
              Sorry, the page cannot be found. Please double-check the URL and
              try again, or click the button below.
            </p>
            <Link
              href="/"
              className="w-full rounded-full bg-custom-yellow px-12 py-4 text-center text-xl font-bold text-gray-800 transition sm:w-fit"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
