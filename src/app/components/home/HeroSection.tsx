import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Moon, Sun, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const HeroSection = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <section className={`relative overflow-hidden transition-colors duration-700 ${
      isNight ? 'bg-[#121a2a] text-[#fff3df]' : 'bg-[#f6eadb] text-[#211b17]'
    }`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute right-[12%] top-20 h-64 w-64 rounded-full blur-3xl transition-opacity duration-700 ${
          isNight ? 'bg-amber-300/35 opacity-100' : 'bg-[#e9c9a4]/55 opacity-100'
        }`} />
        <div className={`absolute left-0 top-0 h-full w-1/2 transition-colors duration-700 ${
          isNight ? 'bg-[#121a2a]/40' : 'bg-white/35'
        }`} />
      </div>

      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-[2rem] border shadow-2xl transition-all duration-700 ${
          isNight
            ? 'border-amber-200/15 bg-[#172033]/70 shadow-black/40'
            : 'border-white/70 bg-[#fff8ed]/65 shadow-[#8a6a4d]/20'
        }`}>
          <button
            type="button"
            onClick={() => setIsNight((value) => !value)}
            className={`absolute right-5 top-5 z-30 inline-flex h-12 items-center gap-2 rounded-full border py-1 pl-1 pr-4 text-sm font-black shadow-xl backdrop-blur-xl transition-all duration-500 sm:right-8 sm:top-8 ${
              isNight
                ? 'border-amber-100/20 bg-[#121a2a]/60 text-[#fff3df]'
                : 'border-[#211b17]/10 bg-[#fff8ed]/80 text-[#211b17]'
            }`}
            aria-pressed={isNight}
          >
            <span className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 ${
              isNight ? 'bg-[#fff3df] text-[#121a2a]' : 'bg-[#ffd986] text-[#211b17]'
            }`}>
              {isNight ? <Moon className="h-4 w-4" /> : <Sun className="h-5 w-5" />}
            </span>
            {isNight ? 'Modo dia' : 'Modo noche'}
          </button>
          <div className="relative min-h-[720px] overflow-hidden lg:grid lg:grid-cols-[48%_52%]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=82"
                alt="Cama luminosa con ropa de cama suave"
                className={`h-full w-full object-cover object-[68%_center] transition-all duration-1000 lg:object-center ${
                  isNight
                    ? 'scale-[1.045] brightness-[.48] contrast-105 sepia saturate-75'
                    : 'scale-[1.02] brightness-100 contrast-100 saturate-[.95]'
                }`}
              />
              <div className={`absolute inset-0 transition-all duration-1000 ${
                isNight
                  ? 'bg-[radial-gradient(circle_at_72%_18%,rgba(255,187,82,.58),transparent_22%),linear-gradient(180deg,rgba(14,20,34,.78),rgba(14,20,34,.42)_48%,rgba(5,8,16,.16))] lg:bg-[radial-gradient(circle_at_68%_22%,rgba(255,187,82,.52),transparent_18%),linear-gradient(90deg,rgba(14,20,34,.86),rgba(14,20,34,.48)_46%,rgba(5,8,16,.24))]'
                  : 'bg-[linear-gradient(180deg,rgba(255,248,237,.86),rgba(255,248,237,.46)_44%,rgba(255,255,255,.05))] lg:bg-[linear-gradient(90deg,rgba(255,248,237,.76),rgba(255,248,237,.2)_48%,rgba(255,255,255,.04))]'
              }`} />
            </div>

            <div className={`relative z-10 flex min-h-[530px] flex-col justify-between border-r p-6 backdrop-blur-[4px] transition-colors duration-700 sm:p-10 lg:min-h-[720px] lg:backdrop-blur-[26px] ${
              isNight
                ? 'border-amber-100/10 bg-[#141d2f]/48 lg:bg-[#141d2f]/55'
                : 'border-white/70 bg-[#fff8ed]/38 lg:bg-[#fff8ed]/58'
            }`}>
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className={`mb-5 max-w-[10rem] text-xs font-black uppercase leading-5 tracking-[0.2em] sm:max-w-none ${
                  isNight ? 'text-amber-200' : 'text-[#a66b55]'
                }`}>
                  {isNight ? 'Luces calidas, descanso encendido' : 'Mananas suaves, noches abrigadas'}
                </p>
                <h1 className="max-w-2xl font-serif text-[3.45rem] font-black leading-[0.86] tracking-normal sm:text-7xl lg:text-[5.6rem]">
                  {isNight ? 'Que el frio se quede afuera.' : 'Dormi como si la casa bajara el volumen.'}
                </h1>
                <p className={`mt-7 max-w-xl text-lg leading-8 transition-colors duration-700 ${
                  isNight ? 'text-[#dcc7a7]' : 'text-[#665b52]'
                }`}>
                  {isNight
                    ? 'Frazadas, sabanas y termicas para transformar una noche fria en una compra simple y calida.'
                    : 'Blanqueria, almohadas, frazadas y remeras termicas para renovar tu descanso y vestirte en capas sin complicarte.'}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={isNight ? '/category/frazadas' : '/category/combos'}
                    className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-black transition-all hover:-translate-y-0.5 ${
                      isNight
                        ? 'bg-amber-300 text-[#211b17] hover:bg-amber-200'
                        : 'bg-[#211b17] text-[#fff8ed] hover:bg-[#4f3a30]'
                    }`}
                  >
                    {isNight ? 'Comprar abrigo' : 'Armar cama completa'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/category/termicas"
                    className={`inline-flex items-center justify-center rounded-full border px-7 py-4 font-black backdrop-blur transition ${
                      isNight
                        ? 'border-amber-100/15 bg-amber-100/10 text-[#fff3df] hover:bg-amber-100/15'
                        : 'border-white/70 bg-white/55 text-[#211b17] hover:bg-white/75'
                    }`}
                  >
                    Ver termicas
                  </Link>
                </div>
              </motion.div>

              <div className="grid gap-3 pt-10 sm:grid-cols-3">
                {['Talles y medidas claras', 'Atencion por WhatsApp', 'Combos listos para invierno'].map((item) => (
                  <div
                    key={item}
                    className={`rounded-2xl border p-3 text-sm font-bold transition-colors duration-700 ${
                      isNight
                        ? 'border-amber-100/10 bg-amber-100/5 text-[#dcc7a7]'
                        : 'border-white/70 bg-white/40 text-[#665b52]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 min-h-[360px] lg:min-h-[720px]">
              <motion.div
                key={isNight ? 'night-card' : 'day-card'}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45 }}
                className={`absolute bottom-6 left-5 right-5 rounded-[1.75rem] border p-5 shadow-2xl backdrop-blur-2xl transition-colors duration-700 sm:left-auto sm:right-24 sm:w-[360px] ${
                  isNight
                    ? 'border-amber-100/20 bg-[#151d2d]/62 text-[#fff3df] shadow-black/35'
                    : 'border-white/75 bg-[#fff8ed]/72 text-[#211b17] shadow-[#7b5d43]/20'
                }`}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-current/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Venta sugerida
                </div>
                <h2 className="font-serif text-3xl font-black leading-none tracking-normal">
                  {isNight ? 'Kit noche termica' : 'Combo sueno calido'}
                </h2>
                <p className={`mt-3 text-sm leading-6 ${
                  isNight ? 'text-[#dcc7a7]' : 'text-[#665b52]'
                }`}>
                  {isNight
                    ? 'Remera termica + frazada soft: la recomendacion directa para dormir o levantarte sin perder calor.'
                    : 'Frazada soft, almohada y sabana ajustable. Una compra pensada para resolver la cama entera.'}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-current/10 pt-5">
                  <strong className="text-2xl">$ 48.900</strong>
                  <Link
                    to={isNight ? '/product/kit-noche-termica' : '/product/combo-sueno-calido'}
                    className={`rounded-full px-5 py-3 text-sm font-black transition ${
                      isNight ? 'bg-amber-300 text-[#211b17]' : 'bg-[#211b17] text-[#fff8ed]'
                    }`}
                  >
                    Consultar
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
