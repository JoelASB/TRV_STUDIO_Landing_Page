# 🚀 Guía de Setup — TRV Studio Landing Page
> Stack: **Vite + React + Tailwind CSS** · Deploy en **Vercel**

---

## ✅ Requisitos previos

Verifica que tienes instalado:

```bash
node -v        # Necesitas v18 o superior
npm -v         # Viene con Node
git --version  # Para control de versiones
```

Si no tienes Node, descárgalo desde: https://nodejs.org

---

## 📁 PASO 1 — Crear el proyecto con Vite

Abre la terminal **dentro de la carpeta raíz** del proyecto y ejecuta:

```bash
npm create vite@latest . -- --template react
```

> ⚠️ El `.` crea el proyecto en la carpeta actual (sin subcarpeta nueva).
> Si te pregunta si quiere continuar en una carpeta no vacía, elige **"Ignore files and continue"**.

Opciones que seleccionas si aparece el asistente interactivo:
- Framework: **React**
- Variant: **JavaScript** (o TypeScript si lo prefieres)

---

## 📦 PASO 2 — Instalar dependencias base

```bash
npm install
```

---

## 🎨 PASO 3 — Instalar y configurar Tailwind CSS

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Luego edita el archivo **`vite.config.js`** para agregar el plugin:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Luego en **`src/index.css`**, reemplaza todo el contenido con:

```css
@import "tailwindcss";
```

---

## 🧹 PASO 4 — Limpiar archivos innecesarios

Borra o vacía estos archivos que Vite genera por defecto y que no usarás:

```
src/App.css          ← borrar o vaciar
src/assets/react.svg ← borrar
public/vite.svg      ← borrar
```

Deja `src/App.jsx` solo con el esqueleto básico:

```jsx
function App() {
  return (
    <div>
      <h1>TRV Studio</h1>
    </div>
  )
}

export default App
```

---

## 📂 PASO 5 — Crear la estructura de carpetas

```bash
mkdir src\components
mkdir src\data
```

O créalas manualmente en el explorador. La estructura final:

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturedOffers.jsx
│   ├── OfferCard.jsx
│   ├── CatalogSection.jsx
│   ├── CatalogCard.jsx
│   └── Footer.jsx
├── data/
│   └── products.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## ▶️ PASO 6 — Correr el servidor de desarrollo

```bash
npm run dev
```

Abre en el navegador: **http://localhost:5173**

> Cada vez que guardes un archivo, la página se actualiza automáticamente (HMR).

---

## 🌐 PASO 7 — Conectar con Google Fonts

En el archivo **`index.html`** (en la raíz), agrega dentro del `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 🔧 PASO 8 — Configurar fuentes en Tailwind (opcional pero recomendado)

En `src/index.css`, después de `@import "tailwindcss";` agrega:

```css
@theme {
  --font-orbitron: 'Orbitron', sans-serif;
  --font-inter: 'Inter', sans-serif;
}
```

Así puedes usar `font-orbitron` y `font-inter` como clases de Tailwind.

---

## 🏗️ PASO 9 — Build de producción (solo cuando vayas a hacer deploy)

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos estáticos optimizados.

Para previsualizar el build localmente antes de subir:

```bash
npm run preview
```

---

## 🚀 PASO 10 — Deploy en Vercel

### Opción A — Desde la CLI de Vercel

```bash
npm install -g vercel   # Solo la primera vez
vercel                  # Sigue las instrucciones del asistente
```

### Opción B — Desde GitHub (recomendado)

1. Sube el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TRV Studio Landing Page"
   git remote add origin https://github.com/TU_USUARIO/trv-studio.git
   git push -u origin main
   ```
2. Ve a **https://vercel.com** → "Add New Project"
3. Importa el repositorio de GitHub
4. Vercel detecta Vite automáticamente → Click en **Deploy**
5. ¡Listo! Tu URL será algo como `trv-studio.vercel.app`

> 💡 Cada `git push` al branch `main` hará un deploy automático.

---

## 📋 Comandos de referencia rápida

| Comando | Para qué sirve |
|---|---|
| `npm create vite@latest . -- --template react` | Crear proyecto Vite + React |
| `npm install` | Instalar dependencias |
| `npm install -D tailwindcss @tailwindcss/vite` | Instalar Tailwind CSS |
| `npm run dev` | Servidor de desarrollo (localhost:5173) |
| `npm run build` | Build de producción → carpeta `dist/` |
| `npm run preview` | Preview del build en local |
| `npm install [paquete]` | Instalar cualquier dependencia |
| `npm install -D [paquete]` | Instalar dependencia de desarrollo |
| `vercel` | Deploy a Vercel desde CLI |
| `git add . && git commit -m "msg" && git push` | Subir cambios a GitHub |

---

## ⚡ Dependencias opcionales útiles

```bash
# Íconos (muy recomendado)
npm install lucide-react

# Animaciones
npm install framer-motion

# Si necesitas react-router para múltiples páginas
npm install react-router-dom
```

---

*Documento creado para el proyecto **TRV Studio Landing Page** · 2025*
