'use client';

import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';
import StaggerText from '../StaggerText';
import {
  Compass,
  LayoutDashboard,
  Trophy,
  Library,
  Users,
} from 'lucide-react';

const quickAccessItems = [
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Explore Hackathons',
    description: 'Browse upcoming events and find your next challenge',
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: 'Dashboard',
    description: 'Track projects and monitor your progress',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Leaderboard',
    description: 'See top performers and global rankings',
  },
  {
    icon: <Library className="w-8 h-8" />,
    title: 'Resources',
    description: 'Access APIs, tools, and documentation',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description: 'Connect with developers and innovators',
  },
];

export default function QuickAccessSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <StaggerText
            text="Quick Access"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started with EchoCore in seconds. Everything you need is right
            here.
          </p>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {quickAccessItems.map((item, index) => (
            <GlassCard
              key={index}
              delay={index * 0.1}
              icon={item.icon}
              className="p-6"
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
