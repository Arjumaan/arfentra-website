import React, { useState } from 'react';
import { SpotlightCard } from './SpotlightCard';
import confetti from 'canvas-confetti';
import { ShieldCheck, Copy, Check, Building2, FileCheck2, Cpu, CheckCircle2, ExternalLink } from 'lucide-react';

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
    <section id="corporate" className="py-14 sm:py-20 lg:py-24 relative bg-[#0E0608] border-t border-[#3D1F2A]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Command Center & Digital Twin Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#3D1F2A] bg-[#170b0f] mb-12 sm:mb-16 shadow-2xl">
          <div className="relative h-64 sm:h-96 lg:h-[400px] w-full overflow-hidden">
            <img
              src="./assets/command_center.png"
              alt="Arfentra Enterprise Command Center"
              className="w-full h-full object-cover object-center filter saturate-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0608] via-[#0E0608]/40 to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#170b0f]/90 border border-[#8c1d40]/40 backdrop-blur-md text-[#FAF7EF] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#A8244D] animate-ping" />
                <span>Command Center Telemetry: LIVE</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#170b0f]/90 border border-[#3D1F2A] backdrop-blur-md text-[#fabc41] text-xs font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>Edge Neural Fabric Synchronized</span>
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#fabc41] font-bold">
                  Sovereign Architecture
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#FAF7EF] tracking-tight">
                  Autonomous Multi-Agent Mesh &amp; Fleet Operations
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-[#241218]/90 border border-[#3D1F2A] text-[#FAF7EF]">
                  32 Micro Agents Synchronized
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Statutory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Official Stamp & Registry Details */}
          <div className="lg:col-span-5 bg-[#241218]/90 border border-[#3D1F2A] p-7 sm:p-8 rounded-3xl shadow-2xl relative space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 shrink-0 bg-[#170b0f] border border-[#3D1F2A] p-2 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src="./assets/corporate_stamp.png"
                  alt="Official Arfentra Private Limited MCA Stamp"
                  className="w-full h-full object-contain filter contrast-125"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#fabc41] uppercase tracking-widest block font-bold">
                  REGULATORY AUTHORITY
                </span>
                <h3 className="font-bold text-[#FAF7EF] text-lg sm:text-xl">Ministry of Corporate Affairs</h3>
                <p className="text-xs text-[#B8A77E]">Government of India Statutory Registry</p>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs bg-[#170b0f]/90 border border-[#3D1F2A] p-5 rounded-2xl">
              <div className="flex flex-col border-b border-[#3D1F2A] pb-2.5">
                <span className="text-[#B8A77E] text-[10px] uppercase">Corporate Identity Number (CIN)</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[#FAF7EF] font-bold tracking-wider">{cinNumber}</span>
                  <button
                    onClick={handleCopyCin}
                    className="p-1 rounded bg-[#25181c] hover:bg-[#35262a] text-[#FAF7EF] transition-colors cursor-pointer border border-[#3D1F2A]"
                    title="Copy CIN"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#fabc41]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#3D1F2A] pb-2.5">
                <span className="text-[#B8A77E] text-[10px] uppercase">Registrar Office</span>
                <span className="text-[#ddbfc3]">ROC Coimbatore, Tamil Nadu, India</span>
              </div>

              <div className="flex flex-col border-b border-[#3D1F2A] pb-2.5">
                <span className="text-[#B8A77E] text-[10px] uppercase">Statutory Entity Classification</span>
                <span className="text-[#ddbfc3]">Company Limited by Shares · Private Limited</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#B8A77E] text-[10px] uppercase">Authorized Operations Base</span>
                <span className="text-[#ddbfc3]">Coimbatore Central Technology Corridor</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#fabc41]">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#fabc41]" />
              <span>Public record verifiable via MCA.gov.in official portal</span>
              <a
                href="https://www.mca.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors ml-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Verified Production Audits & Enterprise Assurance */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#ffb2bf] tracking-wider uppercase font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fabc41]" />
                <span>Verified Production Audits</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF7EF] tracking-tight">
                Engineered for Irrefutable Business Results.
              </h2>
              <p className="text-[#B8A77E] text-base leading-relaxed font-normal">
                Our implementations are judged by harsh metrics: raw hours removed from manual cycles, reduction in invoice settlement disputes, and uninterrupted SLA uptime.
              </p>
            </div>

            {/* 2 Audited Production Case Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <SpotlightCard className="p-6 space-y-2.5 bg-[#241218]/90 border-[#3D1F2A]">
                <div className="flex items-center justify-between text-xs font-mono text-[#B8A77E]">
                  <span>SECTOR: REGIONAL FREIGHT</span>
                  <span className="text-[#fabc41] font-bold">AUDITED</span>
                </div>
                <div className="text-3xl font-extrabold text-[#ffb2bf] tracking-tight">-42%</div>
                <h4 className="font-bold text-[#FAF7EF] text-sm">Gate Handling Turnaround</h4>
                <p className="text-xs text-[#ddbfc3] leading-relaxed font-sans">
                  Automated OCR manifest checking shaved 22 minutes per container arrival across 3 hub yards.
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-6 space-y-2.5 bg-[#241218]/90 border-[#3D1F2A]">
                <div className="flex items-center justify-between text-xs font-mono text-[#B8A77E]">
                  <span>SECTOR: INDUSTRIAL PARTS</span>
                  <span className="text-[#fabc41] font-bold">AUDITED</span>
                </div>
                <div className="text-3xl font-extrabold text-[#FAF7EF] tracking-tight">₹1.4M</div>
                <h4 className="font-bold text-[#FAF7EF] text-sm">Annual Leakage Reclaimed</h4>
                <p className="text-xs text-[#ddbfc3] leading-relaxed font-sans">
                  Zero-drift reconciliation between weighbridge metrics and dynamic vendor credit notes.
                </p>
              </SpotlightCard>
            </div>

            {/* Enterprise Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-1">
                <div className="flex items-center gap-2 text-[#FAF7EF] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#fabc41]" />
                  <span>100% IP Handover</span>
                </div>
                <p className="text-[11px] text-[#B8A77E] leading-relaxed font-sans">
                  All custom code, trained neural model weights, and schemas belong entirely to you.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-1">
                <div className="flex items-center gap-2 text-[#FAF7EF] font-bold text-xs">
                  <FileCheck2 className="w-4 h-4 text-[#ffb2bf]" />
                  <span>SLA Guarantee</span>
                </div>
                <p className="text-[11px] text-[#B8A77E] leading-relaxed font-sans">
                  99.98% uptime guarantee with on-call engineer dispatch for mission-critical nodes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#170b0f] border border-[#3D1F2A] space-y-1">
                <div className="flex items-center gap-2 text-[#FAF7EF] font-bold text-xs">
                  <Building2 className="w-4 h-4 text-[#f1e1ba]" />
                  <span>GST Billing</span>
                </div>
                <p className="text-[11px] text-[#B8A77E] leading-relaxed font-sans">
                  Legally compliant corporate invoicing with formal NDAs backed by an Indian entity.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#B8A77E]">
              <span>AUDIT CADENCE: CONTINUOUS</span>
              <span>•</span>
              <span>TOLERANCE DRIFT: &lt; 0.02%</span>
              <span>•</span>
              <span className="text-[#FAF7EF] font-semibold">ENTERPRISE GRADE SLA</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
