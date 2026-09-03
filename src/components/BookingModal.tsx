import React, { useState, useEffect } from 'react';
import { ThemeMode, BookingFormData } from '../types';
import { SERVICES, BARBERS, BUSINESS_INFO } from '../data/barberData';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  theme: ThemeMode;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  theme,
}) => {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preselectedServiceId || SERVICES[0].id,
    barberId: 'hildebrando-acosta',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];
  const selectedBarber = BARBERS.find((b) => b.id === formData.barberId) || BARBERS[0];

  const timeSlots = [
    '09:30 AM',
    '10:15 AM',
    '11:00 AM',
    '11:45 AM',
    '01:15 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:15 PM',
    '06:30 PM',
    '07:15 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const message = encodeURIComponent(
      `Hello Bran2Barberking! I would like to confirm an appointment booking:\n` +
      `• Service: ${selectedService.name} ($${selectedService.price})\n` +
      `• Barber: ${selectedBarber.name}\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.timeSlot}\n` +
      `• Client Name: ${formData.clientName}\n` +
      `• Phone: ${formData.clientPhone}\n` +
      (formData.notes ? `• Notes: ${formData.notes}\n` : '') +
      `\nPlease let me know if this slot is locked in. Thank you!`
    );
    return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${message}`;
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="booking-modal-container"
        className={`relative w-full max-w-2xl my-8 rounded-sm border shadow-2xl overflow-hidden transition-colors ${
          isDark
            ? 'bg-[#121212] border-[#B87333]/30 text-[#E5E7EB]'
            : 'bg-[#FFFFFF] border-[#B87333]/30 text-[#1A1A1A]'
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#B87333]/20 bg-[#B87333]/10">
          <div>
            <span className="text-[#B87333] font-mono text-xs uppercase tracking-[0.3em] font-bold">
              VIP Reservation
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Book Your Chair at Bran2Barberking
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-sm text-gray-400 hover:text-[#B87333] hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-mono text-[#B87333] mb-2 font-bold">
                1. Select Grooming Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                {SERVICES.map((service) => {
                  const isSelected = formData.serviceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setFormData({ ...formData, serviceId: service.id })}
                      className={`p-3 rounded-sm border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#B87333] bg-[#B87333]/15'
                          : isDark
                          ? 'border-white/10 bg-[#181818] hover:border-[#B87333]/50'
                          : 'border-gray-200 bg-gray-50 hover:border-[#B87333]/50'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold">{service.name}</span>
                        <span className="text-xs font-mono font-bold text-[#B87333]">
                          ${service.price}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 block mt-1">
                        {service.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Barber */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-mono text-[#B87333] mb-2 font-bold">
                2. Select Barber / Stylist
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {BARBERS.map((barber) => {
                  const isSelected = formData.barberId === barber.id;
                  return (
                    <div
                      key={barber.id}
                      onClick={() => setFormData({ ...formData, barberId: barber.id })}
                      className={`p-3 rounded-sm border cursor-pointer transition-all text-center flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? 'border-[#B87333] bg-[#B87333]/15'
                          : isDark
                          ? 'border-white/10 bg-[#181818] hover:border-[#B87333]/50'
                          : 'border-gray-200 bg-gray-50 hover:border-[#B87333]/50'
                      }`}
                    >
                      <img
                        src={barber.avatarUrl}
                        alt={barber.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border border-[#B87333]/40"
                      />
                      <span className="text-xs font-bold leading-tight">{barber.name}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                        {barber.role}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-mono text-[#B87333] mb-1.5 font-bold">
                  3. Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full p-2.5 rounded-sm border text-xs font-mono transition-colors ${
                      isDark
                        ? 'bg-[#181818] border-white/10 text-white focus:border-[#B87333]'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#B87333]'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-mono text-[#B87333] mb-1.5 font-bold">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className={`w-full p-2.5 rounded-sm border text-xs font-mono transition-colors ${
                    isDark
                      ? 'bg-[#181818] border-white/10 text-white focus:border-[#B87333]'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#B87333]'
                  }`}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Client Contact Info */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest font-mono text-[#B87333] font-bold">
                4. Your Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className={`p-2.5 rounded-sm border text-xs transition-colors ${
                    isDark
                      ? 'bg-[#181818] border-white/10 text-white placeholder:text-gray-500 focus:border-[#B87333]'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#B87333]'
                  }`}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number / WhatsApp *"
                  value={formData.clientPhone}
                  onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                  className={`p-2.5 rounded-sm border text-xs transition-colors ${
                    isDark
                      ? 'bg-[#181818] border-white/10 text-white placeholder:text-gray-500 focus:border-[#B87333]'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#B87333]'
                  }`}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className={`w-full p-2.5 rounded-sm border text-xs transition-colors ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white placeholder:text-gray-500 focus:border-[#B87333]'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#B87333]'
                }`}
              />
              <textarea
                rows={2}
                placeholder="Style Notes (e.g., razor fade, keep beard length, freestyle design request)"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={`w-full p-2.5 rounded-sm border text-xs transition-colors ${
                  isDark
                    ? 'bg-[#181818] border-white/10 text-white placeholder:text-gray-500 focus:border-[#B87333]'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#B87333]'
                }`}
              ></textarea>
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#B87333]/20">
              <div className="text-xs">
                <span className="text-gray-400">Estimated Total: </span>
                <span className="font-mono text-base font-bold text-[#B87333]">
                  ${selectedService.price}
                </span>
                <span className="text-gray-400 text-[11px] block">
                  {selectedService.duration} • Pay at lounge (Cash, Zelle, Card)
                </span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all rounded-sm cursor-pointer shadow-md"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        ) : (
          /* Booking Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#B87333]/20 border-2 border-[#B87333] text-[#B87333] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[#B87333] font-mono text-xs uppercase tracking-[0.3em] font-bold">
                Reservation Requested
              </span>
              <h4
                className="text-2xl font-bold mt-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                We Look Forward to Welcoming You, {formData.clientName}!
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mt-2">
                Your appointment request for <strong className="text-white">{selectedService.name}</strong> with <strong className="text-white">{selectedBarber.name}</strong> on <strong className="text-[#B87333]">{formData.date} at {formData.timeSlot}</strong> has been received.
              </p>
            </div>

            {/* Quick Action: Instant WhatsApp Sync */}
            <div className="p-4 rounded-sm border border-[#B87333]/30 bg-[#B87333]/10 max-w-md mx-auto text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B87333] uppercase font-mono tracking-wider mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Sync</span>
              </div>
              <p className="text-xs text-gray-300">
                To guarantee immediate chair priority, tap below to send your details directly to our WhatsApp lounge dispatch.
              </p>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebd5b] text-black font-bold py-2.5 px-4 rounded-sm text-xs uppercase tracking-wider transition-all"
              >
                <span>Sync Booking to WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="border border-white/20 hover:border-[#B87333] px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all rounded-sm cursor-pointer"
              >
                Close & Return to Lounge
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
