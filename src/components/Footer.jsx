import { Youtube, ExternalLink, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6 cursor-pointer">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center border border-white/10 p-0.5">
                <img src={logo} alt="TRV Studio Logo" className="w-full h-full rounded-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>
              <span className="font-orbitron font-bold text-2xl tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                TRV STUDIO
              </span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-sm">
              Empoderando a desarrolladores indie con assets, herramientas y entornos 3D de calidad premium. Tu viaje hacia el desarrollo de videojuegos comienza aquí.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-orbitron font-semibold text-white tracking-wider mb-6">EXPLORAR</h4>
            <ul className="flex flex-col gap-4 text-text-muted">
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Inicio</a></li>
              <li><a href="#ofertas" className="hover:text-accent-cyan transition-colors">Ofertas Destacadas</a></li>
              <li><a href="#portafolio" className="hover:text-accent-cyan transition-colors">Catálogo Completo</a></li>
              <li><a href="#" className="hover:text-accent-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-3">
            <h4 className="font-orbitron font-semibold text-white tracking-wider mb-6">CONECTA</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.fab.com/sellers/Jasb-DV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10 group-hover:border-accent-purple group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
                  <ExternalLink size={18} className="text-accent-purple" />
                </div>
                <span className="font-medium">Tienda en Fab</span>
              </a>
              
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10 group-hover:border-[#FF0000] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all">
                  <Youtube size={18} className="text-[#FF0000]" />
                </div>
                <span className="font-medium">YouTube</span>
              </a>
              
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10 group-hover:border-[#1DA1F2] group-hover:shadow-[0_0_15px_rgba(29,161,242,0.3)] transition-all">
                  <Twitter size={18} className="text-[#1DA1F2]" />
                </div>
                <span className="font-medium">Twitter / X</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted/60">
          <p>© {currentYear} TRV Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-muted transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-text-muted transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
