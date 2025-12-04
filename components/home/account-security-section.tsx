import Image from "next/image";
import Link from "next/link";

const AccountSecuritySection = () => {
  return (
    // Main section: Added responsive padding for better vertical spacing
    <section className="bg-custom-darkgreen flex items-center justify-center min-h-screen p-4 lg:p-8">
      {/* Card Container: Increased max-width for large screens (lg/xl) */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl overflow-hidden">
        {/* Background Decoration */}
        <Image
          src="/images/data/circle-white@2x.png"
          alt="Background Circle"
          width={500}
          height={500}
          className="absolute -left-40 opacity-50 pointer-events-none"
        />

        {/* Content Wrapper: Increased padding and gap for large screens */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 p-8 md:p-12 lg:p-20">
          {/* Left Column: Security Icon */}
          {/* Added width classes to make the image responsive (larger on desktop) */}
          <div className="flex-shrink-0 w-40 md:w-48 lg:w-64 h-auto">
            <Image
              src="/images/data/security@2x.png"
              alt="Account Security Icon"
              width={256} // Increased base resolution for sharpness
              height={256}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Right Column: Text and Button */}
          <div className="flex flex-col gap-5 lg:gap-8 text-center md:text-left flex-1">
            {/* Heading: Scales up on large screens */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
              Account & Data Security
            </h2>

            {/* Body Text: Scales up and includes Bold Highlights */}
            <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed">
              In compliance with the{" "}
              <span className="font-bold text-gray-800">
                Data Privacy Act of 2012
              </span>{" "}
              (Republic Act No. 10173), as well as guidelines set forth by the{" "}
              <span className="font-bold text-gray-800">
                Securities and Exchange Commission (SEC)
              </span>{" "}
              and the{" "}
              <span className="font-bold text-gray-800">
                National Privacy Commission (NPC)
              </span>
              , we are committed to protecting your personal information and
              financial security. Your trust is of utmost importance to us, and
              we implement robust security measures to safeguard your data in
              accordance with the highest standards of confidentiality and
              privacy.
            </p>

            <div className="mt-2 lg:mt-4">
              <Link
                href="/security"
                className="bg-gray-800 text-custom-yellow font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-lg hover:bg-gray-700 transition-colors text-sm lg:text-base"
              >
                Safety Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSecuritySection;
