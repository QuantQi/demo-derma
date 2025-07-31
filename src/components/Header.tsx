'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/about', 
      label: 'About',
      subItems: [
        { href: '/about', label: 'About us' },
        { href: '/reviews', label: 'Reviews' },
        { href: '/gallery', label: 'Gallery' }
      ]
    },
    { 
      href: '/services', 
      label: 'Treatments',
      subItems: [
        { href: '/services', label: 'Services' },
        { href: '/pricelist', label: 'Pricelist' }
      ]
    },
    { href: '/blog', label: 'Blog' },
    { href: '/forms', label: 'Forms' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-light text-gold hover:text-opacity-80 transition-colors uppercase tracking-wide"
            >
              MB DERMA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-wide font-light text-dark-grey hover:text-gold transition-colors py-2"
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-dark-grey hover:text-gold hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Media Icons & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="text-gold hover:text-opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.144.219-1.997.219-1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997s.359.219.359 1.219c0 1.144-.219 1.997-.219 1.997l.621 2.757c.078.078.141.219.299.158.219-.078.299-.219.299-.438 0-.141-.062-.299-.062-.299l-.839-3.096c-.062-.219-.062-.438 0-.656.078-.299.219-.578.219-.937 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656 0-.578-.219-1.078-.219-1.656 0-.578.219-1.078.219-1.656z"/>
                </svg>
              </a>
            </div>
            <div className="flex space-x-1 ml-4">
              <img src="/flags/uk.png" alt="English" className="w-6 h-4 cursor-pointer hover:opacity-80 transition-opacity" />
              <img src="/flags/poland.png" alt="Polish" className="w-6 h-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-grey hover:text-gold"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm uppercase tracking-wide font-light text-dark-grey hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-6">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-xs text-dark-grey hover:text-gold transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}