import HeroComp from "../components/HeroComp.tsx";
import Section from "../components/Section.tsx";
import SectionMots from "../components/SectionMots.tsx";
import { useMetaTags } from "../hooks/useMetaTags.ts";


function SeoGeo() {
    useMetaTags({
        title: "SEO & GEO - Optimisation de visibilité locale | Seofy",
        description: "Services de SEO Géographique pour améliorer votre visibilité locale. Stratégie sémantique et optimisation des algorithmes Google pour votre croissance.",
        canonical: "https://seofyagency.com/services/seo-geo",
        ogTitle: "SEO & GEO - Optimisation de visibilité locale",
        ogDescription: "Augmentez votre visibilité locale avec notre stratégie de SEO Géographique. Performance organique garantie.",
        ogImage: "https://seofyagency.com/seogeo/og-image.jpg",
        twitterTitle: "SEO & GEO - Optimisation de visibilité locale",
        twitterDescription: "Stratégie de SEO Géographique pour votre croissance",
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
                    name: "SEO & GEO",
                    item: "https://seofyagency.com/services/seo-geo",
                },
            ],
        },
    });

    return (
        <div className="bg-seofy-darkgreen">
            <HeroComp
                titre="SEO & GEO"
                desc="Visibility does not depend on a series of isolated actions, but on a clear strategy, developed in the right order and executed with precision."
                autresdesc="Forget everything you know about SEO"
                img="/seogeo/seoGeo.webp"
            />

            <Section
                title="Semantic SEO to Drive Your Growth"
                subtitle="Stop focusing on visits—focus on revenue"
                description="Traditional SEO is slow... Our approach combines SEO with growth hacking:"
                hashtags={[
                    "Agility and Iteration: Identifying Quick Wins to Deliver Rapid Results",
                    "Data-Driven: testing, measurement, real-time adjustments—every decision is backed by data",
                ]}
                ctaLabel="Get started with your strategy"
                imageSrc="/seogeo/seo1.webp"
                imageAlt="SEO growth chart"
            />

            <Section
                title="A thorough understanding of algorithms"
                subtitle="Google is constantly evolving, and so are we"
                description="Our methods are 100% tested and validated"
                hashtags={[
                    "Technical audits (crawlability, performance, architecture)",
                    "Optimizing E-E-A-T (Experience, Expertise, Authority, Trustworthiness)",
                ]}
                ctaLabel="Master your algorithms"
                imageSrc="/seogeo/seo2.webp"
                imageAlt="An SEA strategy"
                imagePosition="left"
            />

            <SectionMots
                description="Semantic SEO is a specific approach to optimizing"
                keywords={[
                    { label: "KEYWORDS",              rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: "LEXICAL FIELDS",         rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: "RELATIONSHIP BETWEEN CONCEPTS", rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: "OVERALL CONTEXT",       rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: "RESEARCH QUESTION", rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#E5E5E5"
            />

            <Section
                title="A strategy tailored to your unique identity"
                subtitle="Stop focusing on visits—focus on revenue"
                description="Traditional SEO is slow... Our approach combines SEO with growth hacking:"
                hashtags={[
                    "Market Analysis",
                    "Analyzing Your Competitors' Weaknesses",
                    "Consideration of internal resources",
                ]}
                ctaLabel="Get started with your strategy"
                imageSrc="/seogeo/seo3.webp"
                imageAlt="An SEA strategy"
            />

        </div>
    );
}

export default SeoGeo;