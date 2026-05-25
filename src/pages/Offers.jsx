// Importamos la lista de ofertas destacadas desde nuestro archivo de datos.
import { featuredOffers } from '../data/products';
// Importamos el componente de tarjeta de oferta para renderizar cada producto individualmente.
import OfferCard from '../components/OfferCard';

export default function Offers() {
  return (
    // Contenedor principal. 'min-h-[calc(100vh-5rem)]' asegura que la página abarque al menos la altura 
    // de la pantalla restando el espacio de la barra de navegación (5rem).
    <div className="min-h-[calc(100vh-5rem)] bg-primary relative overflow-hidden">
      {/* Elementos decorativos: Capas de fondo con efectos de desenfoque (blur) y pulsación (animate-pulse) */}
      <div className="absolute top-1/12 left-1/2 -translate-x-1/2 w-180 h-40 bg-accent-purple/50 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-purple/5 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Encabezado de la sección con un gradiente de texto */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan mb-6 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            Todas Nuestras Ofertas
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Descubre los mejores assets y recursos 3D a precios inigualables. Aprovecha estos descuentos por tiempo limitado.
          </p>
        </div>

        {/* Cuadrícula responsiva para las tarjetas. 
            Muestra 1 columna en celulares, 2 en tablets (md:) y 3 en pantallas grandes (lg:). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Iteramos sobre el arreglo 'featuredOffers' usando .map() para generar dinámicamente un componente 'OfferCard' por producto. */}
          {featuredOffers.map(product => (
            // La propiedad 'key' es necesaria en React cuando generamos elementos en una lista para mantener el rendimiento.
            <OfferCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}
