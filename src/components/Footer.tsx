import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Terminal, Landmark, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#170b0f] border-t border-[#3D1F2A] text-[#ddbfc3] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3D1F2A]">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#241218] border border-[#3D1F2A] p-1 flex items-center justify-center">
                <img src="./assets/logo.png" alt="Arfentra" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-[#FAF7EF] text-lg tracking-tight uppercase">
                ARFENTRA
              </span>
            </div>

            <p className="text-xs text-[#ddbfc3] max-w-sm leading-relaxed font-sans">
              Institutional Grade Autonomous Workflow Architectures &amp; Executive Enterprise Technology Infrastructure.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E0608] text-[#B8A77E] font-mono text-[11px] border border-[#3D1F2A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fabc41] animate-pulse" />
              <span>MCA REGISTRY VERIFIED</span>
            </div>
          </div>

          {/* Col 2: Statutory Credentials */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#FAF7EF] text-base">Statutory Credentials</h4>
            <ul className="space-y-2 font-mono text-xs text-[#ddbfc3]">
              <li className="flex flex-col">
                <span className="text-[#B8A77E] text-[10px] uppercase">Corporate Identification No. (CIN)</span>
                <span className="text-[#FAF7EF] font-semibold tracking-wider">U62013TZ2026PTC041310</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[#B8A77E] text-[10px] uppercase">Registrar of Companies</span>
                <span className="text-[#FAF7EF]">ROC Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[#B8A77E] text-[10px] uppercase">Company Entity</span>
                <span className="text-[#FAF7EF]">Arfentra Private Limited</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Executive Channels */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#FAF7EF] text-base">Executive Channels</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#fabc41] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#B8A77E] text-[10px] font-mono uppercase">Direct Desk</span>
                  <a className="text-[#FAF7EF] hover:text-[#fabc41] transition-colors font-mono" href="tel:+919384040460">
                    +91 9384040460
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#fabc41] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#B8A77E] text-[10px] font-mono uppercase">Institutional Inquiries</span>
                  <a className="text-[#FAF7EF] hover:text-[#fabc41] transition-colors font-mono" href="mailto:arfentra@gmail.com">
                    arfentra@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8A77E] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#B8A77E] text-[10px] font-mono uppercase">Physical Corridor</span>
                  <span className="text-[#ddbfc3]">Coimbatore, Tamil Nadu, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Coordinates */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#FAF7EF] text-base">Institutional Coordinates</h4>
            <p className="text-xs text-[#ddbfc3] leading-relaxed font-sans">
              Private executive chamber protocols. Scheduled board-level engagements and autonomous operational audits.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#capabilities"
                aria-label="Corporate Terminal"
                className="w-9 h-9 rounded-lg bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#8c1d40] transition-all"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href="#corporate"
                aria-label="Security Shield"
                className="w-9 h-9 rounded-lg bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#8c1d40] transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#fabc41]" />
              </a>
              <a
                href="#pricing"
                aria-label="Executive Governance"
                className="w-9 h-9 rounded-lg bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#8c1d40] transition-all"
              >
                <Landmark className="w-4 h-4 text-[#f1e1ba]" />
              </a>
              <a
                href="#solutions"
                aria-label="Global Network"
                className="w-9 h-9 rounded-lg bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#8c1d40] transition-all"
              >
                <Globe className="w-4 h-4 text-[#ffb2bf]" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#B8A77E]">
          <div>© 2026 ARFENTRA PRIVATE LIMITED. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#FAF7EF] transition-colors" href="#corporate">Privacy Architecture</a>
            <a className="hover:text-[#FAF7EF] transition-colors" href="#corporate">Institutional Governance</a>
            <a className="hover:text-[#FAF7EF] transition-colors" href="#pricing">Terms of Retainer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
