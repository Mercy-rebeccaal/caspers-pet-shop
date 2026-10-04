import React from 'react';
import { TRUST_PILLARS } from '../data/storeData';

export default function TrustStrip() {
  return (
    <section className="bg-[#FFFDF9] border-b border-[#E9E1EC] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F0]/60 border border-[#E9E1EC]/60 hover:border-[#54158A]/30 transition-all text-left"
            >
              <div className="text-2xl sm:text-3xl flex-shrink-0" aria-hidden="true">
                {pillar.icon}
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#29242D] tracking-tight">
                  {pillar.label}
                </h2>
                <p className="text-xs text-[#706A73] hidden sm:block">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
