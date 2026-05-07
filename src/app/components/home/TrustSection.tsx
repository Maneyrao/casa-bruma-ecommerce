import { motion } from 'motion/react';
import { Truck, CreditCard, MessageCircle, RotateCcw, Star } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $75'
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Money-back guarantee'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'SSL encrypted checkout'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Expert help anytime'
  }
];

const reviews = [
  {
    name: 'Mike Johnson',
    rating: 5,
    text: 'The Beginner Kit is perfect! Everything I needed to start detailing. My car looks amazing.',
    product: 'Beginner Detail Kit'
  },
  {
    name: 'Sarah Chen',
    rating: 5,
    text: 'Best microfiber towels I\'ve used. No scratches, super absorbent. Worth every penny.',
    product: 'Premium Microfiber Set'
  },
  {
    name: 'David Martinez',
    rating: 5,
    text: 'The ceramic spray wax is incredible. Water just beads off. Easy application too.',
    product: 'Ceramic Spray Wax'
  }
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-[#0EA5E9]" />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Detailers
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-400 text-lg">
              4.9/5 rating from over 2,500 customers
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold">{review.name}</p>
                <p className="text-gray-400 text-sm">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
