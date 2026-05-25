// Componentes principales de enrutamiento de react-router-dom.
import { Routes, Route } from "react-router-dom";
// Importamos nuestros componentes globales que se ven en todas las páginas.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Importamos cada una de las "páginas" de nuestra aplicación.
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// Importamos el proveedor del tema para manejar el modo claro/oscuro de forma global.
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    // ThemeProvider provee el estado del tema (oscuro o claro) a todos sus componentes hijos.
    <ThemeProvider>
      {/* Contenedor principal. 'min-h-screen' hace que ocupe todo el alto de la pantalla,
          y 'pt-20' le da un margen superior para que la barra de navegación no tape el contenido. */}
      <div className="min-h-screen pt-20">
        
        {/* La barra de navegación se muestra siempre en todas las rutas */}
        <Navbar />
        
        {/* 'Routes' es el contenedor de nuestras diferentes páginas. Solo mostrará la ruta que coincida con la URL actual. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        
        {/* El pie de página se muestra siempre al final, en todas las rutas */}
        <Footer />
        
      </div>
    </ThemeProvider>
  )
}

export default App