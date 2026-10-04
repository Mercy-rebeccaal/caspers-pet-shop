import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { STORE_INFO } from '../data/storeData';
import { Phone, MapPin, Clock, ShoppingBag, Menu, X, Scissors } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenGrooming, activeTab, onSelectTab }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'dog', label: 'Dog' },
    { id: 'cat', label: 'Cat' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onSelectTab(id);
    setMobileMenuOpen(false);

    // Smooth scroll to section if matching ID exists
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF9]/95 backdrop-blur-md transition-shadow duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#54158A] text-[#FFFDF9] text-xs py-1.5 px-4 border-b border-[#3B0D63]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#F3ECF8]" />
              Madambakkam, Tambaram, Chennai
            </span>
            <span className="hidden md:inline-block opacity-40">•</span>
            <span className="hidden md:flex items-center gap-1 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#F3ECF8]" />
              {STORE_INFO.hoursBadge} (Daily 9 AM – 10 PM)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-amber-200 font-medium">
              Free delivery in Madambakkam & Tambaram on orders ₹500+
            </span>
            <a
              href={STORE_INFO.phoneTel}
              className="hidden lg:flex items-center gap-1 font-bold text-white hover:text-[#F3ECF8] transition"
            >
              <Phone className="w-3 h-3" />
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b transition-all duration-200 ${
          isScrolled ? 'border-[#E9E1EC] shadow-sm py-2.5' : 'border-[#E9E1EC]/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#54158A] rounded-lg"
          >
            <Logo variant="horizontal" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-[#54158A] bg-[#F3ECF8]'
                      : 'text-[#29242D] hover:text-[#54158A] hover:bg-[#FAF7F0]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Cart & Book Grooming */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-[#29242D] hover:text-[#54158A] hover:bg-[#F3ECF8] rounded-full transition-colors flex items-center justify-center border border-[#E9E1EC] sm:border-transparent"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#54158A] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Grooming Button */}
            <button
              onClick={onOpenGrooming}
              className="hidden sm:inline-flex items-center gap-2 bg-[#54158A] hover:bg-[#3B0D63] text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#54158A] focus:ring-offset-2"
            >
              <Scissors className="w-4 h-4 text-amber-200" />
              <span>Book Grooming</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#29242D] hover:text-[#54158A] hover:bg-[#F3ECF8] rounded-lg transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#E9E1EC] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition ${
                  activeTab === link.id
                    ? 'text-[#54158A] bg-[#F3ECF8]'
                    : 'text-[#29242D] hover:bg-[#FAF7F0]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E9E1EC] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGrooming();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#54158A] text-white font-semibold py-2.5 rounded-xl shadow-sm"
            >
              <Scissors className="w-4 h-4 text-amber-200" />
              Book Grooming Appointment
            </button>

            <a
              href={STORE_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 bg-[#FAF7F0] border border-[#E9E1EC] text-[#54158A] font-semibold py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#54158A]" />
              Call Casper's: {STORE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
