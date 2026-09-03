import React, { useState, useEffect } from 'react';
import { AppPage, ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { GalleryView } from './views/GalleryView';
import { ReviewsView } from './views/ReviewsView';
import { ContactView } from './views/ContactView';
import { BUSINESS_INFO } from './data/barberData';
import { MessageSquare, Calendar, ChevronUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('b2b_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('b2b_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0F0F0F';
      document.body.style.color = '#E5E7EB';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FDFCFB';
      document.body.style.color = '#1A1A1A';
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div
      id="app-root-container"
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1A1A1A]'
      }`}
    >
      {/* Top Lounge Announcement Bar */}
      <div className="bg-[#B87333] text-[#0F0F0F] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 flex justify-between items-center z-50">
        <span className="hidden sm:inline">
          LATIN BARBER INTERNATIONAL • BRICKELL & DOWNTOWN MIAMI
        </span>
        <span className="mx-auto sm:mx-0">
          CHAIR RESERVATIONS: +1 (737) 351-8200
        </span>
        <button
          onClick={() => handleOpenBooking()}
          className="hidden md:inline hover:underline cursor-pointer font-extrabold"
        >
          BOOK VIP SESSION →
        </button>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Routing */}
      <main className="flex-1 flex flex-col w-full">
        {currentPage === 'home' && (
          <HomeView
            theme={theme}
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'services' && (
          <ServicesView
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'about' && (
          <AboutView
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryView
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'reviews' && (
          <ReviewsView
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            theme={theme}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onNavigate={setCurrentPage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Buttons: WhatsApp & Scroll to top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#B87333]/40 text-[#B87333] hover:bg-[#B87333] hover:text-[#0F0F0F] flex items-center justify-center transition-all shadow-lg cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Action Pill */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-black px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            WhatsApp Booking
          </span>
        </a>
      </div>

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
        theme={theme}
      />
    </div>
  );
}
