import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft, Phone, Calendar, ShieldAlert } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  onOpenConsultation?: () => void;
  is404?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = '404: System Directory Node Unmapped',
  description = 'The requested route, enterprise document, or filter parameters do not exist within Arfentra Private Limited’s active registry index.',
  onReset,
  onOpenConsultation,
  is404 = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#170b0f] border border-[#3D1F2A] text-center space-y-6 shadow-2xl relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#8c1d40]/20 blur-3xl rounded-full" />

      {/* Sovereign Radar Icon */}
      <div className="relative mx-auto w-20 h-20 rounded-2xl bg-[#241218] border border-[#3D1F2A] flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl border border-[#ffb2bf]/20 animate-ping opacity-40" />
        {is404 ? (
          <ShieldAlert className="w-10 h-10 text-[#fabc41]" />
        ) : (
          <Compass className="w-10 h-10 text-[#ffb2bf]" />
        )}
      </div>

      {/* Code Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25181c] border border-[#3D1F2A] font-mono text-xs text-[#B8A77E]">
        <span className="w-2 h-2 rounded-full bg-[#fabc41] animate-pulse" />
        <span>{is404 ? 'HTTP 404 · RESOURCE UNRESOLVED' : 'EMPTY STATE · ZERO PARAMETERS'}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7EF] tracking-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#ddbfc3] max-w-md mx-auto leading-relaxed font-sans">
          {description}
        </p>
      </div>

      {/* Recovery Actions */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8c1d40] text-[#FAF7EF] text-xs font-bold uppercase tracking-wider hover:bg-[#A8244D] active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Command Center</span>
          </button>
        )}

        {onOpenConsultation && (
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#FAF7EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#35262a] active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            <Calendar className="w-4 h-4 text-[#fabc41]" />
            <span>Schedule Architecture Call</span>
          </button>
        )}

        <a
          href="tel:+919384040460"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#241218] border border-[#3D1F2A] text-[#ddbfc3] hover:text-[#FAF7EF] text-xs font-mono uppercase tracking-wider hover:bg-[#35262a] active:scale-95 transition-all min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#fabc41]" />
          <span>+91 9384040460</span>
        </a>
      </div>
    </motion.div>
  );
};
