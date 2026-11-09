import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Calculator, ArrowRight, Sparkles, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

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
      badgeColor: 'text-sky-400',
    },
    {
      id: 'hospitality',
      name: 'Institutional Hospitality',
      shortName: 'Hospitality & Dining',
      efficiency: 0.36,
      subtext: 'Procurement & POS',
      badgeColor: 'text-champagne-gold',
    },
    {
      id: 'manufacturing',
      name: 'Industrial Manufacturing',
      shortName: 'Manufacturing',
      efficiency: 0.44,
      subtext: 'Weighbridge & Anomaly',
      badgeColor: 'text-emerald-400',
    },
    {
      id: 'sovereign',
      name: 'Sovereign Infra & Defense',
      shortName: 'Sovereign Infra',
      efficiency: 0.38,
      subtext: 'Air-Gapped Telemetry',
      badgeColor: 'text-purple-400',
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
      baselineAnnualCost: baselineCost,
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
    <section id="roi-calculator" className="py-20 lg:py-28 relative bg-[#09090b] border-t border-zinc-800/80">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[400px] bg-wine-deep/15 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-champagne-gold/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-gold/10 border border-champagne-gold/30 text-champagne-gold font-mono text-xs uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Quantifiable Value Simulator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Calculate Your Projected Enterprise Operational Reclaim &amp; ROI.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Eliminating deterministic manual friction yields immediate margin expansion. Model your projected capital recovery and workforce bandwidth based on empirical deployment telemetry.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 shadow-2xl space-y-8 backdrop-blur-sm">
            
            {/* Step 1: Industry Vertical Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 uppercase tracking-wider font-semibold">1. Select Target Vertical</span>
                <span className="text-champagne-gold font-bold">
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
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer font-mono border ${
                        isSelected
                          ? 'bg-zinc-800/90 border-champagne-gold text-white shadow-lg shadow-champagne-gold/10 ring-1 ring-champagne-gold/40'
                          : 'bg-zinc-950/70 border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span>{v.shortName}</span>
                        <span className={v.badgeColor}>
                          {Math.round(v.efficiency * 100)}%
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 block mt-1 font-normal font-sans">
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
                <label htmlFor="hours-range" className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  2. Monthly Operational Labor Hours
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-champagne-gold text-sm font-bold">
                  <span>{monthlyHours.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-zinc-500 font-normal">hrs/mo</span>
                </div>
              </div>

              <input
                id="hours-range"
                type="range"
                min="200"
                max="5000"
                step="50"
                value={monthlyHours}
                onChange={(e) => setMonthlyHours(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-champagne-gold"
              />

              <div className="flex justify-between font-mono text-[11px] text-zinc-500">
                <span>200 hrs (Small Squad)</span>
                <span>2,500 hrs (Full Dept)</span>
                <span>5,000+ hrs (Division)</span>
              </div>
            </div>

            {/* Step 3: Slider - Loaded Hourly Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="rate-range" className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  3. Fully-Loaded Hourly Rate (₹)
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-emerald-400 text-sm font-bold">
                  <span>₹</span>
                  <span>{hourlyRate.toLocaleString('en-IN')}</span>
                  <span className="text-[11px] text-zinc-500 font-normal">/ hr</span>
                </div>
              </div>

              <input
                id="rate-range"
                type="range"
                min="400"
                max="3500"
                step="50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between font-mono text-[11px] text-zinc-500">
                <span>₹400/hr (Back-Office)</span>
                <span>₹1,500/hr (Sr Analyst)</span>
                <span>₹3,500/hr (Lead Eng)</span>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-start gap-2.5 font-mono text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Benchmark telemetry calibrated against live Indian corporate deployments under MCA Reg <strong className="text-zinc-200">U62013TZ2026PTC041310</strong>.
              </span>
            </div>

          </div>

          {/* Right Column: Live Results Display */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SpotlightCard className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-950 border border-champagne-gold/30 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-champagne-gold font-bold">
                    Annualized Bottom-Line Value
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/40 font-mono text-[11px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Main Annual Saved Hero */}
                <div>
                  <span className="font-mono text-zinc-400 text-xs uppercase tracking-wider block">
                    Projected Annual Capital Saved
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <motion.span
                      key={formattedSavings}
                      initial={{ opacity: 0.8, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    >
                      {formattedSavings}
                    </motion.span>
                    <span className="font-mono text-emerald-400 font-bold text-sm sm:text-base">
                      / year
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                    Direct operational budget reclaimed across recurring clerical, verification, OCR, and manual data pipelines.
                  </p>
                </div>

                {/* Comparative Compression Bar Gauge */}
                <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-zinc-400">Operational Distribution</span>
                    <span className="text-champagne-gold font-bold">{compressionPct}% Reclaimed</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden flex shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-all duration-300"
                      style={{ width: `${compressionPct}%` }}
                    />
                    <div
                      className="h-full bg-zinc-700/60 transition-all duration-300"
                      style={{ width: `${100 - compressionPct}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 pt-0.5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Automated Overhead ({compressionPct}%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-500" />
                      High-Touch Human Focus ({100 - compressionPct}%)
                    </span>
                  </div>
                </div>

                {/* Sub Metrics Quad */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono uppercase">
                      <Clock className="w-3 h-3 text-sky-400" />
                      <span>Reclaimed Hours</span>
                    </div>
                    <div className="font-mono text-lg font-bold text-white mt-1">
                      {Math.round(annualHoursSaved).toLocaleString('en-IN')} hrs
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Freed Team Capacity</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono uppercase">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span>Baseline Cost</span>
                    </div>
                    <div className="font-mono text-lg font-bold text-zinc-200 mt-1">
                      {formattedBaseline}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">Pre-Automation Cost</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono uppercase">
                      <Zap className="w-3 h-3 text-champagne-gold" />
                      <span>MVP Payback</span>
                    </div>
                    <div className="font-mono text-lg font-bold text-champagne-gold mt-1">
                      {paybackDisplay}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">vs ₹15,000 MVP</span>
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleLockIn}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-500/20 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-zinc-950" />
                    <span>Lock In This Reclaim Strategy</span>
                    <ArrowRight className="w-4 h-4 text-zinc-950" />
                  </button>

                  <a
                    href="#pricing"
                    className="w-full sm:w-auto py-4 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider text-center border border-zinc-700 transition-colors"
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
