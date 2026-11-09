import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: (tier?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const tiers = [
    {
      name: 'Starter Prototype',
      tag: 'VALIDATION PHASE',
      badge: '7–10 DAYS',
      price: '₹15,000',
      period: 'One-time fixed investment · Complete IP Handover',
      description:
        'Rapid functional proof to validate a single painful manual workflow before broad enterprise roll-out.',
      timeline: '7–10 Business Days',
      features: [
        '1 High-friction workflow isolated & automated',
        'Dedicated WhatsApp / Email agent bridge',
        'Basic spreadsheet/database automated ingestion',
        '7-Day post-deployment stabilization warranty',
      ],
      popular: false,
      ctaText: 'Initiate Prototype (₹15,000)',
    },
    {
      name: 'Agentic Orchestration',
      tag: 'ENTERPRISE SCALE',
      badge: 'RECOMMENDED FOR MID-ENTERPRISE',
      duration: '2–3 WEEKS',
      price: '₹75,000 – ₹2.5L',
      period: 'Based on workflow breadth & concurrency',
      description:
        'Multi-agent department automation with dedicated interactive executive consoles and ERP integrations.',
      timeline: '2–3 Weeks Turnaround',
      features: [
        'Full web/mobile responsive command dashboard',
        'Multi-agent feedback loop with human override',
        'Direct ERP connector (SAP, Tally, Zoho, Oracle)',
        'OCR / Unstructured document parsing engine',
        '30-Day performance SLA & staff onboarding',
      ],
      popular: true,
      ctaText: 'Schedule Architecture Scoping',
    },
    {
      name: 'Bespoke Sovereign Infra',
      tag: 'SOVEREIGN SUITE',
      badge: 'CUSTOM RETENTION',
      price: '₹5L – ₹10L+',
      period: 'Enterprise retainers & capital equipment integration',
      description:
        'Heavy industrial systems, digital twin telemetry, on-premises private model weights, and 24/7 dedicated engineering squad.',
      timeline: 'Custom Milestone Sprints',
      features: [
        'On-premise air-gapped private model deployment',
        'Heavy IoT, weighbridge & RFID physical sync',
        'Custom fine-tuned domain models & vector stores',
        'Dedicated Lead Architect squad on retainer',
        '99.99% Strict mission-critical uptime SLA',
      ],
      popular: false,
      ctaText: 'Executive Chamber Consultation',
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#0E0608] border-t border-[#3D1F2A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#B8A77E] tracking-widest uppercase">
            <span>[ COMMERCIAL TRANSPARENCY ]</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7EF] leading-tight">
            Structured Investment &amp; Engagement Models
          </h2>
          <p className="text-[#B8A77E] text-base max-w-xl mx-auto leading-relaxed font-normal">
            From rapid validation sprints to full sovereign enterprise infrastructures. Clear deliverables, zero lock-in ambiguity.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <SpotlightCard
                className={`w-full flex flex-col justify-between relative p-8 rounded-3xl ${
                  tier.popular
                    ? 'border-[#8c1d40] bg-[#25181c] shadow-[0_12px_40px_rgba(140,29,64,0.35)] ring-1 ring-[#8c1d40]/50 lg:-translate-y-2'
                    : 'border-[#3D1F2A] bg-[#241218]/90'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#8c1d40] text-[#FAF7EF] font-mono text-[11px] font-bold tracking-wider shadow-md uppercase">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span className={`font-mono text-xs uppercase font-bold tracking-wider ${tier.popular ? 'text-[#ffb2bf]' : 'text-[#B8A77E]'}`}>
                      {tier.tag}
                    </span>
                    {!tier.popular ? (
                      <span className="px-2.5 py-1 rounded bg-[#170b0f] text-[#FAF7EF] font-mono text-[11px] border border-[#3D1F2A]">
                        {tier.badge}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded bg-[#170b0f] text-[#fabc41] font-mono text-[11px] border border-[#3D1F2A]">
                        {tier.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[#FAF7EF] mb-2">{tier.name}</h3>

                  <p className="text-xs text-[#ddbfc3] leading-relaxed mb-6 font-sans">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pt-2 border-t border-[#3D1F2A]">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#FAF7EF] tracking-tight">{tier.price}</span>
                    <span className="text-[#B8A77E] text-xs font-mono block mt-1">{tier.period}</span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#B8A77E]">
                      INCLUDED CAPABILITIES:
                    </div>
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#FAF7EF]">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-[#fabc41]' : 'text-[#ffb2bf]'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenConsultation(`${tier.name} (${tier.price})`)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    tier.popular
                      ? 'bg-[#8c1d40] hover:bg-[#A8244D] text-[#FAF7EF] shadow-[0_4px_20px_rgba(140,29,64,0.5)]'
                      : 'bg-[#35262a] hover:bg-[#45353a] text-[#FAF7EF] border border-white/5'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
