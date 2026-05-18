# 🎮 TRV Studio — Landing Page | Plan de Implementación

## Descripción General

Crear una Landing Page tipo portafolio estática para **TRV Studio**, la marca de assets de videojuegos de Jasb-DV en Fab.com. El objetivo es presentar los productos de forma visualmente impactante, atraer compradores y redirigirlos directamente a las fichas de Fab, sin ningún backend ni lógica de servidor.

---

## Stack Tecnológico

| Herramienta       | Rol                                     |
|-------------------|-----------------------------------------|
| **Vite + React**  | Framework de componentes (JSX)          |
| **Tailwind CSS**  | Estilos utilitarios, dark mode nativo   |
| **Vercel**        | Deploy estático sin configuración extra |
| **No backend**    | Cero APIs, cero bases de datos          |

> [!IMPORTANT]
> Se usará **Vite** como bundler (no Create React App, que está obsoleto). El output es 100% estático y compatible con Vercel de forma nativa.

---

## Decisiones de Diseño

### Paleta de Colores (Dark Mode Exclusivo)

| Token            | Color        | Uso                                  |
|------------------|--------------|--------------------------------------|
| `bg-primary`     | `#0A0A0F`    | Fondo principal (negro azulado)      |
| `bg-card`        | `#12121A`    | Fondo de tarjetas                    |
| `bg-surface`     | `#1A1A28`    | Superficies elevadas / nav           |
| `accent-purple`  | `#7C3AED`    | Acento principal (violeta vibrante)  |
| `accent-cyan`    | `#06B6D4`    | Acento secundario (cyan neón)        |
| `accent-gold`    | `#F59E0B`    | Precios, descuentos, badges          |
| `text-primary`   | `#F1F5F9`    | Texto principal                      |
| `text-muted`     | `#94A3B8`    | Texto secundario                     |

### Tipografía
- **Headings**: `Orbitron` (Google Fonts) — futurista, ideal para gaming
- **Body**: `Inter` — limpia y legible

### Efectos Visuales
- Glassmorphism en tarjetas (backdrop-blur + border semitransparente)
- Gradientes animados en el Hero
- Hover effects con glow en las tarjetas de oferta
- Partículas o grid animado como background del Hero
- Badge de descuento con animación de pulso

---

## Estructura de Carpetas

```
TRV_STUDIO_Landing_Page/
├── public/
│   ├── favicon.ico
│   └── og-image.png            ← imagen para compartir en redes
├── src/
│   ├── assets/
│   │   └── (imágenes locales si las hay)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedOffers.jsx
│   │   ├── OfferCard.jsx
│   │   ├── CatalogSection.jsx
│   │   ├── CatalogCard.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js          ← datos de productos (links, títulos, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Secciones de la Página

### 1. `Navbar.jsx`
- Logo "TRV Studio" con ícono gaming (SVG o emoji)
- Links: Inicio · Ofertas · Portafolio · Contacto
- Sticky con backdrop-blur al hacer scroll
- Botón CTA "Ver Tienda" que linkea al perfil de Fab

### 2. `HeroSection.jsx` ⚡ (Urgente — Rebajas de Junio)
- Fondo: gradiente animado oscuro con patrón de grid
- Badge animado: "🔥 REBAJAS DE JUNIO — HASTA 70% OFF"
- Título grande: "Eleva tus proyectos con assets premium"
- Subtítulo: breve descripción de TRV Studio
- Dos botones CTA:
  - "Ver Ofertas" → scroll a #ofertas
  - "Explorar Tienda" → link a perfil Fab
- Contador o indicador de urgencia (opcional decorativo)

### 3. `FeaturedOffers.jsx` + `OfferCard.jsx` ⭐ (Destacados)
Tres cards grandes con:
- Espacio para **video/GIF** (tag `<video>` o `<img>` con aspect-ratio)
- Badge de descuento (70%, 50%, 30%) con pulso animado
- Nombre del producto
- Botón "COMPRAR EN FAB" → `<a href="...">` con link directo

**Productos:**

| Producto | Descuento | Link |
|---|---|---|
| Ultimate 3D Platformer & Menu System Template | **70% OFF** | [fab.com/listings/2fbff310...](https://www.fab.com/listings/2fbff310-ad58-4962-81ca-c940214f6f24) |
| Irregular Stone Mat Pack | **50% OFF** | [fab.com/listings/194db607...](https://www.fab.com/listings/194db607-0256-4db2-9b12-44460367d846) |
| Ice and Lava | **30% OFF** | [fab.com/listings/5fc9dbb4...](https://www.fab.com/listings/5fc9dbb4-0c3c-4115-8fa5-8d074725f3b6) |

### 4. `CatalogSection.jsx` + `CatalogCard.jsx` 📦 (Catálogo/Portafolio)
- Grid responsive (1 col mobile → 2 col tablet → 3-4 col desktop)
- Card con imagen placeholder (gradient) + nombre + categoría + botón "Ver en Fab"
- Incluye Terrain Nature Mat Pack + espacio para más productos

### 5. `Footer.jsx`
- Logo pequeño TRV Studio
- Links de navegación
- Íconos sociales: Twitter/X, ArtStation, YouTube, Discord (íconos SVG inline)
- Link directo al perfil: `https://www.fab.com/sellers/Jasb-DV`
- Copyright © 2025 TRV Studio

