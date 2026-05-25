import { useState } from 'react';
// Importamos todo el catálogo de productos desde el archivo de datos local.
import { catalogProducts } from '../data/products';
// Importamos la tarjeta estándar que se usará para mostrar los ítems del catálogo.
import ProductCard from '../components/ProductCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Blueprints', 'Assets 3D', 'Materials', 'UI/UX', 'HDRI'];

  const filteredProducts = activeFilter === 'Todos'
    ? catalogProducts
    : catalogProducts.filter(product => product.category === activeFilter);

  return (
    // Se usa 'min-h-[calc(100vh-5rem)]' para ocupar toda la altura visual evitando que el pie de página suba.
    <div className="min-h-[calc(100vh-5rem)] bg-primary relative overflow-hidden">
      {/* Decoración de fondo: un gradiente lateral y un círculo con desenfoque extremo para dar un efecto de brillo. */}
      <div className="absolute top-1/4 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-1/12 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-accent-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

      {/* Contenedor relativo (z-10) que se asegura de que el texto e imágenes queden encima del brillo de fondo. */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Cabecera principal de la página */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Portafolio de Proyectos
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Explora nuestra colección completa de assets, blueprints, materiales y plantillas diseñadas para facilitar tu desarrollo. Calidad profesional garantizada.
          </p>
        </div>

        {/* Pestañas de filtrado dinámicas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === tag ? 'bg-text-primary text-primary' : 'bg-surface text-text-muted hover:bg-text-primary/10 hover:text-text-primary border border-text-muted/20'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cuadrícula (Grid) responsiva para mostrar el catálogo: 1, 2, 3 o 4 columnas dependiendo del tamaño de pantalla. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Iteramos 'filteredProducts' para mostrar solo los productos que coinciden con el filtro. */}
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón final (Llamado a la acción) que redirige hacia la tienda externa (Fab). */}
        <a
          href="https://www.fab.com/sellers/Jasb-DV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan hover:text-primary transition-all font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
        >
          Ver todo en la Tienda Oficial
        </a>
      </div>
    </div>
  );
}
