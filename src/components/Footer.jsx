import React from 'react';
import Logo from './Logo';
import { STORE_INFO } from '../data/storeData';
import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onSelectTab, onOpenGrooming }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'shop', label: 'Shop All' },
    { id: 'dog', label: 'Dog Food & Treats' },
    { id: 'cat', label: 'Cat Food & Toys' },
    { id: 'accessories', label: 'Collars & Leashes' },
    { id: 'grooming', label: 'Grooming Parlour' },
    { id: 'about', label: 'About Casper\'s' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#29242D] text-[#FAF7F0] pt-16 pb-24 sm:pb-12 border-t border-black/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-48 sm:w-56">
              <Logo variant="badge" className="max-w-[200px]" />
            </div>

            <p className="text-sm text-[#E9E1EC]/80 max-w-sm leading-relaxed">
              {STORE_INFO.tagline}
            </p>

            <div className="text-xs text-[#E9E1EC]/70 space-y-1 pt-1">
              <p>Your local neighbourhood pet store in Madambakkam, Tambaram, Chennai.</p>
              <p>100% genuine pet foods, toys, accessories, and stress-free grooming care.</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1B8755] flex items-center justify-center text-white transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#54158A] flex items-center justify-center text-white transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#54158A] flex items-center justify-center text-white transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Explore Casper's
            </h3>
            <ul className="space-y-2 text-sm text-[#E9E1EC]/80">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onSelectTab(link.id);
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Store Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Neighbourhood Store
            </h3>

            <div className="space-y-3 text-sm text-[#E9E1EC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 mt-1 flex-shrink-0" />
                <span className="leading-snug">
                  {STORE_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a href={STORE_INFO.phoneTel} className="font-bold text-white hover:underline">
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGrooming}
                className="inline-flex items-center gap-2 bg-[#54158A] hover:bg-[#3B0D63] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
              >
                <span>Book a Grooming Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E1EC]/60">
          <p>© 2026 Casper's Pet Foods Accessories Grooming. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Chennai Pets
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
