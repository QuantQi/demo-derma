import { priceList } from "../../data/sampleData";

export default function PricelistPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">Pricelist</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            Pricelist
          </h1>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(priceList).map(([category, treatments]) => (
              <div key={category} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h2 className="text-2xl font-light text-gold mb-6 uppercase tracking-wide">
                  {category}
                </h2>
                
                <div className="space-y-3">
                  {treatments.map((treatment: { treatment: string; price: string }, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <span className="text-dark-grey">
                          {treatment.treatment}
                        </span>
                      </div>
                      <div className="text-gold font-light text-lg ml-4">
                        {treatment.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-16 bg-beige p-6 rounded-lg">
            <h3 className="text-xl font-light text-gold mb-4">Important Information</h3>
            <p className="text-dark-grey leading-relaxed mb-4">
              All prices listed are starting prices and may vary depending on individual requirements and 
              treatment complexity. A consultation is required for all injectable treatments to ensure 
              safety and optimal results.
            </p>
            <p className="text-dark-grey leading-relaxed">
              Consultation fee: £50 (deductible from treatment cost when you proceed with treatment on the same day)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}