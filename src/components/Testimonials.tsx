import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Star, ShieldCheck } from 'lucide-react';

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
      accent: 'emerald',
    },
    {
      name: 'Radhakrishnan M.',
      role: 'Managing Partner',
      company: 'Coastal Kitchens Multi-Outlet Group',
      stat: '+38% Table Turn Velocity',
      roi: 'Covers: +2.4x Rush Capacity',
      text: 'Book Your Food transformed our lunch rush. Patrons walk in and steaming gourmet meals land on their tables within 90 seconds. We eliminated table vacancy drag and boosted weekday covers by 160%. Engineering grade is world-class.',
      initials: 'RM',
      accent: 'sky',
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
      accent: 'purple',
    },
  ];

  return (
    <section id="results" className="py-20 lg:py-28 relative bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Enterprise ROI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Hardened Field Endorsements
            </h2>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">4.98 / 5.0</span>
            <span className="text-zinc-500">Enterprise Score</span>
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
                className={`flex flex-col justify-between w-full relative ${
                  rev.featured ? 'border-sky-500/40 bg-zinc-900/60 shadow-xl' : ''
                }`}
              >
                {rev.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400 text-[10px] font-mono font-bold uppercase">
                    Featured Case
                  </div>
                )}

                <div className="space-y-4">
                  {/* Rating & Highlight Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                      {rev.stat}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 mt-6 border-t border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-inner">
                      {rev.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm truncate">{rev.name}</h4>
                      <p className="text-[11px] text-zinc-400 truncate">{rev.role}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="truncate">{rev.company}</span>
                    <span className="text-emerald-400 font-semibold shrink-0">{rev.roi}</span>
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
