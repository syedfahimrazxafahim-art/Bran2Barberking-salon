import React from 'react';
import { AppPage, ThemeMode } from '../types';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/barberData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (page: AppPage) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onNavigate, onOpenBooking }) => {
  const isDark = theme === 'dark';

  return (
    <footer id="app-footer" className="w-full flex flex-col">
      {/* Upper Footer Grid */}
      <div
        className={`px-6 sm:px-12 lg:px-16 py-12 lg:py-16 border-t transition-colors duration-300 ${
          isDark
            ? 'bg-[#0A0A0A] border-[#B87333]/20 text-[#E5E7EB]'
            : 'bg-[#F5F4F0] border-[#B87333]/20 text-[#1F1F1F]'
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <BrandLogo theme={theme} onClick={() => onNavigate('home')} />
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Experience Miami’s premier luxury barber lounge. Specialized in Latin Barber craftsmanship, surgical precision fades, beard contouring, and royal grooming experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-[#B87333]/30 hover:border-[#B87333] hover:bg-[#B87333]/10 flex items-center justify-center text-[#B87333] transition-all"
                title="Chat on WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-[#B87333]/30 hover:border-[#B87333] hover:bg-[#B87333]/10 flex items-center justify-center text-[#B87333] transition-all"
                title="Official Facebook Page"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-9 h-9 rounded-sm border border-[#B87333]/30 hover:border-[#B87333] hover:bg-[#B87333]/10 flex items-center justify-center text-[#B87333] transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-[#B87333] font-mono tracking-[0.25em] uppercase text-xs font-bold">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Home Lounge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Signature Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  The Artists Behind The Chair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Haircut Gallery & Styles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Client Reviews & Ratings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`hover:text-[#B87333] transition-colors cursor-pointer ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Miami Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Reservation */}
          <div className="space-y-3">
            <h4 className="text-[#B87333] font-mono tracking-[0.25em] uppercase text-xs font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Lounge Hours
            </h4>
            <div className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {BUSINESS_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-gray-400">{h.days}</span>
                  <span className="font-mono text-[#B87333]">{h.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 italic pt-1">
              * Appointments strongly recommended. VIP and after-hours bookings available upon request.
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-2 w-full bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] py-2.5 px-4 font-bold uppercase tracking-widest text-xs transition-all rounded-sm cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-[#B87333] font-mono tracking-[0.25em] uppercase text-xs font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Miami Lounge
            </h4>
            <div className={`space-y-3 text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <p className="font-semibold text-white">Bran2Barberking</p>
                <p className="text-gray-400">{BUSINESS_INFO.location}</p>
                <p className="text-gray-400 text-xs">Serving Brickell, Downtown & Greater Miami</p>
              </div>
              <div className="pt-1">
                <span className="text-[#B87333] font-mono text-[10px] uppercase block">Direct WhatsApp</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono hover:text-[#B87333] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-[#B87333] font-mono text-[10px] uppercase block">Email Inquiries</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#B87333] transition-colors break-all text-xs"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Copper Bottom Bar (Exact match to Artistic Flair Design HTML) */}
      <div className="min-h-12 bg-[#B87333] flex flex-col sm:flex-row items-center px-6 sm:px-12 justify-between py-2.5 sm:py-0 text-[#0F0F0F] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] gap-2">
        <span>© 2024 Bran2Barberking Luxury Grooming • Latin Barber International</span>
        <span>Designed for the Elite Gentleman • Miami, FL</span>
      </div>
    </footer>
  );
};
