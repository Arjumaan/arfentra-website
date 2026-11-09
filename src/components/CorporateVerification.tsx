import React, { useState } from 'react';
import { SpotlightCard } from './SpotlightCard';
import confetti from 'canvas-confetti';
import { ShieldCheck, Copy, Check, Building2, FileCheck2, Cpu } from 'lucide-react';

export const CorporateVerification: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const cinNumber = 'U62013TZ2026PTC041310';

  const handleCopyCin = () => {
    navigator.clipboard.writeText(cinNumber).then(() => {
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="corporate" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Command Center & Digital Twin Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-16 shadow-2xl">
          <div className="relative h-64 sm:h-96 lg:h-[400px] w-full overflow-hidden">
            <img
              src="./assets/command_center_hq.png"
              alt="Arfentra Enterprise Command Center"
              className="w-full h-full object-cover object-center filter saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-emerald-500/40 backdrop-blur-md text-zinc-200 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Command Center Telemetry: LIVE</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-md text-sky-400 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>Edge Neural Fabric Synchronized</span>
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold">
                  Sovereign Architecture
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Autonomous Multi-Agent Mesh &amp; Fleet Operations
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300">
                  32 Micro Agents Synchronized
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Statutory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Official Stamp & Registry Details */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative group">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-emerald-500/40 p-3 shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:border-emerald-400 transition-colors">
                <img
                  src="./assets/corporate_stamp.png"
                  alt="Official Arfentra Stamp"
                  className="w-full h-full object-contain filter contrast-125 drop-shadow-md"
                />
              </div>
              <div className="pointer-events-none absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl -z-10" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block font-bold">
                Statutory Corporate Identity
              </span>
              <h3 className="text-2xl font-bold text-white">Arfentra Private Limited</h3>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Incorporated under the Ministry of Corporate Affairs (MCA), Government of India. Full legal accountability, compliant billing, and enterprise SLA contracts.
              </p>
            </div>

            {/* Verification Card with Copy CIN */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 w-full max-w-sm flex flex-col gap-2.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">CIN / REG NO:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold">{cinNumber}</span>
                  <button
                    onClick={handleCopyCin}
                    className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy CIN to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-500">LEGAL STATUS:</span>
                <span className="text-emerald-400 font-semibold">Active Private Limited</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-500">JURISDICTION:</span>
                <span className="text-zinc-300">ROC Coimbatore / Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right: Enterprise Assurance Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <SpotlightCard className="p-6 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h4>Commercial IP &amp; Source Code Ownership</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                When Arfentra builds your enterprise software, 100% of the custom source code, trained neural model weights, and proprietary architecture artifacts belong entirely to your company.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <FileCheck2 className="w-5 h-5 text-sky-400" />
                <h4>Tier-1 Enterprise Service Level Agreements (SLAs)</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Guaranteed response windows, automated failover redundancy, and dedicated on-call engineering dispatch for mission-critical freight, industrial, and dining pipelines.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <Building2 className="w-5 h-5 text-purple-400" />
                <h4>Statutory MCA Billing &amp; GST Compliance</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Formal corporate invoices, GST credit compliance, NDAs, and clear milestone contracts backed by an Indian incorporated Private Limited entity.
              </p>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
