import Hero from "../components/Hero.tsx";
import ServiceList from "../components/services/ServiceList.tsx";
import About from "../components/About.tsx";

function Home() {
    return (
        <div className="">
            <Hero />
            <About />
            <ServiceList />
        </div>
    );
}

export default Home;