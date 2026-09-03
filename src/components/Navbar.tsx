import React, { useState } from 'react';
import { AppPage, ThemeMode } from '../types';
import { BrandLogo } from './BrandLogo';
import { Sun, Moon, Menu, X, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface NavbarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const navLinks: { id: AppPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'The Artists' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Location & Contact' },
  ];

  const handleNavClick = (page: AppPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar-header"
      className={`sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 lg:px-12 py-4 sm:py-5 border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F0F0F] border-[#B87333]/20 text-[#E5E7EB]'
          : 'bg-[#FDFCFB] border-[#B87333]/25 text-[#1F1F1F]'
      }`}
    >
      {/* Brand Logo */}
      <BrandLogo
        theme={theme}
        onClick={() => handleNavClick('home')}
      />

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex gap-7 xl:gap-9 items-center text-xs xl:text-sm font-medium tracking-tight uppercase">
        {navLinks.map((link) => {
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#B87333] border-b-2 border-[#B87333] pb-1 font-bold'
                  : isDark
                  ? 'text-gray-300 hover:text-[#B87333] pb-1'
                  : 'text-gray-700 hover:text-[#B87333] pb-1'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Theme Switcher & Action Buttons */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Luxury Light / Dark Mode Toggle from Artistic Flair Theme */}
        <button
          id="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
          className={`flex items-center rounded-full p-1 border transition-all cursor-pointer ${
            isDark
              ? 'bg-[#1A1A1A] border-[#B87333]/30 hover:border-[#B87333]'
              : 'bg-[#EAEAEA] border-[#B87333]/40 hover:border-[#B87333]'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              !isDark
                ? 'bg-[#B87333] text-[#0F0F0F] shadow-sm'
                : 'text-gray-400 opacity-40 hover:opacity-100'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
          </div>
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              isDark
                ? 'bg-[#B87333] text-[#0F0F0F] shadow-sm'
                : 'text-gray-600 opacity-40 hover:opacity-100'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
          </div>
        </button>

        {/* WhatsApp Quick Link */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-whatsapp-cta"
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono tracking-wider border border-[#B87333]/30 hover:border-[#B87333] text-[#B87333] rounded-sm transition-all"
          title="Direct WhatsApp Reservation"
        >
          <Phone className="w-3 h-3 text-[#B87333]" />
          <span className="hidden md:inline">+1 737-351-8200</span>
        </a>

        {/* Book Appointment CTA Button */}
        <button
          id="navbar-book-btn"
          onClick={() => onOpenBooking()}
          className="hidden sm:flex items-center gap-2 bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-4 sm:px-5 py-2.5 font-bold uppercase tracking-widest text-xs transition-all rounded-sm shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={`lg:hidden p-2 rounded-sm border transition-colors cursor-pointer ${
            isDark
              ? 'border-[#B87333]/30 text-gray-200 hover:text-[#B87333]'
              : 'border-[#B87333]/30 text-gray-800 hover:text-[#B87333]'
          }`}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#B87333]" /> : <Menu className="w-5 h-5 text-[#B87333]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-nav"
          className={`lg:hidden fixed top-[73px] left-0 right-0 bottom-0 z-40 p-6 flex flex-col justify-between border-b shadow-2xl transition-all ${
            isDark ? 'bg-[#0F0F0F] border-[#B87333]/20' : 'bg-[#FFFFFF] border-[#B87333]/20'
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <span className="text-[#B87333] font-mono text-xs uppercase tracking-[0.2em] mb-2">
              Navigation Menu
            </span>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-3 px-4 rounded-sm text-base uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-[#B87333]/15 text-[#B87333] border-l-4 border-[#B87333]'
                      : isDark
                      ? 'text-gray-200 hover:bg-[#1A1A1A] hover:text-[#B87333]'
                      : 'text-gray-800 hover:bg-gray-100 hover:text-[#B87333]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#B87333]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] py-3.5 font-bold uppercase tracking-widest text-sm rounded-sm transition-all text-center"
            >
              Book An Appointment
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#B87333] text-[#B87333] py-3 font-semibold uppercase tracking-wider text-xs rounded-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: +1 737-351-8200</span>
            </a>
            <div className="text-center text-[10px] text-gray-500 font-mono tracking-widest pt-2">
              MIAMI, FL • LATIN BARBER INTERNATIONAL
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
