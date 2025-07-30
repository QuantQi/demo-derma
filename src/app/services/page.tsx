import Link from 'next/link';
import { services } from "../../data/sampleData";

// Extended services list to match the specification of 32 services
const allServices = [
  ...services,
  {
    title: "Thread Lift",
    description: "Non-surgical facelift using PDO threads for skin tightening.",
    image: "/images/services/thread-lift.jpg",
    href: "/services/thread-lift",
    category: "face"
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production for smoother, firmer skin.",
    image: "/images/services/microneedling.jpg",
    href: "/services/microneedling",
    category: "face"
  },
  {
    title: "PRP Therapy",
    description: "Platelet-rich plasma for natural skin regeneration.",
    image: "/images/services/prp-therapy.jpg",
    href: "/services/prp-therapy",
    category: "face"
  },
  {
    title: "HIFU Treatment",
    description: "High-intensity focused ultrasound for skin tightening.",
    image: "/images/services/hifu.jpg",
    href: "/services/hifu",
    category: "face"
  },
  {
    title: "Mesotherapy",
    description: "Injectable treatments for skin rejuvenation and fat reduction.",
    image: "/images/services/mesotherapy.jpg",
    href: "/services/mesotherapy",
    category: "face"
  },
  {
    title: "Radiofrequency",
    description: "RF technology for skin tightening and body contouring.",
    image: "/images/services/radiofrequency.jpg",
    href: "/services/radiofrequency",
    category: "body"
  },
  {
    title: "Cryolipolysis",
    description: "Fat freezing technology for non-invasive body sculpting.",
    image: "/images/services/cryolipolysis.jpg",
    href: "/services/cryolipolysis",
    category: "body"
  },
  {
    title: "Lymphatic Drainage",
    description: "Therapeutic massage to reduce swelling and improve circulation.",
    image: "/images/services/lymphatic-drainage.jpg",
    href: "/services/lymphatic-drainage",
    category: "body"
  },
  {
    title: "Cellulite Treatment",
    description: "Advanced treatments to reduce the appearance of cellulite.",
    image: "/images/services/cellulite-treatment.jpg",
    href: "/services/cellulite-treatment",
    category: "body"
  },
  {
    title: "Stretch Mark Treatment",
    description: "Improve the appearance of stretch marks with advanced therapy.",
    image: "/images/services/stretch-marks.jpg",
    href: "/services/stretch-marks",
    category: "body"
  },
  {
    title: "Scar Treatment",
    description: "Reduce the appearance of scars with specialized treatments.",
    image: "/images/services/scar-treatment.jpg",
    href: "/services/scar-treatment",
    category: "face"
  },
  {
    title: "Acne Treatment",
    description: "Professional acne therapy for clear, healthy skin.",
    image: "/images/services/acne-treatment.jpg",
    href: "/services/acne-treatment",
    category: "face"
  },
  {
    title: "Rosacea Treatment",
    description: "Specialized care for rosacea and sensitive skin conditions.",
    image: "/images/services/rosacea-treatment.jpg",
    href: "/services/rosacea-treatment",
    category: "face"
  },
  {
    title: "Age Spot Removal",
    description: "Remove age spots and hyperpigmentation safely and effectively.",
    image: "/images/services/age-spots.jpg",
    href: "/services/age-spots",
    category: "face"
  },
  {
    title: "Mole Removal",
    description: "Safe removal of unwanted moles and skin lesions.",
    image: "/images/services/mole-removal.jpg",
    href: "/services/mole-removal",
    category: "face"
  },
  {
    title: "Skin Tag Removal",
    description: "Quick and painless removal of skin tags.",
    image: "/images/services/skin-tags.jpg",
    href: "/services/skin-tags",
    category: "face"
  },
  {
    title: "Melasma Treatment",
    description: "Specialized treatment for melasma and pigmentation issues.",
    image: "/images/services/melasma.jpg",
    href: "/services/melasma",
    category: "face"
  },
  {
    title: "IPL Photofacial",
    description: "Intense pulsed light therapy for skin rejuvenation.",
    image: "/images/services/ipl.jpg",
    href: "/services/ipl",
    category: "face"
  },
  {
    title: "LED Light Therapy",
    description: "Light therapy for acne, anti-aging, and skin healing.",
    image: "/images/services/led-therapy.jpg",
    href: "/services/led-therapy",
    category: "face"
  },
  {
    title: "Oxygen Facial",
    description: "Revitalizing oxygen therapy for glowing skin.",
    image: "/images/services/oxygen-facial.jpg",
    href: "/services/oxygen-facial",
    category: "face"
  },
  {
    title: "HydraFacial",
    description: "Multi-step facial treatment for instant skin improvement.",
    image: "/images/services/hydrafacial.jpg",
    href: "/services/hydrafacial",
    category: "face"
  },
  {
    title: "Dermaplaning",
    description: "Exfoliating treatment for smooth, radiant skin.",
    image: "/images/services/dermaplaning.jpg",
    href: "/services/dermaplaning",
    category: "face"
  },
  {
    title: "Gua Sha Facial",
    description: "Traditional technique for facial sculpting and lymphatic drainage.",
    image: "/images/services/gua-sha.jpg",
    href: "/services/gua-sha",
    category: "face"
  },
  {
    title: "Face Massage",
    description: "Relaxing facial massage for improved circulation and tone.",
    image: "/images/services/face-massage.jpg",
    href: "/services/face-massage",
    category: "face"
  },
  {
    title: "Eye Treatment",
    description: "Specialized treatments for the delicate eye area.",
    image: "/images/services/eye-treatment.jpg",
    href: "/services/eye-treatment",
    category: "face"
  },
  {
    title: "Neck & Décolletage",
    description: "Rejuvenating treatments for neck and chest area.",
    image: "/images/services/neck-treatment.jpg",
    href: "/services/neck-treatment",
    category: "face"
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-left">
            Treatments
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Discover our comprehensive range of aesthetic and dermatological treatments. 
            From anti-aging solutions to body contouring, we offer the latest in medical aesthetics.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group-hover:scale-105">
                  <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{service.title}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-gray-900 mb-2 uppercase tracking-wide group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 text-accent text-sm uppercase tracking-wide font-light">
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Book a consultation with our expert team to discuss your goals and get personalized 
            treatment recommendations tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Consultation
            </a>
            <a
              href="/pricelist"
              className="inline-block border border-accent text-accent px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-accent hover:text-white transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}