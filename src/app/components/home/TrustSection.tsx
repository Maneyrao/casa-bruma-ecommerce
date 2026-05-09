import { motion } from 'motion/react';
import { HeartHandshake, MessageCircle, RotateCcw, Star, Truck } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Envios y retiro',
    description: 'Coordinamos la mejor opcion segun tu zona.',
  },
  {
    icon: RotateCcw,
    title: 'Cambios simples',
    description: 'Te ayudamos con talles, medidas y alternativas.',
  },
  {
    icon: MessageCircle,
    title: 'Atencion por WhatsApp',
    description: 'El pedido llega con productos, variantes y total.',
  },
  {
    icon: HeartHandshake,
    title: 'Compra acompanada',
    description: 'Recomendamos combos sin empujar productos de mas.',
  },
];

const reviews = [
  {
    name: 'Cliente de invierno',
    text: 'Me resolvieron la cama completa en un mensaje. El combo llego listo para usar.',
  },
  {
    name: 'Compra de termicas',
    text: 'Pude elegir talle y sumar pack x2 sin perderme. Super directo.',
  },
  {
    name: 'Regalo util',
    text: 'La manta y la almohada fueron un regalo perfecto. Buen asesoramiento.',
  },
];

export const TrustSection = () => {
  return (
    <section className="bg-[#fbf6ee] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-5"
            >
              <item.icon className="mb-4 h-8 w-8 text-[#9d6b54]" />
              <h3 className="mb-2 font-black text-[#211b17]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#665b52]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
            La tienda tiene que sentirse como la cama: facil.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current text-[#d7a85f]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fff8ed] p-6"
            >
              <p className="mb-5 text-[#665b52]">"{review.text}"</p>
              <p className="font-black text-[#211b17]">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
