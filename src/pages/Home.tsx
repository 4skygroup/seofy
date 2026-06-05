import Hero from "../components/Hero.tsx";
import ServiceList from "../components/services/ServiceList.tsx";
import About from "../components/About.tsx";
import Faq from "../components/faq/Faq.tsx";

function Home() {
    return (
        <div className="">
            <Hero />
            <About />
            <ServiceList />
            <Faq />
        </div>
    );
}

export default Home;