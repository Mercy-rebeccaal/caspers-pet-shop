import React from 'react';
import { BRANDS } from '../data/storeData';
import { ShieldCheck } from 'lucide-react';

export default function BrandSection({ onSelectBrand }) {
  return (
    <section className="py-12 bg-[#FAF7F0] border-y border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#54158A]" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#706A73]">
            Brands You Trust
          </h2>
        </div>

        <p className="text-xs text-[#706A73] mb-8">
          100% Genuine, authentic inventory directly sourced for your pets
        </p>

        {/* Subtle, elegant monochrome brand cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="bg-[#FFFDF9] border border-[#E9E1EC] hover:border-[#54158A]/40 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center transition-all duration-200 hover:shadow-sm group cursor-pointer"
              onClick={() => onSelectBrand && onSelectBrand(b.name)}
            >
              <span className="font-extrabold text-sm sm:text-base text-[#29242D] tracking-tight group-hover:text-[#54158A] transition-colors font-['Nunito']">
                {b.name}
              </span>
              <span className="text-[10px] text-[#706A73] mt-0.5 line-clamp-1">
                {b.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
