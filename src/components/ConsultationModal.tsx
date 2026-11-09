import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Check, Phone, Sparkles, Building2, TrendingUp, Clock } from 'lucide-react';
import { RoiTelemetryData } from './RoiSimulator';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: string;
  telemetry?: RoiTelemetryData;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTier,
  telemetry,
}) => {
  const [tier, setTier] = useState('Starter Prototype (₹15,000)');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (preselectedTier) {
      setTier(preselectedTier);
    }
  }, [preselectedTier]);

  useEffect(() => {
    if (isOpen && telemetry && !formData.message) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about Arfentra deterministic multi-agent deployment. Target reclaim: ${telemetry.formattedSavings}/year across ${telemetry.verticalName} (~${telemetry.monthlyHours.toLocaleString('en-IN')} hrs/mo at ₹${telemetry.hourlyRate}/hr).`,
      }));
    }
  }, [isOpen, telemetry, formData.message]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });

    const subject = encodeURIComponent(`Strategy Call Request: ${formData.company || formData.name} [${tier}]`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPackage/Scope: ${tier}\n\nProject Scope & Friction Details:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:arfentra@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-xl rounded-3xl bg-[#241218] border border-[#3D1F2A] p-6 sm:p-8 shadow-2xl shadow-black z-10 my-auto text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#170b0f] border border-[#3D1F2A] flex items-center justify-center text-[#B8A77E] hover:text-[#FAF7EF] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25181c] border border-[#3D1F2A] text-[#ffb2bf] font-mono text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>Zero-Obligation Strategy Session</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#FAF7EF] tracking-tight">
                    Schedule Architecture Review
                  </h3>
                  <p className="text-xs text-[#ddbfc3] font-sans">
                    Connect directly with Arfentra’s engineering leads. We analyze your workflows and outline deterministic automation milestones.
                  </p>
                </div>

                {/* Telemetry Preview if available */}
                {telemetry && (
                  <div className="mb-5 p-3.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#FAF7EF]">
                      <Building2 className="w-3.5 h-3.5 text-[#fabc41]" />
                      <span className="text-[11px] font-bold truncate max-w-[140px] sm:max-w-none">
                        {telemetry.verticalName}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#FAF7EF] font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-[#fabc41]" />
                      <span>{telemetry.formattedSavings}/yr</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#ffb2bf]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{telemetry.compressionPct}% Reclaim</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                        Enterprise / Organization *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Coastal Logistics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="anand@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                      Engagement Scope / Tier
                    </label>
                    <select
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors cursor-pointer"
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
                    <label className="block font-mono text-[11px] text-[#B8A77E] uppercase tracking-wider mb-1">
                      Process Friction / Automation Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe the operational bottleneck or custom software you wish to automate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] placeholder-[#B8A77E]/50 text-sm focus:border-[#ffb2bf] focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider hover:bg-[#A8244D] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(140,29,64,0.4)]"
                    >
                      Transmit Strategy Request
                    </button>

                    <a
                      href="tel:+919384040460"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#35262a] border border-[#3D1F2A] text-[#FAF7EF] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#45353a] transition-colors flex items-center justify-center gap-1.5"
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
                <h4 className="text-xl font-bold text-[#FAF7EF]">Strategy Request Transmitted</h4>
                <p className="text-xs text-[#ddbfc3] max-w-sm mx-auto leading-relaxed font-sans">
                  Thank you for reaching out to Arfentra Private Limited. Our senior engineering leads will review your operational requirements and initiate contact within 4 business hours.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#35262a] border border-[#3D1F2A] text-[#FAF7EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#45353a] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
