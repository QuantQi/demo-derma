const hairGalleryImages = [
  { id: 1, title: "Laser Hair Removal Results", description: "Permanent hair reduction on legs" },
  { id: 2, title: "Facial Hair Removal", description: "Clean, smooth facial hair removal" },
  { id: 3, title: "Hair Transplant Results", description: "Natural-looking hair restoration" },
  { id: 4, title: "Hair Treatment Recovery", description: "Improved hair health and strength" },
  { id: 5, title: "Hair Mesotherapy Results", description: "Enhanced hair growth and thickness" },
  { id: 6, title: "Scalp Treatment", description: "Healthier scalp and hair follicles" },
  { id: 7, title: "Hair Loss Treatment", description: "Significant improvement in hair density" },
  { id: 8, title: "Hair Rejuvenation", description: "Overall hair health restoration" },
  { id: 9, title: "Underarm Hair Removal", description: "Smooth, hair-free underarm area" },
  { id: 10, title: "Brazilian Hair Removal", description: "Complete bikini area hair removal" },
  { id: 11, title: "Back Hair Removal", description: "Smooth back hair removal results" },
  { id: 12, title: "Complete Hair Solution", description: "Comprehensive hair treatment results" }
];

export default function HairGalleryPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-dark-grey">Gallery</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">Hair</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            Hair
          </h1>
        </div>
      </section>

      {/* Before & After Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairGalleryImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gold/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gold text-xs font-light">Before & After</p>
                      {/* MB Derma logo watermark */}
                      <div className="absolute bottom-2 right-2 text-gold/30 text-xs font-light">
                        MB DERMA
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-light text-dark-grey text-center mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-dark-grey/70 text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}