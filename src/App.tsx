import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrySectors } from './components/IndustrySectors';
import { BentoFeatures } from './components/BentoFeatures';
import { CapabilitiesShowcase } from './components/CapabilitiesShowcase';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CorporateVerification } from './components/CorporateVerification';
import { StrategySection } from './components/StrategySection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { NotFoundModal } from './components/NotFoundModal';
import { Briefcase, Layers, Calendar, Sparkles, Cpu } from 'lucide-react';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notFoundOpen, setNotFoundOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (tier?: string) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  // Support direct hash-based routing to #404
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setNotFoundOpen(true);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0608] text-[#FAF7EF] font-sans selection:bg-[#8c1d40] selection:text-[#FAF7EF] pb-20 lg:pb-0 overflow-x-hidden w-full relative">
      {/* Floating Pill Glass Navbar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpen404={() => setNotFoundOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* Certified Industry Muscle Across 4 Core Verticals */}
      <IndustrySectors />

      {/* The Arfentra Difference: Bento Grid with 30-Day Sparkline */}
      <BentoFeatures />

      {/* Enterprise Capabilities: Autonomous Orchestrator & Heavy Digital Twin */}
      <CapabilitiesShowcase onOpenConsultation={handleOpenConsultation} />

      {/* Flagship Proprietary Consumer & EdTech Platforms */}
      <ProductShowcase onOpenConsultation={handleOpenConsultation} />

      {/* Transparent Investment & Engagement Tiers */}
      <Pricing onOpenConsultation={handleOpenConsultation} />

      {/* Field Endorsements & Verified Client Case Audits */}
      <Testimonials />

      {/* Statutory Corporate Verification & MCA Credentials */}
      <CorporateVerification />

      {/* Synchronized Board-Level Strategy Call Booking Section with Calendar/Time Picker */}
      <StrategySection />

      {/* Corporate Coordinates & Legal Footer */}
      <Footer onOpen404={() => setNotFoundOpen(true)} />

      {/* Mobile Floating Quick Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#0E0608]/95 backdrop-blur-xl border-t border-[#3D1F2A] shadow-[0_-4px_24px_rgba(0,0,0,0.8)] lg:hidden">
        <div className="h-16 px-4 flex items-center justify-around">
          <motion.a
            whileTap={{ scale: 0.92 }}
            href="#solutions"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors min-h-[44px]"
          >
            <Layers className="w-5 h-5 text-[#ffb2bf]" />
            <span className="text-[10px] font-mono tracking-tight">Solutions</span>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.92 }}
            href="#capabilities"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors min-h-[44px]"
          >
            <Cpu className="w-5 h-5 text-[#fabc41]" />
            <span className="text-[10px] font-mono tracking-tight">Mesh</span>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.92 }}
            href="#schedule-strategy-session"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors min-h-[44px]"
          >
            <Calendar className="w-5 h-5 text-[#fabc41]" />
            <span className="text-[10px] font-mono tracking-tight">Book Slot</span>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.92 }}
            href="#products"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors min-h-[44px]"
          >
            <Briefcase className="w-5 h-5 text-[#FAF7EF]" />
            <span className="text-[10px] font-mono tracking-tight">Products</span>
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => handleOpenConsultation()}
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#ffb2bf] font-bold hover:text-[#FAF7EF] transition-colors cursor-pointer min-h-[44px]"
          >
            <Sparkles className="w-5 h-5 animate-pulse text-[#fabc41]" />
            <span className="text-[10px] font-mono tracking-tight">Audit</span>
          </motion.button>
        </div>
      </nav>

      {/* Global Interactive Consultation Modal with Date/Time Slot Picker */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedTier={selectedTier}
      />

      {/* 404 / Unmapped Corridor / Empty State Modal */}
      <NotFoundModal
        isOpen={notFoundOpen}
        onClose={() => {
          setNotFoundOpen(false);
          if (window.location.hash === '#404') {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        onOpenConsultation={() => {
          setNotFoundOpen(false);
          handleOpenConsultation();
        }}
      />
    </div>
  );
};
