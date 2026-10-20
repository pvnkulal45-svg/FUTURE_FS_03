import React, { useState } from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import BakeryLogo from './BakeryLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation } = BAKERY_CONFIG;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group focus:outline-none focus:ring-2 focus:ring-[#D99B26] rounded-xl p-1"
            aria-label={`${brand.name} Home`}
          >
            <BakeryLogo variant="light" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-[#5A3825] hover:text-[#2C1810] transition-colors py-1 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D99B26] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#3B2314] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D99B26]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#F3EDE2] text-[#2C1810] hover:bg-[#E8DEC8] border border-[#DECBB6] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-[#2C1810] hover:bg-[#F3EDE2] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8DEC8]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2C1810] text-[#FAF7F2] font-semibold text-sm shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#D99B26]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
