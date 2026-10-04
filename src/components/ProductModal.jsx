import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Check, ShieldCheck, Truck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Casper's! I'm interested in "${product.name}" (${product.size}) listed for ₹${product.price}. Do you have it in stock at your Madambakkam store?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative bg-[#FFFDF9] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E9E1EC] z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/80 hover:bg-[#F3ECF8] text-[#706A73] hover:text-[#54158A] transition z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image Column */}
          <div className="bg-white p-6 sm:p-8 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-[#E9E1EC] relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 object-contain rounded-lg"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#54158A] text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-xs text-[#706A73] mb-1">
                <span className="font-bold text-[#54158A] uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock at Madambakkam
                </span>
              </div>

              <h2 id="product-modal-title" className="text-xl font-bold text-[#29242D] mb-2 font-['Nunito']">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-bold text-sm text-[#29242D]">{product.rating}</span>
                <span className="text-xs text-[#706A73]">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4 pb-3 border-b border-[#E9E1EC]">
                <span className="text-2xl font-black text-[#29242D]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.mrp > product.price && (
                  <span className="text-sm text-[#706A73] line-through">
                    ₹{product.mrp.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs bg-[#FAF7F0] border border-[#E9E1EC] text-[#706A73] px-2 py-0.5 rounded font-medium ml-auto">
                  Pack: {product.size}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#706A73] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6 text-xs text-[#706A73]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#54158A]" />
                  <span>100% Genuine product verified by Casper's store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#54158A]" />
                  <span>Fast local delivery in Madambakkam & Tambaram</span>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#29242D]">Quantity:</span>
                <div className="flex items-center border border-[#E9E1EC] rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#706A73] hover:bg-[#FAF7F0] transition"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-semibold min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#706A73] hover:bg-[#FAF7F0] transition"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#706A73]">
                  Subtotal: <strong className="text-[#29242D]">₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAdd}
                  className="w-full bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
                
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full bg-[#FAF7F0] hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Ask shop about this on WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
