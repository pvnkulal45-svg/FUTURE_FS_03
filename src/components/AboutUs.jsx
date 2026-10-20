import React from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import BakeryLogo from './BakeryLogo';
import { Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const { about } = BAKERY_CONFIG;

  const getFeatureIcon = (icon) => {
    switch (icon) {
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#D99B26]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D99B26]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#D99B26]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D99B26]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F5EDE2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECBB6] text-[#7A543E] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>{about.badge}</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            {about.title}
          </h2>

          <div className="w-16 h-[2px] bg-[#D99B26] mx-auto rounded-full" />
        </div>

        {/* Narrative & Brand Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Brand Emblem / Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] shadow-sm max-w-sm w-full text-center">
              <div className="mb-4 flex justify-center">
                <BakeryLogo showText={false} size="lg" variant="light" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-1">
                Golden Crust Bakery
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#D99B26] font-semibold mb-4">
                Artisanal Confectionery &amp; Bakes
              </p>
              <p className="text-xs text-[#5A3825] leading-relaxed">
                Dedicated to wholesome baking, fresh daily preparations, and creating moments of celebration for every guest.
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Introduction Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-[#5A3825] leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((para, index) => (
              <p key={index} className="pl-4 border-l-2 border-[#D99B26]">
                {para}
              </p>
            ))}
          </div>

        </div>

        {/* Three Core Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center mb-4">
                {getFeatureIcon(feature.icon)}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C1810] mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#5A3825] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
