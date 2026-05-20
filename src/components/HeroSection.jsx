import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-primary z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Animated Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/50 bg-accent-gold/10 text-accent-gold text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(245,158,11,0.2)] animate-pulse cursor-default">
          <span className="text-base">🔥</span>
          REBAJAS DE JUNIO — HASTA 70% OFF
        </div>

        {/* Main Title */}
        <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
          ELEVA TUS PROYECTOS <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            CON ASSETS PREMIUM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          TRV Studio te ofrece herramientas, texturas y plantillas profesionales para desarrolladores. Impulsa tu juego indie con calidad top-tier sin salirte del presupuesto.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href="#ofertas"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(124,58,237,0.5)]"
          >
            <ShoppingBag size={20} />
            Ver Ofertas
          </a>

          <a
            href="https://www.fab.com/sellers/Jasb-DV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-surface/50 backdrop-blur text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Explorar Tienda
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Bottom fade out to transition to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10" />
    </section>
  );
}
