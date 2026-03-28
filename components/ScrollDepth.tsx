'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollDepthProps {
  children: ReactNode;
  intensity?: number;
}

export default function ScrollDepth({
  children,
  intensity = 0.1,
}: ScrollDepthProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 500, 1000],
    [0.5, 1, 0.8]
  );

  return (
    <motion.div style={{ opacity }}>
      {children}
    </motion.div>
  );
}
