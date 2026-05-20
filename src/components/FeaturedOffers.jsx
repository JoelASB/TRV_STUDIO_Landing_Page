import { featuredOffers } from '../data/products';
import OfferCard from './OfferCard';

export default function FeaturedOffers() {
  return (
    <section id="ofertas" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-purple/5 to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
            OFERTAS <span className="text-accent-gold">DESTACADAS</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Aprovecha estos descuentos por tiempo limitado y lleva tus proyectos al siguiente nivel.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredOffers.map(product => (
            <OfferCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
