import TestimonialBlock from "../../components/TestimonialBlock";
import { testimonials } from "../../data/sampleData";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-left">
            About us
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At MB Derma, we are dedicated to providing exceptional aesthetic and dermatological treatments 
              in a warm, professional environment. Our clinic combines cutting-edge technology with years 
              of expertise to deliver outstanding results for our clients.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe that beauty comes from feeling confident in your own skin. That&apos;s why we take 
              the time to understand each client&apos;s unique needs and goals, creating personalized treatment 
              plans that deliver natural-looking, long-lasting results. Our team of qualified professionals 
              is committed to the highest standards of safety, care, and excellence.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide safe, effective, and innovative aesthetic treatments that enhance natural beauty 
                and boost confidence. We strive to create a comfortable, professional environment where 
                every client feels valued and cared for throughout their journey with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                  Our Values
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Safety and professionalism in every treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Personalized care tailored to individual needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Honest advice and realistic expectations
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Continuous education and innovation
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Experienced and qualified practitioners
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    State-of-the-art equipment and techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Comprehensive consultation process
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    Aftercare support and guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBlock testimonials={testimonials} />
    </div>
  );
}