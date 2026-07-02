import { useTranslation } from "react-i18next";
import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

export default function ServiceList() {
    const { t } = useTranslation();

    const SERVICES: ServiceCardProps[] = [
        {
            title: t("services.seoGeo.title"),
            subtitle: t("services.seoGeo.subtitle"),
            imageSrc: "/seo.webp",
            imageAlt: "SEO & GEO illustration",
            href: "/services/seo-geo",
        },
        {
            title: t("services.seaSmo.title"),
            subtitle: t("services.seaSmo.subtitle"),
            imageSrc: "/sea.webp",
            imageAlt: "SEA & SMO illustration",
            href: "/services/sea-smo",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-10 px-6 py-20 bg-seofy-darkgreen min-h-screen">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-glacial text-h6 md:text-h5 text-white text-center m-0">
                    {t("services.heading")}
                </h2>
                <div className="w-8 h-0.5 bg-seofy-green" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.href} {...service} />
                ))}
            </div>
        </section>
    );
}