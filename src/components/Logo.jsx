import React from 'react';

export default function Logo({ variant = 'horizontal', className = '' }) {
  if (variant === 'badge') {
    return (
      <svg
        viewBox="0 0 280 280"
        className={`w-full h-auto select-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Casper's Pet Foods Accessories Grooming Logo"
      >
        <defs>
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3B0D63" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Badge */}
        <circle cx="140" cy="140" r="132" fill="#54158A" filter="url(#badgeShadow)" />
        <circle cx="140" cy="140" r="126" fill="none" stroke="#F3ECF8" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
        
        {/* Inner White Circle with Pet Illustrations */}
        <circle cx="140" cy="108" r="76" fill="#FFFDF9" stroke="#E9E1EC" strokeWidth="3" />
        
        {/* Friendly Illustrated Dog & Cat */}
        <g id="pets" transform="translate(140, 110)">
          {/* Dog (Left) */}
          <g transform="translate(-32, 2)">
            {/* Floppy Dog Ears */}
            <path d="M-22,-20 C-32,-22 -38,-6 -34,14 C-32,24 -24,20 -20,10 Z" fill="#8D5B4C" />
            <path d="M6,-20 C12,-22 18,-6 14,14 C12,24 4,20 0,10 Z" fill="#75473A" opacity="0.8" />
            
            {/* Dog Head */}
            <ellipse cx="-8" cy="-6" rx="24" ry="22" fill="#DEAB82" />
            
            {/* Dog Snout / Muzzle */}
            <ellipse cx="-8" cy="4" rx="14" ry="12" fill="#FFF2DF" />
            <ellipse cx="-8" cy="-1" rx="6" ry="4" fill="#3B0D63" />
            
            {/* Dog Mouth & Tongue */}
            <path d="M-10,3 Q-8,7 -6,3" fill="none" stroke="#3B0D63" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M-8,5 Q-8,12 -5,12 Q-2,12 -3,5 Z" fill="#E86E78" />
            
            {/* Dog Eyes & Eye Patch */}
            <circle cx="-16" cy="-10" r="6" fill="#8D5B4C" opacity="0.4" />
            <circle cx="-14" cy="-9" r="3" fill="#29242D" />
            <circle cx="-15" cy="-10" r="1" fill="#FFFDF9" />
            <circle cx="-2" cy="-9" r="3" fill="#29242D" />
            <circle cx="-3" cy="-10" r="1" fill="#FFFDF9" />
            
            {/* Cute Dog Collar */}
            <path d="M-20,18 Q-8,24 4,18" fill="none" stroke="#54158A" strokeWidth="4" strokeLinecap="round" />
            <circle cx="-8" cy="22" r="3" fill="#E5A93C" />
          </g>

          {/* Cat (Right) */}
          <g transform="translate(32, 4)">
            {/* Cat Ears */}
            <polygon points="12,-32 26,-8 6,-10" fill="#E68C52" />
            <polygon points="14,-28 23,-9 9,-11" fill="#F8C7AB" />
            <polygon points="-16,-32 -4,-8 -22,-10" fill="#E68C52" />
            <polygon points="-14,-28 -5,-9 -19,-11" fill="#F8C7AB" />

            {/* Cat Head */}
            <circle cx="5" cy="-6" r="22" fill="#F4A261" />

            {/* Cat Snout */}
            <ellipse cx="5" cy="4" rx="10" ry="8" fill="#FFFDF9" />
            <polygon points="3,0 7,0 5,3" fill="#E86E78" />

            {/* Cat Eyes */}
            <ellipse cx="-2" cy="-8" rx="3.5" ry="4.5" fill="#29242D" />
            <circle cx="-3" cy="-10" r="1.2" fill="#FFFDF9" />
            <ellipse cx="12" cy="-8" rx="3.5" ry="4.5" fill="#29242D" />
            <circle cx="11" cy="-10" r="1.2" fill="#FFFDF9" />

            {/* Cat Whiskers */}
            <line x1="-12" y1="2" x2="-2" y2="4" stroke="#706A73" strokeWidth="1" strokeLinecap="round" />
            <line x1="-12" y1="7" x2="-2" y2="6" stroke="#706A73" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="4" x2="22" y2="2" stroke="#706A73" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="6" x2="22" y2="7" stroke="#706A73" strokeWidth="1" strokeLinecap="round" />

            {/* Little Paw Waving */}
            <ellipse cx="-16" cy="12" rx="7" ry="5" fill="#FFFDF9" stroke="#E68C52" strokeWidth="1.5" />
          </g>
        </g>

        {/* Brand Typography: Casper's */}
        <text
          x="140"
          y="218"
          textAnchor="middle"
          fill="#FFFDF9"
          fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="0.5"
        >
          Casper's
        </text>

        {/* Decorative Lines and Supporting Text */}
        <line x1="28" y1="234" x2="68" y2="234" stroke="#F3ECF8" strokeWidth="1.5" opacity="0.7" />
        <circle cx="72" cy="234" r="2" fill="#F3ECF8" opacity="0.8" />
        
        <text
          x="140"
          y="238"
          textAnchor="middle"
          fill="#F3ECF8"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="10"
          letterSpacing="2"
        >
          FOOD • ACCESSORIES • GROOMING
        </text>

        <circle cx="208" cy="234" r="2" fill="#F3ECF8" opacity="0.8" />
        <line x1="212" y1="234" x2="252" y2="234" stroke="#F3ECF8" strokeWidth="1.5" opacity="0.7" />

        {/* Neighbourhood Marker */}
        <text
          x="140"
          y="256"
          textAnchor="middle"
          fill="#E9E1EC"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="500"
          fontSize="8.5"
          letterSpacing="1"
          opacity="0.9"
        >
          MADAMBAKKAM • CHENNAI
        </text>
      </svg>
    );
  }

  // Horizontal variant for Navbar & Header
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#54158A] p-0.5 shadow-sm flex-shrink-0 flex items-center justify-center border border-[#F3ECF8]/40">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="#54158A" />
          <circle cx="50" cy="42" r="32" fill="#FFFDF9" />
          
          {/* Dog */}
          <ellipse cx="37" cy="40" rx="12" ry="11" fill="#DEAB82" />
          <path d="M28,32 C23,30 20,38 23,46 Z" fill="#8D5B4C" />
          <ellipse cx="37" cy="45" rx="7" ry="5" fill="#FFF2DF" />
          <circle cx="37" cy="43" r="2" fill="#3B0D63" />
          <circle cx="33" cy="38" r="1.5" fill="#29242D" />
          <circle cx="41" cy="38" r="1.5" fill="#29242D" />

          {/* Cat */}
          <circle cx="63" cy="41" r="10.5" fill="#F4A261" />
          <polygon points="67,29 74,40 64,39" fill="#E68C52" />
          <polygon points="53,29 59,40 50,39" fill="#E68C52" />
          <ellipse cx="63" cy="45" rx="5" ry="4" fill="#FFFDF9" />
          <polygon points="62,44 64,44 63,45.5" fill="#E86E78" />
          <ellipse cx="59" cy="40" rx="1.5" ry="2" fill="#29242D" />
          <ellipse cx="67" cy="40" rx="1.5" ry="2" fill="#29242D" />

          {/* Mini Casper's Text */}
          <text x="50" y="85" textAnchor="middle" fill="#FFFDF9" fontSize="15" fontWeight="900" fontFamily="'Nunito', sans-serif">
            Casper's
          </text>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#54158A] font-['Nunito']">
            Casper's
          </span>
          <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider bg-[#F3ECF8] text-[#54158A] px-2 py-0.5 rounded-full">
            Pet Shop
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#706A73] tracking-wider uppercase">
          <span>Food</span>
          <span>•</span>
          <span>Accessories</span>
          <span>•</span>
          <span>Grooming</span>
        </div>
      </div>
    </div>
  );
}
