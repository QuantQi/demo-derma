import Link from 'next/link';
import { blogPosts } from "../../data/sampleData";

// Extended blog posts to match specifications
const extendedBlogPosts = [
  ...blogPosts,
  {
    title: "Cellulite Removal: Effective Treatments and Results",
    excerpt: "Discover the most effective cellulite removal treatments and what results you can expect from each approach.",
    image: "/images/blog/cellulite-removal.jpg",
    href: "/blog/cellulite-removal-effective-treatments",
    publishDate: "2024-01-20",
    category: "Body Treatments"
  },
  {
    title: "Non-Surgical Facelift: The Nlift Treatment",
    excerpt: "Learn about the revolutionary Nlift treatment for non-surgical facial rejuvenation and lifting.",
    image: "/images/blog/nlift-treatment.jpg",
    href: "/blog/non-surgical-facelift-nlift-treatment",
    publishDate: "2024-01-18",
    category: "Face Treatments"
  },
  {
    title: "Zaffiro Thermolifting: Advanced Skin Tightening",
    excerpt: "Explore the benefits of Zaffiro Thermolifting for skin tightening and rejuvenation.",
    image: "/images/blog/zaffiro-thermolifting.jpg",
    href: "/blog/zaffiro-thermolifting-advanced-skin-tightening",
    publishDate: "2024-01-12",
    category: "Treatments"
  },
  {
    title: "Nboost Skin Renewal: Revolutionary Treatment",
    excerpt: "Discover how Nboost skin renewal can transform your skin with advanced technology.",
    image: "/images/blog/nboost-skin-renewal.jpg",
    href: "/blog/nboost-skin-renewal-revolutionary-treatment",
    publishDate: "2024-01-08",
    category: "Skin Care"
  }
];

export default function BlogPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-dark-grey">Home</span>
            <span className="text-dark-grey mx-2">/</span>
            <span className="text-gold">Blog</span>
          </nav>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gold mb-8">
            Blog
          </h1>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedBlogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gold/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-gold text-xs font-light">Blog Post</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-dark-grey text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-grey/70 text-xs">
                      {new Date(post.publishDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <Link
                      href={post.href}
                      className="inline-block border border-gold text-gold px-4 py-2 rounded-full text-xs uppercase tracking-wide font-light hover:bg-gold hover:text-white transition-all"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}