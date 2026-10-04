import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/storeData';
import { Search, Filter, RotateCcw } from 'lucide-react';

export default function ProductSection({ 
  selectedCategory, 
  onSelectCategory, 
  onAddToCart, 
  onQuickView 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPetType, setSelectedPetType] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const categories = ['All', 'Dog Food', 'Cat Food', 'Accessories', 'Grooming'];
  const brands = ['All', 'Royal Canin', 'Pedigree', 'Drools', 'Farmina', 'Whiskas', 'Himalaya', 'Orijen', 'Acana'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All' && item.brand !== selectedBrand) {
        return false;
      }
      // Pet Type filter
      if (selectedPetType !== 'All' && item.petType !== selectedPetType && item.petType !== 'All') {
        return false;
      }
      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesBrand = item.brand.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCategory) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return b.rating - a.rating; // Popular default
    });
  }, [selectedCategory, selectedBrand, selectedPetType, searchQuery, sortBy]);

  const resetFilters = () => {
    onSelectCategory('All');
    setSelectedBrand('All');
    setSelectedPetType('All');
    setSearchQuery('');
    setSortBy('popular');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedBrand !== 'All' || selectedPetType !== 'All' || searchQuery !== '';

  return (
    <section id="shop" className="py-14 sm:py-20 bg-[#FFFDF9] border-t border-[#E9E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECF8] text-[#54158A] font-bold text-xs uppercase tracking-wider mb-2">
              <span>🛍️</span>
              <span>Shop Neighbourhood Favourites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29242D] tracking-tight font-['Nunito']">
              Pet Favourites
            </h2>
            <p className="text-sm sm:text-base text-[#706A73] mt-1">
              Trusted pet-care brands for everyday nutrition, treats, and healthcare essentials.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#706A73] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search food, treats, leashes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl pl-10 pr-4 py-2 text-sm text-[#29242D] placeholder-[#706A73] focus:outline-none focus:ring-2 focus:ring-[#54158A] focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#706A73] hover:text-[#29242D]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FAF7F0] p-4 rounded-2xl border border-[#E9E1EC] mb-8 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#54158A] text-white shadow-sm'
                      : 'bg-white text-[#29242D] hover:bg-[#F3ECF8] hover:text-[#54158A] border border-[#E9E1EC]'
                  }`}
                >
                  {cat === 'All' ? 'All Products' : cat}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E9E1EC] text-xs font-bold text-[#54158A]"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Sub-Filters: Pet Type, Brand, Sorting */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#E9E1EC]/60 ${
            showFiltersMobile ? 'block' : 'hidden md:grid'
          }`}>
            
            {/* Pet Type Select */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#706A73] mb-1 text-left">
                Pet Type
              </label>
              <select
                value={selectedPetType}
                onChange={(e) => setSelectedPetType(e.target.value)}
                className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3 py-2 text-xs font-semibold text-[#29242D] focus:outline-none focus:ring-1 focus:ring-[#54158A]"
              >
                <option value="All">All Pets (Dog & Cat)</option>
                <option value="Dog">Dog Only 🐶</option>
                <option value="Cat">Cat Only 🐱</option>
              </select>
            </div>

            {/* Brand Select */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#706A73] mb-1 text-left">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3 py-2 text-xs font-semibold text-[#29242D] focus:outline-none focus:ring-1 focus:ring-[#54158A]"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b === 'All' ? 'All Brands' : b}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Select */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#706A73] mb-1 text-left">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-[#E9E1EC] rounded-xl px-3 py-2 text-xs font-semibold text-[#29242D] focus:outline-none focus:ring-1 focus:ring-[#54158A]"
              >
                <option value="popular">Popular & Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

            {/* Active Filters Clear / Count */}
            <div className="flex items-end justify-between sm:justify-end gap-2">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[#FAF7F0] border border-[#E9E1EC] rounded-2xl p-12 text-center max-w-md mx-auto my-8">
            <span className="text-4xl mb-3 block" aria-hidden="true">🐶🔍</span>
            <h3 className="text-lg font-bold text-[#29242D] mb-1 font-['Nunito']">
              No products found
            </h3>
            <p className="text-xs text-[#706A73] mb-5">
              We couldn't find matching items with your current filter selections.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#54158A] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm hover:bg-[#3B0D63] transition"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
