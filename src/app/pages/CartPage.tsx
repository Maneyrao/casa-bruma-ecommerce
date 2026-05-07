import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-700 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">Add some products to get started!</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#0EA5E9] text-white px-8 py-4 rounded-lg hover:bg-[#38BDF8] transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Continue Shopping
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-400">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="hover:text-[#0EA5E9] transition"
                      >
                        <h3 className="text-white font-bold text-lg">
                          {item.product.name}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition p-2 -m-2"
                        aria-label="Remove from cart"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {item.product.shortDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-800 rounded-lg w-fit">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-700 transition rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="px-4 text-white font-semibold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-700 transition rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-400">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal < 75 && subtotal > 0 && (
                  <div className="text-sm text-gray-400 bg-gray-800 p-3 rounded-lg">
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-[#0EA5E9] text-white font-semibold py-4 rounded-lg hover:bg-[#38BDF8] transition text-center"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-6 space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
                  Free shipping on orders $75+
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
                  30-day money-back guarantee
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full" />
                  Secure checkout
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
