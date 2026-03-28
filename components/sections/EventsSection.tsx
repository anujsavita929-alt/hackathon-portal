'use client';

import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';
import StaggerText from '../StaggerText';
import { Calendar, Trophy } from 'lucide-react';

const events = [
  {
    name: 'AI Innovation Summit 2024',
    date: 'April 15-17, 2024',
    prize: '$50,000',
    tags: ['AI', 'ML', 'Web'],
  },
  {
    name: 'Web3 Builder Challenge',
    date: 'May 1-5, 2024',
    prize: '$75,000',
    tags: ['Blockchain', 'Smart Contracts'],
  },
  {
    name: 'Cloud Computing Expo',
    date: 'May 20-23, 2024',
    prize: '$100,000',
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
  },
  {
    name: 'Mobile First Hackathon',
    date: 'June 10-12, 2024',
    prize: '$45,000',
    tags: ['Mobile', 'iOS', 'Android'],
  },
  {
    name: 'Data Science Challenge',
    date: 'June 25-28, 2024',
    prize: '$60,000',
    tags: ['Data', 'Analytics', 'Python'],
  },
  {
    name: 'Full-Stack Ultimate',
    date: 'July 8-15, 2024',
    prize: '$120,000',
    tags: ['Full-Stack', 'Frontend', 'Backend'],
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 px-4">
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
            text="Upcoming Hackathons"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your challenge and compete with developers worldwide
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <GlassCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {event.name}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                      <Trophy className="w-4 h-4" />
                      {event.prize}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs rounded-full border border-amber-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 w-full py-2 px-4 bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-300 rounded-lg transition-all duration-300 font-semibold text-sm">
                  Learn More
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
