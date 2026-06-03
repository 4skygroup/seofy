import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
// import Contact from "./components/form/Contact.tsx";

function App() {
    return (
        <div className="overflow-x-hidden">
            <ScrollToTop />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/offres" element={<Offres/> } />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}

                {/*<Route path="/service/seo-geo" element={} />*/}
                {/*<Route path="/service/sea-smo" element={} />*/}
            </Routes>
            <Footer/>
        </div>
    )
}

export default App