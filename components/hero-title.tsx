interface HeroSimpleProps {
  title: string;
  description?: string;
}

export default function HeroTitle({ title, description }: HeroSimpleProps) {
  return (
    <section className="bg-custom-darkgreen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center py-16 text-center md:py-24">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
            {title}
          </h1>

          {/* Description (Optional) */}
          {description && (
            <p className="max-w-2xl text-lg font-medium text-custom-yellow opacity-90">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
