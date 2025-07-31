import Link from 'next/link';

// Comprehensive service list matching the specifications
const servicesList = [
  // Laser Treatments
  { name: "CO2 Fractional Laser", href: "/services/co2-fractional-laser" },
  { name: "Carbon Laser Facial", href: "/services/carbon-laser-facial" },
  { name: "Diode Laser Hair Removal", href: "/services/diode-laser-hair-removal" },
  { name: "IPL Photofacial", href: "/services/ipl-photofacial" },
  { name: "Laser Skin Resurfacing", href: "/services/laser-skin-resurfacing" },
  
  // Body Sculpting
  { name: "Emsculpt", href: "/services/emsculpt" },
  { name: "HIFU Body Treatment", href: "/services/hifu-body" },
  { name: "Cryolipolysis", href: "/services/cryolipolysis" },
  { name: "Radiofrequency Body Contouring", href: "/services/rf-body-contouring" },
  { name: "Cavitation Therapy", href: "/services/cavitation" },
  
  // Injectables
  { name: "Platelet Rich Plasma (PRP)", href: "/services/prp" },
  { name: "Dermal Fillers", href: "/services/dermal-fillers" },
  { name: "Botulinum Toxin", href: "/services/botulinum-toxin" },
  { name: "Skin Boosters", href: "/services/skin-boosters" },
  { name: "PDO Thread Lift", href: "/services/pdo-threads" },
  
  // Mesotherapy
  { name: "Facial Mesotherapy", href: "/services/facial-mesotherapy" },
  { name: "Body Mesotherapy", href: "/services/body-mesotherapy" },
  { name: "Hair Mesotherapy", href: "/services/hair-mesotherapy" },
  { name: "Fat Dissolving Injections", href: "/services/fat-dissolving" },
  { name: "Cellulite Mesotherapy", href: "/services/cellulite-mesotherapy" },
  
  // Radiofrequency Microneedling
  { name: "RF Microneedling Face", href: "/services/rf-microneedling-face" },
  { name: "RF Microneedling Body", href: "/services/rf-microneedling-body" },
  { name: "Morpheus8 Treatment", href: "/services/morpheus8" },
  { name: "Secret RF", href: "/services/secret-rf" },
  
  // Specialized Treatments
  { name: "Zaffiro Thermolifting", href: "/services/zaffiro-thermolifting" },
  { name: "Micro Sclerotherapy", href: "/services/micro-sclerotherapy" },
  { name: "Acne Scar Treatment", href: "/services/acne-scar-treatment" },
  { name: "Stretch Mark Reduction", href: "/services/stretch-mark-reduction" },
  { name: "Pigmentation Treatment", href: "/services/pigmentation-treatment" },
  { name: "Rosacea Treatment", href: "/services/rosacea-treatment" },
  
  // Additional Services
  { name: "HydraFacial", href: "/services/hydrafacial" },
  { name: "Chemical Peels", href: "/services/chemical-peels" },
  { name: "Microneedling", href: "/services/microneedling" },
  { name: "LED Light Therapy", href: "/services/led-therapy" },
  { name: "Oxygen Facial", href: "/services/oxygen-facial" },
  { name: "Dermaplaning", href: "/services/dermaplaning" }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">Services</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            Services
          </h1>
        </div>
      </section>

      {/* Service List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <div className="space-y-4">
              {servicesList.slice(0, Math.ceil(servicesList.length / 2)).map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="flex items-center group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-dark-grey group-hover:text-gold transition-colors text-sm">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {servicesList.slice(Math.ceil(servicesList.length / 2)).map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="flex items-center group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-dark-grey group-hover:text-gold transition-colors text-sm">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}