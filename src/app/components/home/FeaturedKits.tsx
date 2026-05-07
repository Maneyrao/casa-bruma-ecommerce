import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { getKits } from '../../data/products';

export const FeaturedKits = () => {
  const kits = getKits();

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wide">
              Perfect for Beginners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Complete Detailing Kits
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need in one box. No guessing, no confusion. Just professional results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#0EA5E9] transition-all hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#0EA5E9] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Popular
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {kit.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {kit.shortDescription}
                  </p>
                  
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {kit.whoIsItFor === 'beginner' ? 'Perfect for Beginners' : 
                       kit.whoIsItFor === 'advanced' ? 'For Enthusiasts' : 
                       'For All Levels'}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      ${kit.price.toFixed(2)}
                    </span>
                    <Link
                      to={`/product/${kit.slug}`}
                      className="inline-flex items-center gap-2 bg-[#0EA5E9] text-white px-6 py-2 rounded-lg hover:bg-[#38BDF8] transition-all group-hover:gap-3 font-semibold"
                    >
                      View Kit
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/category/kits"
            className="inline-flex items-center gap-2 text-[#0EA5E9] hover:text-[#38BDF8] font-semibold transition"
          >
            View All Kits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
