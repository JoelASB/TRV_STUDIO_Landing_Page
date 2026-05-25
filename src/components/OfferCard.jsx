import { ExternalLink } from 'lucide-react';

export default function OfferCard({ product }) {
  // Determine badge color based on discount
  const badgeColor =
    product.discount >= 70 ? 'bg-red-500/20 text-red-400 border-red-500/50' :
      product.discount >= 50 ? 'bg-accent-gold/20 text-accent-gold border-accent-gold/50' :
        'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/50';

  return (
    <div className="group relative bg-card border border-text-muted/10 rounded-2xl overflow-hidden hover:border-accent-cyan/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] flex flex-col h-full">

      {/* Media Container (16:9) */}
      <div className="relative aspect-video w-full bg-surface overflow-hidden">
        {product.mediaSrc ? (
          <img src={product.mediaSrc} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <>
            {/* Placeholder Gradient since we don't have mediaSrc yet */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-primary" />
            
            {/* Animated abstract placeholder lines to make it look premium */}
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(128,128,128,0.2) 50%, transparent 52%)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-text-muted/40 font-orbitron tracking-widest text-sm uppercase">Falta Imagen / Video</span>
              <span className="text-text-muted/20 text-xs mt-1">Placeholder</span>
            </div>
          </>
        )}

        {/* Discount Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border ${badgeColor} font-bold text-xs animate-pulse backdrop-blur-md`}>
          {product.discount}% OFF
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-accent-purple text-xs font-bold uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="font-orbitron text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-accent-cyan transition-colors">
          {product.title}
        </h3>
        <p className="text-text-muted text-sm flex-grow mb-6">
          {product.description}
        </p>

        {/* Action Button */}
        <a
          href={product.fabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-surface border border-text-muted/20 text-text-primary font-semibold hover:bg-accent-cyan hover:border-accent-cyan hover:text-white transition-all duration-300"
        >
          COMPRAR EN FAB
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
