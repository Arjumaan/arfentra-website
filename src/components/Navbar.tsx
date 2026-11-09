import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (tier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Industries', href: '#industries' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Corporate', href: '#corporate' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none`}
      >
        <div
          className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0E0608]/90 backdrop-blur-2xl border-[#3D1F2A] shadow-2xl shadow-black/80'
              : 'bg-[#170b0f]/80 backdrop-blur-xl border-[#3D1F2A]/80 shadow-lg'
          }`}
        >
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#25181c] to-[#0E0608] border border-[#3D1F2A] p-1 flex items-center justify-center shadow-inner group-hover:border-[#8c1d40] transition-colors">
              <img src="./assets/logo.png" alt="Arfentra" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-[#FAF7EF] text-base sm:text-lg leading-none">
                  ARFENTRA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fabc41] animate-pulse" />
              </div>
              <span className="font-mono text-[9px] text-[#B8A77E] uppercase tracking-widest mt-0.5">
                Private Limited · MCA Reg
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#ddbfc3] hover:text-[#FAF7EF] hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+919384040460"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#3D1F2A] bg-[#25181c] text-[#FAF7EF] hover:bg-[#35262a] text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#fabc41]" />
              <span>+91 9384040460</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(140,29,64,0.4)] hover:bg-[#A8244D] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Consult Arch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#35262a] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-3xl bg-[#0E0608]/95 border border-[#3D1F2A] p-6 backdrop-blur-2xl shadow-2xl shadow-black"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#FAF7EF] hover:bg-[#25181c] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#B8A77E]" />
                </a>
              ))}

              <div className="h-px bg-[#3D1F2A] my-2" />

              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between px-4 text-[#B8A77E]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#fabc41]" />
                    MCA Registered
                  </span>
                  <span className="text-[#FAF7EF] font-semibold">U62013TZ2026PTC041310</span>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full mt-2 py-3 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider text-center shadow-[0_4px_16px_rgba(140,29,64,0.4)] hover:bg-[#A8244D]"
                >
                  Schedule Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
