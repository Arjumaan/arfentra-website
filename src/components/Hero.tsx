import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { PhoneCall, Network, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (tier?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0608] pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-20">
      {/* Atmospheric Ambient Lighting Rings */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#540815]/35 via-[#8c1d40]/20 to-transparent blur-3xl opacity-75" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[480px] h-[480px] bg-[#720E1E]/15 blur-[120px] rounded-full" />
      
      {/* Subtle modern dot matrix pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(250,247,239,0.04)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Micro Badges Pill Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25181c] border border-[#d4c59f]/20 shadow-[0_0_1px_1px_rgba(214,199,161,0.2)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#A8244D] animate-pulse" />
            <span className="font-mono text-[#FAF7EF] tracking-wider uppercase text-[11px] font-semibold">
              ENTERPRISE AI &amp; AUTONOMOUS AGENTIC ENGINES
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#291c20] border border-white/5 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#fabc41]" />
            <span className="font-mono text-[#B8A77E] text-[11px] tracking-wide">
              MCA REG: <strong className="text-[#FAF7EF]">U62013TZ2026PTC041310</strong>
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#170b0f] border border-white/5 text-[#ddbfc3] font-mono text-[11px]">
            <span className="text-[#fabc41] font-semibold">ROC COIMBATORE</span> · TAMIL NADU
          </div>
        </motion.div>

        {/* Hero Typography & Side Stats Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          
          {/* Left Column: Headlines & CTA (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#FAF7EF] tracking-tight leading-[1.12] max-w-4xl">
              Reduce Operational Workload by up to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb2bf] via-[#FAF7EF] to-[#fabc41]">
                40%
              </span>{' '}
              with Enterprise Intelligent Automation.
            </h1>

            <p className="text-base sm:text-lg text-[#B8A77E] max-w-3xl leading-relaxed font-normal">
              Arfentra Private Limited engineers deterministic multi-agent orchestration architectures, heavy industrial digital twins, and bespoke mission-critical automated pipelines for sovereign enterprises.
            </p>

            {/* Primary CTA Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-sm sm:text-base shadow-[0_8px_24px_-4px_rgba(140,29,64,0.65)] hover:bg-[#A8244D] hover:shadow-[0_12px_28px_-4px_rgba(168,36,77,0.7)] transition-all duration-200 active:scale-95 group cursor-pointer min-h-[44px]"
              >
                <PhoneCall className="w-5 h-5 text-[#FAF7EF] group-hover:rotate-12 transition-transform" />
                <span>Schedule Strategy Call</span>
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#solutions"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-[#35262a] text-[#FAF7EF] font-bold text-sm sm:text-base hover:bg-[#45353a] transition-all duration-200 shadow-md border border-white/5 min-h-[44px]"
              >
                <Network className="w-5 h-5 text-[#fabc41]" />
                <span>Explore Enterprise Solutions</span>
              </motion.a>

              <a
                href="tel:+919384040460"
                className="font-mono text-[#ddbfc3] text-xs hover:text-[#FAF7EF] transition-colors pl-1 min-h-[44px] flex items-center"
              >
                Direct line: <strong className="text-[#FAF7EF] ml-1">+91 9384040460</strong>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Side Quick Stats Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="flex flex-col gap-3.5 bg-[#241218]/90 border-[#3D1F2A] p-6 rounded-2xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B8A77E] font-semibold">
                  SYSTEM TELEMETRY STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0E0608] text-[#fabc41] text-[10px] font-mono border border-[#fabc41]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fabc41] animate-pulse" />
                  <span>LIVE NODE</span>
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs py-2 bg-[#25181c]/80 px-3.5 rounded-xl border border-white/[0.04]">
                  <span className="text-[#ddbfc3] font-sans">Operational Workload Compression</span>
                  <span className="font-mono text-[#ffb2bf] font-bold text-sm">~40% Cut</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 bg-[#25181c]/80 px-3.5 rounded-xl border border-white/[0.04]">
                  <span className="text-[#ddbfc3] font-sans">Entry Prototype SLA</span>
                  <span className="font-mono text-[#FAF7EF] font-bold text-sm">7–14 Days</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 bg-[#25181c]/80 px-3.5 rounded-xl border border-white/[0.04]">
                  <span className="text-[#ddbfc3] font-sans">Deterministic SLA Reliability</span>
                  <span className="font-mono text-[#fabc41] font-bold text-sm">99.98% Exact</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 bg-[#25181c]/80 px-3.5 rounded-xl border border-white/[0.04]">
                  <span className="text-[#ddbfc3] font-sans">Sovereign Data Storage</span>
                  <span className="font-mono text-[#FAF7EF] font-bold text-sm">Zero 3rd-Party Leaks</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* Quick KPI Matrix Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <SpotlightCard className="p-5 rounded-2xl bg-[#241218]/70 border-[#3D1F2A] shadow-md flex flex-col justify-between">
            <div>
              <div className="font-mono text-[#B8A77E] text-[11px] uppercase tracking-wider font-semibold">
                Workload Cut
              </div>
              <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#ffb2bf] tracking-tight">
                40%
              </div>
            </div>
            <p className="mt-2 text-xs text-[#ddbfc3] font-sans leading-relaxed">
              Validated enterprise process compression.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-5 rounded-2xl bg-[#241218]/70 border-[#3D1F2A] shadow-md flex flex-col justify-between">
            <div>
              <div className="font-mono text-[#B8A77E] text-[11px] uppercase tracking-wider font-semibold">
                Entry Prototype
              </div>
              <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#FAF7EF] tracking-tight">
                ₹15,000
              </div>
            </div>
            <p className="mt-2 text-xs text-[#ddbfc3] font-sans leading-relaxed">
              Rapid functional proof without risk.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-5 rounded-2xl bg-[#241218]/70 border-[#3D1F2A] shadow-md flex flex-col justify-between">
            <div>
              <div className="font-mono text-[#B8A77E] text-[11px] uppercase tracking-wider font-semibold">
                SLA Deployment
              </div>
              <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#fabc41] tracking-tight">
                7–14d
              </div>
            </div>
            <p className="mt-2 text-xs text-[#ddbfc3] font-sans leading-relaxed">
              From scoping to deterministic production.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-5 rounded-2xl bg-[#241218]/70 border-[#3D1F2A] shadow-md flex flex-col justify-between">
            <div>
              <div className="font-mono text-[#B8A77E] text-[11px] uppercase tracking-wider font-semibold">
                Deterministic SLA
              </div>
              <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#f1e1ba] tracking-tight">
                99.98%
              </div>
            </div>
            <p className="mt-2 text-xs text-[#ddbfc3] font-sans leading-relaxed">
              Rigorous validation across agentic loops.
            </p>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
};
