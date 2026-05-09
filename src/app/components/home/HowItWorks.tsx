import { motion } from 'motion/react';
import { MessageCircle, Ruler, ShoppingBag } from 'lucide-react';

const steps = [
  {
    icon: Ruler,
    title: 'Elegi talle o medida',
    description: 'Cada producto muestra variantes claras: talle, plaza, color o medida.',
  },
  {
    icon: ShoppingBag,
    title: 'Arma el carrito',
    description: 'Sumas productos, packs o combos con total estimado en pesos argentinos.',
  },
  {
    icon: MessageCircle,
    title: 'Coordinamos por WhatsApp',
    description: 'Enviamos el pedido completo para confirmar stock, envio y forma de pago.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#fff8ed] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9d6b54]">
            Compra directa
          </span>
          <h2 className="mt-2 font-serif text-4xl font-black tracking-normal text-[#211b17] md:text-5xl">
            Simple como mandar un mensaje.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#665b52]">
            Sin pago online visible por ahora: primero buscamos que entren consultas listas para cerrar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[#ead9c5] bg-[#fbf6ee] p-6"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#211b17] p-4 text-[#fff8ed]">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="mb-3 block text-sm font-black text-[#9d6b54]">Paso {index + 1}</span>
              <h3 className="mb-3 text-xl font-black text-[#211b17]">{step.title}</h3>
              <p className="leading-7 text-[#665b52]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
