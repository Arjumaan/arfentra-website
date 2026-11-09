import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-950 p-8 sm:p-12 lg:p-16 border border-zinc-700/60 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Luminous Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 bg-sky-500/15 rounded-full blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px]" />

          <div className="space-y-4 max-w-2xl text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Obligation Architecture Review</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Reclaim 40% of Your Team’s Operational Capacity?
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed">
              Speak directly with Arfentra’s engineering leads. We analyze your process friction, calculate exact automation viability, and deliver a clear milestone blueprint within 4 business hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto relative z-10 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919384040460"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:border-zinc-500 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 9384040460</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
