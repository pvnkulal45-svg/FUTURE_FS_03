import React, { useState } from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import { Sparkles, ArrowRight, Clock, Award, Heart } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const { brand } = BAKERY_CONFIG;

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8DEC8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Elegant Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF7E6] border border-[#EFCB68] text-[#9A6A12] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
              <span>Artisanal Warmth &amp; Daily Craft</span>
            </div>

            {/* Main Headline (Exact requirement: “Freshly Baked Happiness, Every Day”) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-[1.12] tracking-tight">
              Freshly Baked Happiness, <br />
              <span className="text-[#D99B26] italic font-normal">
                Every Day.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#5A3825] leading-relaxed max-w-xl font-normal">
              {brand.subHeadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo('#menu')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#3B2314] text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#D99B26]" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#specialties')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#2C1810] hover:bg-[#F3EDE2] border border-[#DECBB6] text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>Our Specialties</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-8 border-t border-[#E8DEC8] grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#D99B26]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810]">Fresh Daily</h4>
                  <p className="text-[11px] text-[#7A543E]">Baked before dawn</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#D99B26]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810]">Pure Butter</h4>
                  <p className="text-[11px] text-[#7A543E]">Natural ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#D99B26]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C1810]">Made with Care</h4>
                  <p className="text-[11px] text-[#7A543E]">Handcrafted recipes</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Bakery / Cake Image in Rounded Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative background shadow glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D99B26]/20 via-[#DECBB6]/40 to-transparent rounded-3xl blur-xl -z-10" />

              {/* Main Image Card */}
              <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E8DEC8] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-[#F3EDE2]">
                  <img
                    src={imgError ? "/images/cake-sovereign.svg" : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"}
                    alt="Golden Crust Bakery Artisan Chocolate Celebration Cake"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle Corner Badge */}
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E8DEC8] shadow-sm">
                    <span className="text-[11px] font-semibold text-[#2C1810]">
                      ✦ Artisan Collection
                    </span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5 flex items-center justify-between bg-[#FFFFFF] border-t border-[#F3EDE2]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                      The Sovereign Chocolate Cake
                    </h3>
                    <p className="text-xs text-[#7A543E]">
                      Belgian dark cocoa &amp; salted caramel glaze
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleScrollTo('#menu')}
                    className="text-xs font-semibold text-[#D99B26] hover:text-[#B88019] flex items-center gap-1 transition-colors"
                  >
                    <span>View Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
