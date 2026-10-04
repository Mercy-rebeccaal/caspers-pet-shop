import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { ShoppingBag, Scissors, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onShopClick, onGroomingClick }) {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] border-b border-[#E9E1EC]/80 py-12 lg:py-20">
      {/* Subtle organic background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F3ECF8]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#54158A]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold text-xs tracking-wider uppercase mb-5 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-[#54158A]" />
              FOR PETS, WITH LOVE ❤️
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#29242D] tracking-tight leading-[1.15] mb-5 font-['Nunito']">
              Everything Your Pet Needs, <br className="hidden sm:inline" />
              <span className="text-[#54158A] relative inline-block">
                All Under One Roof.
                {/* Hand-drawn style underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#54158A]/20"
                  viewBox="0 0 260 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C80 3 180 3 257 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-[#706A73] leading-relaxed mb-8 max-w-xl">
              Pet food, accessories and professional grooming for the pets who are part of your family.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="w-5 h-5 text-amber-200" />
                <span>Shop Pet Essentials</span>
              </button>

              <button
                onClick={onGroomingClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFFDF9] hover:bg-[#F3ECF8] text-[#54158A] font-bold text-base px-6 py-3.5 rounded-xl border-2 border-[#54158A]/30 hover:border-[#54158A] transition-all duration-150"
              >
                <Scissors className="w-5 h-5 text-[#54158A]" />
                <span>Book Grooming</span>
              </button>
            </div>

            {/* Secondary Location & Local Trust Badge */}
            <div className="pt-4 border-t border-[#E9E1EC] flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#706A73]">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#54158A] transition group"
              >
                <div className="w-7 h-7 rounded-full bg-[#F3ECF8] flex items-center justify-center text-[#54158A] group-hover:bg-[#54158A] group-hover:text-white transition">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-semibold text-[#29242D] underline decoration-dotted underline-offset-4">
                  Madambakkam, Tambaram, Chennai
                </span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-[#706A73]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Open till 10:00 PM tonight</span>
              </div>
            </div>
          </div>

          {/* Right Column: Natural Pet Lifestyle Photo with Brand Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background framed shape */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#54158A]/20 via-[#F3ECF8] to-amber-100/50 rounded-3xl transform -rotate-2 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFFDF9] bg-[#FFFDF9]">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=85"
                  alt="A happy golden puppy and friendly domestic cat resting together peacefully"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-between text-left">
                  <div>
                    <p className="text-xs font-bold text-[#54158A] uppercase tracking-wider">
                      Caring for Chennai Pets
                    </p>
                    <p className="text-sm font-semibold text-[#29242D]">
                      Wholesome Meals & Stress-free Grooming
                    </p>
                  </div>
                  <span className="text-2xl" aria-hidden="true">🐾</span>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FFFDF9] border border-[#E9E1EC] px-3.5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float-gentle">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500">
                  <Sparkles className="w-5 h-5 fill-amber-400 text-amber-500" />
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-500 text-xs tracking-tight">
                    ★★★★★
                  </div>
                  <p className="text-xs font-bold text-[#29242D]">Google Reviews</p>
                  <p className="text-[10px] text-[#706A73]">Madambakkam local favourite</p>
                </div>
              </div>

              {/* Floating Grooming Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-[#54158A] text-white px-4 py-2.5 rounded-2xl shadow-xl items-center gap-2.5 border-2 border-white">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-amber-300" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight">Gentle Grooming</p>
                  <p className="text-[11px] text-[#F3ECF8] font-medium">Baths, Haircuts & Hygiene</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
