import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: (tier?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const tiers = [
    {
      name: 'Starter Digital MVP',
      tag: 'Rapid Validation',
      badge: 'Quick Win Sprint',
      price: '₹15,000',
      period: '/ flat entry',
      description:
        'Ideal for SMBs or departments needing to automate a single high-friction task or test an initial autonomous bot.',
      timeline: '7 – 10 Business Days',
      features: [
        'Single-process targeted AI workflow',
        'WhatsApp or Email automated dispatch bot',
        'Data scraping, PDF OCR, or invoice reconciliation',
        'Direct cloud deployment & sandbox testing',
        'Standard 14-day defect warranty',
      ],
      popular: false,
      ctaText: 'Claim Starter Sprint (₹15K)',
    },
    {
      name: 'Growth & Automation',
      tag: 'Mid-Market Standard',
      badge: 'Most Popular',
      price: '₹75,000 – ₹2,50,000',
      period: '/ full build',
      description:
        'Comprehensive multi-agent platforms with full database schemas, modern responsive dashboards, and external software connectors.',
      timeline: '2 – 3 Weeks Turnaround',
      features: [
        'Custom Web Dashboard + Mobile Client App',
        'Multi-agent decision pipeline orchestration',
        'Payment gateway & ERP automated sync',
        'Role-based access control (RBAC) & security hardening',
        'Full cloud infrastructure setup + 30-day warranty',
        'Direct engineering hotline for rapid updates',
      ],
      popular: true,
      ctaText: 'Initiate Growth Scope',
    },
    {
      name: 'Deep Bespoke Architecture',
      tag: 'Enterprise Sovereign',
      badge: 'High Concurrency',
      price: '₹5,00,000 – ₹10,00,000+',
      period: '/ turnkey retainer',
      description:
        'End-to-end bespoke industry software, heavy logistics fleet telematics, multi-branch networks, and dedicated engineering squad.',
      timeline: 'Custom Milestone Sprints',
      features: [
        '100% Bespoke enterprise architecture & IP ownership',
        'Heavy IoT / Fleet GPS / POS hardware integrations',
        'Zero-trust cybersecurity hardening & statutory compliance',
        'Dedicated SLA, 99.98% uptime monitoring, engineer on-call',
        'Custom private vector store & fine-tuned LLM loops',
        'Priority feature roadmap & dedicated technical advisor',
      ],
      popular: false,
      ctaText: 'Consult Chief Architect',
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Tiers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Clear, Predictable Corporate Pricing
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Validate value with a ₹15,000 quick sprint or commission turnkey sovereign enterprise software tailored to your operational friction.
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
                className={`w-full flex flex-col justify-between relative ${
                  tier.popular
                    ? 'border-emerald-500/50 bg-zinc-900/70 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                    : 'border-zinc-800/80 bg-zinc-900/40'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-950 font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className="font-mono text-xs text-sky-400 uppercase font-bold tracking-wider">
                      {tier.tag}
                    </span>
                    {!tier.popular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono text-[10px]">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{tier.price}</span>
                    <span className="text-zinc-400 text-xs font-mono ml-1">{tier.period}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">Timeline:</span>
                    <span className="text-emerald-400 font-bold">{tier.timeline}</span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                      ? 'bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-950 hover:brightness-110 hover:scale-[1.01]'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
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
