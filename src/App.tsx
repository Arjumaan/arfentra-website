import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrySectors } from './components/IndustrySectors';
import { BentoFeatures } from './components/BentoFeatures';
import { CapabilitiesShowcase } from './components/CapabilitiesShowcase';
import { RoiSimulator, RoiTelemetryData } from './components/RoiSimulator';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CorporateVerification } from './components/CorporateVerification';
import { StrategySection } from './components/StrategySection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Briefcase, Layers, Calculator, Sparkles, Cpu } from 'lucide-react';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const [telemetry, setTelemetry] = useState<RoiTelemetryData>({
    verticalName: 'Freight & Heavy Logistics',
    efficiency: 0.42,
    monthlyHours: 1200,
    hourlyRate: 850,
    annualSavings: 5140800,
    hoursReclaimed: 6048,
    compressionPct: 42,
    formattedSavings: '₹51.4 L',
  });

  const handleOpenConsultation = (tier?: string) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  const handleLockStrategy = (data: RoiTelemetryData) => {
    setTelemetry(data);
    const target = document.getElementById('schedule-strategy-session');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenConsultation(`Strategy Reclaim: ${data.verticalName} (${data.formattedSavings}/yr)`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0608] text-[#FAF7EF] font-sans selection:bg-[#8c1d40] selection:text-[#FAF7EF] pb-20 lg:pb-0">
      {/* Floating Pill Glass Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* Certified Industry Muscle Across 4 Core Verticals */}
      <IndustrySectors />

      {/* The Arfentra Difference: Bento Grid with 30-Day Sparkline */}
      <BentoFeatures />

      {/* Enterprise Capabilities: Autonomous Orchestrator & Heavy Digital Twin */}
      <CapabilitiesShowcase onOpenConsultation={handleOpenConsultation} />

      {/* Quantifiable Value: Interactive ROI & Capital Reclaim Simulator */}
      <RoiSimulator onLockStrategy={handleLockStrategy} />

      {/* Flagship Proprietary Consumer & EdTech Platforms */}
      <ProductShowcase onOpenConsultation={handleOpenConsultation} />

      {/* Transparent Investment & Engagement Tiers */}
      <Pricing onOpenConsultation={handleOpenConsultation} />

      {/* Field Endorsements & Verified Client Case Audits */}
      <Testimonials />

      {/* Statutory Corporate Verification & MCA Credentials */}
      <CorporateVerification />

      {/* Synchronized Board-Level Strategy Call Booking Section */}
      <StrategySection telemetry={telemetry} />

      {/* Corporate Coordinates & Legal Footer */}
      <Footer />

      {/* Mobile Floating Quick Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#0E0608]/95 backdrop-blur-xl border-t border-[#3D1F2A] shadow-[0_-4px_24px_rgba(0,0,0,0.8)] lg:hidden">
        <div className="h-16 px-4 flex items-center justify-around">
          <a
            href="#solutions"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors"
          >
            <Layers className="w-5 h-5 text-[#ffb2bf]" />
            <span className="text-[10px] font-mono tracking-tight">Solutions</span>
          </a>
          <a
            href="#capabilities"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors"
          >
            <Cpu className="w-5 h-5 text-[#fabc41]" />
            <span className="text-[10px] font-mono tracking-tight">Mesh</span>
          </a>
          <a
            href="#roi-calculator"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors"
          >
            <Calculator className="w-5 h-5 text-[#f1e1ba]" />
            <span className="text-[10px] font-mono tracking-tight">ROI Calc</span>
          </a>
          <a
            href="#products"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#B8A77E] hover:text-[#FAF7EF] transition-colors"
          >
            <Briefcase className="w-5 h-5 text-[#FAF7EF]" />
            <span className="text-[10px] font-mono tracking-tight">Products</span>
          </a>
          <button
            onClick={() => handleOpenConsultation()}
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-[#ffb2bf] font-bold hover:text-[#FAF7EF] transition-colors cursor-pointer"
          >
            <Sparkles className="w-5 h-5 animate-pulse text-[#fabc41]" />
            <span className="text-[10px] font-mono tracking-tight">Audit</span>
          </button>
        </div>
      </nav>

      {/* Global Interactive Consultation Modal with Telemetry Sync */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedTier={selectedTier}
        telemetry={telemetry}
      />
    </div>
  );
};
