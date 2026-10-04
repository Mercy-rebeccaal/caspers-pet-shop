import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function WhatsAppWidget({ onOpenGrooming }) {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      label: 'Ask about food recommendations',
      icon: '🍖',
      message: 'Hi Casper\'s! I would like recommendations for food suitable for my pet.',
    },
    {
      label: 'Check product availability & price',
      icon: '📦',
      message: 'Hi Casper\'s! Is a specific pet product currently available in your Madambakkam store?',
    },
    {
      label: 'Book a grooming session',
      icon: '✂️',
      action: () => {
        setIsOpen(false);
        onOpenGrooming();
      },
    },
    {
      label: 'Get store directions & hours',
      icon: '📍',
      message: 'Hi Casper\'s! Could you please share directions to your store near Bank of Baroda, Madambakkam?',
    },
  ];

  const handleSendPrompt = (prompt) => {
    if (prompt.action) {
      prompt.action();
      return;
    }
    const text = encodeURIComponent(prompt.message);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 text-left">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#E9E1EC] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="bg-[#1B8755] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Chat with Casper's</h3>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Typically replies within minutes
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF7F0] space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#E9E1EC] text-xs text-[#29242D] shadow-sm">
              <p className="font-semibold mb-1">Vanakkam! 👋</p>
              <p className="text-[#706A73]">
                Welcome to Casper's Pet Shop (Madambakkam, Tambaram). How can we help your pet today?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#706A73] px-1 block">
                Quick Options:
              </span>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(p)}
                  className="w-full bg-white hover:bg-[#F3ECF8] border border-[#E9E1EC] hover:border-[#54158A]/30 text-[#29242D] hover:text-[#54158A] p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition group"
                >
                  <span className="flex items-center gap-2 truncate">
                    <span>{p.icon}</span>
                    <span className="truncate">{p.label}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#706A73] group-hover:text-[#54158A] flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Direct Chat Footer */}
          <div className="p-3 bg-white border-t border-[#E9E1EC]">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1B8755] hover:bg-[#156e45] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp with Casper's</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#1B8755] hover:bg-[#156e45] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Chat with Casper's on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Chat with Casper's
        </span>
        <span className="relative flex h-2.5 w-2.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
        </span>
      </button>
    </div>
  );
}
