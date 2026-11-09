import React from 'react';
import { motion } from 'framer-motion';
import { ThreeCanvas } from './ThreeCanvas';
import { ArrowRight, Cpu, Shield, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (tier?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      {/* 21st.dev Style Ambient Radial Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-sky-500/15 via-emerald-500/10 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[450px] h-[450px] bg-sky-500/10 blur-[100px] rounded-full" />
      
      {/* Subtle modern dot matrix pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono font-medium">Enterprise AI &amp; Automation Engine</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400"
          >
            <Shield className="w-3.5 h-3.5 text-sky-400" />
            <span>MCA Registered · CIN: U62013TZ2026PTC041310</span>
          </motion.div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12]">
              Reduce Operational Workload by up to{' '}
              <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                40%
              </span>{' '}
              with Deterministic AI Agents.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
              We empower heavy logistics, dining networks, and enterprise teams to automate repetitive decisions,
              sync supply chains, and build production-grade custom software with guaranteed SLAs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-zinc-950 font-bold text-sm tracking-wide uppercase shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>Schedule Strategy Call</span>
              </button>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-sm font-semibold tracking-wide transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800/80">
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <div className="font-extrabold text-xl text-white">40%</div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">Workload Cut</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <div className="font-extrabold text-xl text-emerald-400">₹15,000</div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">Starting Entry</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <div className="font-extrabold text-xl text-sky-400">&lt;48ms</div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">Sync Latency</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <div className="font-extrabold text-xl text-zinc-300">99.98%</div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Agent Network Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-zinc-900/30 p-2.5 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-zinc-950/80 border border-zinc-800/60">
                {/* 3D Canvas */}
                <ThreeCanvas />

                {/* Overlaid Telemetry Pills */}
                <div className="pointer-events-none absolute top-4 left-4 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/85 border border-emerald-500/40 text-zinc-200 text-xs font-mono backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Autonomous Mesh: ACTIVE</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/85 border border-zinc-800 text-zinc-400 text-xs font-mono backdrop-blur-md">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span>32 Concurrent Agents</span>
                  </div>
                </div>

                <div className="pointer-events-none absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs backdrop-blur-md">
                    <Sparkles className="w-3 h-3" />
                    Zero-Leak Yield
                  </span>
                </div>

                {/* Bottom Telemetry HUD */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider">Operational Yield</span>
                    <span className="text-emerald-400 font-bold">94.8% OPTIMAL</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 via-emerald-400 to-teal-300 w-[94.8%]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Reclaimed: <strong className="text-white">-40% Manual Labor</strong></span>
                    <span>Precision: <strong className="text-emerald-400">99.98%</strong></span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
