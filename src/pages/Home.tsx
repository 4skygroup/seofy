import Hero from "../components/Hero.tsx";
import ServiceList from "../components/services/ServiceList.tsx";
import About from "../components/About.tsx";
import Faq from "../components/faq/Faq.tsx";
import { useMetaTags } from "../hooks/useMetaTags.ts";

function Home() {
    useMetaTags({
        title: "Seofy - Agence SEO & Digital Marketing | Augmentez votre visibilité",
        description: "Agence spécialisée en SEO, SEA et Social Media Marketing. Augmentez votre visibilité en ligne avec nos services de référencement et marketing digital.",
        canonical: "https://seofyagency.com/",
        ogTitle: "Seofy - Agence SEO & Digital Marketing",
        ogDescription: "Augmentez votre visibilité en ligne avec nos services SEO, SEA et Social Media Marketing.",
        ogImage: "https://seofyagency.com/og-image.jpg",
        ogType: "website",
        twitterTitle: "Seofy - Agence SEO & Digital Marketing",
        twitterDescription: "Augmentez votre visibilité en ligne avec nos services SEO, SEA et Social Media Marketing.",
        twitterImage: "https://seofyagency.com/og-image.jpg",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://seofyagency.com/",
                },
            ],
        },
    });

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