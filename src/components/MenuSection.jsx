import React, { useState } from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import { Search, Sparkles, Info, ArrowRight } from 'lucide-react';

export default function MenuSection({ activeCategory = "all", onCategoryChange, onSelectMenuItem }) {
  const { menu } = BAKERY_CONFIG;
  const [internalCategory, setInternalCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = onCategoryChange ? activeCategory : internalCategory;

  const handleCategoryClick = (catId) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const filteredItems = menu.items.filter((item) => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnquireItem = (itemName) => {
    if (onSelectMenuItem) {
      onSelectMenuItem(itemName);
    }
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-[#F5EDE2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECBB6] text-[#7A543E] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Artisan Bakery Selection</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Our Bakery Menu
          </h2>

          <p className="text-base sm:text-lg text-[#5A3825] leading-relaxed">
            Browse our freshly baked cakes, flaky viennoiseries, gourmet cupcakes, and artisan breads.
          </p>

          <div className="w-16 h-[2px] bg-[#D99B26] mx-auto rounded-full" />

          {/* Honest Verification Notice */}
          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECBB6] max-w-2xl mx-auto flex items-center justify-center gap-2.5 text-xs text-[#7A543E] shadow-sm">
            <Info className="w-4 h-4 text-[#D99B26] shrink-0" />
            <span>{menu.disclaimer}</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#DECBB6]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {menu.categories.map((cat) => {
              const isActive = currentCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2C1810] text-[#FAF7F2] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#5A3825] border border-[#DECBB6] hover:bg-[#E8DEC8] hover:text-[#2C1810]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7A543E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cakes or pastries..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DECBB6] text-xs text-[#2C1810] placeholder-[#9D7B64] focus:outline-none focus:ring-2 focus:ring-[#D99B26] transition-all"
            />
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border border-[#E8DEC8] p-8 max-w-md mx-auto">
            <p className="font-serif text-lg font-bold text-[#2C1810] mb-2">No items found</p>
            <p className="text-xs text-[#5A3825] mb-4">Try adjusting your search query or selecting a different category.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); handleCategoryClick("all"); }}
              className="px-4 py-2 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810]">
                          {item.name}
                        </h3>
                        {item.isSignature && (
                          <span className="px-2 py-0.5 rounded-full bg-[#FEF7E6] border border-[#EFCB68] text-[10px] font-bold text-[#9A6A12] uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#7A543E] font-medium">
                        {item.dietary}
                      </span>
                    </div>

                    {/* Price display with clear distinction for placeholders and INR */}
                    <div className="text-right shrink-0">
                      <span
                        className={`font-serif text-base sm:text-lg font-bold tracking-tight ${
                          item.price.toLowerCase().includes('request')
                            ? 'text-[#9A6A12] bg-[#FEF7E6] px-2.5 py-1 rounded-lg border border-[#EFCB68] text-xs font-semibold'
                            : 'text-[#D99B26]'
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A3825] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5EDE2] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#9D7B64] font-semibold">
                    Category: {item.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleEnquireItem(item.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C1810] hover:text-[#D99B26] transition-colors"
                  >
                    <span>Enquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
