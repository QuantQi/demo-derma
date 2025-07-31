interface Testimonial {
  text: string;
  author: string;
  rating?: number;
}

interface TestimonialBlockProps {
  testimonials: Testimonial[];
  title?: string;
  showRatings?: boolean;
  className?: string;
}

export default function TestimonialBlock({ 
  testimonials, 
  title = "Reviews",
  showRatings = true,
  className = ""
}: TestimonialBlockProps) {
  return (
    <section className={`py-16 bg-beige ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center text-gold mb-12 uppercase tracking-wide">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
              {/* Gold quotation marks */}
              <div className="absolute top-4 left-4">
                <svg className="w-8 h-8 text-gold opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {showRatings && testimonial.rating && (
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < (testimonial.rating || 0) ? 'text-gold' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              
              <blockquote className="text-dark-grey text-center leading-relaxed mb-4 pt-4">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              <p className="text-gold text-center font-light text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}