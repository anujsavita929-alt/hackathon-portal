'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import StaggerText from '../StaggerText';
import PremiumButton from '../PremiumButton';
import { Check, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Personal Info',
    description: 'Tell us about yourself',
    fields: ['Full Name', 'Email', 'Phone'],
  },
  {
    title: 'Profile Details',
    description: 'Complete your profile',
    fields: ['Bio', 'GitHub', 'Portfolio'],
  },
  {
    title: 'Interests',
    description: 'Choose your interests',
    fields: ['AI/ML', 'Web3', 'Cloud'],
  },
  {
    title: 'Confirmation',
    description: 'Review and confirm',
    fields: ['Terms', 'Newsletter'],
  },
];

export default function RegistrationSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Reset after confirmation
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section
      id="registration"
      className="py-20 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <StaggerText
            text="Get Started Today"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-400 text-lg">
            Join thousands of innovators building the future
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center flex-1"
              >
                {/* Circle */}
                <motion.div
                  animate={{
                    scale: index === currentStep ? 1.2 : 1,
                    boxShadow:
                      index === currentStep
                        ? '0 0 20px rgba(212, 175, 55, 0.5)'
                        : '0 0 0px rgba(212, 175, 55, 0)',
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                    index < currentStep
                      ? 'bg-amber-400 text-black'
                      : index === currentStep
                        ? 'bg-amber-400/30 border-2 border-amber-400 text-amber-400'
                        : 'bg-gray-800 border-2 border-gray-600 text-gray-400'
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </motion.div>

                {/* Label */}
                <p
                  className={`text-xs font-semibold text-center ${
                    index <= currentStep ? 'text-amber-400' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </p>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: index < currentStep ? 1 : 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className={`absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-1 ${
                      index < currentStep
                        ? 'bg-amber-400'
                        : 'bg-gray-700'
                    } origin-left`}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress line (background) */}
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden relative">
            <motion.div
              animate={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            />
          </div>
        </div>

        {/* Form card */}
        <motion.div
          className="glass p-8 min-h-96 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {steps[currentStep].description}
                </p>

                {/* Form fields */}
                <div className="space-y-4">
                  {steps[currentStep].fields.map((field, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        {field}
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter your ${field.toLowerCase()}`}
                        className="w-full px-4 py-3 bg-black/30 border border-amber-400/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex gap-4 justify-between mt-8 pt-8 border-t border-amber-400/20">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-2 border border-amber-400/30 text-gray-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:text-amber-400 hover:border-amber-400 transition-all"
            >
              Previous
            </button>
            <PremiumButton
              variant="primary"
              onClick={nextStep}
            >
              <div className="flex items-center gap-2">
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                {currentStep !== steps.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
