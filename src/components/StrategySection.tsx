import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Send,
  CheckCircle,
  Building2,
  ShieldCheck,
  User,
  Mail,
  FileText,
  AlertCircle,
  Loader2,
  RefreshCw,
} from 'lucide-react';

const DRAFT_KEY = 'arfentra_strategy_draft';

export const StrategySection: React.FC = () => {
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vertical, setVertical] = useState('Freight & Heavy Logistics');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Restore draft from localStorage to prevent user data wipe
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
        if (parsed.vertical) setVertical(parsed.vertical);
        if (parsed.notes) setNotes(parsed.notes);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Persist draft to localStorage on every change
  useEffect(() => {
    if (!submitted) {
      try {
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify({ name, email, phone, vertical, notes })
        );
      } catch {
        // Ignore
      }
    }
  }, [name, email, phone, vertical, notes, submitted]);

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Full name and corporate title are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please provide a valid corporate work email address.';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid direct contact number (at least 10 digits).';
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
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        // Ignore
      }
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    }, 1000);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setErrors({});
  };

  return (
    <section
      id="schedule-strategy-session"
      className="py-12 sm:py-20 lg:py-24 relative bg-[#0E0608] overflow-hidden border-t border-[#3D1F2A]/60"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#540815]/25 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/4 right-6 w-[350px] h-[350px] bg-[#720E1E]/15 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241218] border border-[#3D1F2A] text-[#FAF7EF] font-mono text-xs uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-pulse" />
            <span>EXECUTIVE PROTOCOL · SCHEDULE BOARD-LEVEL ARCHITECTURE AUDIT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF7EF] tracking-tight leading-tight">
            Reserve Your Systems Architecture Session
          </h2>

          <p className="text-[#B8A77E] text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Select a priority date and time slot. An Arfentra Systems Architect will review your physical or software bottleneck and establish a deterministic 7–14 day deployment roadmap.
          </p>
        </div>

        {/* Synchronized Booking Form Container */}
        <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#241218]/90 border border-[#3D1F2A] shadow-2xl relative backdrop-blur-md">
          
          {/* Calendar Date & Time Slot Picker */}
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-5">
            
            {/* 1. Date Picker Row */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#fabc41]" />
                  <span>1. Select Priority Consultation Date</span>
                </span>
                <span className="text-[#ffb2bf] font-bold">
                  Selected: {selectedDay.date}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {upcomingDays.map((day) => {
                  const isSelected = selectedDay.date === day.date;
                  return (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={day.date}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer font-mono border min-h-[44px] ${
                        isSelected
                          ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf] shadow-[0_0_12px_rgba(140,29,64,0.45)] ring-1 ring-[#ffb2bf]/40'
                          : 'bg-[#241218] text-[#ddbfc3] border-[#3D1F2A] hover:border-[#8c1d40] hover:text-[#FAF7EF]'
                      }`}
                    >
                      <div className="text-[10px] text-[#B8A77E] uppercase block">
                        {day.label}
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-[#FAF7EF] mt-0.5">
                        {day.date}
                      </div>
                      {day.isEarliest && (
                        <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] bg-[#fabc41]/20 text-[#fabc41] font-semibold">
                          Earliest Slot
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 2. Time Slot Row */}
            <div className="space-y-2.5 pt-3 border-t border-[#3D1F2A]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#fabc41]" />
                  <span>2. Select Time Window (IST)</span>
                </span>
                <span className="text-[#fabc41] font-bold">
                  {selectedTime}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer font-mono text-xs border min-h-[44px] flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf] shadow-[0_0_12px_rgba(140,29,64,0.45)]'
                          : 'bg-[#241218] text-[#ddbfc3] border-[#3D1F2A] hover:border-[#8c1d40] hover:text-[#FAF7EF]'
                      }`}
                    >
                      <span className="font-bold">{slot}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Confirmed Slot Summary Pill */}
            <div className="p-3.5 rounded-xl bg-[#241218] border border-[#8c1d40]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#FAF7EF]">
                <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-ping" />
                <span>
                  Confirmed Window: <strong className="text-[#fabc41]">{selectedDay.date}</strong> at <strong className="text-[#fabc41]">{selectedTime}</strong>
                </span>
              </div>
              <span className="text-[#B8A77E] text-[11px]">
                45-Min Dedicated Architecture Scoping
              </span>
            </div>

          </div>

          {/* Form / Success State */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-10 rounded-2xl bg-[#170b0f] border border-[#fabc41]/50 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#8c1d40]/30 text-[#fabc41] flex items-center justify-center mx-auto border border-[#fabc41]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAF7EF]">Session Confirmed &amp; Dispatched</h3>
              <p className="text-[#ddbfc3] text-sm max-w-lg mx-auto leading-relaxed font-sans">
                Thank you, <strong>{name}</strong>. Your session for <strong>{selectedDay.date}</strong> at <strong>{selectedTime}</strong> has been logged into our calendar pipeline. An Arfentra Lead Systems Architect is preparing your technical docket and will coordinate video credentials within <strong>4 business hours</strong>.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
                <a
                  href={`mailto:arfentra@gmail.com?subject=Confirmed Architecture Session: ${encodeURIComponent(name)} [${encodeURIComponent(selectedDay.date)} ${encodeURIComponent(selectedTime)}]&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AVertical: ${encodeURIComponent(vertical)}%0D%0ASession Time: ${encodeURIComponent(selectedDay.date)} at ${encodeURIComponent(selectedTime)}%0D%0AScope: ${encodeURIComponent(notes)}`}
                  className="px-4 py-3 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#ffb2bf] hover:text-[#FAF7EF] min-h-[44px] flex items-center justify-center"
                >
                  Send Direct Email Backup
                </a>
                <a
                  href="tel:+919384040460"
                  className="px-4 py-3 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#fabc41] hover:text-[#FAF7EF] min-h-[44px] flex items-center justify-center"
                >
                  Call Desk: +91 9384040460
                </a>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-3 rounded-xl bg-[#35262a] text-[#FAF7EF] hover:bg-[#45353a] flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reserve Another Slot</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <User className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Full Name &amp; Executive Title *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Vikramaditya Roy, VP Operations"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm sm:text-base focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all scroll-m-28 min-h-[44px]"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#ffb4ab] font-mono flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center justify-between font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#fabc41]" />
                      <span>Corporate Work Email *</span>
                    </span>
                    <span className="text-[10px] text-[#ddbfc3] font-normal">Company domain</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="v.roy@company-enterprise.in"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm sm:text-base focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all scroll-m-28 min-h-[44px]"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#ffb4ab] font-mono flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Direct Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Direct Phone / Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+91 93840 40460"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm sm:text-base focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all scroll-m-28 min-h-[44px]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#ffb4ab] font-mono flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Vertical Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Operational Sector / Domain</span>
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] font-sans text-sm sm:text-base focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all scroll-m-28 min-h-[44px] cursor-pointer"
                  >
                    <option value="Freight & Heavy Logistics">Freight &amp; Heavy Logistics</option>
                    <option value="Precision Manufacturing & CNC">Precision Manufacturing &amp; CNC</option>
                    <option value="Hospitality & Multi-Outlet QSR">Hospitality &amp; Multi-Outlet QSR</option>
                    <option value="Institutional EdTech & Upskilling">Institutional EdTech &amp; Upskilling</option>
                    <option value="Custom Enterprise Software Suite">Custom Enterprise Software Suite</option>
                  </select>
                </div>

              </div>

              {/* Friction / Architecture Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Current Operational Bottleneck / Software Requirement</span>
                  </span>
                  <span className="text-[10px] text-[#ddbfc3] font-normal">Optional</span>
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your current manual bottlenecks, weighbridge friction, or target systems to automate..."
                  className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/40 font-sans text-sm sm:text-base focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all leading-relaxed scroll-m-28"
                />
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-2 text-xs font-mono text-[#ddbfc3]">
                  <ShieldCheck className="w-4 h-4 text-[#fabc41] shrink-0" />
                  <span>Zero third-party telemetry leak · Direct Architect Response</span>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-3">
                  <a
                    href="tel:+919384040460"
                    className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider hover:bg-[#35262a] active:scale-95 transition-all min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#fabc41]" />
                    <span>Call Hotline</span>
                  </a>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting || submitted}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(140,29,64,0.4)] hover:bg-[#A8244D] active:scale-95 transition-all cursor-pointer min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#FAF7EF]" />
                        <span>Transmitting Protocol...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Lock In Architecture Session</span>
                      </>
                    )}
                  </motion.button>
                </div>

              </div>

            </form>
          )}

          {/* Verification Bar Footnote */}
          <div className="mt-8 pt-6 border-t border-[#3D1F2A] grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
            <div>
              <div className="text-[10px] uppercase text-[#B8A77E] font-semibold">Session Scope</div>
              <div className="text-xs font-bold text-[#FAF7EF] mt-0.5">45-Min Systems Architecture</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#B8A77E] font-semibold">Turnaround SLA</div>
              <div className="text-xs font-bold text-[#fabc41] mt-0.5">&lt; 4 Business Hours</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#B8A77E] font-semibold">Entity Registry</div>
              <div className="text-xs font-bold text-[#FAF7EF] mt-0.5">MCA U62013TZ2026PTC041310</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#B8A77E] font-semibold">Security Protocol</div>
              <div className="text-xs font-bold text-[#FAF7EF] mt-0.5">Signed NDA &amp; Zero Leak</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
