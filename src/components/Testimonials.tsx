import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Karthik Sundararajan',
      role: 'Director of Logistics & Operations',
      company: 'Freight Logistics Hub',
      stat: '-42% Gate Dispatch Time',
      roi: '₹1.4M Saved / Year',
      text: 'Before Arfentra deployed their automated weighbridge image parser, truck turnaround was bottlenecked by physical manifests. They cut our gate check-in to sub-4 minutes. The deterministic accuracy is unprecedented.',
      initials: 'KS',
      accent: 'text-[#ffb2bf]',
    },
    {
      name: 'Radhakrishnan M.',
      role: 'Managing Partner',
      company: 'Coastal Kitchens Multi-Outlet Group',
      stat: '+38% Table Turn Velocity',
      roi: 'Covers: +2.4x Rush Capacity',
      text: 'Book Your Food transformed our lunch rush. Patrons walk in and steaming gourmet meals land on their tables within 90 seconds. We eliminated table vacancy drag and boosted weekday covers by 160%. Engineering grade is world-class.',
      initials: 'RM',
      accent: 'text-[#fabc41]',
      featured: true,
    },
    {
      name: 'Dr. Arvind Varma',
      role: 'Chief Technology Officer',
      company: 'Apex Industrial Automations',
      stat: '₹1.8M Operational Savings',
      roi: 'Uptime: 99.99% Strict SLA',
      text: 'Arfentra’s autonomous agent pipeline seamlessly hooked into our legacy ERP without tearing down existing infrastructure. Their ₹15,000 prototype converted to a full enterprise rollout in 3 weeks. Top tier technical muscle.',
      initials: 'AV',
      accent: 'text-[#f1e1ba]',
    },
  ];

  return (
    <section id="results" className="py-20 lg:py-28 relative bg-[#170b0f] border-t border-[#3D1F2A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#ffb2bf] tracking-widest uppercase">
              <span>[ VERIFIED PRODUCTION AUDITS ]</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7EF] leading-tight">
              Hardened Field Endorsements
            </h2>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#241218] border border-[#3D1F2A] text-xs font-mono">
            <div className="flex items-center text-[#fabc41]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fabc41] text-[#fabc41]" />
              ))}
            </div>
            <span className="text-[#FAF7EF] font-bold">4.98 / 5.0</span>
            <span className="text-[#B8A77E]">Enterprise Score</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <SpotlightCard
                className={`flex flex-col justify-between w-full relative p-6 rounded-2xl bg-[#241218]/90 ${
                  rev.featured
                    ? 'border-[#8c1d40] shadow-[0_8px_32px_rgba(140,29,64,0.3)] ring-1 ring-[#8c1d40]/40'
                    : 'border-[#3D1F2A]'
                }`}
              >
                {rev.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#8c1d40]/30 border border-[#8c1d40] text-[#ffb2bf] text-[10px] font-mono font-bold uppercase">
                    Featured Case
                  </div>
                )}

                <div className="space-y-4">
                  {/* Rating & Highlight Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#fabc41]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#fabc41] text-[#fabc41]" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] font-mono text-[11px] font-bold">
                      {rev.stat}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-[#ddbfc3] text-xs sm:text-sm leading-relaxed italic font-sans">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 mt-6 border-t border-[#3D1F2A]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25181c] to-[#0E0608] border border-[#3D1F2A] flex items-center justify-center font-bold text-[#FAF7EF] text-xs shrink-0 shadow-inner">
                      {rev.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#FAF7EF] text-sm truncate">{rev.name}</h4>
                      <p className="text-[11px] text-[#B8A77E] truncate font-sans">{rev.role}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#B8A77E]">
                    <span className="truncate">{rev.company}</span>
                    <span className="text-[#ffb2bf] font-semibold shrink-0">{rev.roi}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
