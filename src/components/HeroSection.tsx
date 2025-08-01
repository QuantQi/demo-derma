import Link from 'next/link';

interface HeroSectionProps {
  headline: string | string[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  description?: string;
}

export default function HeroSection({ 
  headline, 
  ctaText = "Contact us", 
  ctaHref = "/contact",
  className = "",
  description = "Large tagline in white sans‑serif font overlaying a split layout"
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-[600px] bg-gradient-to-r from-beige to-cream overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 py-16 lg:py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {Array.isArray(headline) ? (
                <>
                  {headline.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < headline.length - 1 && <br />}
                    </span>
                  ))}
                </>
              ) : (
                headline
              )}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-lg">
              {description}
            </p>
            {ctaText && (
              <div className="pt-4">
                <Link
                  href={ctaHref}
                  className="inline-block border-2 border-gold text-gold px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-gold hover:text-white transition-all transform hover:scale-105"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-beige/20 z-10"></div>
            <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for model image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gold text-sm font-light">Hero Model Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beige band transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-beige"></div>
    </section>
  );
}