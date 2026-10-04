import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Phone, MessageCircle, Scissors, ShoppingBag } from 'lucide-react';

export default function MobileStickyBar({ onOpenGrooming, onOpenCart, cartCount }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#E9E1EC] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-4 gap-1.5 items-center">
        
        {/* Call Button */}
        <a
          href={STORE_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#29242D] hover:text-[#54158A] hover:bg-[#FAF7F0] transition active:scale-95"
        >
          <Phone className="w-5 h-5 text-[#54158A]" />
          <span className="text-[10px] font-bold mt-1">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#29242D] hover:text-emerald-700 hover:bg-[#FAF7F0] transition active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold mt-1">WhatsApp</span>
        </a>

        {/* Book Grooming Button */}
        <button
          onClick={onOpenGrooming}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#54158A] text-white transition active:scale-95 shadow-sm"
        >
          <Scissors className="w-5 h-5 text-amber-200" />
          <span className="text-[10px] font-bold mt-1">Grooming</span>
        </button>

        {/* Cart Button */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#29242D] hover:text-[#54158A] hover:bg-[#FAF7F0] transition active:scale-95"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#54158A]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#54158A] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold mt-1">Cart</span>
        </button>

      </div>
    </div>
  );
}
