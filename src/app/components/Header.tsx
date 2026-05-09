import { Link } from 'react-router';
import { MessageCircle, Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_PHONE } from '../lib/commerce.js';

const navItems = [
  { label: 'Blanqueria', to: '/category/blanqueria' },
  { label: 'Remeras termicas', to: '/category/termicas' },
  { label: 'Frazadas', to: '/category/frazadas' },
  { label: 'Combos', to: '/category/combos' },
];

export const Header = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9c5] bg-[#fff8ed]/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.25rem] items-center justify-between gap-4 py-3">
          <Link to="/" className="font-serif text-2xl font-black tracking-normal text-[#211b17]">
            Casa Bruma
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-bold text-[#6c5f56] transition hover:text-[#211b17]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Bruma! Quiero consultar por productos.')}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#211b17] px-4 py-2 text-sm font-black text-[#fff8ed] transition hover:bg-[#4e3a30] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <Link
              to="/cart"
              className="relative rounded-full border border-[#ead9c5] bg-white/70 p-2.5 text-[#211b17] transition hover:bg-white"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#9d6b54] px-1 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-full border border-[#ead9c5] bg-white/70 p-2.5 text-[#211b17] transition hover:bg-white md:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[#ead9c5] py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl bg-white/55 px-4 py-3 text-base font-black text-[#211b17]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Bruma! Quiero consultar por productos.')}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#211b17] px-4 py-3 text-base font-black text-[#fff8ed]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
