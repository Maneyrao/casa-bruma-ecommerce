import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { categories, getBestSellers } from '../../data/products';
import { formatCurrency, getDefaultVariant, getDisplayPrice } from '../../lib/commerce.js';

export const BestSellers = () => {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="bg-[#fbf6ee] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
              Lo que mas sale
            </span>
            <h2 className="mt-2 font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
              Favoritos para comprar sin dudar.
            </h2>
          </div>
          <Link to="/category/combos" className="inline-flex items-center gap-2 font-black text-[#9d6b54] hover:text-[#211b17]">
            Ver combos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product, index) => {
            const defaultVariant = getDefaultVariant(product);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to={`/product/${product.slug}`}
                  className="group block overflow-hidden rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ead9c5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#211b17]/85 px-3 py-1 text-xs font-black text-[#fff8ed] backdrop-blur">
                      Mas vendido
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#9d6b54]">
                      {categories[product.category].title}
                    </p>
                    <h3 className="font-black text-[#211b17] group-hover:text-[#9d6b54]">{product.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#665b52]">{product.shortDescription}</p>
                    {defaultVariant && (
                      <p className="mt-3 text-xs font-bold text-[#7d503f]">{defaultVariant.label}</p>
                    )}
                    <p className="mt-4 text-2xl font-black text-[#211b17]">
                      {formatCurrency(getDisplayPrice(product, defaultVariant))}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
