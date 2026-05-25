import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-surface border border-text-muted/10 rounded-2xl overflow-hidden hover:border-accent-purple/50 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">
      {/* Media Container (16:9) */}
      <div className="relative aspect-video w-full bg-primary overflow-hidden">
        {product.mediaSrc ? (
          <img src={product.mediaSrc} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface to-primary">
            <span className="text-text-muted/30 font-orbitron text-[10px] tracking-widest uppercase">Placeholder</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-accent-cyan text-[10px] font-bold uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="font-orbitron text-base font-bold text-text-primary mb-2 leading-tight group-hover:text-accent-purple transition-colors">
          {product.title}
        </h3>
        <p className="text-text-muted text-xs flex-grow mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Action Link */}
        <a 
          href={product.fabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-accent-cyan text-sm font-semibold hover:text-text-primary transition-colors"
        >
          Ver detalles
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
