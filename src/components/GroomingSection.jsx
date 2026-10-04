import React from 'react';
import { GROOMING_SERVICES, STORE_INFO } from '../data/storeData';
import { Scissors, MapPin, Phone, Check, Sparkles } from 'lucide-react';

export default function GroomingSection({ onOpenGrooming }) {
  return (
    <section id="grooming" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E9E1EC] relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header & Visual Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-4">
              <Scissors className="w-3.5 h-3.5 text-[#54158A]" />
              <span>Pet Grooming Parlour</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29242D] tracking-tight leading-tight mb-4 font-['Nunito']">
              A Little Pampering <br />
              <span className="text-[#54158A]">For Your Best Friend</span>
            </h2>

            <p className="text-base sm:text-lg text-[#706A73] leading-relaxed mb-6">
              From a refreshing bath to a proper grooming session, we help your pet look their best and feel even better.
            </p>

            <p className="text-sm text-[#706A73] leading-relaxed mb-8">
              Our gentle handling process ensures that even shy, nervous, or first-time puppies and kittens feel calm, relaxed, and loved throughout the grooming experience.
            </p>

            {/* Quick Contact & Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={() => onOpenGrooming()}
                className="inline-flex items-center justify-center gap-2 bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Scissors className="w-5 h-5 text-amber-200" />
                <span>Book a Grooming Session</span>
              </button>

              <a
                href={STORE_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold text-base px-5 py-3.5 rounded-xl transition"
              >
                <Phone className="w-4 h-4 text-[#54158A]" />
                <span>Call {STORE_INFO.phone}</span>
              </a>
            </div>

            {/* Address Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#706A73]">
              <MapPin className="w-4 h-4 text-[#54158A]" />
              <span>Madambakkam, Tambaram (Next to Bank of Baroda)</span>
            </div>
          </div>

          {/* Right Lifestyle Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80"
                  alt="A clean, happy freshly groomed fluffy dog getting gentle blow-dry pampering"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Float Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E9E1EC] max-w-xs text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <p className="text-xs font-bold text-[#29242D]">Clean, Sanitized Facility</p>
                </div>
                <p className="text-[11px] text-[#706A73]">
                  Fresh warm towels, chemical-free herbal shampoos, and sterilized grooming clippers for every pet.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Grooming Services Cards Grid */}
        <div className="mt-8">
          <div className="text-center max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-[#29242D] font-['Nunito']">
              Our Professional Services
            </h3>
            <p className="text-xs text-[#706A73] mt-1">
              Select any package below or customize according to your pet's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROOMING_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#E9E1EC] hover:border-[#54158A]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#54158A] bg-[#F3ECF8] px-2.5 py-1 rounded-md">
                      {srv.time}
                    </span>
                    <span className="text-sm font-extrabold text-[#29242D]">
                      {srv.priceRange}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#29242D] group-hover:text-[#54158A] transition-colors mb-1 font-['Nunito']">
                    {srv.name}
                  </h4>
                  <p className="text-xs font-semibold text-amber-700 mb-2">
                    {srv.tagline}
                  </p>
                  <p className="text-xs text-[#706A73] leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#706A73] border-t border-[#E9E1EC]/60 pt-3">
                    {srv.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenGrooming(srv.name)}
                  className="w-full bg-[#FAF7F0] group-hover:bg-[#54158A] border border-[#E9E1EC] group-hover:border-[#54158A] text-[#54158A] group-hover:text-white font-bold py-2.5 rounded-xl text-xs transition duration-200"
                >
                  Book {srv.name}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
