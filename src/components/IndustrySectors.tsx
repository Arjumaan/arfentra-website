import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Truck, Utensils, Factory, ShieldCheck, Activity } from 'lucide-react';

export const IndustrySectors: React.FC = () => {
  const sectors = [
    {
      sector: 'Sector 01',
      title: 'Heavy Logistics & Freight',
      icon: Truck,
      spritePos: '0% 0%',
      metrics: [
        { label: 'Active Fleet', value: '4,200+ Nodes' },
        { label: 'Sync Latency', value: '<48ms Real-Time' },
      ],
      desc: 'Autonomous GPS telematics, instant weighbridge OCR, and route arbitration.',
    },
    {
      sector: 'Sector 02',
      title: 'Smart Hospitality & Dining',
      icon: Utensils,
      spritePos: '100% 0%',
      metrics: [
        { label: 'Table Turn Velocity', value: '+2.4x Speed' },
        { label: 'Kitchen Sync', value: '100% Pre-Settled' },
      ],
      desc: 'Zero-wait dining orchestration, POS synchronization, and automated KDS dispatch.',
    },
    {
      sector: 'Sector 03',
      title: 'Industrial Manufacturing',
      icon: Factory,
      spritePos: '0% 100%',
      metrics: [
        { label: 'IoT Sensor Streams', value: '18,500 Data Pts' },
        { label: 'Defect Reduction', value: '-34% Error Drift' },
      ],
      desc: 'Computer vision quality inspection, PLC synchronization, and predictive downtime alerts.',
    },
    {
      sector: 'Sector 04',
      title: 'Cloud Defense & EdTech',
      icon: ShieldCheck,
      spritePos: '100% 100%',
      metrics: [
        { label: 'Audited Uptime', value: '99.98% Strict SLA' },
        { label: 'Security Model', value: 'Zero-Trust Mesh' },
      ],
      desc: 'End-to-end data encryption, continuous skill verification, and multi-tenant cloud isolation.',
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 relative bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-400 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>Certified Enterprise Deployments</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Targeted Industry Muscle Across 4 Core Verticals
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            We don’t offer generic tech advice. Our multi-agent systems are battle-tested inside active freight hubs, busy restaurants, and industrial production lines.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between group hover:border-sky-500/40">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    {/* 3D Sprite Thumbnail */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 p-0.5 shrink-0 group-hover:border-sky-500/50 transition-colors shadow-lg">
                      <div className="w-full h-full rounded-lg overflow-hidden relative">
                        <img
                          src="./assets/sector_badges_hq.png"
                          alt={s.title}
                          className="w-[200%] h-[200%] max-w-none object-cover relative group-hover:scale-110 transition-transform duration-500"
                          style={{ objectPosition: s.spritePos }}
                        />
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-sky-400 font-bold tracking-wider uppercase block">
                        {s.sector}
                      </span>
                      <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Metrics Footer */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80 font-mono text-xs">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span className="text-zinc-500">{m.label}:</span>
                      <span className="text-zinc-200 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
