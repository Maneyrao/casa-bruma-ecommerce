import { Link } from 'react-router';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-white">IG</span>
              <span className="text-[#0EA5E9]"> Detailing Shop</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium car detailing products for enthusiasts and professionals.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/wash" className="text-gray-400 hover:text-white text-sm transition">
                  Wash Products
                </Link>
              </li>
              <li>
                <Link to="/category/interior" className="text-gray-400 hover:text-white text-sm transition">
                  Interior Care
                </Link>
              </li>
              <li>
                <Link to="/category/protection" className="text-gray-400 hover:text-white text-sm transition">
                  Protection
                </Link>
              </li>
              <li>
                <Link to="/category/kits" className="text-gray-400 hover:text-[#0EA5E9] text-sm transition">
                  Complete Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Free Shipping over $75</li>
              <li className="text-gray-400 text-sm">30-Day Returns</li>
              <li className="text-gray-400 text-sm">Secure Checkout</li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              info@igdetailing.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 IG Detailing Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
