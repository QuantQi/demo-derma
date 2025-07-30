import Link from 'next/link';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Service data mapping
const serviceData: Record<string, {
  title: string;
  description: string;
  overview: string;
  indications: string[];
  benefits: string[];
  aftercare: string[];
  price: string;
}> = {
  'co2-fractional-laser': {
    title: 'CO2 Fractional Laser',
    description: 'Advanced laser technology for skin resurfacing and rejuvenation',
    overview: 'CO2 Fractional Laser is a revolutionary treatment that uses fractional carbon dioxide laser technology to dramatically improve skin texture, tone, and appearance. This advanced procedure creates microscopic columns of thermal injury in the skin, stimulating the body\'s natural healing process and collagen production.',
    indications: [
      'Fine lines and wrinkles',
      'Acne scarring',
      'Sun damage and age spots', 
      'Uneven skin texture',
      'Enlarged pores',
      'Stretch marks'
    ],
    benefits: [
      'Significant improvement in skin texture and tone',
      'Reduction of fine lines and wrinkles',
      'Improved appearance of scars',
      'Enhanced skin firmness and elasticity',
      'Long-lasting results',
      'Minimal downtime compared to traditional laser treatments'
    ],
    aftercare: [
      'Keep the treated area clean and dry',
      'Apply prescribed ointments as directed',
      'Avoid sun exposure and use SPF 30+ sunscreen',
      'Do not pick or scratch the treated area',
      'Avoid harsh skincare products for 1-2 weeks',
      'Stay hydrated and get adequate rest'
    ],
    price: '£400'
  },
  'dermal-fillers': {
    title: 'Dermal Fillers',
    description: 'Restore volume and smooth wrinkles with premium hyaluronic acid fillers',
    overview: 'Dermal fillers are injectable treatments that restore volume, smooth lines, and enhance facial contours. Using hyaluronic acid-based products, these treatments provide natural-looking results that can last 6-18 months.',
    indications: [
      'Nasolabial folds',
      'Marionette lines',
      'Lip enhancement',
      'Cheek augmentation',
      'Under-eye hollows',
      'Jawline definition'
    ],
    benefits: [
      'Immediate visible results',
      'Natural-looking enhancement',
      'Minimal downtime',
      'Reversible treatment',
      'Gradual and natural absorption',
      'Enhanced facial harmony'
    ],
    aftercare: [
      'Avoid touching or massaging the treated area for 24 hours',
      'Apply ice to reduce swelling if needed',
      'Avoid strenuous exercise for 24 hours',
      'Sleep with head elevated for the first night',
      'Avoid alcohol and blood-thinning medications',
      'Use gentle skincare products'
    ],
    price: '£180-£300'
  }
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-accent hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <Link href="/services" className="text-accent hover:underline text-sm uppercase tracking-wide">
              ← Back to Services
            </Link>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.overview}
                </p>
              </div>

              {/* Indications */}
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                  Indications
                </h2>
                <ul className="space-y-3">
                  {service.indications.map((indication: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-gray-700">{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After-care */}
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                  After-care Instructions
                </h2>
                <ul className="space-y-3">
                  {service.aftercare.map((instruction: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">
                      Starting from {service.price}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Final pricing determined during consultation
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      href="/contact"
                      className="inline-block bg-accent text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for some common services
export async function generateStaticParams() {
  return [
    { slug: 'co2-fractional-laser' },
    { slug: 'dermal-fillers' },
  ];
}