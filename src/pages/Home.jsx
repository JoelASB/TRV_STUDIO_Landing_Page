// Importamos las diferentes "secciones" que arman la página de inicio.
import HeroSection from "../components/HeroSection";
import FeaturedOffers from "../components/FeaturedOffers";
import CatalogSection from "../components/CatalogSection";
import { Analytics } from "@vercel/analytics/react";
//import { Analytics } from "@vercel/analytics/next";

// Este componente agrupa varias secciones en una sola página (la página principal).
export default function Home() {
  return (
    // React requiere que todos los elementos retornados estén envueltos en una sola etiqueta padre.
    // Usamos "<></>" (un Fragmento de React) para agruparlos sin añadir divs HTML innecesarios al DOM.
    <>
      {/* Sección principal de introducción (Hero) */}
      <HeroSection />
      {/* Sección que muestra los productos en oferta destacada */}
      <FeaturedOffers />
      {/* Sección que muestra algunos productos del catálogo general */}
      <CatalogSection />
      <Analytics />
    </>
  );
}
