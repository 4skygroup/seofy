import { useTranslation } from "react-i18next";
import HeroComp from "../components/HeroComp.tsx";
import Section from "../components/Section.tsx";
import SectionMots from "../components/SectionMots.tsx";

function SeoGeo() {
    const { t } = useTranslation();

    return (
        <div className="bg-seofy-darkgreen">
            <HeroComp
                titre={t("seoGeo.hero.titre")}
                desc={t("seoGeo.hero.desc")}
                autresdesc={t("seoGeo.hero.autresdesc")}
                img="/seogeo/seoGeo.webp"
            />

            <Section
                title={t("seoGeo.section1.title")}
                subtitle={t("seoGeo.section1.subtitle")}
                description={t("seoGeo.section1.description")}
                hashtags={[
                    t("seoGeo.section1.hashtag1"),
                    t("seoGeo.section1.hashtag2"),
                ]}
                ctaLabel={t("seoGeo.section1.cta")}
                imageSrc="/seogeo/seo1.webp"
                imageAlt={t("seoGeo.section1.imageAlt")}
            />

            <Section
                title={t("seoGeo.section2.title")}
                subtitle={t("seoGeo.section2.subtitle")}
                description={t("seoGeo.section2.description")}
                hashtags={[
                    t("seoGeo.section2.hashtag1"),
                    t("seoGeo.section2.hashtag2"),
                ]}
                ctaLabel={t("seoGeo.section2.cta")}
                imageSrc="/seogeo/seo2.webp"
                imageAlt={t("seoGeo.section2.imageAlt")}
                imagePosition="left"
            />

            <SectionMots
                description={t("seoGeo.sectionMots.description")}
                keywords={[
                    { label: t("seoGeo.sectionMots.kw1"), rotate: -20, offsetY: 20, offsetX: "2%" },
                    { label: t("seoGeo.sectionMots.kw2"), rotate: 0,  offsetY: 5,  offsetX: "14%" },
                    { label: t("seoGeo.sectionMots.kw3"), rotate: -15, offsetY: 28, offsetX: "30%" },
                    { label: t("seoGeo.sectionMots.kw4"), rotate: 0,   offsetY: 0, offsetX: "52%" },
                    { label: t("seoGeo.sectionMots.kw5"), rotate: 0, offsetY: 0,  offsetX: "72%" },
                ]}
                keywordColor="#E5E5E5"
            />

            <Section
                title={t("seoGeo.section3.title")}
                subtitle={t("seoGeo.section3.subtitle")}
                description={t("seoGeo.section3.description")}
                hashtags={[
                    t("seoGeo.section3.hashtag1"),
                    t("seoGeo.section3.hashtag2"),
                    t("seoGeo.section3.hashtag3"),
                ]}
                ctaLabel={t("seoGeo.section3.cta")}
                imageSrc="/seogeo/seo3.webp"
                imageAlt={t("seoGeo.section3.imageAlt")}
            />

        </div>
    );
}

export default SeoGeo;