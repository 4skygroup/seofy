import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

const SERVICES: ServiceCardProps[] = [
    {
        title: "SEO & GEO",
        subtitle: "Boost your organic visibility, dominate search results, and attract qualified traffic.",
        imageSrc: "/seo.jpg",
        imageAlt: "SEO & GEO illustration",
        href: "/services/seo-geo",
    },
    {
        title: "SEA & SMO",
        subtitle: "Effective advertising and social media campaigns to drive more traffic, engagement, and conversions.",
        imageSrc: "/sea.jpg",
        imageAlt: "SEA & SMO illustration",
        href: "/services/sea-smo",
    },
];

export default function ServiceList() {
    return (
        <section className="flex flex-col items-center gap-10 px-6 py-20 bg-seofy-darkgreen min-h-screen">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-glacial text-h6 md:text-h5 text-white text-center m-0">
                    WHAT WE DO
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