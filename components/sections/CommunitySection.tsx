'use client';

import { motion } from 'framer-motion';
import StaggerText from '../StaggerText';
import { MessageCircle, Users, Activity } from 'lucide-react';

const communityStats = [
  { icon: <Users className="w-6 h-6" />, label: 'Active Members', value: '45K+' },
  { icon: <Activity className="w-6 h-6" />, label: 'Projects', value: '12K+' },
  { icon: <MessageCircle className="w-6 h-6" />, label: 'Discussions', value: '89K+' },
];

export default function CommunitySection() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <StaggerText
            text="Join the EchoCore Network"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with thousands of innovators, share ideas, and build
            together
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-4 flex items-center gap-4 hover:border-amber-400/50 transition-all"
              >
                <div className="text-amber-400">{stat.icon}</div>
                <div>
                  <p className="text-amber-400 font-bold text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Avatar cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Generate avatar circles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{
                    transform: `rotate(${(i / 8) * 360}deg) translateY(-80px)`,
                  }}
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 border-amber-400/50 flex items-center justify-center backdrop-blur-sm ${
                      ['bg-amber-400/20', 'bg-blue-400/20', 'bg-purple-400/20'][
                        i % 3
                      ]
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-400/30 flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Center circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center border-2 border-amber-300 shadow-lg shadow-amber-400/50">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Activity feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 glass p-4 space-y-3 max-h-80 overflow-y-auto"
          >
            <h4 className="text-white font-bold mb-4">Live Activity</h4>
            {[
              'Alex just completed "AI Challenge"',
              'Sarah shared a new project',
              'Marcus earned 250 points',
              'Emma joined the Web3 group',
              'James asked in #help channel',
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-2 pb-3 border-b border-amber-400/10 last:border-b-0"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{activity}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Connect?
          </h3>
          <p className="text-gray-400 mb-6">
            Join our Discord server, GitHub organization, and social channels
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Discord', 'GitHub', 'Twitter'].map((platform, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-amber-400/50 text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all"
              >
                Join {platform}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
