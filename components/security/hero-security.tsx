import Image from "next/image";
import hero from "@/public/images/hero-banner/account-security@1.5x.png";

export default function HeroSecurity() {
  return (
    <section className="bg-custom-darkgreen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
          <div className="text-center md:text-left order-last md:order-first">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
              <span className="text-custom-yellow">Fast Digital Credit</span>{" "}
              for Filipinos
            </h1>
            <div className="mx-auto max-w-lg md:mx-0">
              <p className="mb-8 text-lg text-gray-300">
                Happycash is a fintech platform that delivers digital credit to
                Filipinos - providing quick, seamless, affordable financial
                access to the credit-worthy yet underserved. Happycash is
                operated by Yinshan Lending Inc., a licensed lending company
                with SEC Registration No. CS201900108 and Certificate of
                Authority No. 2860.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center order-first md:order-last">
            <Image
              src={hero}
              alt="A happy woman feeling financially secure"
              width={550}
              height={550}
              className="h-auto w-full md:pt-4 pt-12"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
