import { Link } from 'react-router';
import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_PHONE } from '../lib/commerce.js';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#ead9c5] bg-[#211b17] text-[#fff8ed]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 font-serif text-2xl font-black tracking-normal">Casa Bruma</div>
            <p className="text-sm leading-6 text-[#dcc7a7]">
              Blanqueria, frazadas, almohadas y remeras termicas para comprar facil y coordinar por WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-black">Comprar</h3>
            <ul className="space-y-2 text-sm text-[#dcc7a7]">
              <li><Link to="/category/blanqueria" className="hover:text-white">Blanqueria</Link></li>
              <li><Link to="/category/termicas" className="hover:text-white">Remeras termicas</Link></li>
              <li><Link to="/category/sabanas" className="hover:text-white">Sabanas</Link></li>
              <li><Link to="/category/frazadas" className="hover:text-white">Frazadas</Link></li>
              <li><Link to="/category/combos" className="hover:text-white">Combos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-black">Ayuda rapida</h3>
            <ul className="space-y-2 text-sm text-[#dcc7a7]">
              <li>Talles y medidas claras</li>
              <li>Envio bonificado desde $ 80.000</li>
              <li>Retiro o envio a coordinar</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> Atencion personalizada</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-black">Contacto</h3>
            <div className="mb-4 flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-2 text-[#fff8ed] transition hover:bg-white/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-[#fff8ed] transition hover:bg-white/20" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hola@casabruma.com" className="rounded-full bg-white/10 p-2 text-[#fff8ed] transition hover:bg-white/20" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-[#dcc7a7]">hola@casabruma.com</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-[#dcc7a7]">
          <p>© 2026 Casa Bruma. Ecommerce preparado para sumar Mercado Pago en fase 2.</p>
        </div>
      </div>
    </footer>
  );
};
