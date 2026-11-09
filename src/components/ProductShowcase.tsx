import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { GraduationCap, Utensils, ArrowRight, Sparkles, CheckCircle2, Timer, Zap, BarChart3, Database } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenConsultation: (tier?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'ct' | 'dining'>('ct');

  const products = {
    ct: {
      id: 'ct',
      tag: 'EdTech Career Architecture',
      title: 'CT — Continuous Upskilling Platform',
      headline: 'Lifelong ECCE-to-PG Career Companion & Skill Verification Engine',
      description:
        'A comprehensive platform that tracks, predicts, and guides student growth from Early Childhood Education (ECCE) through Post Graduation (PG), bridging academic curriculums directly to enterprise recruiter requirements.',
      image: './assets/product_ct.png',
      features: [
        {
          title: 'ECCE-to-PG Unified Record',
          desc: 'Continuous profile without fragmented yearly record loss.',
          icon: Database,
        },
        {
          title: 'Predictive Skill Gap Scoring',
          desc: 'AI forecasted readiness metrics calibrated to live corporate job specs.',
          icon: BarChart3,
        },
        {
          title: 'Institutional LMS Bridge',
          desc: 'Drop-in REST/GraphQL connectors for schools, universities, and boards.',
          icon: Zap,
        },
        {
          title: 'Corporate Mentor Matching',
          desc: 'Automated student routing to verified senior industry practitioners.',
          icon: CheckCircle2,
        },
      ],
      metrics: [
        { label: 'Span Covered', value: 'ECCE to Post-Grad' },
        { label: 'Profile Integrity', value: '100% Tamper-Proof' },
        { label: 'Recruiter Match Velocity', value: '3.8x Faster' },
      ],
      ctaLabel: 'Request CT Platform Demo',
    },
    dining: {
      id: 'dining',
      tag: 'Smart Hospitality & Fine Dining',
      title: 'Book Your Food — The "BookMyShow for Dining"',
      headline: 'Zero Wait Time Pre-Order & Kitchen Synchronization POS',
      description:
        'Enables diners to browse menus, customize dishes, and pre-pay before arrival so gourmet food lands piping hot the moment they take their seats, completely eradicating table vacancy drag.',
      image: './assets/product_bookyourfood.png',
      features: [
        {
          title: 'Zero Wait Meal Delivery',
          desc: 'Guests arrive, sit down, and steaming food is served within 90 seconds.',
          icon: Timer,
        },
        {
          title: 'Real-Time Kitchen KDS Sync',
          desc: 'Kitchen display timer synchronizes cook cycles with guest GPS arrival.',
          icon: Zap,
        },
        {
          title: '2.4x Table Turn Boost',
          desc: 'Dramatically raises cover capacity during peak lunch and dinner surges.',
          icon: BarChart3,
        },
        {
          title: '100% Pre-Settled Orders',
          desc: 'Guaranteed settlement and zero bill-payment delays at table exit.',
          icon: CheckCircle2,
        },
      ],
      metrics: [
        { label: 'Average Table Wait', value: 'Sub-90 Seconds' },
        { label: 'Table Turn Surge', value: '+2.4x Velocity' },
        { label: 'Payment Settlement', value: 'Zero-Friction Auto' },
      ],
      ctaLabel: 'Partner as Restaurant',
    },
  };

  const current = products[activeTab];

  return (
    <section id="products" className="py-20 lg:py-28 relative bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary In-House IP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Flagship Commercial Platforms
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Proof of engineering capability. We don’t just consult; we incubate, architect, and deploy high-concurrency commercial platforms into real consumer markets.
          </p>
        </div>

        {/* 21st.dev Style Pill Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 w-fit mb-10 shadow-lg">
          <button
            onClick={() => setActiveTab('ct')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'ct' ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeTab === 'ct' && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>CT Upskilling Platform</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('dining')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'dining' ? 'text-zinc-950' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {activeTab === 'dining' && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span>Book Your Food</span>
            </span>
          </button>
        </div>

        {/* Product Details Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <SpotlightCard className="p-6 sm:p-10 border-zinc-700/60 bg-zinc-900/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Info & Feature Grid */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block mb-2">
                      {current.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-zinc-300 font-medium text-sm sm:text-base mt-2">
                      {current.headline}
                    </p>
                    <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  {/* 4 Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {current.features.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <div
                          key={feat.title}
                          className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2 text-white font-semibold text-xs">
                            <Icon className="w-4 h-4 text-emerald-400" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-normal">{feat.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Metrics & CTA */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-6 font-mono text-xs">
                      {current.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="text-zinc-500 block text-[10px] uppercase">{m.label}</span>
                          <span className="text-white font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenConsultation(`${current.title} Inquiry`)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow-lg"
                    >
                      <span>{current.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Right: Isometric Visual Preview */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                      <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-200 backdrop-blur-md">
                        Production Live Engine
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 backdrop-blur-md font-bold">
                        Zero-Wait SLA
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
