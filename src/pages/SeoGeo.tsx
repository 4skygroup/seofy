import HeroComp from "../components/HeroComp.tsx";
import Croissance from "../components/Croissance.tsx";


function SeoGeo() {
    return (
        <div className="bg-seofy-darkgreen">
            <HeroComp
                titre="SEO & GEO"
                desc="La visibilité ne repose pas sur une suite d’actions isolées, mais sur une logique claire, construite dans le bon ordre et exécutée avec précision."
                autresdesc="Oubliez tout ce que vous savez sur le SEO"
                img="/seoGeo.png"
            />

            <Croissance
                title="Le SEO sémantique au service de votre croissance"
                subtitle="Ne visez plus les visites, visez le chiffre d'affaire"
                description="Le SEO traditionnel est lent.. Notre approche est une combinaison entre le référencement et le Growth Hacking :"
                hashtags={[
                    "Agilité Et Itération: Identification Des Quick Wins...",
                    "Data-Driven: Tests, Mesures, Ajustement En Temps Réel...",
                ]}
                ctaLabel="Démarrez votre strategie"
                imageSrc="/seo1.png"
                imageAlt="SEO growth chart"
            />

        </div>
    );
}

export default SeoGeo;