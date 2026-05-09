import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, MessageCircle, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppCheckoutUrl, formatCurrency, WHATSAPP_PHONE } from '../lib/commerce.js';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getCartTotal, getShipping, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    name: '',
    locality: '',
    delivery: 'Envio a coordinar',
    notes: '',
  });

  const subtotal = getCartTotal();
  const shipping = getShipping();
  const total = subtotal + shipping.cost;

  const whatsappUrl = useMemo(
    () => buildWhatsAppCheckoutUrl({ phone: WHATSAPP_PHONE, customer, items, total }),
    [customer, items, total]
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fbf6ee] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl font-black text-[#211b17]">No hay productos para confirmar</h1>
          <Link to="/" className="font-black text-[#9d6b54] hover:text-[#211b17]">
            Volver a comprar
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="min-h-screen bg-[#fbf6ee] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#6c5f56] transition hover:text-[#211b17]"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver al carrito
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
                Ultimo paso
              </span>
              <h1 className="mt-2 font-serif text-5xl font-black leading-none tracking-normal text-[#211b17] md:text-6xl">
                Confirmar pedido por WhatsApp
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#665b52]">
                No cobramos aca todavia. Enviamos el resumen para coordinar disponibilidad, envio y forma de pago.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black text-[#211b17]">Tus datos</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-black text-[#211b17]">
                  Nombre
                  <input
                    value={customer.name}
                    onChange={(event) => setCustomer((value) => ({ ...value, name: event.target.value }))}
                    required
                    className="rounded-2xl border border-[#ead9c5] bg-white/70 px-4 py-3 font-normal outline-none focus:border-[#9d6b54]"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black text-[#211b17]">
                  Zona / localidad
                  <input
                    value={customer.locality}
                    onChange={(event) => setCustomer((value) => ({ ...value, locality: event.target.value }))}
                    required
                    className="rounded-2xl border border-[#ead9c5] bg-white/70 px-4 py-3 font-normal outline-none focus:border-[#9d6b54]"
                    placeholder="CABA, GBA, interior..."
                  />
                </label>
                <label className="grid gap-2 text-sm font-black text-[#211b17]">
                  Entrega
                  <select
                    value={customer.delivery}
                    onChange={(event) => setCustomer((value) => ({ ...value, delivery: event.target.value }))}
                    className="rounded-2xl border border-[#ead9c5] bg-white/70 px-4 py-3 font-normal outline-none focus:border-[#9d6b54]"
                  >
                    <option>Envio a coordinar</option>
                    <option>Retiro</option>
                    <option>Quiero consultar opciones</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-black text-[#211b17] sm:col-span-2">
                  Notas
                  <textarea
                    value={customer.notes}
                    onChange={(event) => setCustomer((value) => ({ ...value, notes: event.target.value }))}
                    className="min-h-28 rounded-2xl border border-[#ead9c5] bg-white/70 px-4 py-3 font-normal outline-none focus:border-[#9d6b54]"
                    placeholder="Talle alternativo, color preferido, horario de contacto..."
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-black text-white transition hover:bg-[#20bd5a]"
            >
              <Send className="h-5 w-5" />
              Enviar pedido por WhatsApp
            </button>
          </form>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <h2 className="text-xl font-black text-[#211b17]">Resumen a enviar</h2>
              </div>
              <div className="max-h-72 space-y-4 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-black text-[#211b17]">{item.name}</p>
                      {item.variant && <p className="text-xs font-bold text-[#9d6b54]">{item.variant.label}</p>}
                      <p className="text-sm text-[#665b52]">x{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-[#ead9c5] pt-5">
                <div className="mb-2 flex justify-between text-[#665b52]">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="mb-4 flex justify-between text-[#665b52]">
                  <span>{shipping.label}</span>
                  <span>{shipping.isFree ? 'Sin cargo' : formatCurrency(shipping.cost)}</span>
                </div>
                <div className="flex justify-between text-2xl font-black text-[#211b17]">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block break-words rounded-2xl bg-[#f1e3d2] p-3 text-xs text-[#665b52]"
              >
                Vista previa del enlace WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
