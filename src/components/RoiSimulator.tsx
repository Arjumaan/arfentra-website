import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export interface RoiTelemetryData {
  verticalName: string;
  efficiency: number;
  monthlyHours: number;
  hourlyRate: number;
  annualSavings: number;
  hoursReclaimed: number;
  compressionPct: number;
  formattedSavings: string;
}

interface RoiSimulatorProps {
  onLockStrategy: (data: RoiTelemetryData) => void;
}

export const RoiSimulator: React.FC<RoiSimulatorProps> = ({ onLockStrategy }) => {
  const verticals = [
    {
      id: 'logistics',
      name: 'Freight & Heavy Logistics',
      shortName: 'Freight & Logistics',
      efficiency: 0.42,
      subtext: 'Waybills & Fleet Ops',
      badgePct: '42%',
    },
    {
      id: 'hospitality',
      name: 'Institutional Hospitality',
      shortName: 'Hospitality & Dining',
      efficiency: 0.36,
      subtext: 'Procurement & POS',
      badgePct: '36%',
    },
    {
      id: 'manufacturing',
      name: 'Industrial Manufacturing',
      shortName: 'Manufacturing',
      efficiency: 0.44,
      subtext: 'Weighbridge & Anomaly',
      badgePct: '44%',
    },
    {
      id: 'sovereign',
      name: 'Sovereign Infra & Defense',
      shortName: 'Sovereign Infra',
      efficiency: 0.38,
      subtext: 'Air-Gapped Telemetry',
      badgePct: '38%',
    },
  ];

  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);
  const [monthlyHours, setMonthlyHours] = useState<number>(1200);
  const [hourlyRate, setHourlyRate] = useState<number>(850);

  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return '₹' + (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      return '₹' + (val / 100000).toFixed(2) + ' L';
    } else {
      return '₹' + Math.round(val).toLocaleString('en-IN');
    }
  };

  const {
    annualCostSaved,
    annualHoursSaved,
    compressionPct,
    paybackDisplay,
    formattedSavings,
    formattedBaseline,
  } = useMemo(() => {
    const baselineHours = monthlyHours * 12;
    const baselineCost = baselineHours * hourlyRate;
    const hoursSaved = baselineHours * selectedVertical.efficiency;
    const costSaved = baselineCost * selectedVertical.efficiency;
    const compPct = Math.round(selectedVertical.efficiency * 100);

    const dailySavings = costSaved / 365;
    const payback = dailySavings > 0 ? 15000 / dailySavings : 0;
    let pbText = '~' + Math.ceil(payback) + ' Days';
    if (payback <= 1) {
      pbText = '< 24 Hours';
    } else if (payback <= 7) {
      pbText = '< ' + Math.ceil(payback) + ' Days';
    }

    return {
      annualCostSaved: costSaved,
      annualHoursSaved: hoursSaved,
      compressionPct: compPct,
      paybackDisplay: pbText,
      formattedSavings: formatINR(costSaved),
      formattedBaseline: formatINR(baselineCost),
    };
  }, [monthlyHours, hourlyRate, selectedVertical]);

  const handleLockIn = () => {
    onLockStrategy({
      verticalName: selectedVertical.name,
      efficiency: selectedVertical.efficiency,
      monthlyHours,
      hourlyRate,
      annualSavings: annualCostSaved,
      hoursReclaimed: annualHoursSaved,
      compressionPct,
      formattedSavings,
    });
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 relative bg-[#0E0608] border-t border-[#3D1F2A]/60">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[400px] bg-[#540815]/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#720E1E]/15 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#fabc41] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-pulse" />
            <span>[ QUANTIFIABLE VALUE SIMULATOR ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#FAF7EF] tracking-tight leading-tight">
            Calculate Your Enterprise Operational Reclaim &amp; ROI.
          </h2>

          <p className="text-[#B8A77E] text-base leading-relaxed font-normal">
            Eliminating deterministic manual friction yields immediate bottom-line margin expansion. Model your projected capital recovery and workforce bandwidth based on empirical deployment telemetry.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#241218]/90 border border-[#3D1F2A] shadow-xl space-y-8 backdrop-blur-md">
            
            {/* Step 1: Industry Vertical Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B8A77E] uppercase tracking-wider font-semibold">
                  1. Industry Operational Vertical
                </span>
                <span className="text-[#ffb2bf] font-bold">
                  {compressionPct}% Compression Benchmark
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {verticals.map((v) => {
                  const isSelected = selectedVertical.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVertical(v)}
                      className={`px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer font-mono text-xs border ${
                        isSelected
                          ? 'bg-[#8c1d40] text-[#FAF7EF] border-[#ffb2bf] shadow-[0_0_12px_rgba(140,29,64,0.45)]'
                          : 'bg-[#25181c] text-[#ddbfc3] border-transparent hover:border-[#3D1F2A] hover:text-[#FAF7EF]'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span>{v.shortName}</span>
                        <span className="text-[11px] text-[#FAF7EF]">{v.badgePct}</span>
                      </div>
                      <span className="text-[10px] text-[#B8A77E] block mt-0.5 font-normal font-sans">
                        {v.subtext}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider - Monthly Hours */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="hours-slider" className="text-xs font-mono text-[#B8A77E] uppercase tracking-wider font-semibold">
                  2. Monthly Operational Labor Hours
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#170b0f] font-mono text-[#fabc41] text-sm font-bold border border-[#3D1F2A]">
                  <span>{monthlyHours.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-[#B8A77E] font-normal">hrs/mo</span>
                </div>
              </div>

              <input
                id="hours-slider"
                type="range"
                min="200"
                max="5000"
                step="50"
                value={monthlyHours}
                onChange={(e) => setMonthlyHours(Number(e.target.value))}
                className="w-full h-2 bg-[#35262a] rounded-lg appearance-none cursor-pointer accent-[#A8244D]"
              />

              <div className="flex justify-between font-mono text-[10px] sm:text-[11px] text-[#ddbfc3]">
                <span>200 hrs (Small Team)</span>
                <span>2,500 hrs (Department)</span>
                <span>5,000+ hrs (Enterprise Division)</span>
              </div>
            </div>

            {/* Step 3: Slider - Loaded Hourly Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="rate-slider" className="text-xs font-mono text-[#B8A77E] uppercase tracking-wider font-semibold">
                  3. Fully-Loaded Hourly Rate (₹)
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#170b0f] font-mono text-[#ffb2bf] text-sm font-bold border border-[#3D1F2A]">
                  <span>₹</span>
                  <span>{hourlyRate.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-[#B8A77E] font-normal">/ hr</span>
                </div>
              </div>

              <input
                id="rate-slider"
                type="range"
                min="400"
                max="3500"
                step="50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-[#35262a] rounded-lg appearance-none cursor-pointer accent-[#ffb2bf]"
              />

              <div className="flex justify-between font-mono text-[10px] sm:text-[11px] text-[#ddbfc3]">
                <span>₹400/hr (Back-Office)</span>
                <span>₹1,500/hr (Senior Analyst)</span>
                <span>₹3,500/hr (Specialist Eng)</span>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-3.5 rounded-xl bg-[#170b0f]/80 border border-[#3D1F2A]/60 flex items-start gap-2.5 font-mono text-[11px] text-[#B8A77E]">
              <ShieldCheck className="w-4 h-4 text-[#fabc41] shrink-0 mt-0.5" />
              <span>
                Benchmark metrics calibrated against live deployments audited under MCA Reg <strong className="text-[#FAF7EF]">U62013TZ2026PTC041310</strong>.
              </span>
            </div>

          </div>

          {/* Right Column: Live Results Display */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SpotlightCard className="p-7 sm:p-8 rounded-3xl bg-[#25181c] border border-[#8c1d40]/40 shadow-[0_12px_40px_rgba(140,29,64,0.35)] relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ffb2bf] font-bold">
                    ANNUALIZED BOTTOM-LINE VALUE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#291c20] font-mono text-[10px] text-[#fabc41] border border-[#fabc41]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fabc41] animate-pulse" />
                    LIVE COMPUTATION
                  </span>
                </div>

                {/* Main Annual Saved Hero */}
                <div>
                  <span className="font-mono text-[#B8A77E] text-xs uppercase tracking-wider block">
                    Projected Annual Capital Saved
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <motion.span
                      key={formattedSavings}
                      initial={{ opacity: 0.8, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#FAF7EF] tracking-tight"
                    >
                      {formattedSavings}
                    </motion.span>
                    <span className="font-mono text-[#fabc41] font-bold text-sm sm:text-base">
                      / year
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#ddbfc3] leading-relaxed font-sans">
                    Direct operational budget reclaimed across recurring clerical, validation, and manual data pipelines.
                  </p>
                </div>

                {/* Comparative Compression Bar Gauge */}
                <div className="p-4 rounded-2xl bg-[#170b0f]/90 border border-[#3D1F2A]/60 space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#B8A77E]">Operational Workload Distribution</span>
                    <span className="text-[#ffb2bf] font-bold">{compressionPct}% Reclaimed</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-[#241218] overflow-hidden flex shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-[#A8244D] to-[#ffb2bf] transition-all duration-300"
                      style={{ width: `${compressionPct}%` }}
                    />
                    <div
                      className="h-full bg-[#35262a] transition-all duration-300"
                      style={{ width: `${100 - compressionPct}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-[#B8A77E] pt-0.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ffb2bf]" />
                      Automated Overhead ({compressionPct}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#35262a]" />
                      High-Touch Human Focus ({100 - compressionPct}%)
                    </span>
                  </div>
                </div>

                {/* Sub Metrics Quad */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#241218] border border-[#3D1F2A]/60">
                    <div className="font-mono text-[10px] uppercase text-[#B8A77E]">Annual Hours Reclaimed</div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[#FAF7EF] mt-1">
                      {Math.round(annualHoursSaved).toLocaleString('en-IN')} hrs
                    </div>
                    <span className="text-[10px] text-[#fabc41] font-mono">Freed Capacity</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#241218] border border-[#3D1F2A]/60">
                    <div className="font-mono text-[10px] uppercase text-[#B8A77E]">Baseline Annual Cost</div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[#ddbfc3] mt-1">
                      {formattedBaseline}
                    </div>
                    <span className="text-[10px] text-[#B8A77E] font-mono">Pre-Automation</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#241218] border border-[#3D1F2A]/60 col-span-2 sm:col-span-1">
                    <div className="font-mono text-[10px] uppercase text-[#B8A77E]">Prototype Payback</div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[#f1e1ba] mt-1">
                      {paybackDisplay}
                    </div>
                    <span className="text-[10px] text-[#B8A77E] font-mono">vs ₹15,000 MVP</span>
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleLockIn}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-sm text-center flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(140,29,64,0.45)] hover:bg-[#A8244D] transition-all active:scale-95 group cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-[#FAF7EF] group-hover:rotate-12 transition-transform" />
                    <span>Lock In This Reclaim Strategy</span>
                    <ArrowRight className="w-4 h-4 text-[#FAF7EF]" />
                  </button>

                  <a
                    href="#pricing"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#35262a] text-[#FAF7EF] font-bold text-sm text-center hover:bg-[#45353a] transition-all border border-white/5"
                  >
                    Inspect Tiers
                  </a>
                </div>

              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
