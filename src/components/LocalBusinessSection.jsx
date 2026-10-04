import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function LocalBusinessSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF7F0] border-b border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight mb-2 font-['Nunito']">
            Come Say Hello 👋
          </h2>
          <p className="text-sm sm:text-base text-[#706A73]">
            Visit us in person with your dog or cat. We'd love to meet you and your pet!
          </p>
        </div>

        {/* Content Box: Address Details & Map */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#E9E1EC] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-left">
          
          {/* Left Details Info */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E9E1EC]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#54158A] uppercase tracking-wider mb-2">
                <span>Neighborhood Pet Store</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#29242D] mb-4 font-['Nunito']">
                {STORE_INFO.name}
              </h3>

              {/* Address Block */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F3ECF8] text-[#54158A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706A73]">
                      Address
                    </h4>
                    <p className="text-sm font-semibold text-[#29242D] leading-snug mt-0.5">
                      {STORE_INFO.address.line1},<br />
                      <span className="text-[#54158A] font-bold">{STORE_INFO.address.landmark}</span>,<br />
                      {STORE_INFO.address.area},<br />
                      {STORE_INFO.address.city},<br />
                      {STORE_INFO.address.state} – {STORE_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F3ECF8] text-[#54158A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706A73]">
                      Phone
                    </h4>
                    <a
                      href={STORE_INFO.phoneTel}
                      className="text-base font-extrabold text-[#54158A] hover:underline block mt-0.5"
                    >
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F3ECF8] text-[#54158A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706A73]">
                      Hours
                    </h4>
                    <p className="text-sm font-semibold text-[#29242D] mt-0.5">
                      {STORE_INFO.hours}
                    </p>
                    <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {STORE_INFO.hoursBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#E9E1EC] flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3.5 px-4 rounded-xl shadow-sm text-sm transition"
              >
                <Navigation className="w-4 h-4 text-amber-200" />
                <span>Get Directions</span>
              </a>

              <a
                href={STORE_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FAF7F0] hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold py-3.5 px-4 rounded-xl text-sm transition"
              >
                <Phone className="w-4 h-4 text-[#54158A]" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

          {/* Right Embedded Interactive Map */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[460px] bg-slate-100">
            <iframe
              title="Casper's Pet Foods Accessories Grooming Location in Madambakkam, Tambaram"
              src={STORE_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Overlay pill for direct Google Maps tap */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#29242D] hover:text-[#54158A] text-xs font-bold px-3 py-2 rounded-xl shadow-md border border-[#E9E1EC] flex items-center gap-1.5 transition"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
