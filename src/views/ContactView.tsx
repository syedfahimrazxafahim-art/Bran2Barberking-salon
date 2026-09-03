import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO } from '../data/barberData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className={`w-full py-12 sm:py-16 px-6 sm:px-12 lg:px-16 transition-colors ${
      isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1F1F1F]'
    }`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
            South Florida Lounge
          </span>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Location & Contact
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Conveniently located for Brickell, Downtown Miami, and Greater South Florida. Walk-ins welcome when chairs permit; bookings guaranteed.
          </p>
        </div>

        {/* 2 Column Layout: Details & Interactive Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-sm border ${
              isDark ? 'bg-[#141414] border-[#B87333]/30' : 'bg-white border-[#B87333]/30'
            } space-y-6 shadow-xl`}>
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bran2Barberking Miami
                </h3>
                <p className="text-xs text-[#B87333] font-mono uppercase tracking-widest">
                  Latin Barber International Lounge
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B87333] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[#B87333] font-mono text-[10px] uppercase block">Address</span>
                    <p className="font-medium text-white">{BUSINESS_INFO.address}</p>
                    <p className="text-gray-400 text-xs">Easy parking & valet access nearby</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B87333] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[#B87333] font-mono text-[10px] uppercase block">WhatsApp / Phone</span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-white hover:text-[#B87333] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B87333] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[#B87333] font-mono text-[10px] uppercase block">Email Inquiries</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-white hover:text-[#B87333] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B87333] flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <span className="text-[#B87333] font-mono text-[10px] uppercase block mb-1">
                      Operating Hours
                    </span>
                    <div className="space-y-1 text-xs">
                      {BUSINESS_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between border-b border-white/5 pb-0.5">
                          <span className="text-gray-400">{h.days}</span>
                          <span className="font-mono text-[#B87333]">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Booking Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-black font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+1 737-351-8200)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Map Simulation & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Miami Visual Map Card */}
            <div className="relative rounded-sm overflow-hidden border border-[#B87333]/30 h-64 bg-[#181818]">
              {/* Stylized Dark Map Graphic */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1200&auto=format&fit=crop")`,
                }}
              >
                <div className="absolute inset-0 bg-[#0F0F0F]/75 backdrop-blur-[1px]"></div>
              </div>

              {/* Map Center Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="relative animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-[#B87333] flex items-center justify-center text-[#0F0F0F] shadow-2xl border-2 border-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="w-4 h-4 bg-[#B87333] rotate-45 mx-auto -mt-2"></div>
                </div>
                <div className="mt-3 px-4 py-1.5 bg-[#0F0F0F]/90 border border-[#B87333] rounded-sm text-center shadow-lg">
                  <span className="font-bold text-xs text-white block">Bran2Barberking</span>
                  <span className="text-[10px] text-[#B87333] font-mono">Miami, Florida Lounge</span>
                </div>
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={`https://maps.google.com/?q=Miami,+Florida`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#0F0F0F]/90 border border-white/20 hover:border-[#B87333] text-[11px] font-mono text-white rounded-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#B87333]" />
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className={`p-6 sm:p-8 rounded-sm border ${
              isDark ? 'bg-[#141414] border-[#B87333]/20' : 'bg-white border-gray-200'
            }`}>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send A Message to Master Barber
              </h3>
              <p className="text-xs text-gray-400 mb-5">
                Have questions about custom wedding grooming, private chair buyouts, or after-hours cuts?
              </p>

              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="p-2.5 text-xs rounded-sm border border-white/10 bg-black/40 text-white placeholder:text-gray-500 focus:border-[#B87333]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number *"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="p-2.5 text-xs rounded-sm border border-white/10 bg-black/40 text-white placeholder:text-gray-500 focus:border-[#B87333]"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-sm border border-white/10 bg-black/40 text-white placeholder:text-gray-500 focus:border-[#B87333]"
                  />

                  <textarea
                    rows={3}
                    required
                    placeholder="How can we assist your grooming routine?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-sm border border-white/10 bg-black/40 text-white placeholder:text-gray-500 focus:border-[#B87333]"
                  ></textarea>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-xs font-mono text-[#B87333] hover:underline"
                    >
                      Or Book Chair Now →
                    </button>
                    <button
                      type="submit"
                      className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-2.5 font-bold uppercase tracking-widest text-xs rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-3 bg-[#B87333]/10 border border-[#B87333]/30 rounded-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#B87333] mx-auto" />
                  <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-gray-300">
                    Thank you {contactForm.name}! Hildebrando or our lounge concierge will get back to you promptly at {contactForm.phone}.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs text-[#B87333] hover:underline pt-2 font-mono"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
