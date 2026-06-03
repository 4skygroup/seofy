import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import About from "./components/About.tsx";
import SeoGeo from "./pages/SeoGeo.tsx";
// import Contact from "./components/form/Contact.tsx";

function App() {
    return (
        <div className="overflow-x-hidden">
            <ScrollToTop />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/*<Route path="/offres" element={<Offres/> } />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}

                <Route path="/services/seo-geo" element={<SeoGeo />} />
                {/*<Route path="/service/sea-smo" element={} />*/}
            </Routes>
            <Footer/>
        </div>
    )
}

export default App