import React, { useState } from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Specialties({ onSelectCategory }) {
  const { specialties } = BAKERY_CONFIG;
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleCardClick = (categoryFilter) => {
    if (onSelectCategory) {
      onSelectCategory(categoryFilter);
    }
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="specialties" className="py-20 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF7E6] border border-[#EFCB68] text-[#9A6A12] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Baked with Passion</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Our Specialties
          </h2>

          <p className="text-base sm:text-lg text-[#5A3825] leading-relaxed">
            Discover our signature baked goods—from showstopping celebration cakes and flaky French pastries to artisanal cupcakes and rustic sourdough breads.
          </p>

          <div className="w-16 h-[2px] bg-[#D99B26] mx-auto rounded-full" />
        </div>

        {/* 4 Specialties Cards Grid (Cakes, Pastries, Cupcakes, Bread) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {specialties.map((item) => {
            const isError = imageErrors[item.id];
            const imgSrc = isError ? item.fallbackImage : item.image;

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual with Tag */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE2]">
                    <img
                      src={imgSrc}
                      alt={`Golden Crust Bakery ${item.name}`}
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8DEC8] text-[11px] font-semibold text-[#2C1810]">
                      {item.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D99B26] font-semibold block">
                        {item.subtitle}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#2C1810] group-hover:text-[#D99B26] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A3825] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick Preview Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.itemsPreview.map((preview, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#DECBB6] text-[11px] text-[#7A543E]"
                        >
                          {preview}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleCardClick(item.categoryFilter)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#2C1810] text-[#2C1810] hover:text-[#FAF7F2] border border-[#DECBB6] text-xs font-semibold tracking-wide transition-colors duration-200 group-hover:border-[#2C1810]"
                  >
                    <span>View {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
