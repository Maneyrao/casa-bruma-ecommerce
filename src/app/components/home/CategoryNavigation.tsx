import { Link } from 'react-router';
import { BedDouble, Flame, Moon, Package, Shirt } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    name: 'Quiero dormir mas abrigado',
    slug: 'frazadas',
    icon: Flame,
    description: 'Frazadas, mantas y capas para noches frias.',
  },
  {
    name: 'Renovar la cama',
    slug: 'blanqueria',
    icon: BedDouble,
    description: 'Sabanas, almohadas y frazadas en una seccion.',
  },
  {
    name: 'Comprar por talle',
    slug: 'termicas',
    icon: Shirt,
    description: 'Remeras termicas livianas para usar en capas.',
  },
  {
    name: 'Armar combo',
    slug: 'combos',
    icon: Package,
    description: 'Opciones listas para resolver la compra.',
  },
  {
    name: 'Mejorar la almohada',
    slug: 'almohadas',
    icon: Moon,
    description: 'Soporte medio, tacto mullido y descanso diario.',
  },
];

export const CategoryNavigation = () => {
  return (
    <section className="bg-[#fbf6ee] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
            Compra guiada
          </span>
          <h2 className="mt-2 font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
            Elegi por lo que queres sentir.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#665b52]">
            Menos vueltas, mas descanso: entrá por necesidad y llegá rapido al producto correcto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                to={`/category/${category.slug}`}
                className="group block h-full rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5 transition hover:-translate-y-1 hover:border-[#c8aa8c] hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[#f1e3d2] p-3 text-[#9d6b54] transition group-hover:bg-[#211b17] group-hover:text-[#fff8ed]">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-black leading-tight text-[#211b17]">{category.name}</h3>
                <p className="text-sm leading-6 text-[#665b52]">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
