import { Link } from 'react-router';
import { Droplets, Sofa, Shield, Wrench, Package } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    name: 'Wash',
    slug: 'wash',
    icon: Droplets,
    description: 'Safe cleaning products',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Interior',
    slug: 'interior',
    icon: Sofa,
    description: 'Leather & fabric care',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Protection',
    slug: 'protection',
    icon: Shield,
    description: 'Wax & sealants',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    icon: Wrench,
    description: 'Tools & applicators',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Kits',
    slug: 'kits',
    icon: Package,
    description: 'Complete solutions',
    color: 'from-[#0EA5E9] to-[#38BDF8]',
    featured: true
  }
];

export const CategoryNavigation = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-400 text-lg">
            Find exactly what you need for your detailing project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/category/${category.slug}`}
                className={`block relative overflow-hidden rounded-xl p-6 h-full transition-all hover:scale-105 ${
                  category.featured 
                    ? 'bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] ring-2 ring-[#0EA5E9] ring-offset-2 ring-offset-gray-900' 
                    : 'bg-gray-800 hover:bg-gray-750'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-lg ${category.featured ? 'bg-white/20' : 'bg-gray-700'}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className={`text-sm ${category.featured ? 'text-white/90' : 'text-gray-400'}`}>
                      {category.description}
                    </p>
                  </div>
                  {category.featured && (
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
