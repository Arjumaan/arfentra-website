import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Bot, Layers, Zap, Shield, CheckCircle, TrendingUp, Code2 } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Architectural Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineered for Precision. Scaled for Unmatched ROI.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Eliminate operational drag with autonomous agent loops that process documents, sync databases, and automate workflows without sleep.
          </p>
        </div>

        {/* 5-Item Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 40% Workload Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">40% Workload Compression</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Automate repetitive data reconciliation, logistics dispatch, customer updates, and order syncing with deterministic multi-agent bots.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Demonstrated in Heavy Logistics &amp; Ports</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Targeted Industry Muscle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Domain-Tuned Neural Loops</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We know logistics route bottlenecks, dining table turns, and student lifecycle friction intimately. No generic templates—just hardened domain modules.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-2 text-xs font-mono text-sky-400">
                <CheckCircle className="w-4 h-4" />
                <span>Hospitality &amp; Freight Pre-Configured</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Single Source Execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Single Source Execution</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  No juggling separate freelancers or disparate agencies. Web apps, mobile apps, ERP connectors, custom models, and cloud servers engineered under one roof.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Unified Architectural Governance</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Double Span - Democratized Entry from ₹15,000 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <SpotlightCard className="h-full flex flex-col md:flex-row justify-between gap-6 border-sky-500/30 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80">
              <div className="space-y-4 max-w-xl">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Democratized Transformation: Entry from ₹15,000
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Enterprise digital transformation shouldn't require multi-crore consulting retainers. We kickstart targeted automation with a rapid MVP at ₹15,000 and scale seamlessly into turnkey enterprise software.
                </p>
              </div>

              <div className="flex flex-col justify-end min-w-[220px] gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">Initial MVP Delivery</span>
                  <span className="font-extrabold text-lg text-emerald-400">7 – 14 Days Flat</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">Custom SLA Guarantee</span>
                  <span className="font-extrabold text-lg text-white">99.98% Strict Uptime</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: Active Product Builders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Active Product Builders</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We build and scale our own commercial consumer platforms. When we build your system, you get battle-tested engineering proven under real-world user load.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Battle-Tested In-House Products</span>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
