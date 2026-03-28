'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import StaggerText from '../StaggerText';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is EchoCore?',
    answer:
      'EchoCore is a next-generation hackathon platform designed for innovators and developers to collaborate, compete, and build transformative technology solutions.',
  },
  {
    question: 'Who can join?',
    answer:
      'Anyone passionate about building technology solutions can join EchoCore. Whether you are a student, professional, or hobbyist, all skill levels are welcome.',
  },
  {
    question: 'Is it free?',
    answer:
      'Most events on EchoCore are completely free to participate in. Some premium hackathons may have nominal fees to cover advanced resources and mentorship.',
  },
  {
    question: 'Can I join solo?',
    answer:
      'Absolutely! You can participate as an individual or form a team with other developers. We support both solo and team-based participation.',
  },
  {
    question: 'How are winners selected?',
    answer:
      'Winners are selected based on innovation, code quality, execution, presentation, and real-world impact of your solution. Judges evaluate projects against these criteria.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <StaggerText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-400 text-lg">
            Everything you need to know about EchoCore
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full glass p-6 text-left hover:border-amber-400/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg pr-4 text-pretty">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-amber-400" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400 mt-4 text-pretty">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
