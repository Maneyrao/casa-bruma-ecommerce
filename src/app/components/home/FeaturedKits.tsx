import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { getKits } from '../../data/products';
import { formatCurrency, getDisplayPrice } from '../../lib/commerce.js';

export const FeaturedKits = () => {
  const kits = getKits();

  return (
    <section className="bg-[#fff8ed] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
            Venta sugestiva
          </span>
          <h2 className="mt-2 font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
            Combos que resuelven la noche.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#665b52]">
            Pensados para que no tengas que combinar de cero: cama, abrigo y termicas en una compra.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-[#ead9c5] bg-[#fbf6ee] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid min-h-full md:grid-cols-[48%_52%]">
                <div className="relative min-h-72 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#fff8ed]/85 px-3 py-1 text-xs font-black text-[#211b17] backdrop-blur">
                    <Star className="mr-1 inline h-3.5 w-3.5 fill-current text-[#9d6b54]" />
                    Combo
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="font-serif text-3xl font-black leading-none tracking-normal text-[#211b17]">
                      {kit.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#665b52]">{kit.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {kit.badges.map((badge) => (
                        <span key={badge} className="rounded-full bg-[#f1e3d2] px-3 py-1 text-xs font-black text-[#7d503f]">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-2xl font-black text-[#211b17]">{formatCurrency(getDisplayPrice(kit))}</span>
                    <Link
                      to={`/product/${kit.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#211b17] px-5 py-3 text-sm font-black text-[#fff8ed] transition hover:bg-[#4e3a30]"
                    >
                      Ver combo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
