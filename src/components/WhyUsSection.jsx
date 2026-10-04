import React from 'react';
import { HeartHandshake, ShieldCheck, Scissors, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/storeData';

export default function WhyUsSection() {
  const iconMap = {
    HeartHandshake: HeartHandshake,
    ShieldCheck: ShieldCheck,
    Scissors: Scissors,
    MapPin: MapPin,
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-3">
            <span>❤️</span>
            <span>The Neighbourhood Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight mb-3 font-['Nunito']">
            Why Pet Parents Choose Casper's
          </h2>
          <p className="text-base text-[#706A73]">
            Casper's isn't trying to be the biggest pet website. It's the pet shop you know and trust in your neighbourhood.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || HeartHandshake;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E9E1EC] hover:border-[#54158A]/30 transition-all duration-300 hover:shadow-md text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F3ECF8] border border-[#E9E1EC] flex items-center justify-center text-[#54158A] mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#29242D] mb-1 font-['Nunito']">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#54158A] uppercase tracking-wider block mb-3">
                    {item.short}
                  </span>

                  <p className="text-sm text-[#706A73] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E1EC]/60 flex items-center text-xs text-[#706A73]">
                  <span>🐾 Tested by our own pets</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
