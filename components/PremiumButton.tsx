'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function PremiumButton({
  children,
  variant = 'primary',
  onClick,
  className = '',
}: PremiumButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-full font-semibold text-sm
        transition-all duration-300 overflow-hidden group
        ${
          isPrimary
            ? 'bg-amber-400 text-black hover:shadow-lg hover:shadow-amber-400/50'
            : 'border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10'
        }
        ${className}
      `}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
          isPrimary ? 'bg-amber-300/30' : 'bg-amber-400/10'
        }`}
      />

      {/* Shimmer effect */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
