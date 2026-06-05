import { useNavigate } from "react-router-dom";

export interface ServiceCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
    href: string;
}

export default function ServiceCard({
    title,
    subtitle,
    imageSrc,
    imageAlt = "",
    href,
}: ServiceCardProps) {

    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col rounded-2xl overflow-hidden bg-black w-full max-w-[300px] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ boxShadow: "5px 5px 10px rgba(0,0,0,0.25)" }}
        >
            <div className="w-full aspect-square overflow-hidden bg-black">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                />
            </div>

            <div className="bg-seofy-card-blue px-4 pt-5 pb-6 flex flex-col items-center gap-1 text-center">
                <p className="font-glacial font-normal text-t6 md:text-t5 text-seofy-white m-0">
                    {title}
                </p>
                <p className="font-glacial font-bold text-t6 md:text-t5 text-seofy-white m-0">
                    {subtitle}
                </p>
                <button
                    type="button"
                    onClick={() => navigate(href)}
                    className="mt-3 px-5 py-1.5 rounded-full bg-seofy-btn-darkgreen text-seofy-white font-glacial text-t6 md:text-t5 cursor-pointer transition-colors duration-200 hover:bg-seofy-darkgreen border-0"
                >
                    En savoir plus
                </button>
            </div>
        </div>
    );
}