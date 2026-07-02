import { useTranslation } from "react-i18next";
import HeroComp from "../components/HeroComp.tsx";
import Section from "../components/Section.tsx";
import SectionMots from "../components/SectionMots.tsx";
import { useMetaTags } from "../hooks/useMetaTags.ts";

function SeaSmo() {
    const { t } = useTranslation();
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
            "@context": "https://schema.org/",
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
                titre={t("seaSmo.hero.titre")}
                desc={t("seaSmo.hero.desc")}
                img="/seasmo/sea1.webp"
            />

            <Section
                title={t("seaSmo.section1.title")}
                subtitle={t("seaSmo.section1.subtitle")}
                description={t("seaSmo.section1.description")}
                hashtags={[
                    t("seaSmo.section1.hashtag1"),
                    t("seaSmo.section1.hashtag2"),
                ]}
                ctaLabel={t("seaSmo.section1.cta")}
                imageSrc="/seasmo/sea2.webp"
                imageAlt={t("seaSmo.section1.imageAlt")}
            />

            <Section
                title={t("seaSmo.section2.title")}
                subtitle={t("seaSmo.section2.subtitle")}
                description={t("seaSmo.section2.description")}
                hashtags={[
                    t("seaSmo.section2.hashtag1"),
                    t("seaSmo.section2.hashtag2"),
                ]}
                ctaLabel={t("seaSmo.section2.cta")}
                imageSrc="/seasmo/sea3.webp"
                imageAlt={t("seaSmo.section2.imageAlt")}
                imagePosition="left"
            />

            <SectionMots
                description={t("seaSmo.sectionMots.description")}
                keywords={[
                    { label: t("seaSmo.sectionMots.kw1"), rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: t("seaSmo.sectionMots.kw2"), rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: t("seaSmo.sectionMots.kw3"), rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: t("seaSmo.sectionMots.kw4"), rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: t("seaSmo.sectionMots.kw5"), rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#164D55"
            />

            <Section
                title={t("seaSmo.section3.title")}
                subtitle={t("seaSmo.section3.subtitle")}
                description={t("seaSmo.section3.description")}
                hashtags={[
                    t("seaSmo.section3.hashtag1"),
                    t("seaSmo.section3.hashtag2"),
                    t("seaSmo.section3.hashtag3"),
                ]}
                ctaLabel={t("seaSmo.section3.cta")}
                imageSrc="/seasmo/sea4.webp"
                imageAlt={t("seaSmo.section2.imageAlt")}
            />

        </div>
    );
}

export default SeaSmo;