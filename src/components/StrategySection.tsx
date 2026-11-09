import React, { useState } from 'react';
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
  Sparkles,
} from 'lucide-react';

export const StrategySection: React.FC = () => {
  const upcomingDays = [
    { label: 'Tomorrow (Tue)', date: 'Tue, Nov 10', iso: '2026-11-10', isEarliest: true },
    { label: 'Wednesday', date: 'Wed, Nov 11', iso: '2026-11-11' },
    { label: 'Thursday', date: 'Thu, Nov 12', iso: '2026-11-12' },
    { label: 'Friday', date: 'Fri, Nov 13', iso: '2026-11-13' },
    { label: 'Next Monday', date: 'Mon, Nov 16', iso: '2026-11-16' },
  ];

  const timeSlots = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '03:30 PM IST',
    '05:00 PM IST',
  ];

  const [selectedDay, setSelectedDay] = useState(upcomingDays[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]); // 11:30 AM default
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vertical, setVertical] = useState('Freight & Heavy Logistics');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    }, 800);
  };

  return (
    <section id="schedule-strategy-session" className="py-20 lg:py-28 relative bg-[#0E0608] overflow-hidden border-t border-[#3D1F2A]/60">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#540815]/30 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#720E1E]/15 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241218] border border-[#3D1F2A] text-[#FAF7EF] font-mono text-xs uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-pulse" />
            <span>EXECUTIVE PROTOCOL · SCHEDULE BOARD-LEVEL ARCHITECTURE AUDIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7EF] tracking-tight leading-tight">
            Reserve Your Systems Architecture Session
          </h2>

          <p className="text-[#B8A77E] text-base sm:text-lg leading-relaxed font-normal">
            Select a priority date and time slot. An Arfentra Systems Architect will review your physical or software bottleneck and establish a deterministic 7–14 day deployment roadmap.
          </p>
        </div>

        {/* Synchronized Booking Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#241218]/90 border border-[#3D1F2A] shadow-2xl relative backdrop-blur-md">
          
          {/* Calendar Date & Time Slot Picker */}
          <div className="mb-8 p-6 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-6">
            
            {/* 1. Date Picker Row */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#fabc41]" />
                  <span>1. Select Priority Consultation Date</span>
                </span>
                <span className="text-[#ffb2bf] font-bold">
                  Selected: {selectedDay.date}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {upcomingDays.map((day) => {
                  const isSelected = selectedDay.iso === day.iso;
                  return (
                    <button
                      key={day.iso}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer font-mono border ${
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
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Time Slot Row */}
            <div className="space-y-3 pt-2 border-t border-[#3D1F2A]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B8A77E] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#fabc41]" />
                  <span>2. Select Time Window (IST)</span>
                </span>
                <span className="text-[#fabc41] font-bold">
                  {selectedTime}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer font-mono text-xs border ${
                        isSelected
                          ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf] shadow-[0_0_12px_rgba(140,29,64,0.45)]'
                          : 'bg-[#241218] text-[#ddbfc3] border-[#3D1F2A] hover:border-[#8c1d40] hover:text-[#FAF7EF]'
                      }`}
                    >
                      <span className="font-bold">{slot}</span>
                    </button>
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

          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#170b0f] border border-[#fabc41]/50 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#8c1d40]/30 text-[#fabc41] flex items-center justify-center mx-auto border border-[#fabc41]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF7EF]">Session Confirmed &amp; Dispatched</h3>
              <p className="text-[#ddbfc3] text-sm max-w-lg mx-auto leading-relaxed font-sans">
                Thank you, <strong>{name}</strong>. Your session for <strong>{selectedDay.date}</strong> at <strong>{selectedTime}</strong> has been logged. An Arfentra Lead Systems Architect is preparing your technical docket and will coordinate video credentials within <strong>4 business hours</strong>.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
                <a
                  href={`mailto:arfentra@gmail.com?subject=Confirmed Architecture Session: ${encodeURIComponent(name)} [${encodeURIComponent(selectedDay.date)} ${encodeURIComponent(selectedTime)}]&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AVertical: ${encodeURIComponent(vertical)}%0D%0ASession Time: ${encodeURIComponent(selectedDay.date)} at ${encodeURIComponent(selectedTime)}%0D%0AScope: ${encodeURIComponent(notes)}`}
                  className="px-4 py-2 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#ffb2bf] hover:text-[#FAF7EF]"
                >
                  Send Direct Email Backup
                </a>
                <a
                  href="tel:+919384040460"
                  className="px-4 py-2 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#fabc41] hover:text-[#FAF7EF]"
                >
                  Call Desk: +91 9384040460
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <User className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Full Name &amp; Executive Title *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikramaditya Roy, VP of Operations"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center justify-between font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#fabc41]" />
                      <span>Corporate Work Email *</span>
                    </span>
                    <span className="text-[10px] text-[#ddbfc3] font-normal">Use company domain</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="v.roy@company-enterprise.in"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all"
                  />
                </div>

                {/* Direct Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Direct Phone / Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 93840 40460"
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 font-sans text-sm focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all"
                  />
                </div>

                {/* Target Vertical Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center gap-1.5 font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Target Operational Vertical</span>
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] font-sans text-sm focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all cursor-pointer"
                  >
                    <option value="Freight & Heavy Logistics">Freight &amp; Heavy Logistics</option>
                    <option value="Institutional Hospitality">Institutional Hospitality</option>
                    <option value="Industrial Manufacturing">Industrial Manufacturing</option>
                    <option value="Sovereign Infra & Defense">Sovereign Infra &amp; Defense</option>
                    <option value="Custom Enterprise Architecture">Custom Enterprise Architecture</option>
                  </select>
                </div>

              </div>

              {/* Scope Notes */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#B8A77E] flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Project Scope &amp; Specific Process Friction</span>
                  </span>
                  <span className="text-[10px] text-[#fabc41] font-normal">
                    Optional Brief
                  </span>
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your current manual bottlenecks, weighbridge friction, or target systems to automate..."
                  className="w-full px-4 py-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/40 font-sans text-sm focus:outline-none focus:border-[#ffb2bf] focus:ring-1 focus:ring-[#8c1d40] transition-all leading-relaxed"
                />
              </div>

              {/* Submit Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B8A77E]">
                  <ShieldCheck className="w-4 h-4 text-[#fabc41]" />
                  <span>Zero third-party telemetry leak · Direct Architect Response</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-sm shadow-[0_8px_32px_rgba(140,29,64,0.6)] hover:bg-[#A8244D] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-[#FAF7EF]" />
                      <span>Locking In Session...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#FAF7EF]" />
                      <span>Confirm Session ({selectedDay.date} · {selectedTime})</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Quick Executive Coordinates */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-[#241218]/90 border border-[#3D1F2A]">
            <div className="text-[10px] font-mono uppercase text-[#B8A77E] font-semibold">Headquarters</div>
            <div className="text-sm font-bold text-[#FAF7EF] mt-1">Coimbatore, Tamil Nadu</div>
            <div className="text-xs text-[#ddbfc3] font-mono mt-0.5">MCA Registered Corporate Base</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#241218]/90 border border-[#3D1F2A]">
            <div className="text-[10px] font-mono uppercase text-[#B8A77E] font-semibold">Turnaround Latency</div>
            <div className="text-sm font-bold text-[#fabc41] mt-1">Within 4 Business Hours</div>
            <div className="text-xs text-[#ddbfc3] font-mono mt-0.5">Direct Architect Response</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#241218]/90 border border-[#3D1F2A]">
            <div className="text-[10px] font-mono uppercase text-[#B8A77E] font-semibold">Statutory Telemetry</div>
            <div className="text-sm font-bold text-[#FAF7EF] mt-1">CIN: U62013TZ2026PTC041310</div>
            <div className="text-xs text-[#ddbfc3] font-mono mt-0.5">Ministry of Corporate Affairs</div>
          </div>
        </div>

      </div>
    </section>
  );
};
