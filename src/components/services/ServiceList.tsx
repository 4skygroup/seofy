import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

const SERVICES: ServiceCardProps[] = [
    {
        title: "Performance organique",
        subtitle: "SEO & GEO",
        imageSrc: "/imgCard.png",
        imageAlt: "SEO & GEO illustration",
        href: "/services/seo-geo",
    },
    {
        title: "Performance organique",
        subtitle: "SEA & SMO",
        imageSrc: "/imgCard.png",
        imageAlt: "SEA & SMO illustration",
        href: "/services/sea-smo",
    },
];

export default function ServiceList() {
    return (
        <section className="flex flex-col items-center gap-10 px-6 py-16 bg-[#07242C] min-h-screen">
            <h2 className="font-glacial text-t2 md:text-h5 text-white text-center m-0">
                CE QUE NOUS FAISONS
            </h2>

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-2xl">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.href} {...service} />
                ))}
            </div>
        </section>
    );
}