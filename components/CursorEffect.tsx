'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX, clientY } = e;
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
      style={{
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
      }}
    >
      {/* Inner circle */}
      <div className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-70" />
      {/* Outer glow */}
      <div className="absolute inset-2 rounded-full border border-amber-400/50 opacity-50" />
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-sm opacity-30" />
    </div>
  );
}
