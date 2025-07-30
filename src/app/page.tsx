import HeroSection from "../components/HeroSection";
import CardGrid from "../components/CardGrid";
import TestimonialBlock from "../components/TestimonialBlock";
import { testimonials, blogPosts } from "../data/sampleData";
import Link from "next/link";

export default function Home() {
  const aboutCards = [
    {
      title: "Face",
      image: "/images/about/face.jpg",
      description: "Advanced facial treatments including dermal fillers, Botox, and skin rejuvenation.",
      href: "/services?category=face"
    },
    {
      title: "Body", 
      image: "/images/about/body.jpg",
      description: "Body contouring, laser hair removal, and comprehensive body treatments.",
      href: "/services?category=body"
    },
    {
      title: "Hair",
      image: "/images/about/hair.jpg", 
      description: "Professional hair restoration and laser hair removal treatments.",
      href: "/services?category=hair"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        headline="We're here to bring the beauty to you!"
      />

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              At MB Derma, we believe that everyone deserves to feel confident and beautiful in their own skin. 
              Our expert team combines years of experience with the latest aesthetic treatments to help you achieve 
              your beauty goals safely and effectively.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re looking for anti-aging treatments, skin rejuvenation, or body contouring, 
              we provide personalized care in a comfortable, professional environment.
            </p>
          </div>
          
          <CardGrid cards={aboutCards} columns={3} />
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12 uppercase tracking-wide">
            Latest from Our Blog
          </h2>
          
          {/* Featured Post */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
            <div className="aspect-[16/9] relative bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Blog Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {blogPosts[0].excerpt}
              </p>
              <Link 
                href={blogPosts[0].href}
                className="inline-block text-accent hover:text-opacity-80 text-sm uppercase tracking-wide font-light transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/blog"
              className="inline-block bg-accent text-white px-6 py-2 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBlock testimonials={testimonials.slice(0, 6)} />
    </div>
  );
}
