import Link from 'next/link';

export default function CO2LaserPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-dark-grey">Services</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">CO2 Fractional Laser</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-4">
            CO2 Fractional Laser
          </h1>
          <p className="text-xl text-dark-grey font-light">
            Rejuvenation treatment for smooth, radiant skin
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light text-gold mb-4">Treatment Overview</h2>
                <p className="text-dark-grey leading-relaxed mb-4">
                  CO2 Fractional Laser is an advanced skin resurfacing treatment that uses fractional carbon dioxide 
                  laser technology to improve skin texture, reduce wrinkles, and stimulate collagen production. 
                  This innovative treatment creates controlled micro-injuries in the skin, promoting natural healing 
                  and regeneration.
                </p>
                <p className="text-dark-grey leading-relaxed">
                  The fractional approach treats only a fraction of the skin at a time, leaving surrounding tissue 
                  intact to speed up healing. This results in dramatic improvements with less downtime compared 
                  to traditional laser resurfacing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Reduces fine lines and wrinkles",
                    "Improves skin texture and tone",
                    "Minimizes acne scars and stretch marks",
                    "Stimulates collagen production",
                    "Tightens and firms loose skin",
                    "Reduces sun damage and age spots"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gold flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-dark-grey">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gold text-sm font-light">CO2 Laser Treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
      <section className="py-16 bg-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gold mb-8 text-center">The Recovery Period</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light text-gold mb-3">Immediate Aftercare (0-3 days)</h3>
                <p className="text-dark-grey leading-relaxed">
                  Immediately after treatment, your skin will feel warm and appear red, similar to a sunburn. 
                  This is completely normal. Apply the prescribed healing ointment regularly and avoid direct 
                  sun exposure. Cold compresses can help reduce any discomfort.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gold mb-3">Peeling Phase (3-7 days)</h3>
                <p className="text-dark-grey leading-relaxed">
                  Your skin will begin to peel and flake as new skin emerges. This is a crucial part of the 
                  healing process. Do not pick at the peeling skin - let it come off naturally. Keep the area 
                  moisturized and continue to avoid sun exposure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gold mb-3">Full Recovery (7-14 days)</h3>
                <p className="text-dark-grey leading-relaxed">
                  Once the peeling is complete, you&apos;ll begin to see your new, rejuvenated skin. Continue with 
                  gentle skincare and daily SPF protection. You may return to normal activities, but avoid 
                  strenuous exercise for the first week.
                </p>
              </div>

              <div className="bg-gold/10 p-4 rounded-lg">
                <h4 className="text-lg font-light text-gold mb-2">Important Reminders</h4>
                <ul className="text-dark-grey text-sm space-y-1">
                  <li>• Use only prescribed skincare products during healing</li>
                  <li>• Apply SPF 30+ daily, even when indoors</li>
                  <li>• Avoid makeup for 3-5 days post-treatment</li>
                  <li>• Stay hydrated and get adequate rest</li>
                  <li>• Contact us if you experience any unusual symptoms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/services/carbon-laser-facial" className="text-gold hover:text-opacity-80 text-sm">
              ← Previous: Carbon Laser Facial
            </Link>
            <Link href="/services/dermal-fillers" className="text-gold hover:text-opacity-80 text-sm">
              Next: Dermal Fillers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}