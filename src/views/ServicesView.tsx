import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { SERVICES } from '../data/barberData';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesViewProps {
  theme: ThemeMode;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircut', label: 'Haircuts & Fades' },
    { id: 'shave', label: 'Beard & Shaves' },
    { id: 'combo', label: 'Royal VIP Combos' },
    { id: 'specialty', label: 'Freestyle & Waves' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className={`w-full py-12 sm:py-16 px-6 sm:px-12 lg:px-16 transition-colors ${
      isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1F1F1F]'
    }`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
            Curated Grooming Protocol
          </span>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Services & Pricing
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Every session begins with an individual cranial consultation and concludes with straight-razor nape perfection and luxury tonic.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#B87333] text-[#0F0F0F] font-bold shadow-md'
                  : isDark
                  ? 'bg-[#181818] text-gray-300 border border-white/10 hover:border-[#B87333]'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-[#B87333]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-sm border transition-all flex flex-col justify-between group hover:border-[#B87333]/80 ${
                service.popular
                  ? 'border-[#B87333] bg-[#B87333]/5'
                  : isDark
                  ? 'border-white/10 bg-[#141414]'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B87333] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                    {service.popular && (
                      <span className="bg-[#B87333] text-[#0F0F0F] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                        VIP Favorite
                      </span>
                    )}
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-[#B87333]">
                    ${service.price}
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold mt-1 group-hover:text-[#B87333] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B87333] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#B87333]/15 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-mono">
                  Includes hot lather & razor finish
                </span>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <span>Reserve Chair</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Complimentary Lounge Amenities Callout */}
        <div className={`p-8 rounded-sm border border-[#B87333]/30 bg-[#B87333]/10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="space-y-1">
            <span className="text-[#B87333] font-mono text-xs uppercase tracking-[0.25em] font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              The Bran2Barberking Standards
            </span>
            <h4 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Every Appointment Includes Our Executive Hospitality
            </h4>
            <p className="text-xs text-gray-300 max-w-xl">
              Complimentary Cuban espresso or cold beverage, hospital-grade sanitized instruments, aromatic steam towel, and precision razor nape finish.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-sm transition-all flex-shrink-0"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
