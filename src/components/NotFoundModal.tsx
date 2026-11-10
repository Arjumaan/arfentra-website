import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { EmptyState } from './EmptyState';

interface NotFoundModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const NotFoundModal: React.FC<NotFoundModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          <div className="relative z-10 w-full max-w-2xl my-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#170b0f] border border-[#3D1F2A] flex items-center justify-center text-[#B8A77E] hover:text-[#FAF7EF] transition-colors cursor-pointer"
              aria-label="Close 404 Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <EmptyState
              is404={true}
              title="404: Unmapped Enterprise Corridor"
              description="The requested corporate directory node, document endpoint, or anchor parameter was not located. Arfentra’s core deterministic nodes remain operational."
              onReset={onClose}
              onOpenConsultation={() => {
                onClose();
                onOpenConsultation();
              }}
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
