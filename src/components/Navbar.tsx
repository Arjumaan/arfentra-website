import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck, Phone, Mail, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (tier?: string) => void;
  onOpen404?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpen404 }) => {
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
    { label: 'Results', href: '#results' },
    { label: 'Corporate', href: '#corporate' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none"
      >
        <div
          className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-full px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0E0608]/92 backdrop-blur-2xl border-[#3D1F2A] shadow-2xl shadow-black/80'
              : 'bg-[#170b0f]/85 backdrop-blur-xl border-[#3D1F2A]/80 shadow-lg'
          }`}
        >
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-h-[44px]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#25181c] to-[#0E0608] border border-[#3D1F2A] p-1 flex items-center justify-center shadow-inner group-hover:border-[#8c1d40] transition-colors">
              <img
                src="./assets/logo.png"
                alt="Arfentra"
                className="w-full h-full object-contain"
                width="36"
                height="36"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-[#FAF7EF] text-sm sm:text-lg leading-none">
                  ARFENTRA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fabc41] animate-pulse" />
              </div>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#B8A77E] uppercase tracking-widest mt-0.5">
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
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[#ddbfc3] hover:text-[#FAF7EF] hover:bg-white/[0.06] transition-all min-h-[36px] flex items-center justify-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="tel:+919384040460"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#3D1F2A] bg-[#25181c] text-[#FAF7EF] hover:bg-[#35262a] text-xs font-medium transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#fabc41]" />
              <span className="font-mono">+91 9384040460</span>
            </a>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(140,29,64,0.4)] hover:bg-[#A8244D] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
            >
              <span>Consult Arch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-full bg-[#25181c] border border-[#3D1F2A] flex items-center justify-center text-[#FAF7EF] hover:bg-[#35262a] transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-3 top-18 z-50 lg:hidden rounded-3xl bg-[#0E0608]/95 border border-[#3D1F2A] p-5 backdrop-blur-2xl shadow-2xl shadow-black max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-[#FAF7EF] hover:bg-[#25181c] flex items-center justify-between min-h-[44px]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#B8A77E]" />
                  </motion.a>
                ))}

                <div className="h-px bg-[#3D1F2A] my-2" />

                {/* Direct Executive Contact Options */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href="tel:+919384040460"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] flex items-center justify-center gap-2 hover:border-[#8c1d40] min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#fabc41]" />
                    <span>Call Direct</span>
                  </a>

                  <a
                    href="mailto:arfentra@gmail.com"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#FAF7EF] flex items-center justify-center gap-2 hover:border-[#8c1d40] min-h-[44px]"
                  >
                    <Mail className="w-4 h-4 text-[#ffb2bf]" />
                    <span>Email Desk</span>
                  </a>
                </div>

                {onOpen404 && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpen404();
                    }}
                    className="mt-1 w-full p-2.5 rounded-xl bg-[#170b0f] border border-[#3D1F2A] text-[#B8A77E] hover:text-[#FAF7EF] flex items-center justify-center gap-2 text-xs font-mono min-h-[44px]"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#fabc41]" />
                    <span>View 404 / Unmapped Corridor Page</span>
                  </button>
                )}

                <div className="flex flex-col gap-2 font-mono text-xs pt-1">
                  <div className="flex items-center justify-between px-2 text-[#B8A77E] text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#fabc41]" />
                      MCA Registered
                    </span>
                    <span className="text-[#FAF7EF] font-semibold">U62013TZ2026PTC041310</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full mt-2 py-3.5 rounded-xl bg-[#8c1d40] text-[#FAF7EF] font-bold text-xs uppercase tracking-wider text-center shadow-[0_4px_16px_rgba(140,29,64,0.4)] hover:bg-[#A8244D] min-h-[44px] cursor-pointer"
                  >
                    Schedule Strategy Call
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
