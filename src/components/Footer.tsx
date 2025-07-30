import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light text-gray-900 uppercase tracking-wide mb-4">
              MB DERMA
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional dermatology and aesthetic treatments. 
              We&apos;re here to bring the beauty to you!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-light text-gray-900 uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-accent text-sm transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/pricelist" className="text-gray-600 hover:text-accent text-sm transition-colors">
                  Pricelist
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-accent text-sm transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-light text-gray-900 uppercase tracking-wide mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Phone: 07379376774</p>
              <p>Email: mb.derma@aol.com</p>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.807.876 1.297 2.027 1.297 3.324s-.49 2.448-1.297 3.324c-.876.807-2.027 1.297-3.324 1.297zm7.098 0c-1.297 0-2.448-.49-3.324-1.297-.807-.876-1.297-2.027-1.297-3.324s.49-2.448 1.297-3.324c.876-.807 2.027-1.297 3.324-1.297s2.448.49 3.324 1.297c.807.876 1.297 2.027 1.297 3.324s-.49 2.448-1.297 3.324c-.876.807-2.027 1.297-3.324 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 MB Derma. All rights reserved. | Design & Development with SLT Media
          </p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}