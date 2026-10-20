import React from 'react';
import { BAKERY_CONFIG } from '../config/bakeryData';
import {
  BAKERY_LOCATION_CONFIG,
  getFullAddress,
  getDirectionsUrl
} from '../config/bakeryLocation';
import BakeryLogo from './BakeryLogo';
import { ArrowUp, MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

const currentYear = 2026;

export default function Footer() {
  const { brand, contact, navigation } = BAKERY_CONFIG;
  const fullAddress = getFullAddress();
  const directionsUrl = getDirectionsUrl();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#24140C] text-[#FAF7F2] pt-16 pb-12 border-t-4 border-[#D99B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E2316]">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <BakeryLogo variant="dark" size="md" />

            <p className="text-xs sm:text-sm text-[#DECBB6] leading-relaxed max-w-sm pt-1">
              Freshly baked happiness, every day. Handcrafting artisan celebration cakes, flaky pastries, gourmet cupcakes, and wholesome breads.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#D99B26] font-semibold block mb-1">
                Academic Project
              </span>
              <p className="text-xs text-[#DECBB6]/80">
                Created for a college internship web development showcase.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#DECBB6] hover:text-[#D99B26] transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bakery Information & Location Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
              Bakery Location &amp; Hours
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#DECBB6]">
              {/* Full Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[#FAF7F2] font-medium leading-snug">
                    {fullAddress}
                  </p>
                  <p className="text-[11px] text-[#DECBB6]/80">
                    PIN Code: <span className="font-semibold text-[#F3BE48]">{BAKERY_LOCATION_CONFIG.pincode}</span>
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D99B26] hover:text-[#F3BE48] transition-colors pt-0.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#DECBB6]" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <span>{BAKERY_LOCATION_CONFIG.phoneNumber}</span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <span className="font-mono text-[11px]">{BAKERY_LOCATION_CONFIG.email}</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>{contact.hoursPlaceholder}</p>
                  <p className="text-[#9D7B64] text-[11px]">{contact.closedPlaceholder}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DECBB6]/70">
          <p className="flex items-center gap-1.5">
            <span>© {currentYear} {brand.name}. All rights reserved.</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B2314] hover:bg-[#D99B26] hover:text-[#24140C] text-[#FAF7F2] text-xs font-semibold transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
