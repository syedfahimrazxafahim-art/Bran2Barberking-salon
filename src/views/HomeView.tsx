import React from 'react';
import { AppPage, ThemeMode } from '../types';
import { BARBERS, SERVICES, GALLERY_ITEMS, BUSINESS_INFO, REVIEWS, BRAND_ASSETS } from '../data/barberData';
import { Scissors, Star, ShieldCheck, Sparkles, Clock, MapPin, Phone, ArrowRight, Check } from 'lucide-react';

interface HomeViewProps {
  theme: ThemeMode;
  onNavigate: (page: AppPage) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  theme,
  onNavigate,
  onOpenBooking,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero 12-Column Split Stage (Direct Artistic Flair Architecture) */}
      <section
        id="hero-split-stage"
        className={`w-full min-h-[680px] lg:h-[calc(100vh-76px)] max-h-[900px] grid grid-cols-1 lg:grid-cols-12 border-b overflow-hidden transition-colors ${
          isDark ? 'border-[#B87333]/20 bg-[#0F0F0F]' : 'border-[#B87333]/20 bg-[#FDFCFB]'
        }`}
      >
        {/* Left Column (7 cols): Cinematic Hero with Luxury Typography */}
        <div className="lg:col-span-7 relative flex flex-col justify-end p-8 sm:p-12 lg:p-16 overflow-hidden min-h-[480px]">
          {/* Background image & gradient overlay */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop")`,
            }}
          >
            <div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/75 to-[#0F0F0F]/30'
                  : 'bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/80 to-[#FDFCFB]/40'
              }`}
            ></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B87333]/40 bg-[#B87333]/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#B87333] animate-ping"></span>
              <p className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
                Est. Miami, FL • Latin Barber International
              </p>
            </div>

            <h1
              className={`text-5xl sm:text-7xl lg:text-8xl font-bold italic leading-[0.95] tracking-tight ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Art of <br />
              <span className="text-[#B87333] not-italic font-normal">Precision.</span>
            </h1>

            <p className={`text-base sm:text-lg font-light leading-relaxed max-w-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A luxury grooming experience tailored for the modern gentleman. Experience Miami’s most exclusive barber lounge, where surgical razor work meets artisanal Latin mastery.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                id="hero-book-btn"
                onClick={() => onOpenBooking()}
                className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all rounded-sm shadow-xl active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-services-btn"
                onClick={() => onNavigate('services')}
                className={`border px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all rounded-sm cursor-pointer ${
                  isDark
                    ? 'border-white/20 hover:border-[#B87333] text-white hover:bg-white/5'
                    : 'border-black/20 hover:border-[#B87333] text-black hover:bg-black/5'
                }`}
              >
                View Services
              </button>
            </div>

            {/* Micro Badges */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#B87333]/20 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-[#B87333]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span className="text-gray-400 font-sans">(500+ Miami Clients)</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                <span>Sterilized Blades & Hot Towels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): "The Artists Behind The Chair" Sidebar from Theme */}
        <div
          className={`lg:col-span-5 border-t lg:border-t-0 lg:border-l flex flex-col justify-between transition-colors ${
            isDark
              ? 'bg-[#141414] border-[#B87333]/15'
              : 'bg-[#F7F6F2] border-[#B87333]/20'
          }`}
        >
          <div className="p-8 sm:p-12 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[#B87333] font-mono tracking-widest uppercase text-xs font-bold">
                The Artists Behind The Chair
              </h2>
              <button
                onClick={() => onNavigate('about')}
                className="text-[11px] text-gray-400 hover:text-[#B87333] uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Full Story →
              </button>
            </div>

            <div className="space-y-6">
              {BARBERS.map((barber) => (
                <div
                  key={barber.id}
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-5 sm:gap-6 group cursor-pointer p-2.5 rounded-sm hover:bg-black/20 transition-all"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#B87333] overflow-hidden grayscale group-hover:grayscale-0 transition-all flex-shrink-0 shadow-lg">
                    <img
                      src={barber.avatarUrl}
                      alt={barber.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-bold transition-colors group-hover:text-[#B87333] ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {barber.name}
                    </h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                      {barber.role}
                    </p>
                    <p className="text-[11px] text-[#B87333] mt-0.5 font-light">
                      {barber.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Location & Contact Bar (Direct match to Design HTML) */}
          <div
            className={`p-8 sm:p-10 border-t transition-colors ${
              isDark ? 'bg-[#0F0F0F] border-[#B87333]/15' : 'bg-[#EFEFEA] border-[#B87333]/20'
            }`}
          >
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[#B87333] font-mono text-[10px] uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  Miami, Florida (Brickell Lounge)
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#B87333] font-mono text-[10px] uppercase tracking-widest mb-1">
                  Direct Contact
                </p>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-[#B87333] hover:underline"
                >
                  +1 737-351-8200
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B87333] transition-colors"
              >
                WhatsApp
              </a>
              <span>•</span>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B87333] transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <span className="hover:text-[#B87333] cursor-default">
                Miami, FL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Master Services Spotlight */}
      <section className={`py-16 sm:py-24 px-6 sm:px-12 lg:px-16 transition-colors ${
        isDark ? 'bg-[#121212]' : 'bg-[#FFFFFF]'
      }`}>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B87333]/20 pb-6">
            <div>
              <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
                Crafted For The Modern Gentleman
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-bold mt-2 ${isDark ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Signature Grooming Menu
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase font-mono tracking-widest text-[#B87333] hover:text-[#965a26] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View All 8 Services & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-sm border flex flex-col justify-between transition-all group hover:-translate-y-1 duration-300 ${
                  service.popular
                    ? 'border-[#B87333] bg-[#B87333]/5 shadow-lg'
                    : isDark
                    ? 'border-white/10 bg-[#161616] hover:border-[#B87333]/50'
                    : 'border-gray-200 bg-gray-50 hover:border-[#B87333]/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333]">
                      {service.duration}
                    </span>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded-xs bg-[#B87333] text-[#0F0F0F] text-[9px] font-bold uppercase tracking-wider">
                        Most Requested
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-bold group-hover:text-[#B87333] transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.name}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-[11px] text-gray-400 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#B87333]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#B87333]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-mono block">Investment</span>
                    <span className="text-2xl font-bold font-mono text-[#B87333]">
                      ${service.price}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Founder & Latin Barber International Heritage */}
      <section className={`py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-t transition-colors ${
        isDark ? 'bg-[#0F0F0F] border-[#B87333]/20' : 'bg-[#FDFCFB] border-[#B87333]/20'
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-[#B87333]/60 shadow-2xl bg-[#141414]">
              <img
                src={BRAND_ASSETS.mainBarber}
                alt="Master Barber Hildebrando Acosta - Founder of Bran2Barberking"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#B87333] font-mono text-xs uppercase tracking-[0.25em] font-bold block">
                  Latin Barber International
                </span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hildebrando Acosta
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Master Barber & Founder • Bran 2 Barber
                </p>
              </div>
            </div>

            {/* Floating Copper Stat Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 flex flex-col p-4 bg-[#B87333] text-[#0F0F0F] rounded-sm shadow-2xl font-mono border-2 border-white/20">
              <span className="text-3xl font-black">12+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">
                Years Of Precision Craft
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
              Heritage of Excellence
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Mastering the Line Between Tradition and Modern Art
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              At Bran2Barberking, grooming is never treated as a routine errand — it is an art of surgical precision. Led by Hildebrando Acosta, our Miami lounge brings the international prestige of the Latin Barber tradition to clients seeking elite fades, sharp beard lines, and custom freestyle designs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-sm border ${isDark ? 'border-white/10 bg-[#161616]' : 'border-gray-200 bg-white'}`}>
                <h4 className="text-sm font-bold text-[#B87333] uppercase font-mono tracking-wider mb-1">
                  Surgical Cleanliness
                </h4>
                <p className="text-xs text-gray-400">
                  Hospital-grade sterilization for every razor, blade, and guard before each chair session.
                </p>
              </div>

              <div className={`p-4 rounded-sm border ${isDark ? 'border-white/10 bg-[#161616]' : 'border-gray-200 bg-white'}`}>
                <h4 className="text-sm font-bold text-[#B87333] uppercase font-mono tracking-wider mb-1">
                  Custom Head Mapping
                </h4>
                <p className="text-xs text-gray-400">
                  Every fade taper and line is geometrically calibrated to your cranial structure and hair grain.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-8 py-3.5 font-bold uppercase tracking-widest text-xs rounded-sm transition-all shadow-md cursor-pointer"
              >
                Experience The Craft
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="border border-[#B87333]/40 hover:border-[#B87333] text-[#B87333] px-6 py-3.5 font-bold uppercase tracking-widest text-xs rounded-sm transition-all cursor-pointer"
              >
                Browse Cut Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Transformations Snapshot */}
      <section className={`py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-t transition-colors ${
        isDark ? 'bg-[#141414] border-[#B87333]/20' : 'bg-[#F5F4F0] border-[#B87333]/20'
      }`}>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
                Portfolio Showcase
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-bold mt-2 ${isDark ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Artistry In Action
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="text-xs uppercase font-mono tracking-widest text-[#B87333] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Gallery (All Cuts & Fades)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.slice(0, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('gallery')}
                className="group relative rounded-sm overflow-hidden border border-[#B87333]/20 hover:border-[#B87333] cursor-pointer shadow-lg transition-all duration-300 bg-[#121212]"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-black relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[11px] font-mono text-[#B87333] flex items-center gap-1 font-bold">
                      View Cut in Gallery →
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-[#0F0F0F] border-t border-[#B87333]/20">
                  <span className="text-[10px] text-[#B87333] uppercase font-mono tracking-widest">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#B87333] transition-colors mt-0.5 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1 font-mono">
                    By {item.barberName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Verified Client Reviews Strip */}
      <section className={`py-16 px-6 sm:px-12 lg:px-16 border-t transition-colors ${
        isDark ? 'bg-[#0F0F0F] border-[#B87333]/20' : 'bg-[#FFFFFF] border-[#B87333]/20'
      }`}>
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
              Miami’s Choice
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Words from Our Gentlemen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className={`p-6 rounded-sm border flex flex-col justify-between ${
                  isDark ? 'bg-[#141414] border-[#B87333]/20' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1 text-[#B87333] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className={`text-sm italic leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex justify-between items-end text-xs">
                  <div>
                    <span className="font-bold text-white block">{review.author}</span>
                    <span className="text-gray-400 text-[11px]">{review.city}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#B87333]">{review.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
