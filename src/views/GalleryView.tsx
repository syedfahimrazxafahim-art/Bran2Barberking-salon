import React, { useState } from 'react';
import { ThemeMode, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/barberData';
import { X, ZoomIn, Scissors, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryViewProps {
  theme: ThemeMode;
  onOpenBooking: (serviceId?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Cuts & Styles (13)' },
    { id: 'fades', label: 'Fades & Tapers' },
    { id: 'beards', label: 'Beard Sculpting' },
    { id: 'waves', label: '360 Waves & Texture' },
    { id: 'art', label: 'Freestyle Hair Art' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const currentModalIndex = activeModalItem
    ? filteredItems.findIndex((item) => item.id === activeModalItem.id)
    : -1;

  const handlePrevItem = () => {
    if (currentModalIndex > 0) {
      setActiveModalItem(filteredItems[currentModalIndex - 1]);
    } else {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextItem = () => {
    if (currentModalIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentModalIndex + 1]);
    } else {
      setActiveModalItem(filteredItems[0]);
    }
  };

  return (
    <div className={`w-full py-12 sm:py-16 px-6 sm:px-12 lg:px-16 transition-colors ${
      isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1F1F1F]'
    }`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
            Master Cut Archive
          </span>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Styles & Transformations
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Authentic client transformations straight from the chairs of Hildebrando Acosta and Bran2Barberking Miami. Click any cut to inspect the full frame and book the look.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#B87333] text-[#0F0F0F] font-bold shadow-md'
                  : isDark
                  ? 'bg-[#181818] text-gray-300 border border-white/10 hover:border-[#B87333]'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-[#B87333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-sm overflow-hidden border border-[#B87333]/25 bg-[#141414] cursor-pointer shadow-xl hover:border-[#B87333] transition-all duration-300 flex flex-col"
            >
              {/* Perfectly Proportioned Haircut Frame */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-black/90 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs text-[#B87333] font-mono flex items-center gap-1.5 font-bold">
                    <ZoomIn className="w-4 h-4" />
                    Inspect Details
                  </span>
                  <span className="text-[10px] text-white/80 font-mono uppercase">
                    Full Frame
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 border-t border-[#B87333]/20 bg-[#111111] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#B87333] uppercase font-mono tracking-widest block font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#B87333] transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-400">
                    By <span className="text-gray-200">{item.barberName}</span>
                  </span>
                  <span className="text-[#B87333] group-hover:underline">
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Detail Modal with Full Uncropped Frame & Carousel Navigation */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveModalItem(null);
            }}
          >
            <div
              className={`relative w-full max-w-3xl rounded-sm border shadow-2xl overflow-hidden flex flex-col max-h-[95vh] ${
                isDark ? 'bg-[#141414] border-[#B87333]/50 text-white' : 'bg-[#181818] border-[#B87333]/50 text-white'
              }`}
            >
              {/* Modal Top Bar */}
              <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#B87333]/30 bg-[#B87333]/15">
                <div className="flex items-center gap-3">
                  <span className="text-[#B87333] font-mono text-xs uppercase tracking-widest font-bold">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    ({currentModalIndex + 1} of {filteredItems.length})
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1 rounded-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
                {/* Full Frame Display without cropping */}
                <div className="relative w-full min-h-[300px] max-h-[58vh] flex items-center justify-center rounded-sm overflow-hidden bg-black border border-white/10 shadow-inner">
                  <img
                    src={activeModalItem.imageUrl}
                    alt={activeModalItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[56vh] w-auto max-w-full object-contain mx-auto shadow-2xl transition-all"
                  />

                  {/* Carousel Previous / Next Controls */}
                  {filteredItems.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevItem}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#B87333] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                        aria-label="Previous haircut"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextItem}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#B87333] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                        aria-label="Next haircut"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Details & Action */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {activeModalItem.title}
                    </h3>
                    <p className="text-xs text-[#B87333] font-mono uppercase tracking-wider">
                      Lead Artist: {activeModalItem.barberName}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B87333]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 font-mono">
                    Want this exact haircut & beard contour at our Miami lounge?
                  </span>
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-2.5 font-bold uppercase tracking-widest text-xs rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request This Cut</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
