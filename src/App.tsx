import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import SeoGeo from "./pages/SeoGeo.tsx";
import Offres from "./pages/Offres.tsx";
import SeaSmo from "./pages/SeaSmo.tsx";
import Contact from "./components/form/Contact.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import Locations from "./pages/Locations.tsx";

function App() {
  return (
    <div className="overflow-x-hidden font-glacial">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/location" element={<Locations />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/services/seo-geo" element={<SeoGeo />} />
        <Route path="/services/sea-smo" element={<SeaSmo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
