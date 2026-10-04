import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategorySection({ onSelectCategory, onGroomingClick }) {
  const categories = [
    {
      id: 'Dog Food',
      title: 'Dog Food',
      description: "Nutritious meals for every stage of your dog's life.",
      cta: 'Explore Dog Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80',
      tag: 'Puppy & Adult',
      action: () => onSelectCategory('Dog Food'),
    },
    {
      id: 'Cat Food',
      title: 'Cat Food',
      description: 'Wholesome nutrition for happy, healthy cats.',
      cta: 'Explore Cat Food',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80',
      tag: 'Kitten & Adult',
      action: () => onSelectCategory('Cat Food'),
    },
    {
      id: 'Accessories',
      title: 'Accessories',
      description: 'Collars, leashes, toys, beds, bowls and everyday essentials.',
      cta: 'Shop Accessories',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80',
      tag: 'Play & Care',
      action: () => onSelectCategory('Accessories'),
    },
    {
      id: 'Grooming',
      title: 'Grooming',
      description: 'A little pampering goes a long way.',
      cta: 'Book Grooming',
      image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&auto=format&fit=crop&q=80',
      tag: 'Hygiene & Styling',
      action: () => onGroomingClick(),
    },
  ];

  return (
    <section id="categories" className="py-14 sm:py-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-3">
            <span>🐾</span>
            <span>Shop By Category</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight mb-3 font-['Nunito']">
            Everything They Need
          </h2>
          <p className="text-base sm:text-lg text-[#706A73]">
            From everyday essentials to little extras that make their tails wag a little harder.
          </p>
        </div>

        {/* Categories 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={cat.action}
              className="group relative bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#E9E1EC] hover:border-[#54158A]/40 transition-all duration-300 hover:shadow-lg flex flex-col cursor-pointer text-left transform hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-52 sm:h-48 overflow-hidden bg-white">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#54158A] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {cat.tag}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#29242D] group-hover:text-[#54158A] transition-colors mb-2 font-['Nunito']">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#706A73] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 font-bold text-sm text-[#54158A] group-hover:gap-2.5 transition-all">
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
