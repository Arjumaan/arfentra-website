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
    <section id="products" className="py-14 sm:py-20 lg:py-24 relative bg-[#0E0608] border-t border-[#3D1F2A]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25181c] border border-[#3D1F2A] font-mono text-xs text-[#ffb2bf] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#fabc41]" />
              <span>Proprietary In-House IP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7EF] leading-tight">
              Flagship Commercial Platforms
            </h2>
          </div>
          <p className="text-[#B8A77E] text-base max-w-md leading-relaxed font-normal">
            Proof of engineering capability. We don’t just consult; we incubate, architect, and deploy high-concurrency commercial platforms into real consumer markets.
          </p>
        </div>

        {/* 21st.dev Style Pill Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] w-fit mb-10 shadow-lg">
          <button
            onClick={() => setActiveTab('ct')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'ct' ? 'text-[#FAF7EF]' : 'text-[#B8A77E] hover:text-[#FAF7EF]'
            }`}
          >
            {activeTab === 'ct' && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-[#8c1d40] rounded-xl shadow-[0_0_16px_rgba(140,29,64,0.45)]"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#fabc41]" />
              <span>CT Upskilling Platform</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('dining')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'dining' ? 'text-[#FAF7EF]' : 'text-[#B8A77E] hover:text-[#FAF7EF]'
            }`}
          >
            {activeTab === 'dining' && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-[#8c1d40] rounded-xl shadow-[0_0_16px_rgba(140,29,64,0.45)]"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#fabc41]" />
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
            <SpotlightCard className="p-6 sm:p-10 border-[#3D1F2A] bg-[#241218]/90">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Info & Feature Grid */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#fabc41] font-bold uppercase tracking-wider block mb-2">
                      {current.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7EF] tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-[#f1e1ba] font-medium text-sm sm:text-base mt-2">
                      {current.headline}
                    </p>
                    <p className="text-[#ddbfc3] text-sm mt-3 leading-relaxed font-sans">
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
                          className="p-3.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2 text-[#FAF7EF] font-semibold text-xs">
                            <Icon className="w-4 h-4 text-[#fabc41]" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-[#B8A77E] leading-normal font-sans">{feat.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Metrics & CTA */}
                  <div className="pt-4 border-t border-[#3D1F2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-6 font-mono text-xs">
                      {current.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="text-[#B8A77E] block text-[10px] uppercase">{m.label}</span>
                          <span className="text-[#FAF7EF] font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenConsultation(`${current.title} Inquiry`)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider hover:bg-[#A8244D] shadow-[0_4px_16px_rgba(140,29,64,0.4)] transition-all cursor-pointer"
                    >
                      <span>{current.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Right: Isometric Visual Preview */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-[#3D1F2A] bg-[#170b0f] shadow-2xl group">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0608] via-[#0E0608]/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#170b0f]/90 border border-[#3D1F2A] text-[#FAF7EF] backdrop-blur-md">
                        Production Live Engine
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#8c1d40]/30 border border-[#8c1d40] text-[#ffb2bf] backdrop-blur-md font-bold">
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
