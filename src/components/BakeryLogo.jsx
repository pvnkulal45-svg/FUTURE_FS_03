import React from 'react';

/**
 * Custom Vector Logo for Golden Crust Bakery
 * Concept: Refined golden wheat stalk combined with an artisan cake & bread emblem.
 * Supports both light (navbar) and dark (footer) backgrounds with transparent rendering.
 */
export default function BakeryLogo({
  variant = 'light', // 'light' for light cream background, 'dark' for dark chocolate background
  size = 'md',       // 'sm', 'md', 'lg'
  showText = true,
  className = ''
}) {
  const isDarkBg = variant === 'dark';

  // Dimension presets
  const sizeMap = {
    sm: { emblemSize: 36, titleSize: 'text-lg', subSize: 'text-[9px]' },
    md: { emblemSize: 44, titleSize: 'text-xl sm:text-2xl', subSize: 'text-[10px]' },
    lg: { emblemSize: 56, titleSize: 'text-2xl sm:text-3xl', subSize: 'text-xs' }
  };

  const { emblemSize, titleSize, subSize } = sizeMap[size] || sizeMap.md;

  const titleColor = isDarkBg ? 'text-[#FAF7F2]' : 'text-[#2C1810]';
  const subColor = isDarkBg ? 'text-[#D99B26]' : 'text-[#7A543E]';
  const innerBg = isDarkBg ? '#2C1810' : '#FAF7F2';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Custom Vector Emblem: Golden Wheat Stalk + Artisan Bread / Cake */}
      <div
        className="relative shrink-0 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
        style={{ width: emblemSize, height: emblemSize }}
      >
        <svg
          viewBox="0 0 64 64"
          width={emblemSize}
          height={emblemSize}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id={`wheatGold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="45%" stopColor="#D99B26" />
              <stop offset="100%" stopColor="#B88019" />
            </linearGradient>
            <linearGradient id={`chocGrad-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3E2417" />
              <stop offset="100%" stopColor="#24140C" />
            </linearGradient>
          </defs>

          {/* Outer Crest Ring */}
          <circle
            cx="32"
            cy="32"
            r="30"
            fill={innerBg}
            stroke={`url(#wheatGold-${variant})`}
            strokeWidth="2"
          />
          <circle
            cx="32"
            cy="32"
            r="26.5"
            fill="none"
            stroke={`url(#wheatGold-${variant})`}
            strokeWidth="0.75"
            strokeDasharray="2,2"
            opacity="0.5"
          />

          {/* Left Wheat Stalk (Refined Botanical Grains) */}
          <g fill={`url(#wheatGold-${variant})`}>
            {/* Wheat Stem */}
            <path
              d="M 23 45 C 20.5 37 20 26 24 17"
              stroke={`url(#wheatGold-${variant})`}
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
            />
            {/* Wheat Kernels */}
            <path d="M 23 41 C 19 40 17 37 19.5 35 C 22 36 23 39 23 41 Z" />
            <path d="M 21.5 35 C 17 34 16 30 19 29 C 21.5 30 22.5 33 21.5 35 Z" />
            <path d="M 22.5 29 C 18 27.5 17.5 23 21 22 C 23 23.5 23.5 27 22.5 29 Z" />
            <path d="M 24 22 C 20.5 19 22 15 25 15.5 C 26 17.5 25.5 20.5 24 22 Z" />
          </g>

          {/* Right Wheat Stalk (Refined Botanical Grains) */}
          <g fill={`url(#wheatGold-${variant})`}>
            {/* Wheat Stem */}
            <path
              d="M 41 45 C 43.5 37 44 26 40 17"
              stroke={`url(#wheatGold-${variant})`}
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
            />
            {/* Wheat Kernels */}
            <path d="M 41 41 C 45 40 47 37 44.5 35 C 42 36 41 39 41 41 Z" />
            <path d="M 42.5 35 C 47 34 48 30 45 29 C 42.5 30 41.5 33 42.5 35 Z" />
            <path d="M 41.5 29 C 46 27.5 46.5 23 43 22 C 41 23.5 40.5 27 41.5 29 Z" />
            <path d="M 40 22 C 43.5 19 42 15 39 15.5 C 38 17.5 38.5 20.5 40 22 Z" />
          </g>

          {/* Center Artisan Cake Tier & Bread Dome */}
          {/* Cake Tier Base */}
          <rect
            x="25.5"
            y="36"
            width="13"
            height="8"
            rx="1.5"
            fill={`url(#wheatGold-${variant})`}
          />
          {/* Cake Decorative Inset Line */}
          <rect
            x="27"
            y="38.5"
            width="10"
            height="1.2"
            rx="0.6"
            fill={isDarkBg ? '#FAF7F2' : '#2C1810'}
            opacity="0.35"
          />

          {/* Artisan Loaf Dome / Cake Top */}
          <path
            d="M 26.5 34.5 C 26.5 27.5 37.5 27.5 37.5 34.5 Z"
            fill={`url(#wheatGold-${variant})`}
          />
          {/* Bread Score Slashes / Decorative Crown */}
          <path
            d="M 29 32 Q 32 29.5 35 32"
            stroke={isDarkBg ? '#FAF7F2' : '#2C1810'}
            strokeWidth="1.1"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />

          {/* Golden Baker's Star Flourish on Top */}
          <circle cx="32" cy="22" r="1.6" fill={`url(#wheatGold-${variant})`} />
          <circle cx="28.5" cy="24" r="1" fill={`url(#wheatGold-${variant})`} />
          <circle cx="35.5" cy="24" r="1" fill={`url(#wheatGold-${variant})`} />

          {/* Golden Base Arc Ribbon */}
          <path
            d="M 22 47.5 Q 32 50.5 42 47.5"
            stroke={`url(#wheatGold-${variant})`}
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif ${titleSize} font-bold tracking-tight leading-none ${titleColor} transition-colors group-hover:text-[#D99B26]`}
          >
            Golden Crust
          </span>
          <span
            className={`font-sans ${subSize} uppercase tracking-[0.22em] font-semibold ${subColor} mt-1`}
          >
            Bakery
          </span>
        </div>
      )}
    </div>
  );
}
