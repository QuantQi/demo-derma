import Link from 'next/link';

export default function Footer() {
  const navigationSections = {
    'About': [
      { href: '/about', label: 'About us' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/gallery', label: 'Gallery' }
    ],
    'Treatments': [
      { href: '/services', label: 'Services' },
      { href: '/pricelist', label: 'Pricelist' }
    ],
    'Forms': [
      { href: '/forms/dermal-fillers', label: 'Dermal Fillers' },
      { href: '/forms/botulinum-toxin', label: 'Botulinum Toxin' },
      { href: '/forms/fat-dissolving', label: 'Fat Dissolving' },
      { href: '/forms/micro-sclerotherapy', label: 'Micro Sclerotherapy' },
      { href: '/forms/pdo-threads', label: 'PDO Threads' }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-light text-gold uppercase tracking-wide">
              MB DERMA
            </Link>
          </div>

          {/* Navigation Sections */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-light text-gold uppercase tracking-wide mb-4">
              Home
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-grey hover:text-gold text-sm transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-light text-gold uppercase tracking-wide mb-4">
              About
            </h4>
            <ul className="space-y-2">
              {navigationSections.About.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dark-grey hover:text-gold text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-light text-gold uppercase tracking-wide mb-4">
              Treatments
            </h4>
            <ul className="space-y-2">
              {navigationSections.Treatments.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dark-grey hover:text-gold text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/blog" className="text-dark-grey hover:text-gold text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-grey hover:text-gold text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-light text-gold uppercase tracking-wide mb-4">
              Forms
            </h4>
            <ul className="space-y-2">
              {navigationSections.Forms.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dark-grey hover:text-gold text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gold hover:text-opacity-80 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gold hover:text-opacity-80 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.144.219-1.997.219-1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997l.621 2.757c.078.078.141.219.299.158.219-.078.299-.219.299-.438 0-.141-.062-.299-.062-.299l-.839-3.096c-.062-.219-.062-.438 0-.656.078-.299.219-.578.219-.937 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656z"/>
              </svg>
            </a>
            <a href="#" className="text-gold hover:text-opacity-80 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-4 bg-blue-500 flex items-center justify-center rounded-sm text-white text-xs font-bold">UK</div>
            <div className="w-6 h-4 bg-red-500 flex items-center justify-center rounded-sm text-white text-xs font-bold">PL</div>
          </div>

          {/* Copyright & Privacy */}
          <div className="text-center md:text-right">
            <p className="text-sm text-dark-grey mb-1">
              2020 MB Derma – D&C with SLT Media
            </p>
            <Link href="/privacy-policy" className="text-sm text-dark-grey hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}