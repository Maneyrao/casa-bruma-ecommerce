import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { getBestSellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const BestSellers = () => {
  const bestSellers = getBestSellers().filter(p => !p.isKit).slice(0, 4);
  const { addToCart } = useCart();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wide">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Best Sellers
            </h2>
            <p className="text-gray-400 text-lg">
              Our customers' favorite products
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/product/${product.slug}`}
                className="block bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0EA5E9] transition-all group hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-[#0EA5E9] transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="bg-[#0EA5E9] text-white p-2 rounded-lg hover:bg-[#38BDF8] transition"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
