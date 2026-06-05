import HeroComp from "../components/HeroComp.tsx";
import Section from "../components/Section.tsx";
import SectionMots from "../components/SectionMots.tsx";
import { useMetaTags } from "../hooks/useMetaTags.ts";


function SeaSmo() {
    useMetaTags({
        title: "SEA & SMO - Acquisition payante et Social Media | Seofy",
        description: "Services de SEA (Search Engine Advertising) et SMO (Social Media Optimization). Campagnes publicitaires ciblées pour maximiser vos conversions.",
        canonical: "https://seofyagency.com/services/sea-smo",
        ogTitle: "SEA & SMO - Acquisition payante et Social Media",
        ogDescription: "Maximisez vos conversions avec nos services SEA et SMO. Campagnes publicitaires stratégiques et optimisées.",
        ogImage: "https://seofyagency.com/seasmo/og-image.jpg",
        twitterTitle: "SEA & SMO - Acquisition payante et Social Media",
        twitterDescription: "Stratégie SEA et SMO pour votre croissance",
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
                    name: "Services",
                    item: "https://seofyagency.com/offres",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "SEA & SMO",
                    item: "https://seofyagency.com/services/sea-smo",
                },
            ],
        },
    });

    return (
        <div className="bg-seofy-green">
            <HeroComp
                titre="SEA & SMO"
                desc="La performance publicitaire ne repose pas sur une simple diffusion d’annonces, mais sur une stratégie précise, pensée pour attirer les bonnes audiences et maximiser chaque conversion."
                img="/seasmo/sea1.png"
            />

            <Section
                title="Le SEA stratégique au service de votre croissance"
                subtitle="Ne visez plus les visites, visez le chiffre d’affaire"
                description="Le SEA traditionnel peut devenir coûteux. Notre approche combine acquisition payante et optimisation continue :"
                hashtags={[
                    "Ciblage précis : diffusion des annonces auprès des audiences les plus qualifiées",
                    "Data Driven : analyse des performances, optimisation des campagnes et ajustements continus basés sur la donnée",
                ]}
                ctaLabel="Démarrez votre strategie"
                imageSrc="/seasmo/sea2.png"
                imageAlt="SEO growth chart"
            />

            <Section
                title="Une maîtrise absolue des algorithmes"
                subtitle="Les plateformes publicitaires évoluent constamment, nous aussi"
                description="Nos campagnes sont optimisées et validées à 100% :"
                hashtags={[
                    "Audit des campagnes (ciblage, budget, annonces, audiences)",
                    "Optimisation des KPI (CTR, CPC, conversions, retour sur investissement)",
                ]}
                ctaLabel="Maîtrisez vos algorithmes"
                imageSrc="/seogeo/seo2.png"
                imageAlt="Une stratégie SEA"
                imagePosition="left"
            />

            <SectionMots
                description="Le SEA stratégique est une approche spécifique pour maximiser"
                keywords={[
                    { label: "CAMPAGNES CIBLÉES",      rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: "AUDIENCES QUALIFIÉES",   rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: "INTENTION D’ACHAT",      rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: "VISIBILITÉ IMMÉDIATE",   rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: "CONVERSIONS",            rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#164D55"
            />

            <Section
                title="Une stratégie SEA calquée sur votre ADN"
                subtitle="Ne visez plus les visites, visez le chiffre d’affaires"
                description="Le SEA traditionnel est limité sans optimisation. Notre approche est une combinaison entre acquisition rapide et performance durable :"
                hashtags={[
                    "Analyse du marché et des intentions de recherche",
                    "Optimisation des budgets et des campagnes publicitaires",
                    "Prise en compte des objectifs business et du retour sur investissement",
                ]}
                ctaLabel="Démarrez votre strategie"
                imageSrc="/seasmo/sea4.png"
                imageAlt="Une stratégie SEA"
            />

        </div>
    );
}

export default SeaSmo;