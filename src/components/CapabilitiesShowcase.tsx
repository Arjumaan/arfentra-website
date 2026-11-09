import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { FileScan, RefreshCw, Scale, Route, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface CapabilitiesShowcaseProps {
  onOpenConsultation: (scope?: string) => void;
}

export const CapabilitiesShowcase: React.FC<CapabilitiesShowcaseProps> = ({ onOpenConsultation }) => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 relative bg-[#09090b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Capability 01: Autonomous Agentic Orchestrator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>Capability 01 // Telemetric Control</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Arfentra Autonomous Agentic Orchestrator &amp; Command Center
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              A unified multi-agent nervous system that continuously reads unstructured operational inputs across facilities, reconciles discrepancies, and drives automatic execution across back-office ledgers.
            </p>

            <div className="space-y-4 pt-2">
              <SpotlightCard className="p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
                  <FileScan className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Intelligent Consignment Extraction</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Parses complex multi-page manifests, customs papers, and invoices in seconds with 99.98% semantic fidelity.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Self-Healing Execution Chains</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    When an external API or warehouse ERP drops a record, fallback agents auto-reconcile and trace origin errors.
                  </p>
                </div>
              </SpotlightCard>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Autonomous Agentic Orchestrator')}
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold text-sm tracking-wide transition-colors cursor-pointer group"
              >
                <span>Inquire about Orchestrator deployment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 p-2 group">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
                <img
                  src="./assets/command_center_hq.png"
                  alt="Arfentra 3D Neural Operations Command Dome"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-zinc-950/90 border border-zinc-700/80 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs text-zinc-200">
                  3D NEURAL COMMAND DOME ACTIVE
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Capability 02: Digital Twin & Consignment Telematics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 p-2 group">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
                <img
                  src="./assets/command_center.png"
                  alt="Arfentra Heavy Industry Digital Twin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-zinc-950/90 border border-zinc-700/80 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-zinc-200">
                  WEIGHBRIDGE &amp; FLEET DYNAMICS SYNCED
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <Route className="w-3.5 h-3.5" />
              <span>Capability 02 // Physical Twin Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Heavy Industry Digital Twin &amp; Consignment Telematics
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Bridge physical trucks, factory scales, and yard cranes with your central operational ledger. Zero paper lag, instant gate clearance, and automated dispute resolution.
            </p>

            <div className="space-y-4 pt-2">
              <SpotlightCard className="p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Automated Weighbridge Validation</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Captures axle weights directly via hardware telemetry, compares instantly against manifest bounds, and flags fraud in real-time.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Dynamic Consignment Routing</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Agents re-sequence delivery schedules automatically based on dock bottlenecks, weather telemetry, and driver hours.
                  </p>
                </div>
              </SpotlightCard>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Digital Twin & Consignment Telematics')}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm tracking-wide transition-colors cursor-pointer group"
              >
                <span>Schedule digital twin feasibility audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
