import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';

const categoryInfo: Record<string, { title: string; description: string }> = {
  wash: {
    title: 'Wash Products',
    description: 'Safe, effective cleaning solutions for your vehicle'
  },
  interior: {
    title: 'Interior Care',
    description: 'Clean and protect leather, fabric, and all interior surfaces'
  },
  protection: {
    title: 'Protection & Shine',
    description: 'Waxes, sealants, and polishes for lasting protection'
  },
  accessories: {
    title: 'Accessories & Tools',
    description: 'Professional-grade tools and microfiber products'
  },
  kits: {
    title: 'Complete Kits',
    description: 'Everything you need in one convenient package'
  }
};

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  const products = category ? getProductsByCategory(category) : [];
  const info = category ? categoryInfo[category] : null;

  if (!info || products.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
          <Link to="/" className="text-[#0EA5E9] hover:text-[#38BDF8]">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
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
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {info.description}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/product/${product.slug}`}
                className="block bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#0EA5E9] transition-all group h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isKit && (
                    <div className="absolute top-3 right-3 bg-[#0EA5E9] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Kit
                    </div>
                  )}
                  {product.isBestSeller && !product.isKit && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Best Seller
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#0EA5E9] transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {product.whoIsItFor === 'beginner' ? 'Beginner Friendly' : 
                       product.whoIsItFor === 'advanced' ? 'Advanced' : 
                       'All Levels'}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="bg-[#0EA5E9] text-white p-2.5 rounded-lg hover:bg-[#38BDF8] transition"
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
    </div>
  );
}
