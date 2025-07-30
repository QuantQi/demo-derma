'use client';

import { useState } from 'react';

const galleryImages = {
  face: [
    { id: 1, title: "Dermal Filler Results", category: "face" },
    { id: 2, title: "Botox Treatment", category: "face" },
    { id: 3, title: "Chemical Peel Results", category: "face" },
    { id: 4, title: "Skin Rejuvenation", category: "face" },
    { id: 5, title: "Lip Filler Results", category: "face" },
    { id: 6, title: "Anti-aging Treatment", category: "face" },
  ],
  body: [
    { id: 7, title: "Body Contouring Results", category: "body" },
    { id: 8, title: "Laser Treatment", category: "body" },
    { id: 9, title: "Skin Tightening", category: "body" },
    { id: 10, title: "Body Rejuvenation", category: "body" },
    { id: 11, title: "Cellulite Treatment", category: "body" },
    { id: 12, title: "Body Sculpting", category: "body" },
  ],
  hair: [
    { id: 13, title: "Laser Hair Removal", category: "hair" },
    { id: 14, title: "Hair Reduction Results", category: "hair" },
    { id: 15, title: "Permanent Hair Removal", category: "hair" },
    { id: 16, title: "Hair Treatment", category: "hair" },
    { id: 17, title: "Hair Restoration", category: "hair" },
    { id: 18, title: "Hair Therapy", category: "hair" },
  ]
};

type FilterType = 'all' | 'face' | 'body' | 'hair';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const allImages = [...galleryImages.face, ...galleryImages.body, ...galleryImages.hair];
  
  const getFilteredImages = () => {
    if (activeFilter === 'all') return allImages;
    return galleryImages[activeFilter] || [];
  };

  const filteredImages = getFilteredImages();

  return (
    <div>
      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-left">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Explore our gallery showcasing the amazing results achieved by our clients. 
            See the difference our professional treatments can make.
          </p>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {(['all', 'face', 'body', 'hair'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-light uppercase tracking-wide text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group-hover:scale-105">
                  <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{image.title}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-light text-gray-900 text-center">
                      {image.title}
                    </h3>
                    <p className="text-accent text-center text-sm uppercase tracking-wide mt-2">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Book a consultation with our expert team to discuss your goals and discover 
            which treatments are right for you.
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