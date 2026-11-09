import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Network, Layers, Zap, Shield, Check } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>The Arfentra Difference</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            An Unfair Architectural Advantage Built for High-Throughput Enterprises.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We replace fragmented consulting hand-offs with an integrated, high-cadence engineering model built around deterministic autonomy.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: 40% Workload Compression (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-8 flex"
          >
            <SpotlightCard className="w-full p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border-zinc-800 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs">
                  <Network className="w-3.5 h-3.5" />
                  <span>AUTONOMOUS MULTI-AGENT LOOP</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight max-w-xl">
                  Eliminate 40% of Repetitive Overhead through Self-Auditing Cognitive Agents.
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Unlike static chatbots or rigid RPA scripts, Arfentra agents utilize self-correcting feedback loops. They ingest unstructured inputs (handwritten waybills, multi-currency invoices, sensor telemetry), validate against your rules engine, and execute across downstream ERPs without human bottlenecking.
                </p>
              </div>

              {/* Technical Sparkline Graphic */}
              <div className="mt-8 pt-5 bg-zinc-950/80 border border-zinc-800/80 p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-zinc-400">WORKLOAD REDUCTION ACROSS PRODUCTION DEPLOYMENT (30 DAYS)</span>
                  <span className="text-emerald-400 font-bold">-40.2% HUMAN FRICTION</span>
                </div>

                <svg className="w-full h-16 stroke-current text-emerald-400" fill="none" viewBox="0 0 600 80">
                  <path
                    d="M0,70 L50,65 L100,58 L150,55 L200,48 L250,42 L300,38 L350,30 L400,28 L450,22 L500,18 L550,14 L600,10"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,70 L50,65 L100,58 L150,55 L200,48 L250,42 L300,38 L350,30 L400,28 L450,22 L500,18 L550,14 L600,10 L600,80 L0,80 Z"
                    fill="rgba(52, 211, 153, 0.12)"
                  />
                </svg>

                <div className="flex justify-between font-mono text-[10px] sm:text-[11px] text-zinc-500 mt-2">
                  <span>DAY 01 (BASELINE INGESTION)</span>
                  <span>DAY 14 (AGENTIC TRAINING)</span>
                  <span className="text-emerald-400 font-semibold">DAY 30 (AUTONOMOUS EQUILIBRIUM)</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Single-Source Full Stack Mastery (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-4 flex"
          >
            <SpotlightCard className="w-full p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border-zinc-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Zero Vendor Fragmentation
                </div>
                <h3 className="text-xl font-bold text-white">
                  Single-Source Full Stack Mastery
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We eliminate finger-pointing between frontend devs, cloud architects, and AI researchers. Arfentra handles native mobile interfaces, responsive command consoles, real-time database sharding, and on-prem fine-tuning under one roof.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-Performance Web &amp; Mobile Consoles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>SAP, Tally, Zoho, Oracle Adapters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Vector &amp; Embedded Storage</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Democratized Rapid Proof of Value (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-4 flex"
          >
            <SpotlightCard className="w-full p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border-zinc-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-champagne-gold uppercase tracking-wider font-semibold">
                  Democratized Entry
                </div>
                <h3 className="text-xl font-bold text-white">
                  ₹15,000 Rapid Functional Proof
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Why commit to lengthy multi-crore consulting retainers on blind faith? Arfentra deploys functional enterprise proof-of-value prototypes starting at ₹15,000 within 7 to 10 business days.
                </p>
              </div>

              <div className="pt-6">
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-400">Deliverable:</span>
                  <span className="text-emerald-400 font-bold">1 Live Friction Solved</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Battle-Tested Data Sovereignty (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 lg:col-span-8 flex"
          >
            <SpotlightCard className="w-full p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border-zinc-800 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
                    <Shield className="w-3.5 h-3.5" />
                    <span>ZERO EXFILTRATION GUARANTEE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Enterprise Data Never Trains Third-Party AI Models.
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Your company telemetry, pricing ledgers, and logistics topologies remain strictly private. We deploy locally containerized or dedicated cloud VPC models with cryptographic access envelopes.
                  </p>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800/80 p-5 rounded-2xl space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-zinc-400">ENCRYPTION AT REST</span>
                    <span className="text-white font-bold">AES-256-GCM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-zinc-400">INSPECTION AUDIT LOGS</span>
                    <span className="text-emerald-400 font-bold">IMMUTABLE TIME STAMP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">CORPORATE JURISDICTION</span>
                    <span className="text-sky-400 font-bold">INDIA MCA REGULATED</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
