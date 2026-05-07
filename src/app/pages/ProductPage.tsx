import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Minus, Plus, ArrowLeft, Package, Info, GraduationCap } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/" className="text-[#0EA5E9] hover:text-[#38BDF8]">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </Link>

        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.isKit && (
                <div className="absolute top-4 right-4 bg-[#0EA5E9] text-white px-4 py-2 rounded-lg font-semibold">
                  Complete Kit
                </div>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {product.category}
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-[#0EA5E9]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Who is it for */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-lg p-4">
              <GraduationCap className="w-6 h-6 text-[#0EA5E9] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Perfect For</p>
                <p className="text-gray-400 text-sm">
                  {product.whoIsItFor === 'beginner' ? 'Beginners - Easy to use' :
                   product.whoIsItFor === 'advanced' ? 'Enthusiasts - Advanced product' :
                   'All skill levels'}
                </p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-900 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-gray-800 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>
                  <span className="px-6 text-white font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-800 transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#0EA5E9] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#38BDF8] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">Free Shipping</p>
                <p className="text-white text-xs">Over $75</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">30-Day Returns</p>
                <p className="text-white text-xs">Guaranteed</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">Expert Support</p>
                <p className="text-white text-xs">Via WhatsApp</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0EA5E9]/20 p-3 rounded-lg">
                <Info className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white">What is it for?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {product.whatIsItFor}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0EA5E9]/20 p-3 rounded-lg">
                <Package className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white">How to use</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {product.howToUse}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0EA5E9]/20 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white">Skill Level</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {product.whoIsItFor === 'beginner'
                ? 'Perfect for first-time detailers. Easy to use with great results.'
                : product.whoIsItFor === 'advanced'
                ? 'Designed for enthusiasts who want professional-grade results.'
                : 'Suitable for all experience levels, from beginner to advanced.'}
            </p>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/product/${related.slug}`}
                    className="block bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#0EA5E9] transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-2 group-hover:text-[#0EA5E9] transition">
                        {related.name}
                      </h3>
                      <p className="text-xl font-bold text-white">
                        ${related.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
