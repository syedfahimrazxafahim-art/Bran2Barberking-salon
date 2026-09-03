import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'footer' | 'large';
  className?: string;
  theme?: 'dark' | 'light';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'dark',
  onClick,
}) => {
  const isDark = theme === 'dark';
  const [imageLoaded, setImageLoaded] = useState(false);
  const logoUrl = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788470929/LOGO7898.png';

  const sizeClasses = {
    compact: 'w-9 h-9',
    full: 'w-11 h-11 sm:w-12 sm:h-12',
    footer: 'w-12 h-12 sm:w-14 sm:h-14',
    large: 'w-20 h-20 sm:w-24 sm:h-24',
  }[variant];

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}
      id="brand-logo-container"
    >
      {/* Official Bran2Barberking Circular Emblem Frame */}
      <div
        className={`relative flex-shrink-0 ${sizeClasses} rounded-full p-[2px] bg-gradient-to-tr from-[#B87333] via-[#E5A958] to-[#8C5220] shadow-lg group-hover:scale-105 transition-transform duration-300`}
      >
        <div
          className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden relative ${
            isDark ? 'bg-[#0F0F0F]' : 'bg-[#181818]'
          }`}
        >
          <img
            src={logoUrl}
            alt="Bran2Barberking Official Logo"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-contain p-0.5 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </div>
      </div>

      {/* Brand Typographic Identity */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className="text-lg sm:text-xl font-extrabold tracking-widest text-[#B87333] transition-colors"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            BRAN2BARBERKING
          </span>
        </div>
        {variant !== 'compact' && (
          <span
            className={`text-[9px] uppercase tracking-[0.28em] font-mono transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Latin Barber International • Miami
          </span>
        )}
      </div>
    </div>
  );
};

