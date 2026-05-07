import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1723659081228-94b14d1e61d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWwlMjBzaGluZXxlbnwxfHx8fDE3NzYzODI1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Car Detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Professional Results.
            <span className="block text-[#0EA5E9]">Made Simple.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Premium car detailing products designed for beginners and enthusiasts. 
            Get showroom shine without the confusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/category/kits"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0EA5E9] text-white font-semibold rounded-lg hover:bg-[#38BDF8] transition-all hover:scale-105 group"
            >
              Shop Complete Kits
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition border border-white/20"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
