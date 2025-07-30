import Link from 'next/link';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Sample blog articles data
const articleData: Record<string, {
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  content: { type: string; content: string }[];
}> = {
  'sagging-face-how-tighten-sagging-skin-face': {
    title: 'Sagging Face: How to Tighten Sagging Skin on Face',
    category: 'Skin Care',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    excerpt: 'Discover effective treatments for sagging skin and learn how to restore firmness to your face.',
    content: [
      {
        type: 'paragraph',
        content: 'As we age, our skin naturally loses elasticity and firmness, leading to sagging in various areas of the face. This common concern affects millions of people and can significantly impact self-confidence. Fortunately, modern aesthetic medicine offers numerous effective solutions to address sagging skin and restore a more youthful appearance.'
      },
      {
        type: 'heading',
        content: 'Understanding Skin Sagging'
      },
      {
        type: 'paragraph',
        content: 'Skin sagging occurs due to several factors including decreased collagen production, loss of elastin fibers, gravity, sun damage, and genetics. The areas most commonly affected include the cheeks, jowls, neck, and around the eyes. Understanding these causes helps in choosing the most appropriate treatment approach.'
      },
      {
        type: 'heading',
        content: 'Radiofrequency Skin Tightening'
      },
      {
        type: 'paragraph',
        content: 'Radiofrequency (RF) treatments use controlled heat energy to stimulate collagen production deep within the skin. This non-invasive procedure can effectively tighten loose skin and improve overall texture. Results typically become visible after 2-3 sessions, with continued improvement over 3-6 months.'
      },
      {
        type: 'heading',
        content: 'Ultrasound Therapy'
      },
      {
        type: 'paragraph',
        content: 'High-Intensity Focused Ultrasound (HIFU) treatments target specific layers of skin with precise ultrasound energy. This stimulates natural collagen regeneration and provides lifting effects similar to a surgical facelift, but without the downtime or risks associated with surgery.'
      },
      {
        type: 'heading',
        content: 'Dermal Fillers'
      },
      {
        type: 'paragraph',
        content: 'Strategic placement of dermal fillers can restore volume to areas that have lost fullness due to aging. By replacing lost volume in the cheeks and temples, we can create a natural lifting effect that reduces the appearance of sagging skin.'
      },
      {
        type: 'heading',
        content: 'Thread Lift'
      },
      {
        type: 'paragraph',
        content: 'PDO thread lifts offer a minimally invasive alternative to traditional facelifts. These biodegradable threads are inserted under the skin to provide immediate lifting while stimulating long-term collagen production for sustained results.'
      },
      {
        type: 'heading',
        content: 'Chemical Peels'
      },
      {
        type: 'paragraph',
        content: 'Professional chemical peels can improve skin texture and promote cellular turnover, which helps to tighten and firm the skin. Deeper peels can provide more dramatic results for addressing moderate skin laxity.'
      }
    ]
  }
};

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="h-64 md:h-96 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">Article Hero Image</span>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <nav className="mb-6">
              <Link href="/blog" className="text-accent hover:underline text-sm uppercase tracking-wide">
                ← Back to Blog
              </Link>
            </nav>
            
            <div className="text-accent text-sm uppercase tracking-wide mb-4">
              {article.category} • {article.readTime}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="text-gray-500 text-sm mb-6">
              Published on {new Date(article.publishDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((section: { type: string; content: string }, index: number) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-light text-gray-900 mt-12 mb-6 uppercase tracking-wide">
                    {section.content}
                  </h2>
                );
              }
              
              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>
                );
              }
              
              return null;
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Address Your Skin Concerns?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Book a consultation with our expert team to discuss the best treatment options for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-full font-light uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/complete-guide-dermal-fillers" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-light text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    The Complete Guide to Dermal Fillers
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Everything you need to know about dermal fillers, from types to aftercare.
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/winter-skin-care-tips" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-light text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    Winter Skin Care Tips
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Keep your skin healthy and glowing during the colder months with these expert tips.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Generate static params for the sample article
export async function generateStaticParams() {
  return [
    { slug: 'sagging-face-how-tighten-sagging-skin-face' },
  ];
}