import Image from "next/image";
import hero from "@/public/images/hero-banner/blog@1.5x.png";

export default function HeroBlog() {
  return (
    <section className="bg-custom-darkgreen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
          {/* Text Section */}
          <div className="text-center md:text-left order-last md:order-first">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
              <span className="text-custom-yellow">
                Learn More <br />
                About Us
              </span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center order-first md:order-last">
            <Image
              src={hero}
              alt="A happy woman feeling financially secure"
              // 1. Reduce intrinsic dimensions (helps browser calculate ratio)
              width={400}
              height={400}
              sizes="(max-width: 768px) 80vw, 400px"
              className="h-auto w-3/4 md:w-full max-w-[400px] pt-8 md:pt-4"
              priority
              quality={85} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
