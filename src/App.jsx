import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedOffers from "./components/FeaturedOffers";
import CatalogSection from "./components/CatalogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <HeroSection />
      <FeaturedOffers />
      <CatalogSection />
      <Footer />
    </div>
  )
}

export default App