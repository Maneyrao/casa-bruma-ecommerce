import { Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, MessageCircle, Package } from 'lucide-react';
import { WHATSAPP_PHONE } from '../lib/commerce.js';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#fbf6ee] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-[2rem] border border-[#ead9c5] bg-[#fff8ed] p-8 text-center shadow-sm md:p-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.12, type: 'spring', stiffness: 190 }}
            className="mb-6 inline-flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#25D366]/25 blur-2xl" />
              <CheckCircle className="relative h-24 w-24 text-[#25D366]" />
            </div>
          </motion.div>

          <h1 className="mb-4 font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
            Pedido enviado
          </h1>
          <p className="mb-8 text-lg leading-8 text-[#665b52]">
            Abrimos WhatsApp con el resumen del carrito. Si no se abrio, podes escribirnos directo y reenviamos la consulta.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[#f1e3d2] p-6 text-left">
              <MessageCircle className="mb-3 h-8 w-8 text-[#25D366]" />
              <h3 className="mb-2 font-black text-[#211b17]">Coordinamos por WhatsApp</h3>
              <p className="text-sm leading-6 text-[#665b52]">
                Confirmamos stock, talles, envio o retiro y forma de pago.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#f1e3d2] p-6 text-left">
              <Package className="mb-3 h-8 w-8 text-[#9d6b54]" />
              <h3 className="mb-2 font-black text-[#211b17]">Sin pago online aun</h3>
              <p className="text-sm leading-6 text-[#665b52]">
                La estructura queda lista para sumar Mercado Pago en la proxima fase.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#211b17] px-8 py-4 font-black text-[#fff8ed] transition hover:bg-[#4e3a30]"
            >
              Seguir comprando
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#ead9c5] bg-white/60 px-8 py-4 font-black text-[#211b17] transition hover:bg-white"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
