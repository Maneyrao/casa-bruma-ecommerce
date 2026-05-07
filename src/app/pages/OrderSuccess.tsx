import { Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, Package, Mail } from 'lucide-react';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50 rounded-full" />
              <CheckCircle className="w-24 h-24 text-green-500 relative" />
            </div>
          </motion.div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          {/* Order Number */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <p className="text-gray-400 text-sm mb-2">Order Number</p>
            <p className="text-2xl font-bold text-[#0EA5E9]">
              #IG{Math.floor(Math.random() * 1000000)}
            </p>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 text-left">
              <Mail className="w-8 h-8 text-[#0EA5E9] mb-3" />
              <h3 className="text-white font-semibold mb-2">Confirmation Email</h3>
              <p className="text-gray-400 text-sm">
                Check your inbox for order details and tracking info
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-left">
              <Package className="w-8 h-8 text-[#0EA5E9] mb-3" />
              <h3 className="text-white font-semibold mb-2">Shipping</h3>
              <p className="text-gray-400 text-sm">
                Your order will ship within 1-2 business days
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0EA5E9] text-white font-semibold rounded-lg hover:bg-[#38BDF8] transition"
            >
              Continue Shopping
            </Link>
            <a
              href="mailto:info@igdetailing.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
