import { ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-accent-purple/20
                        to-accent-cyan/20 flex items-center justify-center border border-white/10 p-0.5">
            <img src={logo} alt="TRV Studio Logo" className="w-full h-full rounded-full object-contain filter
                                                            drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider text-transparent
                          bg-clip-text bg-gradient-to-r from-white to-accent-cyan">
            TRV STUDIO
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-text-muted">
            <li className="hover:text-accent-cyan transition-colors cursor-pointer">Inicio</li>
            <li className="hover:text-accent-cyan transition-colors cursor-pointer">Ofertas</li>
            <li className="hover:text-accent-cyan transition-colors cursor-pointer">Portafolio</li>
            <li className="hover:text-accent-cyan transition-colors cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="https://www.fab.com/sellers/Jasb-DV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
          >
            <span>Ver Tienda</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}