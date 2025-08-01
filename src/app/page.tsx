import HeroSection from "../components/HeroSection";
import TestimonialBlock from "../components/TestimonialBlock";
import { testimonials, blogPosts, serviceCategories } from "../data/sampleData";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        headline={["We're here to", "bring the beauty to you!"]}
        description="Professional dermatology and aesthetic treatments in a comfortable, caring environment"
      />

      {/* About Section */}
      <section className="py-16 bg-white wavy-separator">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Vertical "ABOUT US" text */}
            <div className="relative bg-beige rounded-lg p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
              <h2 className="text-6xl lg:text-8xl font-serif text-gold transform -rotate-90 whitespace-nowrap tracking-wider">
                ABOUT US
              </h2>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-gold mb-6">About us</h3>
              <p className="text-lg text-dark-grey leading-relaxed">
                At MB Derma, we believe that everyone deserves to feel confident and beautiful in their own skin. 
                Our passion for health and aesthetics drives us to provide exceptional care and achieve outstanding results 
                for every client who walks through our doors.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                With years of training, ongoing research, and a commitment to the latest aesthetic technologies, 
                we ensure that each treatment is personalized to your unique needs. We value every client and 
                strive to make your experience comfortable, professional, and transformative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div className="text-center space-y-4">
                  {/* Circular image placeholder */}
                  <div className="w-48 h-48 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gold/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {category.title === 'Face' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            )}
                            {category.title === 'Body' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v18m9-9H3" />
                            )}
                            {category.title === 'Hair' && (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            )}
                          </svg>
                        </div>
                        <p className="text-gold text-xs font-light">{category.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-gold group-hover:text-opacity-80 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-dark-grey leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beige to-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-8">
            How we achieve amazing results
          </h2>
          <Link 
            href="/gallery"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Gallery
          </Link>
        </div>
      </section>

      {/* Reviews Preview */}
      <TestimonialBlock testimonials={testimonials.slice(0, 5)} title="Reviews" />

      {/* Blog Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center text-gold mb-12 uppercase tracking-wide">
            Latest from Our Blog
          </h2>
          
          {/* Featured Post */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="aspect-[4/3] relative bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gold text-sm">Blog Image</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-light text-gold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-dark-grey leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <Link 
                  href={blogPosts[0].href}
                  className="inline-block text-gold hover:text-opacity-80 text-sm uppercase tracking-wide font-light transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
