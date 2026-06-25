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
            className="flex flex-col rounded-2xl overflow-hidden w-full max-w-[400px] border border-gray-700 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
            <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                />
            </div>

            <div className="bg-seofy-card px-6 pt-5 pb-7 flex flex-col items-center gap-2 text-center flex-1 justify-between">

                <p className="font-glacial font-bold text-t3 md:text-t2 text-seofy-green m-0">
                    {title}
                </p>
                <p className="font-glacial text-t6 md:text-t5 text-seofy-white m-0">
                    {subtitle}
                </p>
                <button
                    type="button"
                    onClick={() => navigate(href)}
                    className="mt-3 px-6 py-2 rounded-full bg-transparent text-seofy-white font-glacial text-t5 cursor-pointer transition-colors duration-200 hover:bg-seofy-btn-darkgreen"
                    style={{ border: "1px solid rgba(217, 217, 217, 0.5)" }}
                >
                    Learn more
                </button>
            </div>
        </div>
    );
}