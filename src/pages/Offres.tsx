import ServiceList from "../components/services/ServiceList.tsx";
import { useMetaTags } from "../hooks/useMetaTags.ts";

function Offres() {
    useMetaTags({
        title: "Nos Offres & Services - SEO, SEA, SMO | Seofy",
        description: "Découvrez nos offres et services: SEO & Géolocalisation, SEA et Social Media Optimization. Solutions adaptées à votre croissance.",
        canonical: "https://seofyagency.com/offres",
        ogTitle: "Nos Offres & Services",
        ogDescription: "Explorez notre gamme complète de services SEO, SEA et SMO pour booster votre visibilité.",
        ogImage: "https://seofyagency.com/og-offres.jpg",
        twitterTitle: "Nos Offres & Services - Seofy",
        twitterDescription: "Services SEO, SEA et SMO pour votre croissance digitale",
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
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Nos Offres",
                    item: "https://seofyagency.com/offres",
                },
            ],
        },
    });

    return <ServiceList />;
}

export default Offres;
