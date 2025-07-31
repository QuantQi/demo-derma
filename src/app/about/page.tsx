import TestimonialBlock from "../../components/TestimonialBlock";
import { testimonials } from "../../data/sampleData";

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">About</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            About us
          </h1>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-gold mb-6">Our Philosophy</h2>
                <p className="text-dark-grey leading-relaxed">
                  At MB Derma Clinic, we believe in enhancing natural beauty through personalized aesthetic treatments. 
                  Our passion for health and aesthetics drives everything we do, from our initial consultation to 
                  your final follow-up appointment.
                </p>
                <p className="text-dark-grey leading-relaxed">
                  We understand that each client is unique, which is why we take the time to listen to your concerns 
                  and develop individualized treatment plans. Our commitment to ongoing training and research ensures 
                  that we always offer the latest and most effective treatments available.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light text-gold">Making You Feel Valued</h3>
                <p className="text-dark-grey leading-relaxed">
                  Every client who walks through our doors is valued and respected. We believe that feeling beautiful 
                  starts with feeling comfortable and confident in your treatment choice. Our team is dedicated to 
                  creating a welcoming environment where you can relax and trust in our expertise.
                </p>
                <p className="text-dark-grey leading-relaxed">
                  From the moment you book your consultation to your aftercare support, we're here to guide you 
                  through every step of your aesthetic journey. Your satisfaction and wellbeing are our top priorities.
                </p>
              </div>
            </div>

            {/* Right Column - Portrait Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gold text-sm font-light">Portrait with Bokeh</p>
                  </div>
                </div>
              </div>
              {/* Decorative bokeh lights overlay effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gold/30 rounded-full"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-gold/40 rounded-full"></div>
              <div className="absolute bottom-16 right-6 w-3 h-3 bg-gold/20 rounded-full"></div>
              <div className="absolute bottom-32 right-12 w-1.5 h-1.5 bg-gold/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <TestimonialBlock testimonials={testimonials} title="Reviews" />
    </div>
  );
}