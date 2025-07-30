import Link from 'next/link';
import { blogPosts } from "../../data/sampleData";

// Extended blog posts to simulate a full blog
const extendedBlogPosts = [
  ...blogPosts,
  {
    title: "Understanding Botox: Benefits and What to Expect",
    excerpt: "Learn about Botox treatments, their benefits, and what you can expect during and after the procedure.",
    image: "/images/blog/botox-guide.jpg",
    href: "/blog/understanding-botox-benefits-what-to-expect",
    publishDate: "2024-01-20",
    category: "Treatments"
  },
  {
    title: "The Science Behind Chemical Peels",
    excerpt: "Discover how chemical peels work to rejuvenate your skin and which type is right for you.",
    image: "/images/blog/chemical-peels-science.jpg",
    href: "/blog/science-behind-chemical-peels",
    publishDate: "2024-01-18",
    category: "Skin Care"
  },
  {
    title: "Post-Treatment Care: Maximizing Your Results",
    excerpt: "Essential aftercare tips to ensure you get the best results from your aesthetic treatments.",
    image: "/images/blog/post-treatment-care.jpg",
    href: "/blog/post-treatment-care-maximizing-results",
    publishDate: "2024-01-12",
    category: "Aftercare"
  },
  {
    title: "Age Gracefully: Anti-Aging Treatments in Your 40s",
    excerpt: "The best anti-aging treatments to consider as you enter your 40s for natural, youthful results.",
    image: "/images/blog/anti-aging-40s.jpg",
    href: "/blog/age-gracefully-anti-aging-treatments-40s",
    publishDate: "2024-01-08",
    category: "Anti-Aging"
  },
  {
    title: "Laser Hair Removal: Everything You Need to Know",
    excerpt: "Complete guide to laser hair removal, including preparation, process, and expected results.",
    image: "/images/blog/laser-hair-removal-guide.jpg",
    href: "/blog/laser-hair-removal-everything-you-need-to-know",
    publishDate: "2024-01-03",
    category: "Body Treatments"
  },
  {
    title: "Building a Skincare Routine That Works",
    excerpt: "Expert tips for creating an effective daily skincare routine tailored to your skin type.",
    image: "/images/blog/skincare-routine.jpg",
    href: "/blog/building-skincare-routine-that-works",
    publishDate: "2023-12-28",
    category: "Skin Care"
  }
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-left">
            Blog
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Stay informed with the latest insights, tips, and trends in aesthetic treatments 
            and skincare from our expert team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            Featured Article
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Featured Article Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-accent text-sm uppercase tracking-wide mb-2">
                  {extendedBlogPosts[0].category}
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 leading-tight">
                  {extendedBlogPosts[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {extendedBlogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {new Date(extendedBlogPosts[0].publishDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <Link
                    href={extendedBlogPosts[0].href}
                    className="text-accent hover:text-opacity-80 text-sm uppercase tracking-wide font-light transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            Recent Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedBlogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm uppercase tracking-wide mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">
                      {new Date(post.publishDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <Link
                      href={post.href}
                      className="text-accent hover:text-opacity-80 text-sm uppercase tracking-wide font-light transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest skincare tips, treatment insights, 
            and exclusive offers.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-r-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}