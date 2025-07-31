import Link from 'next/link';

const galleryCategories = [
  {
    name: "Face",
    image: "/images/gallery/face-thumb.jpg",
    link: "/gallery/face"
  },
  {
    name: "Body", 
    image: "/images/gallery/body-thumb.jpg",
    link: "/gallery/body"
  },
  {
    name: "Hair",
    image: "/images/gallery/hair-thumb.jpg", 
    link: "/gallery/hair"
  }
];

export default function GalleryPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            Gallery
          </h1>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="text-center space-y-4">
                  {/* Circular image placeholder */}
                  <div className="w-48 h-48 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gold/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {category.name === 'Face' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            )}
                            {category.name === 'Body' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v18m9-9H3" />
                            )}
                            {category.name === 'Hair' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            )}
                          </svg>
                        </div>
                        <p className="text-gold text-xs font-light">{category.name}</p>
                      </div>
                      {/* MB Derma logo watermark effect */}
                      <div className="absolute bottom-2 right-2 text-gold/30 text-xs font-light">
                        MB DERMA
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-gold group-hover:text-opacity-80 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}