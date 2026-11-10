import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  X,
  Check,
  Phone,
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: string;
}

const MODAL_DRAFT_KEY = 'arfentra_modal_draft';

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTier,
}) => {
  const upcomingDays = [
    { label: 'Tomorrow (Tue)', date: 'Tue, Nov 10', isEarliest: true },
    { label: 'Wednesday', date: 'Wed, Nov 11' },
    { label: 'Thursday', date: 'Thu, Nov 12' },
    { label: 'Friday', date: 'Fri, Nov 13' },
    { label: 'Next Monday', date: 'Mon, Nov 16' },
  ];

  const timeSlots = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '03:30 PM IST',
    '05:00 PM IST',
  ];

  const [selectedDay, setSelectedDay] = useState(upcomingDays[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
  const [tier, setTier] = useState('Starter Prototype (₹15,000)');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  // Restore draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(MODAL_DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save draft on edit
  useEffect(() => {
    if (!submitted && (formData.name || formData.email || formData.phone || formData.message)) {
      try {
        localStorage.setItem(MODAL_DRAFT_KEY, JSON.stringify(formData));
      } catch {
        // Ignore
      }
    }
  }, [formData, submitted]);

  useEffect(() => {
    if (preselectedTier) {
      setTier(preselectedTier);
    }
  }, [preselectedTier]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid phone number (at least 10 digits).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        localStorage.removeItem(MODAL_DRAFT_KEY);
      } catch {
        // Ignore
      }

      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
      });

      const subject = encodeURIComponent(
        `Strategy Session Request: ${formData.company || formData.name} [${selectedDay.date} ${selectedTime}]`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPackage/Scope: ${tier}\nRequested Slot: ${selectedDay.date} at ${selectedTime}\n\nProject Scope & Friction Details:\n${formData.message}`
      );

      setTimeout(() => {
        window.location.href = `mailto:arfentra@gmail.com?subject=${subject}&body=${body}`;
      }, 1500);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#241218] border border-[#3D1F2A] p-5 sm:p-8 shadow-2xl shadow-black z-10 my-auto text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#170b0f] border border-[#3D1F2A] flex items-center justify-center text-[#B8A77E] hover:text-[#FAF7EF] transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-4 sm:mb-5 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25181c] border border-[#3D1F2A] text-[#ffb2bf] font-mono text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Executive Strategy Protocol</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#FAF7EF] tracking-tight">
                    Schedule Architecture Review
                  </h3>
                  <p className="text-xs text-[#ddbfc3] font-sans">
                    Reserve a direct consultation window with Arfentra’s engineering leads. We analyze your workflows and outline deterministic automation milestones.
                  </p>
                </div>

                {/* Calendar Date & Time Slot Picker */}
                <div className="mb-4 sm:mb-5 p-3.5 sm:p-4 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-3.5">
                  {/* Date Selector */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#fabc41]" />
                        <span>Select Priority Date</span>
                      </span>
                      <span className="text-[#ffb2bf] font-bold text-[11px]">
                        {selectedDay.date}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                      {upcomingDays.map((day) => {
                        const isSelected = selectedDay.date === day.date;
                        return (
                          <motion.button
                            whileTap={{ scale: 0.96 }}
                            key={day.date}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`p-2 rounded-lg text-left transition-all cursor-pointer font-mono border text-xs min-h-[44px] ${
                              isSelected
                                ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf] shadow-[0_0_10px_rgba(140,29,64,0.4)]'
                                : 'bg-[#241218] text-[#ddbfc3] border-[#3D1F2A] hover:border-[#8c1d40] hover:text-[#FAF7EF]'
                            }`}
                          >
                            <div className="text-[9px] text-[#B8A77E] uppercase truncate">
                              {day.label}
                            </div>
                            <div className="font-bold text-[11px] text-[#FAF7EF] mt-0.5">
                              {day.date.split(', ')[1]}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div className="space-y-1.5 pt-2 border-t border-[#3D1F2A]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#fabc41]" />
                        <span>Select IST Window</span>
                      </span>
                      <span className="text-[#fabc41] font-bold text-[11px]">
                        {selectedTime}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <motion.button
                            whileTap={{ scale: 0.96 }}
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 px-2 rounded-lg text-center transition-all cursor-pointer font-mono text-[11px] border min-h-[40px] flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf]'
                                : 'bg-[#241218] text-[#ddbfc3] border-[#3D1F2A] hover:border-[#8c1d40] hover:text-[#FAF7EF]'
                            }`}
                          >
                            <span className="font-bold">{slot.replace(' IST', '')}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary pill */}
                  <div className="p-2.5 rounded-xl bg-[#241218] border border-[#8c1d40]/40 flex items-center justify-between text-[11px] font-mono text-[#FAF7EF]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-ping" />
                      Slot: <strong className="text-[#fabc41]">{selectedDay.date}</strong> at <strong className="text-[#fabc41]">{selectedTime}</strong>
                    </span>
                    <span className="text-[#B8A77E] text-[10px]">45-min Zoom</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors scroll-m-28 min-h-[44px]"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[#ffb4ab] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider">
                        Enterprise / Organization *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Coastal Logistics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors scroll-m-28 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider">
                        Corporate Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="anand@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors scroll-m-28 min-h-[44px]"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#ffb4ab] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors scroll-m-28 min-h-[44px]"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#ffb4ab] font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider mb-1">
                      Engagement Scope / Tier
                    </label>
                    <select
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors cursor-pointer scroll-m-28 min-h-[44px]"
                    >
                      <option value="Starter Prototype (₹15,000)">Starter Prototype (₹15,000)</option>
                      <option value="Agentic Orchestration (₹75k – ₹2.5L)">Agentic Orchestration Platform (₹75k – ₹2.5L)</option>
                      <option value="Bespoke Sovereign Infra (₹5L – ₹10L+)">Bespoke Sovereign Infra Retainer (₹5L – ₹10L+)</option>
                      <option value="CT Upskilling Platform Demo">CT Upskilling EdTech Platform Demo</option>
                      <option value="Book Your Food Restaurant Partnership">Book Your Food Hospitality Partnership</option>
                      <option value="Custom Architecture Inquiry">Custom Enterprise Architecture Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#B8A77E] uppercase tracking-wider mb-1">
                      Process Friction / Automation Goals
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly describe the operational bottleneck or custom software you wish to automate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm sm:text-base focus:border-[#ffb2bf] focus:outline-none transition-colors font-sans scroll-m-28"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider hover:bg-[#A8244D] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(140,29,64,0.4)] min-h-[44px] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#FAF7EF]" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <span>Transmit Session Reservation</span>
                      )}
                    </motion.button>

                    <a
                      href="tel:+919384040460"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#35262a] border border-[#3D1F2A] text-[#FAF7EF] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#45353a] transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <Phone className="w-4 h-4 text-[#fabc41]" />
                      <span>Direct Hotline</span>
                    </a>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#8c1d40]/30 border border-[#fabc41] flex items-center justify-center mx-auto text-[#fabc41]">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#FAF7EF]">Strategy Session Reserved</h4>
                <p className="text-xs text-[#ddbfc3] max-w-sm mx-auto leading-relaxed font-sans">
                  Thank you, <strong>{formData.name}</strong>. Your session on <strong>{selectedDay.date}</strong> at <strong>{selectedTime}</strong> has been logged. Our senior engineering leads will review your operational requirements and initiate contact within 4 business hours.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#35262a] border border-[#3D1F2A] text-[#FAF7EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#45353a] transition-all cursor-pointer min-h-[44px]"
                  >
                    Close Window
                  </button>
                  <a
                    href="tel:+919384040460"
                    className="px-5 py-2.5 rounded-full bg-[#241218] border border-[#3D1F2A] text-[#fabc41] text-xs font-mono uppercase tracking-wider hover:bg-[#35262a] transition-all min-h-[44px] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
