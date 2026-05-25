// StrictMode ayuda a detectar problemas potenciales en la aplicación durante el desarrollo.
import { StrictMode } from 'react'
// createRoot es el método de React 18 para inyectar y renderizar la app en el HTML.
import { createRoot } from 'react-dom/client'
// BrowserRouter envuelve la app para permitir la navegación entre diferentes URLs (rutas) sin recargar la página.
import { BrowserRouter } from 'react-router-dom'
// Importamos nuestros estilos globales (Tailwind CSS, fuentes, etc.).
import './index.css'
// Importamos el componente raíz que contiene toda nuestra aplicación.
import App from './App.jsx'

// Buscamos el div con id "root" en el index.html y construimos la app dentro de él.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Habilitamos las capacidades de react-router-dom en toda la app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
