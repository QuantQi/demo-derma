import Link from 'next/link';

interface HeroSectionProps {
  headline: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function HeroSection({ 
  headline, 
  ctaText = "Contact us", 
  ctaHref = "/contact",
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`py-24 bg-white text-center ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
          {headline}
        </h1>
        {ctaText && (
          <Link
            href={ctaHref}
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}