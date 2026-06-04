import HeroComp from "../components/HeroComp.tsx";
import Section from "../components/Section.tsx";
import SectionMots from "../components/SectionMots.tsx";


function SeoGeo() {
    return (
        <div className="bg-seofy-darkgreen">
            <HeroComp
                titre="SEO & GEO"
                desc="La visibilité ne repose pas sur une suite d’actions isolées, mais sur une logique claire, construite dans le bon ordre et exécutée avec précision."
                autresdesc="Oubliez tout ce que vous savez sur le SEO"
                img="/seogeo/seoGeo.png"
            />

            <Section
                title="Le SEO sémantique au service de votre croissance"
                subtitle="Ne visez plus les visites, visez le chiffre d'affaire"
                description="Le SEO traditionnel est lent.. Notre approche est une combinaison entre le référencement et le Growth Hacking :"
                hashtags={[
                    "Agilité et itération: identification des quick wins pour apporter les résultats rapides",
                    "Data-Driven: tests, mesures, ajustement en temps réel, chaque décision est appuyée par la donnée",
                ]}
                ctaLabel="Démarrez votre strategie"
                imageSrc="/seogeo/seo1.png"
                imageAlt="SEO growth chart"
            />

            <Section
                title="Une maîtrise absolue des algorithmes"
                subtitle="Google évolue constamment, nous aussi"
                description="Nos méthodes sont testées et validées à 100%"
                hashtags={[
                    "Audits techniques (crawlabilité, performance, architecture)",
                    "Optimisation de l’E-E-A-T (Experience, Expertise Autorité Fiabilité)",
                ]}
                ctaLabel="Maîtrisez vos algorithmes"
                imageSrc="/seogeo/seo2.png"
                imageAlt="Une stratégie SEA"
                imagePosition="left"
            />

            <SectionMots
                description="Le SEO sémantique est une approche spécifique pour optimiser"
                keywords={[
                    { label: "MOTS-CLÉS",              rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: "CHAMPS-LEXICAL",         rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: "RELATION ENTRE CONCEPT", rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: "CONTEXTE GLOBALE",       rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: "INTENTION DE RECHERCHE", rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#E5E5E5"
            />

            <Section
                title="Une stratégie calquée sur votre ADN"
                subtitle="Ne visez plus les visites, visez le chiffre d’affaires"
                description="Le SEO traditionnel est lent.. Notre approche est une combinaison entre le référencement et le Growth Hacking :"
                hashtags={[
                    "Analyse de marché",
                    "Décortication des faiblesses de vos concurrents",
                    "Prise en compte des ressources internes",
                ]}
                ctaLabel="Démarrez votre strategie"
                imageSrc="/seogeo/seo3.png"
                imageAlt="Une stratégie SEA"
            />

        </div>
    );
}

export default SeoGeo;