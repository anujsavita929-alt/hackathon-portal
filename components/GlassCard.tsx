'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  delay?: number;
  icon?: ReactNode;
}

export default function GlassCard({
  children,
  hover = true,
  className = '',
  delay = 0,
  icon,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)',
            }
          : undefined
      }
      className={`glass relative overflow-hidden group ${className}`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

      {/* Icon with glow */}
      {icon && (
        <div className="mb-4 text-amber-400 glow-gold animate-pulse-glow">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
