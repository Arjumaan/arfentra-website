import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrySectors } from './components/IndustrySectors';
import { BentoFeatures } from './components/BentoFeatures';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CorporateVerification } from './components/CorporateVerification';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Briefcase, Layers, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (tier?: string) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-sky-500 selection:text-zinc-950 pb-20 lg:pb-0">
      {/* Floating Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* Certified Industry Sectors */}
      <IndustrySectors />

      {/* Value Proposition Bento Grid */}
      <BentoFeatures />

      {/* Flagship Proprietary Products */}
      <ProductShowcase onOpenConsultation={handleOpenConsultation} />

      {/* Transparent Pricing Matrix */}
      <Pricing onOpenConsultation={handleOpenConsultation} />

      {/* Endorsements & ROI Results */}
      <Testimonials />

      {/* Statutory Corporate Verification */}
      <CorporateVerification />

      {/* Executive CTA Review */}
      <CtaBanner onOpenConsultation={() => handleOpenConsultation()} />

      {/* Corporate Footer */}
      <Footer />

      {/* Mobile Floating Quick Navigation Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 shadow-[0_-4px_24px_rgba(0,0,0,0.8)] lg:hidden">
        <div className="h-16 px-4 flex items-center justify-around">
          <a
            href="#solutions"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-zinc-400 hover:text-white transition-colors"
          >
            <Layers className="w-5 h-5 text-sky-400" />
            <span className="text-[10px] font-mono tracking-tight">Solutions</span>
          </a>
          <a
            href="#products"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-zinc-400 hover:text-white transition-colors"
          >
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <span className="text-[10px] font-mono tracking-tight">Products</span>
          </a>
          <a
            href="#pricing"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-zinc-400 hover:text-white transition-colors"
          >
            <CreditCard className="w-5 h-5 text-purple-400" />
            <span className="text-[10px] font-mono tracking-tight">Pricing</span>
          </a>
          <a
            href="#corporate"
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-zinc-400 hover:text-white transition-colors"
          >
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-mono tracking-tight">Trust</span>
          </a>
          <button
            onClick={() => handleOpenConsultation()}
            className="flex flex-col items-center justify-center gap-1 w-14 h-12 text-sky-400 font-bold hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-mono font-bold tracking-tight">Book</span>
          </button>
        </div>
      </nav>

      {/* Consultation & Strategy Call Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedTier={selectedTier}
      />
    </div>
  );
};