---

## Archivo de Datos `products.js`

Centralizar toda la información de productos en un archivo separado para facilitar actualizaciones futuras sin tocar los componentes.

```js
export const featuredOffers = [
  {
    id: 1,
    title: "Ultimate 3D Platformer & Menu System Template",
    category: "Blueprint / Template",
    discount: 70,
    fabUrl: "https://www.fab.com/listings/2fbff310-ad58-4962-81ca-c940214f6f24",
    mediaType: "image", // cambiar a "video" cuando tengas el archivo
    mediaSrc: null,     // ruta al video/gif cuando lo tengas
    description: "Sistema completo de plataformas 3D con menús profesionales."
  },
  // ...
]
```

---

## Plan de Deploy en Vercel

1. Subir proyecto a un repositorio de **GitHub**
2. Conectar el repo en [vercel.com](https://vercel.com)
3. Configuración automática detectará Vite
4. **Sin variables de entorno necesarias** (proyecto 100% estático)
5. Deploy en URL tipo `trv-studio.vercel.app`

> [!TIP]
> Para un dominio personalizado como `trvstudio.com`, solo hay que añadirlo en el panel de Vercel después del deploy.

---

## Preguntas Abiertas

> [!IMPORTANT]
> Las siguientes decisiones pueden afectar el diseño. Si tienes preferencia, indícamela antes de que empiece a codificar:

1. **Videos/GIFs de productos**: ¿Tienes archivos de video o GIFs de tus productos para las tarjetas de Ofertas Destacadas? Si no, ¿usamos imágenes placeholder con gradientes generados, o prefieres capturas de pantalla?

2. **Logo**: ¿Tienes un logo para TRV Studio? Si no, ¿diseño uno tipográfico con CSS puro?

3. **Redes Sociales**: ¿Qué redes sociales quieres en el Footer? (Twitter/X, ArtStation, YouTube, Discord, etc.)

4. **Más productos en el catálogo**: ¿Cuántos productos adicionales quieres en la sección de Catálogo aparte del Terrain Nature Mat Pack?

5. **Nombre de dominio**: ¿Ya tienes un dominio para TRV Studio o usaremos el subdominio de Vercel?

---

## Orden de Ejecución

- [ ] 1. Inicializar proyecto con Vite + React + Tailwind CSS
- [ ] 2. Configurar `tailwind.config.js` con paleta custom y fuentes
- [ ] 3. Crear `index.css` con estilos base y animaciones custom
- [ ] 4. Crear `products.js` con datos de todos los productos
- [ ] 5. Construir componente `Navbar.jsx`
- [ ] 6. Construir componente `HeroSection.jsx` con animaciones
- [ ] 7. Construir `OfferCard.jsx` + `FeaturedOffers.jsx`
- [ ] 8. Construir `CatalogCard.jsx` + `CatalogSection.jsx`
- [ ] 9. Construir `Footer.jsx`
- [ ] 10. Ensamblar todo en `App.jsx`
- [ ] 11. Verificar en navegador + responsividad
- [ ] 12. Preparar para deploy en Vercel
