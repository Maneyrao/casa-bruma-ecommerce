import { MessageCircle, Users, Clock, Shield, Zap, X, Check, Play, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491123456789', '_blank');
  };

  const handleStartTest = () => {
    window.open('https://wa.me/5491123456789?text=Hola%20quiero%20hacer%20el%20test%20de%20nivel%20con%20IA', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "¿Qué nivel de inglés necesito para empezar?",
      answer: "Trabajamos con todos los niveles, desde principiantes hasta avanzados. El test de IA nos ayuda a ubicarte en el grupo perfecto para vos."
    },
    {
      question: "¿Las clases son presenciales u online?",
      answer: "Ofrecemos ambas modalidades. Podés elegir la que mejor se adapte a tu rutina."
    },
    {
      question: "¿Cuánto dura cada clase?",
      answer: "Las clases duran 90 minutos, con foco intensivo en práctica oral."
    },
    {
      question: "¿Qué horarios tienen disponibles?",
      answer: "Tenemos horarios flexibles de lunes a sábados, mañana, tarde y noche. Consultá disponibilidad por WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFD1DC] text-[#2d0a3d]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#FFD1DC]/95 backdrop-blur-sm z-50 border-b border-[#2d0a3d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-[#2d0a3d]">
              Aburridon't
            </span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="px-5 py-2.5 rounded-xl border-2 border-[#2d0a3d] bg-transparent hover:bg-[#2d0a3d] hover:text-white transition-all duration-300"
          >
            Contacto
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-[#2d0a3d]">
              Entendés inglés pero no podés hablarlo
            </h1>
            <p className="text-xl sm:text-2xl text-[#2d0a3d]/80 leading-relaxed">
              Dejá de estudiar gramática. Empezá a hablar de verdad en grupos súper reducidos de máximo 5 personas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartTest}
                className="px-8 py-5 bg-[#FF2E2E] text-white rounded-2xl font-bold text-lg hover:bg-[#e02525] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FF2E2E]/30"
              >
                Probar mi inglés (2 min)
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="px-8 py-5 bg-white text-[#2d0a3d] rounded-2xl font-bold text-lg hover:bg-white/80 transition-all duration-300 shadow-lg"
              >
                Ver cómo funciona
              </button>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF2E2E] blur-3xl opacity-20 rounded-[32px]"></div>
              <div className="relative bg-gradient-to-br from-[#2d0a3d] to-[#4a1a5e] rounded-[32px] overflow-hidden shadow-2xl aspect-[9/16] w-72 sm:w-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#FF2E2E] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-xl">Ver testimonios reales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-[#2d0a3d]">
            ¿Te suena familiar?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg">
              <div className="text-5xl">😰</div>
              <p className="text-xl font-bold text-[#2d0a3d]">
                Te quedás en blanco al hablar
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg">
              <div className="text-5xl">😳</div>
              <p className="text-xl font-bold text-[#2d0a3d]">
                Te da vergüenza equivocarte
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg">
              <div className="text-5xl">🤐</div>
              <p className="text-xl font-bold text-[#2d0a3d]">
                Entendés pero no podés responder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-[#2d0a3d]">
              El Método Aburridon't
            </h2>
            <p className="text-xl text-[#2d0a3d]/70">
              Así es como te destrabamos en tiempo récord
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF2E2E]/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-[#FF2E2E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d0a3d]">
                Grupos de máximo 5 personas
              </h3>
              <p className="text-[#2d0a3d]/70">
                No más aulas llenas donde nunca te toca hablar
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF2E2E]/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#FF2E2E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d0a3d]">
                Hablás 15–20 minutos por clase
              </h3>
              <p className="text-[#2d0a3d]/70">
                Tiempo real de práctica, no solo escuchar
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF2E2E]/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#FF2E2E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d0a3d]">
                Espacio seguro para equivocarte
              </h3>
              <p className="text-[#2d0a3d]/70">
                Cero vergüenza, cero juicios
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FF2E2E]/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#FF2E2E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d0a3d]">
                Clases dinámicas y prácticas
              </h3>
              <p className="text-[#2d0a3d]/70">
                Situaciones reales, conversación fluida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-[#2d0a3d]">
            La diferencia es abismal
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-[#2d0a3d]/10">
              {/* Header */}
              <div className="bg-white p-6"></div>
              <div className="bg-white p-6 text-center">
                <p className="font-bold text-gray-600">Instituto Tradicional</p>
              </div>
              <div className="bg-[#FFD1DC] p-6 text-center">
                <p className="font-black text-[#2d0a3d]">Aburridon't</p>
              </div>

              {/* Row 1 */}
              <div className="bg-white p-6">
                <p className="font-bold">Alumnos por clase</p>
              </div>
              <div className="bg-white p-6 text-center">
                <p className="text-gray-600">15-20 personas</p>
              </div>
              <div className="bg-[#FFD1DC] p-6 text-center">
                <p className="font-bold text-[#FF2E2E]">Máximo 5 personas</p>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-6">
                <p className="font-bold">Tiempo que hablás</p>
              </div>
              <div className="bg-white p-6 text-center">
                <p className="text-gray-600">2-5 minutos</p>
              </div>
              <div className="bg-[#FFD1DC] p-6 text-center">
                <p className="font-bold text-[#FF2E2E]">15-20 minutos</p>
              </div>

              {/* Row 3 */}
              <div className="bg-white p-6">
                <p className="font-bold">Enfoque</p>
              </div>
              <div className="bg-white p-6 text-center">
                <p className="text-gray-600">Gramática y teoría</p>
              </div>
              <div className="bg-[#FFD1DC] p-6 text-center">
                <p className="font-bold text-[#FF2E2E]">Speaking real</p>
              </div>

              {/* Row 4 */}
              <div className="bg-white p-6">
                <p className="font-bold">Atención personalizada</p>
              </div>
              <div className="bg-white p-6 text-center flex justify-center">
                <X className="w-6 h-6 text-gray-400" />
              </div>
              <div className="bg-[#FFD1DC] p-6 text-center flex justify-center">
                <Check className="w-6 h-6 text-[#FF2E2E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Test Section - HIGHLIGHT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#2d0a3d] to-[#4a1a5e] rounded-[32px] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E2E] blur-3xl opacity-20"></div>
            <div className="relative p-12 sm:p-16 space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-block bg-[#FF2E2E] text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
                  ⚡ LO MÁS IMPORTANTE
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                  Test de Nivel con IA
                </h2>
                <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
                  2 minutos que van a cambiar la forma en que aprendés inglés
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-4xl">⏱️</div>
                  <p className="text-white font-bold">Dura solo 2 minutos</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">💬</div>
                  <p className="text-white font-bold">Es una conversación relajada</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl">🤝</div>
                  <p className="text-white font-bold">No te juzga, te ayuda</p>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={handleStartTest}
                  className="px-12 py-6 bg-[#FF2E2E] text-white rounded-2xl font-black text-2xl hover:bg-[#e02525] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FF2E2E]/50"
                >
                  🤖 Empezar Test Ahora
                </button>
                <p className="text-white/60 mt-4">Gratis y sin compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Video Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-[#2d0a3d]">
            Historias reales de transformación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group">
                <div className="relative bg-gradient-to-br from-[#2d0a3d] to-[#4a1a5e] rounded-3xl overflow-hidden shadow-xl aspect-[9/16]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF2E2E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-bold text-lg">Testimonio {i}</p>
                    <p className="text-white/70 text-sm">De miedo a confianza</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes by Type */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-[#2d0a3d]">
              Programas para cada etapa
            </h2>
            <p className="text-xl text-[#2d0a3d]/70">
              Encontrá el grupo perfecto para vos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kids */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">👧🧒</div>
              <h3 className="text-3xl font-black mb-4 text-[#2d0a3d]">Niños (6-12 años)</h3>
              <p className="text-lg text-[#2d0a3d]/70 mb-6">
                Aprendizaje lúdico y natural. Grupos reducidos donde los chicos pierden el miedo desde el primer día.
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-[#FFD1DC] text-[#2d0a3d] rounded-xl font-bold hover:bg-[#ffc1d0] transition-all"
              >
                Ver horarios disponibles
              </button>
            </div>

            {/* Teens */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🎒</div>
              <h3 className="text-3xl font-black mb-4 text-[#2d0a3d]">Adolescentes (13-17 años)</h3>
              <p className="text-lg text-[#2d0a3d]/70 mb-6">
                Conversaciones sobre temas que les importan. Prepará exámenes internacionales mientras hablás de lo que te gusta.
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-[#FFD1DC] text-[#2d0a3d] rounded-xl font-bold hover:bg-[#ffc1d0] transition-all"
              >
                Ver horarios disponibles
              </button>
            </div>

            {/* Adults */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-3xl font-black mb-4 text-[#2d0a3d]">Adultos</h3>
              <p className="text-lg text-[#2d0a3d]/70 mb-6">
                Retomá el inglés sin vergüenza. Grupos de tu edad con objetivos similares: viajes, trabajo o desarrollo personal.
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-[#FFD1DC] text-[#2d0a3d] rounded-xl font-bold hover:bg-[#ffc1d0] transition-all"
              >
                Ver horarios disponibles
              </button>
            </div>

            {/* Professionals */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FF2E2E]">
              <div className="inline-block bg-[#FF2E2E] text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                Popular en IT
              </div>
              <div className="text-5xl mb-4">👨‍💻</div>
              <h3 className="text-3xl font-black mb-4 text-[#2d0a3d]">Profesionales / IT</h3>
              <p className="text-lg text-[#2d0a3d]/70 mb-6">
                Inglés técnico para reuniones, presentaciones y entrevistas. Practicá casos reales del trabajo.
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3 bg-[#FF2E2E] text-white rounded-xl font-bold hover:bg-[#e02525] transition-all"
              >
                Ver horarios disponibles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-[#2d0a3d]">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-[#2d0a3d]">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#2d0a3d] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#2d0a3d]/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#2d0a3d]">
            Dejá de estudiar inglés.
            <br />
            <span className="text-[#FF2E2E]">Empezá a hablarlo.</span>
          </h2>
          <p className="text-2xl text-[#2d0a3d]/70 max-w-2xl mx-auto">
            Tu grupo de máximo 5 personas te está esperando
          </p>
          <button
            onClick={handleStartTest}
            className="px-12 py-7 bg-[#FF2E2E] text-white rounded-2xl font-black text-2xl hover:bg-[#e02525] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FF2E2E]/40"
          >
            Hacer Test y Hablar con Nosotros
          </button>
          <p className="text-[#2d0a3d]/60">2 minutos pueden cambiar tu futuro</p>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
