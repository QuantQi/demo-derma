import { priceList } from "../../data/sampleData";

export default function PricelistPage() {
  return (
    <div>
      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-left">
            Pricelist
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
            Transparent pricing for all our treatments. Prices may vary based on individual needs 
            and consultation requirements. Please book a consultation for a personalized quote.
          </p>
          
          <div className="bg-accent bg-opacity-10 border border-accent border-opacity-20 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>Please note:</strong> All prices are starting prices and may vary depending on 
              the extent of treatment required. A consultation fee of £50 applies, which is deductible 
              from your treatment cost.
            </p>
          </div>
        </div>
      </section>

      {/* Price Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(priceList).map(([category, treatments]) => (
              <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-2xl font-light text-gray-900 uppercase tracking-wide">
                    {category}
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {treatments.map((treatment: { treatment: string; price: string }, index: number) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <h3 className="text-gray-900 font-light">
                            {treatment.treatment}
                          </h3>
                        </div>
                        <div className="text-accent font-light text-lg">
                          {treatment.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                Payment Options
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Cash payments accepted
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  All major credit cards
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Bank transfers available
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Payment plans for larger treatments
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-light text-gray-900 mb-4 uppercase tracking-wide">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Comprehensive consultation
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Professional treatment
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Aftercare instructions
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Follow-up support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Book your consultation today to discuss your goals and receive a personalized 
            treatment plan with detailed pricing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}