import { ExternalLink, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-text-muted/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-accent-purple/20
                        to-accent-cyan/20 flex items-center justify-center border border-white/10 p-0.5">
            <img src={logo} alt="TRV Studio Logo" className="w-full h-full rounded-full object-contain filter
                                                            drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider text-transparent
                          bg-clip-text bg-gradient-to-r from-text-primary to-accent-cyan">
            TRV STUDIO
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-text-muted">
            <li><Link to="/" className="hover:text-accent-cyan transition-colors cursor-pointer">Inicio</Link></li>
            <li><Link to="/ofertas" className="hover:text-accent-cyan transition-colors cursor-pointer">Ofertas</Link></li>
            <li><Link to="/portafolio" className="hover:text-accent-cyan transition-colors cursor-pointer">Portafolio</Link></li>
            <li><Link to="/contacto" className="hover:text-accent-cyan transition-colors cursor-pointer">Contacto</Link></li>
          </ul>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-[#38BDF8] flex items-center transition-colors shadow-inner"
            aria-label="Toggle Dark Mode"
          >
            <div className={`absolute w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-1' : 'translate-x-8'}`}>
              {theme === 'light' ? (
                <Sun size={12} className="text-[#F59E0B]" />
              ) : (
                <Moon size={12} className="text-[#38BDF8]" />
              )}
            </div>
          </button>

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