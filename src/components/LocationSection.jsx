import React from 'react';
import {
  BAKERY_LOCATION_CONFIG,
  getDirectionsUrl,
  getEmbedMapUrl
} from '../config/bakeryLocation';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, Info, CheckCircle2 } from 'lucide-react';

export default function LocationSection() {
  const { bakeryName, city, state, pincode, phoneNumber, email, openingHours, fullAddress, locationNote } = BAKERY_LOCATION_CONFIG;

  const directionsUrl = getDirectionsUrl();
  const embedMapUrl = getEmbedMapUrl();

  return (
    <section id="location" className="py-20 bg-[#F5EDE2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#DECBB6] text-[#7A543E] text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Storefront &amp; Kitchen</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Visit Our Bakery
          </h2>

          <p className="text-base sm:text-lg text-[#5A3825] leading-relaxed">
            Follow the warm aroma of oven-fresh sourdough, flaky butter croissants, and celebratory cakes. We look forward to welcoming you to our Adyar atelier in Mangaluru.
          </p>

          <div className="w-16 h-[2px] bg-[#D99B26] mx-auto rounded-full" />
        </div>

        {/* Location Grid: Details on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Full Address & Operating Hours Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8DEC8] shadow-sm space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Header Title with Pin Icon */}
                <div className="flex items-start gap-3.5 border-b border-[#F3EDE2] pb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FEF7E6] border border-[#EFCB68] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#D99B26]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                      {bakeryName}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#D99B26] font-semibold mt-0.5">
                      Artisanal Bakery &amp; Confectionery
                    </p>
                  </div>
                </div>

                {/* Full Confirmed Address Block */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D99B26] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                        Bakery Address
                      </h4>
                      <p className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] mt-1 leading-snug">
                        {fullAddress}
                      </p>
                      <p className="text-xs text-[#7A543E] mt-1">
                        Area: <span className="font-semibold text-[#2C1810]">{BAKERY_LOCATION_CONFIG.area}</span> • City: <span className="font-semibold text-[#2C1810]">{city}</span>, {state} • PIN: <span className="font-semibold text-[#2C1810]">{pincode}</span>
                      </p>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#DECBB6] text-[11px] text-[#7A543E]">
                        <Info className="w-3.5 h-3.5 text-[#D99B26] shrink-0" />
                        <span>{locationNote}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Block */}
                <div className="pt-4 border-t border-[#F3EDE2] space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#D99B26]" />
                    <span>Opening Hours</span>
                  </div>
                  <div className="space-y-1.5 pl-6 text-xs text-[#5A3825]">
                    {openingHours.map((item, idx) => (
                      <div key={idx} className="flex justify-between gap-2">
                        <span className="font-medium text-[#2C1810]">{item.days}:</span>
                        <span className="text-[#7A543E]">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone & Email Block */}
                <div className="pt-4 border-t border-[#F3EDE2] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D99B26] shrink-0" />
                    <span className="text-[#5A3825] truncate">{phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D99B26] shrink-0" />
                    <span className="text-[#5A3825] font-mono text-[11px] truncate">{email}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#F3EDE2] space-y-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2C1810] hover:bg-[#3B2314] text-[#FAF7F2] text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4 text-[#D99B26]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#DECBB6]" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Embedded Responsive Google Map for Adyar, Mangaluru */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E8DEC8] shadow-sm flex flex-col h-full">
              
              {/* Responsive Map Container */}
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px]">
                <iframe
                  title="Golden Crust Bakery Location Map - Adyar, Mangaluru"
                  src={embedMapUrl}
                  className="w-full h-full border-0 block"
                  style={{ minHeight: '380px' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Badge */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#E8DEC8] shadow-sm flex items-center gap-2 pointer-events-none z-10">
                  <MapPin className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span className="text-xs font-semibold text-[#2C1810]">
                    {bakeryName} • Adyar, Mangaluru
                  </span>
                </div>
              </div>

              {/* Map Footer Bar with Direct Link */}
              <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#F3EDE2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
                <div className="flex items-center gap-2 text-[#5A3825]">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    Location: <strong>{city}, {state}</strong> (PIN: {pincode})
                  </span>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#D99B26] hover:text-[#B88019] transition-colors"
                >
                  <span>Open Full Map in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
