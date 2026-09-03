import React from 'react';
import { ThemeMode } from '../types';
import { BARBERS, BUSINESS_INFO, BRAND_ASSETS } from '../data/barberData';
import { Award, ShieldCheck, HeartHandshake, Phone, ArrowRight, Star } from 'lucide-react';

interface AboutViewProps {
  theme: ThemeMode;
  onOpenBooking: (serviceId?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full py-12 sm:py-16 px-6 sm:px-12 lg:px-16 transition-colors ${
      isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1F1F1F]'
    }`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B87333]/40 bg-[#B87333]/10 mb-2">
            <img
              src={BRAND_ASSETS.logo}
              alt="Logo"
              referrerPolicy="no-referrer"
              className="w-4 h-4 object-contain"
            />
            <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
              Latin Barber International
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Artists Behind The Chair
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Craftsmanship passed down through generations, elevated by modern artistic precision. Meet the hands shaping Miami’s most distinguished gentlemen.
          </p>
        </div>

        {/* Master Barber Spotlight (Hildebrando Acosta / Bran 2 Barber) */}
        <div className={`p-8 sm:p-12 rounded-sm border ${
          isDark ? 'bg-[#141414] border-[#B87333]/40' : 'bg-[#FFFFFF] border-[#B87333]/30'
        } grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden`}>
          {/* Decorative Logo Watermark */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-5 pointer-events-none">
            <img
              src={BRAND_ASSETS.logo}
              alt="Brand Watermark"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-[#B87333] shadow-2xl bg-black">
              <img
                src={BRAND_ASSETS.mainBarber}
                alt="Founder & Master Barber Hildebrando Acosta"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Logo Stamp on Portrait */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#B87333] to-[#E5A958] shadow-lg">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-1">
                  <img
                    src={BRAND_ASSETS.logo}
                    alt="Bran2Barberking Seal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B87333] font-bold block mb-1">
                  FOUNDER & MASTER ARTIST
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hildebrando Acosta
                </h3>
                <span className="text-xs text-gray-300 font-mono">Latin Barber International • Miami Lounge</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block px-3 py-1 bg-[#B87333]/15 border border-[#B87333]/30 text-[#B87333] text-[10px] font-mono uppercase tracking-widest font-bold">
              Bran 2 Barber Signature
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Every Line Tells A Story of Discipline and Mastery."
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Hildebrando Acosta founded Bran2Barberking with a single unwavering standard: South Florida gentlemen deserve a private, world-class grooming sanctuary without rush or compromise.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              With over 12 years behind the chair and recognition across Latin America and the United States, Hildebrando blends traditional straight-razor discipline with cutting-edge fade gradients, razor design art, and organic facial treatments.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Specialty</span>
                <span className="font-bold text-[#B87333]">Razor Fades & Art</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Experience</span>
                <span className="font-bold text-[#B87333]">12+ Years</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Chair Location</span>
                <span className="font-bold text-[#B87333]">Miami, FL</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-sm transition-all cursor-pointer shadow-md"
              >
                Book with Hildebrando
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#B87333]/40 text-[#B87333] hover:border-[#B87333] px-5 py-3 font-bold uppercase tracking-widest text-xs rounded-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* All Barbers Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
              Our Master Ensemble
            </span>
            <h3 className="text-3xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Specialists at Bran2Barberking
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className={`p-6 rounded-sm border flex flex-col justify-between group transition-all hover:border-[#B87333] ${
                  isDark ? 'bg-[#141414] border-white/10' : 'bg-white border-gray-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-full mx-auto border-2 border-[#B87333] overflow-hidden grayscale group-hover:grayscale-0 transition-all shadow-md">
                    <img
                      src={barber.avatarUrl}
                      alt={barber.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#B87333] transition-colors">
                      {barber.name}
                    </h4>
                    <p className="text-xs text-[#B87333] uppercase font-mono tracking-wider">
                      {barber.role}
                    </p>
                    <p className="text-[11px] text-gray-500 font-mono mt-0.5">
                      {barber.experience}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed text-center">
                    {barber.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full bg-[#B87333]/15 hover:bg-[#B87333] hover:text-[#0F0F0F] text-[#B87333] border border-[#B87333]/40 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
                  >
                    Select in Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Shop Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className={`p-6 rounded-sm border ${isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-gray-200'}`}>
            <Award className="w-7 h-7 text-[#B87333] mb-3" />
            <h4 className="text-base font-bold text-white mb-1">Authentic Latin Mastery</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Signature techniques crafted over decades in international barbershop circuits, delivering razor precision that lasts.
            </p>
          </div>
          <div className={`p-6 rounded-sm border ${isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-gray-200'}`}>
            <ShieldCheck className="w-7 h-7 text-[#B87333] mb-3" />
            <h4 className="text-base font-bold text-white mb-1">Clinical Level Hygiene</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every customer receives fresh sterilized blades, sanitized guards, and fresh steaming eucalyptus towels.
            </p>
          </div>
          <div className={`p-6 rounded-sm border ${isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-gray-200'}`}>
            <HeartHandshake className="w-7 h-7 text-[#B87333] mb-3" />
            <h4 className="text-base font-bold text-white mb-1">Lounge Hospitality</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Enjoy premium espresso, relaxed Latin jazz & beats, and comfortable leather chairs crafted for executive downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
