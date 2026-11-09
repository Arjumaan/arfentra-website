import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center">
                <img src="./assets/logo.png" alt="Arfentra" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight uppercase">
                Arfentra Private Limited
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Enterprise artificial intelligence, autonomous agentic workflows, custom web and mobile platforms, and sovereign cloud infrastructure engineering.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-300">
                CIN: U62013TZ2026PTC041310
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Entity
              </span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3 text-xs">
            <span className="font-mono text-zinc-200 uppercase font-bold tracking-wider block">
              Core Solutions
            </span>
            <div className="flex flex-col space-y-2.5">
              <a href="#solutions" className="hover:text-white transition-colors">Autonomous Agent Loops</a>
              <a href="#capabilities" className="hover:text-white transition-colors">Command Dome &amp; Digital Twin</a>
              <a href="#roi-calculator" className="hover:text-white transition-colors">ROI &amp; Reclaim Simulator</a>
              <a href="#industries" className="hover:text-white transition-colors">4 Sector Alliances</a>
              <a href="#pricing" className="hover:text-white transition-colors">Transparent Investment Tiers</a>
            </div>
          </div>

          {/* Col 3: Proprietary Platforms */}
          <div className="space-y-3 text-xs">
            <span className="font-mono text-zinc-200 uppercase font-bold tracking-wider block">
              In-House Platforms
            </span>
            <div className="flex flex-col space-y-2.5">
              <a href="#products" className="hover:text-white transition-colors">CT Upskilling Platform</a>
              <a href="#products" className="hover:text-white transition-colors">Book Your Food POS</a>
              <a href="#products" className="hover:text-white transition-colors">ECCE-to-PG Continuum</a>
              <a href="#products" className="hover:text-white transition-colors">Zero-Wait Dining Engine</a>
              <a href="#pricing" className="hover:text-white transition-colors">Investment Tiers</a>
            </div>
          </div>

          {/* Col 4: Corporate & Coordinates */}
          <div className="space-y-3 text-xs">
            <span className="font-mono text-zinc-200 uppercase font-bold tracking-wider block">
              Corporate Desk
            </span>
            <div className="flex flex-col space-y-2.5 font-mono">
              <a href="mailto:arfentra@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>arfentra@gmail.com</span>
              </a>
              <a href="tel:+919384040460" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 9384040460</span>
              </a>
              <div className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/arfentra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="https://instagram.com/arfentra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Arfentra Private Limited. All statutory rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ROC Coimbatore</span>
            <span>•</span>
            <span>Ministry of Corporate Affairs (MCA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
