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
  title = "What Our Clients Say",
  showRatings = true,
  className = ""
}: TestimonialBlockProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-12 uppercase tracking-wide">
          {title}
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              {showRatings && testimonial.rating && (
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < (testimonial.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              <blockquote className="text-gray-700 text-center italic text-lg leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <p className="text-accent text-center font-light uppercase tracking-wide text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}