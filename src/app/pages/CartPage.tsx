import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { calculateLineTotal, formatCurrency } from '../lib/commerce.js';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal, getShipping } = useCart();

  const subtotal = getCartTotal();
  const shipping = getShipping();
  const total = subtotal + shipping.cost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fbf6ee] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-[#c8aa8c]" />
          <h1 className="mb-4 font-serif text-4xl font-black text-[#211b17]">Tu carrito esta vacio</h1>
          <p className="mb-8 leading-7 text-[#665b52]">
            Agrega una frazada, una remera termica o un combo para armar tu pedido por WhatsApp.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#211b17] px-8 py-4 font-black text-[#fff8ed] transition hover:bg-[#4e3a30]"
          >
            <ArrowLeft className="h-5 w-5" />
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbf6ee]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#6c5f56] transition hover:text-[#211b17]"
        >
          <ArrowLeft className="h-5 w-5" />
          Seguir comprando
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl font-black tracking-normal text-[#211b17] md:text-6xl">
            Tu pedido
          </h1>
          <p className="mt-3 text-[#665b52]">
            Revisalo y envialo por WhatsApp para coordinar stock, envio y forma de pago.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-4 shadow-sm sm:p-5"
              >
                <div className="flex gap-4">
                  <Link to={`/product/${item.slug}`} className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#ead9c5] sm:h-32 sm:w-32">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <div>
                        <Link to={`/product/${item.slug}`} className="transition hover:text-[#9d6b54]">
                          <h3 className="text-lg font-black text-[#211b17]">{item.name}</h3>
                        </Link>
                        {item.variant && (
                          <p className="mt-1 text-sm font-bold text-[#9d6b54]">{item.variant.label}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full p-2 text-[#8c5a4c] transition hover:bg-[#f1e3d2]"
                        aria-label="Quitar del carrito"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="mb-4 line-clamp-2 text-sm leading-6 text-[#665b52]">
                      {item.product.shortDescription}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex w-fit items-center rounded-full bg-[#f1e3d2]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2.5 text-[#211b17]"
                          aria-label="Restar cantidad"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-12 text-center font-black text-[#211b17]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2.5 text-[#211b17]"
                          aria-label="Sumar cantidad"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-2xl font-black text-[#211b17]">
                          {formatCurrency(calculateLineTotal(item))}
                        </p>
                        <p className="text-sm text-[#665b52]">{formatCurrency(item.price)} c/u</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24 rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-6 shadow-sm"
            >
              <h2 className="mb-6 text-2xl font-black text-[#211b17]">Resumen</h2>

              <div className="space-y-4 border-b border-[#ead9c5] pb-5">
                <div className="flex justify-between text-[#665b52]">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#665b52]">
                  <span>{shipping.label}</span>
                  <span>{shipping.isFree ? 'Sin cargo' : formatCurrency(shipping.cost)}</span>
                </div>
                {!shipping.isFree && (
                  <div className="rounded-2xl bg-[#f6e3c7] p-3 text-sm font-bold text-[#7d503f]">
                    Te faltan {formatCurrency(shipping.remainingForFree)} para envio bonificado.
                  </div>
                )}
              </div>

              <div className="my-6 flex justify-between text-2xl font-black text-[#211b17]">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <Link
                to="/checkout"
                className="block w-full rounded-full bg-[#211b17] py-4 text-center font-black text-[#fff8ed] transition hover:bg-[#4e3a30]"
              >
                Confirmar por WhatsApp
              </Link>

              <div className="mt-6 space-y-3 text-sm font-bold text-[#665b52]">
                <p>• Sin pago online por ahora.</p>
                <p>• Coordinamos stock, envio y forma de pago por WhatsApp.</p>
                <p>• Mercado Pago queda preparado para fase 2.</p>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
