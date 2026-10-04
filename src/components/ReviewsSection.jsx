import React from 'react';
import { REVIEWS } from '../data/storeData';
import { Star, CheckCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-b border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs uppercase tracking-wider mb-3">
            <span className="text-amber-500">★★★★★</span>
            <span>Google Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight mb-3 font-['Nunito']">
            Loved by Local Pet Parents
          </h2>

          <p className="text-sm sm:text-base text-[#706A73]">
            What our neighbours in Madambakkam and Tambaram say about their experience with Casper's.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-7 border border-[#E9E1EC] hover:border-[#54158A]/30 transition-all flex flex-col justify-between text-left shadow-sm hover:shadow"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 stars rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Exact Provided Quote */}
                <blockquote className="text-base text-[#29242D] font-medium leading-relaxed italic mb-6">
                  "{review.text}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E9E1EC] flex items-center justify-between text-xs text-[#706A73]">
                <div className="flex items-center gap-1.5 font-bold text-[#54158A]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{review.source}</span>
                </div>
                <span className="text-[11px] text-[#706A73]">{review.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews rating strip */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#706A73]">
            Verified customer reviews directly from our Google Business listing in Madambakkam, Tambaram.
          </p>
        </div>

      </div>
    </section>
  );
}
