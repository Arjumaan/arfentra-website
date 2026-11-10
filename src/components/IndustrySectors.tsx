import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

export const IndustrySectors: React.FC = () => {
  const sectors = [
    {
      vertical: 'VERTICAL 01',
      verticalColor: 'text-[#ffb2bf]',
      title: 'Freight & Heavy Logistics',
      spritePos: '0% 0%',
      desc: 'Autonomous bill-of-lading OCR extraction, dynamic fleet turn-around agents, automated weighbridge sync, and real-time transit exception dispatch.',
      metricLabel: 'Turnaround Delta',
      metricValue: '-42% Handling Time',
      metricValueColor: 'text-[#fabc41]',
    },
    {
      vertical: 'VERTICAL 02',
      verticalColor: 'text-[#f1e1ba]',
      title: 'Institutional Hospitality',
      spritePos: '100% 0%',
      desc: 'Enterprise food-service dispatch systems, predictive raw-material replenishment agents, multi-outlet procurement loops, and POS ledger synchronizers.',
      metricLabel: 'Spoilage Reduction',
      metricValue: '-31% Waste Floor',
      metricValueColor: 'text-[#fabc41]',
    },
    {
      vertical: 'VERTICAL 03',
      verticalColor: 'text-[#fabc41]',
      title: 'Industrial Manufacturing',
      spritePos: '0% 100%',
      desc: 'Shop-floor telemetry aggregation, assembly-line optical anomaly flagging, proactive preventive machinery maintenance alerts, and vendor ERP bridges.',
      metricLabel: 'Downtime Mitigation',
      metricValue: '2.4x Mean Time Impr.',
      metricValueColor: 'text-[#FAF7EF]',
    },
    {
      vertical: 'VERTICAL 04',
      verticalColor: 'text-[#ffb2bf]',
      title: 'Sovereign Infra & Defense',
      spritePos: '100% 100%',
      desc: 'Air-gapped private vector stores, zero-exfiltration LLM inferencing, automated audit logging for statutory compliance, and executive access guards.',
      metricLabel: 'Data Exfiltration',
      metricValue: '0.00% Zero-Leak',
      metricValueColor: 'text-[#ffb2bf]',
    },
  ];

  return (
    <section id="industries" className="py-14 sm:py-20 lg:py-24 relative bg-[#170b0f] border-y border-[#3D1F2A]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#fabc41] tracking-widest uppercase">
              <span>[ SECTOR ALLIANCES ]</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#FAF7EF] leading-tight">
              Engineered Specifically for High-Stakes Physical &amp; Digital Verticals.
            </h2>
          </div>
          <p className="text-[#B8A77E] text-sm sm:text-base max-w-md leading-relaxed font-normal">
            Generic SaaS platforms fail under raw industrial demands. Arfentra builds custom agentic pipelines tailored to the precise regulatory and throughput bottlenecks of heavy sectors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <SpotlightCard className="h-full w-full flex flex-col justify-between group bg-[#241218]/90 border-[#3D1F2A] hover:border-[#8c1d40]/60 p-6 rounded-2xl">
                <div>
                  {/* 3D Sprite Thumbnail */}
                  <div className="w-16 h-16 mb-6 rounded-xl bg-[#170b0f] border border-[#3D1F2A] p-2 shadow-inner overflow-hidden group-hover:border-[#fabc41]/50 transition-colors">
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      <img
                        src="./assets/sector_badges.png"
                        alt={s.title}
                        className="w-[200%] h-[200%] max-w-none object-cover relative group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: s.spritePos }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <span className={`font-mono text-[11px] ${s.verticalColor} font-bold tracking-widest uppercase block mb-1`}>
                    {s.vertical}
                  </span>

                  <h3 className="font-bold text-lg text-[#FAF7EF] mb-3 group-hover:text-[#fabc41] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#ddbfc3] leading-relaxed mb-6 font-sans">
                    {s.desc}
                  </p>
                </div>

                {/* Metrics Footer */}
                <div className="pt-4 flex items-center justify-between font-mono text-xs text-[#B8A77E] bg-[#170b0f]/80 px-3.5 py-2.5 rounded-xl border border-[#3D1F2A]/60">
                  <span>{s.metricLabel}:</span>
                  <span className={`font-bold ${s.metricValueColor}`}>{s.metricValue}</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
