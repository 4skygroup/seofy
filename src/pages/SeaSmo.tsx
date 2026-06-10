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
                desc="Advertising performance isn't just about running ads; it's about a well-defined strategy designed to attract the right audiences and maximize every conversion."
                img="/seasmo/sea1.png"
            />

            <Section
                title="Strategic SEA to Drive Your Growth"
                subtitle="Stop focusing on visits—focus on revenue"
                description="Traditional SEA can get expensive. Our approach combines paid acquisition with ongoing optimization:"
                hashtags={[
                    "Precise targeting: delivering ads to the most qualified audiences",
                    "Data-Driven: performance analysis, campaign optimization, and continuous adjustments based on data",
                ]}
                ctaLabel="Get started with your strategy"
                imageSrc="/seasmo/sea2.png"
                imageAlt="SEO growth chart"
            />

            <Section
                title="A thorough understanding of algorithms"
                subtitle="Advertising platforms are constantly evolving—and so are we"
                description="Our campaigns are fully optimized and validated:"
                hashtags={[
                    "Campaign audit (targeting, budget, ads, audiences)",
                    "Optimization of KPIs (CTR, CPC, conversions, ROI)",
                ]}
                ctaLabel="Master your algorithms"
                imageSrc="/seogeo/seo2.png"
                imageAlt="An SEA strategy"
                imagePosition="left"
            />

            <SectionMots
                description="Strategic SEA is a specific approach to maximizing"
                keywords={[
                    { label: "TARGETED CAMPAIGNS",      rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: "TARGET AUDIENCES",   rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: "PURCHASE INTENTION",      rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: "IMMEDIATE VISIBILITY",   rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: "CONVERSIONS",            rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#164D55"
            />

            <Section
                title="An SEA strategy tailored to your company’s unique identity"
                subtitle="Stop focusing on visits—focus on revenue"
                description="Traditional SEA has its limitations without optimization. Our approach combines rapid acquisition with sustainable performance:"
                hashtags={[
                    "Market Analysis and Search Intent",
                    "Optimizing Budgets and Advertising Campaigns",
                    "Taking business objectives and return on investment into account",
                ]}
                ctaLabel="Get started with your strategy"
                imageSrc="/seasmo/sea4.png"
                imageAlt="An SEA strategy"
            />

        </div>
    );
}

export default SeaSmo;