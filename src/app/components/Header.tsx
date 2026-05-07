import { Link } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const Header = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">IG</span>
              <span className="text-[#0EA5E9]"> Detailing Shop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/category/wash" className="text-gray-300 hover:text-white transition">
              Wash
            </Link>
            <Link to="/category/interior" className="text-gray-300 hover:text-white transition">
              Interior
            </Link>
            <Link to="/category/protection" className="text-gray-300 hover:text-white transition">
              Protection
            </Link>
            <Link to="/category/accessories" className="text-gray-300 hover:text-white transition">
              Accessories
            </Link>
            <Link 
              to="/category/kits" 
              className="text-[#0EA5E9] font-semibold hover:text-[#38BDF8] transition"
            >
              Kits
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-300 hover:text-white transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0EA5E9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/category/wash" 
                className="text-gray-300 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wash
              </Link>
              <Link 
                to="/category/interior" 
                className="text-gray-300 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Interior
              </Link>
              <Link 
                to="/category/protection" 
                className="text-gray-300 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Protection
              </Link>
              <Link 
                to="/category/accessories" 
                className="text-gray-300 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link 
                to="/category/kits" 
                className="text-[#0EA5E9] font-semibold hover:text-[#38BDF8] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kits
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
