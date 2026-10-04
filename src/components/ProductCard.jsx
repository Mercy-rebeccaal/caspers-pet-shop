import React from 'react';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const discount = product.mrp > product.price 
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
    : 0;

  return (
    <div className="group bg-[#FFFDF9] rounded-2xl border border-[#E9E1EC] hover:border-[#54158A]/30 transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden text-left relative">
      
      {/* Top Media Section */}
      <div className="relative h-52 sm:h-56 bg-white overflow-hidden p-4 flex items-center justify-center border-b border-[#E9E1EC]/60">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="bg-[#54158A] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-200">
              Save {discount}%
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-[#29242D] p-2 rounded-full shadow-md hover:text-[#54158A] flex items-center justify-center"
          title="Quick View"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Pack Size */}
          <div className="flex items-center justify-between gap-2 text-xs text-[#706A73] mb-1.5">
            <span className="font-bold uppercase tracking-wider text-[#54158A]">
              {product.brand}
            </span>
            <span className="bg-[#FAF7F0] px-2 py-0.5 rounded text-[11px] font-medium border border-[#E9E1EC]">
              {product.size}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-bold text-[#29242D] group-hover:text-[#54158A] transition-colors line-clamp-2 cursor-pointer mb-2 font-['Nunito']"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-[#706A73] mb-3">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-semibold text-[#29242D]">{product.rating}</span>
            <span className="text-[11px] text-[#706A73]">({product.reviewsCount})</span>
            <span className="text-emerald-700 text-[11px] font-medium ml-auto flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" /> In Stock
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-[#E9E1EC]/60 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-[#29242D]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.mrp > product.price && (
                <span className="text-xs text-[#706A73] line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <p className="text-[10px] text-[#706A73]">Inc. all taxes</p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#F3ECF8] hover:bg-[#54158A] text-[#54158A] hover:text-white p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 group-btn"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
}
