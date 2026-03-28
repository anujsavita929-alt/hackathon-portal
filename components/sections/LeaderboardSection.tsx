'use client';

import { motion } from 'framer-motion';
import StaggerText from '../StaggerText';
import { Trophy, Flame } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Alex Chen', score: 2850, projects: 12 },
  { rank: 2, name: 'Sarah Williams', score: 2720, projects: 10 },
  { rank: 3, name: 'Marcus Johnson', score: 2680, projects: 11 },
  { rank: 4, name: 'Emma Davis', score: 2560, projects: 9 },
  { rank: 5, name: 'James Wilson', score: 2450, projects: 8 },
];

export default function LeaderboardSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-amber-400" />
            <StaggerText
              text="Global Leaderboard"
              className="text-4xl md:text-5xl font-bold text-white"
            />
            <Trophy className="w-8 h-8 text-amber-400" />
          </div>
          <p className="text-gray-400 text-lg">
            Top performers in the EchoCore ecosystem
          </p>
        </motion.div>

        {/* Leaderboard cards */}
        <div className="space-y-3">
          {leaderboardData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                x: 10,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)',
              }}
              className="bg-gradient-to-r from-amber-400/5 to-transparent border border-amber-400/20 rounded-lg p-5 backdrop-blur-md cursor-pointer transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Rank badge */}
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        index === 0
                          ? 'bg-amber-400/30 text-amber-400 border-2 border-amber-400'
                          : index === 1
                            ? 'bg-gray-400/20 text-gray-300 border-2 border-gray-300'
                            : index === 2
                              ? 'bg-orange-400/20 text-orange-300 border-2 border-orange-300'
                              : 'bg-amber-400/10 text-gray-400 border-2 border-amber-400/30'
                      }`}
                    >
                      {index === 0 && <Flame className="w-6 h-6" />}
                      {index !== 0 && `#${entry.rank}`}
                    </div>
                  </div>

                  {/* Name and projects */}
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {entry.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {entry.projects} projects completed
                    </p>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                    className="text-amber-400 font-bold text-2xl"
                  >
                    {entry.score}
                  </motion.p>
                  <p className="text-gray-500 text-xs">points</p>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                className="mt-3 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full origin-left"
                style={{
                  width: `${(entry.score / 2850) * 100}%`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
