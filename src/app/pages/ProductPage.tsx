import { useParams, Link } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Minus, Plus, Ruler, ShoppingBag, Sparkles, WashingMachine } from 'lucide-react';
import { categories, getProductBySlug, getRelatedProducts, ProductVariant } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency, getDefaultVariant, getDisplayPrice } from '../lib/commerce.js';

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(getDefaultVariant(product));
      setQuantity(1);
    }
  }, [product?.id]);

  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  const price = useMemo(() => product ? getDisplayPrice(product, selectedVariant) : 0, [product, selectedVariant]);
  const total = price * quantity;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fbf6ee] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl font-black text-[#211b17]">Producto no encontrado</h1>
          <Link to="/" className="font-black text-[#9d6b54] hover:text-[#211b17]">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="min-h-screen bg-[#fbf6ee]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to={`/category/${product.category}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#6c5f56] transition hover:text-[#211b17]"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver a {categories[product.category].title}
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24 overflow-hidden rounded-[2rem] border border-[#ead9c5] bg-[#fff8ed] shadow-sm">
              <div className="relative aspect-square overflow-hidden bg-[#ead9c5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span key={badge} className="rounded-full bg-[#fff8ed]/85 px-3 py-1 text-xs font-black text-[#211b17] backdrop-blur">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {product.benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="rounded-2xl bg-[#f1e3d2] px-4 py-3 text-sm font-bold text-[#665b52]">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-7"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
                {categories[product.category].title}
              </span>
              <h1 className="mt-3 font-serif text-5xl font-black leading-none tracking-normal text-[#211b17] md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#665b52]">
                {product.description}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
              <span className="text-sm font-bold text-[#665b52]">Precio</span>
              <div className="mt-1 flex flex-wrap items-end gap-3">
                <strong className="text-4xl font-black text-[#211b17]">{formatCurrency(price)}</strong>
                {selectedVariant && (
                  <span className="mb-1 rounded-full bg-[#f1e3d2] px-3 py-1 text-sm font-bold text-[#665b52]">
                    {selectedVariant.label}
                  </span>
                )}
              </div>
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-[#9d6b54]" />
                  <h2 className="font-black text-[#211b17]">Elegi talle o medida</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      type="button"
                      disabled={variant.stock === 0}
                      onClick={() => setSelectedVariant(variant)}
                      className={`relative rounded-2xl border px-4 py-3 text-left transition ${
                        selectedVariant?.id === variant.id
                          ? 'border-[#211b17] bg-[#211b17] text-[#fff8ed]'
                          : 'border-[#ead9c5] bg-white/55 text-[#211b17] hover:border-[#c8aa8c]'
                      } ${variant.stock === 0 ? 'cursor-not-allowed opacity-45' : ''}`}
                    >
                      <span className="block text-sm font-black">{variant.label}</span>
                      <span className="block text-xs opacity-75">{formatCurrency(variant.price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.packs && product.packs.length > 0 && (
              <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#9d6b54]" />
                  <h2 className="font-black text-[#211b17]">Ahorro por pack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.packs.map((pack) => (
                    <button
                      key={pack.quantity}
                      type="button"
                      onClick={() => setQuantity(pack.quantity)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
                        quantity === pack.quantity
                          ? 'border-[#9d6b54] bg-[#9d6b54] text-white'
                          : 'border-[#ead9c5] bg-white/55 text-[#211b17]'
                      }`}
                    >
                      {pack.label || `${pack.quantity} unidades`} · {formatCurrency(pack.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-black text-[#211b17]">Cantidad</span>
                <div className="flex items-center rounded-full bg-[#f1e3d2]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[#211b17]"
                    aria-label="Restar cantidad"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="min-w-12 text-center font-black text-[#211b17]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-[#211b17]"
                    aria-label="Sumar cantidad"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mb-5 flex items-center justify-between border-t border-[#ead9c5] pt-5">
                <span className="text-[#665b52]">Total estimado</span>
                <strong className="text-3xl font-black text-[#211b17]">{formatCurrency(total)}</strong>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#211b17] px-8 py-4 font-black text-[#fff8ed] transition hover:bg-[#4e3a30]"
              >
                <ShoppingBag className="h-5 w-5" />
                Agregar al carrito
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
                <WashingMachine className="mb-3 h-6 w-6 text-[#9d6b54]" />
                <h3 className="mb-2 font-black text-[#211b17]">Material y cuidado</h3>
                <p className="text-sm leading-6 text-[#665b52]">{product.material}</p>
                <p className="mt-2 text-sm leading-6 text-[#665b52]">{product.care}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5">
                <Check className="mb-3 h-6 w-6 text-[#9d6b54]" />
                <h3 className="mb-2 font-black text-[#211b17]">Por que conviene</h3>
                <ul className="space-y-2 text-sm text-[#665b52]">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9d6b54]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {product.suggestion && (
              <div className="rounded-[1.5rem] border border-[#d8b98f] bg-[#f6e3c7] p-5 text-[#211b17]">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#9d6b54]">Sugerencia</span>
                <p className="mt-2 font-bold leading-7">{product.suggestion}</p>
              </div>
            )}
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 font-serif text-4xl font-black tracking-normal text-[#211b17]">
              Tambien puede servirte
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-52 overflow-hidden bg-[#ead9c5]">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-[#211b17]">{related.name}</h3>
                    <p className="mt-2 text-sm text-[#665b52]">{related.shortDescription}</p>
                    <p className="mt-4 text-xl font-black text-[#211b17]">{formatCurrency(getDisplayPrice(related))}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
