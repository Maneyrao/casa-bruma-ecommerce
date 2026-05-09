import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router';
import { WHATSAPP_PHONE } from '../lib/commerce.js';

export const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const hideOnFocusedCheckout = ['/cart', '/checkout', '/order-success'].includes(pathname);

  if (hideOnFocusedCheckout) return null;

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Bruma! Quiero consultar por productos.')}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-[#20BD5A]"
      aria-label="Consultar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-2xl bg-[#211b17] px-3 py-2 text-sm font-bold text-[#fff8ed] opacity-0 transition-opacity group-hover:opacity-100">
        Consultanos
      </span>
    </button>
  );
};
