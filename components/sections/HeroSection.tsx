'use client';

import { motion } from 'framer-motion';
import StaggerText from '../StaggerText';
import PremiumButton from '../PremiumButton';
import { Sparkles, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/echocore-pattern.svg)',
          backgroundSize: '400px 400px',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Subtitle with icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            Welcome to the future
          </span>
          <Sparkles className="w-5 h-5 text-amber-400" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-center text-balance"
        >
          <StaggerText
            text="EchoCore"
            className="text-white drop-shadow-lg"
            delay={0.3}
          />
        </motion.h1>

        {/* Subtitle text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-2xl mx-auto text-pretty"
        >
          Build the Future. One Hack at a Time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <PremiumButton
            variant="primary"
            onClick={() => {
              const element = document.getElementById('registration');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Join Hackathon
            </div>
          </PremiumButton>
          <PremiumButton
            variant="secondary"
            onClick={() => {
              const element = document.getElementById('events');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Events
          </PremiumButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-amber-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
