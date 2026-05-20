import { catalogProducts } from '../data/products';
import ProductCard from './ProductCard';

export default function CatalogSection() {
  return (
    <section id="portafolio" className="py-24 bg-primary relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
              NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">CATÁLOGO</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              Explora nuestra colección completa de assets, texturas y plantillas diseñadas para facilitar tu desarrollo.
            </p>
          </div>
          
          <a 
            href="https://www.fab.com/sellers/Jasb-DV"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors font-semibold"
          >
            Ver todo en Fab
          </a>
        </div>

        {/* Filter Tags (Static Placeholder) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['Todos', 'Blueprints', 'Assets 3D', 'Texturas', 'UI/UX'].map((tag, index) => (
            <button 
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0 ? 'bg-white text-primary' : 'bg-surface text-text-muted hover:bg-white/10 hover:text-white'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalogProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <a 
            href="https://www.fab.com/sellers/Jasb-DV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors font-semibold"
          >
            Ver todo en Fab
          </a>
        </div>

      </div>
    </section>
  );
}
