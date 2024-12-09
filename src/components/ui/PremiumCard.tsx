import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function PremiumCard({ children, className = '', glowColor = 'rgba(74, 222, 128, 0.1)' }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-75 blur-xl transition duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Glass background */}
      <div className="relative rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-xl">
        {/* Inner gradient border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
