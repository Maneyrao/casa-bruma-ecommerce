import { motion } from 'motion/react';
import { Target, Package, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Choose Your Goal',
    description: 'Tell us what you want to achieve - clean, shine, protect, or all of the above.'
  },
  {
    icon: Package,
    title: 'Get the Right Products',
    description: 'We recommend exactly what you need. No guessing, no wasted money on wrong products.'
  },
  {
    icon: Sparkles,
    title: 'Achieve Pro Results',
    description: 'Follow our simple guides and get professional-quality results, even as a beginner.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Detailing made simple. We guide you every step of the way.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-[#0EA5E9] blur-xl opacity-30 rounded-full" />
                  <div className="relative bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] p-6 rounded-full">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -bottom-2 -right-2 bg-gray-900 border-2 border-[#0EA5E9] rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-[#0EA5E9] font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
