// import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
// import Home from "./pages/Home.tsx";
// import Navbar from "./components/Navbar.tsx";
// import Footer from "./components/footer/Footer.tsx";
// import About from "./pages/About.tsx";
// import Contact from "./components/form/Contact.tsx";
// import Projets from "./pages/Projets.tsx";

function App() {
    return (
        <div className="overflow-x-hidden">
            <ScrollToTop />
            {/*<Navbar/>*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Home />} />*/}
            {/*    <Route path="/about" element={<About/> } />*/}
            {/*    <Route path="/projets" element={<Projets/>} />*/}
            {/*    <Route path="/contact" element={<Contact />} />*/}

            {/*</Routes>*/}
            {/*<Footer/>*/}
        </div>
    )
}

export default App