import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { categories, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency, getDefaultVariant, getDisplayPrice } from '../lib/commerce.js';

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();

  const products = category ? getProductsByCategory(category) : [];
  const info = category ? categories[category as keyof typeof categories] : null;

  if (!info || products.length === 0) {
    return (
      <div className="min-h-screen bg-[#fbf6ee] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl font-black text-[#211b17]">Categoria no encontrada</h1>
          <Link to="/" className="font-black text-[#9d6b54] hover:text-[#211b17]">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1, getDefaultVariant(product));
  };

  return (
    <div className="min-h-screen bg-[#fbf6ee]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#6c5f56] transition hover:text-[#211b17]"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 rounded-[2rem] border border-[#ead9c5] bg-[#fff8ed] p-7 shadow-sm sm:p-10"
        >
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
            {info.short}
          </span>
          <h1 className="mt-2 font-serif text-5xl font-black leading-none tracking-normal text-[#211b17] md:text-7xl">
            {info.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665b52]">
            {info.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            const defaultVariant = getDefaultVariant(product);
            const price = getDisplayPrice(product, defaultVariant);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/product/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] shadow-sm transition hover:-translate-y-1 hover:border-[#c8aa8c] hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ead9c5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                      {product.badges.slice(0, 2).map((badge) => (
                        <span key={badge} className="rounded-full bg-[#fff8ed]/85 px-3 py-1 text-xs font-black text-[#211b17] backdrop-blur">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#9d6b54]">
                      {categories[product.category].title}
                    </p>
                    <h3 className="text-xl font-black text-[#211b17] transition group-hover:text-[#9d6b54]">
                      {product.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#665b52]">
                      {product.shortDescription}
                    </p>
                    {defaultVariant && (
                      <p className="mt-4 rounded-2xl bg-[#f1e3d2] px-3 py-2 text-xs font-bold text-[#6c5f56]">
                        Desde {defaultVariant.label}
                      </p>
                    )}
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-2xl font-black text-[#211b17]">
                        {formatCurrency(price)}
                      </span>
                      {product.variants?.length ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#211b17] px-4 py-2 text-sm font-black text-[#fff8ed]">
                          Elegir
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      ) : (
                        <button
                          onClick={(e) => handleQuickAdd(product, e)}
                          className="rounded-full bg-[#211b17] p-3 text-[#fff8ed] transition hover:bg-[#4e3a30]"
                          aria-label="Agregar al carrito"
                        >
                          <ShoppingBag className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
