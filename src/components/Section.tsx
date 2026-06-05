import React from "react";
import { useNavigate } from "react-router-dom";

interface SemanticSeoHeroProps {
    title: string;
    subtitle: string;
    description: string;
    hashtags: string[];
    ctaLabel: string;
    imageSrc: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
}

const Section: React.FC<SemanticSeoHeroProps> = ({
    title,
    subtitle,
    description,
    hashtags,
    ctaLabel,
    imageSrc,
    imageAlt = "",
    imagePosition = "right",
}) => {

    const navigate = useNavigate();

    const imageBlock = (
        <div className="flex-shrink-0 flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden w-[clamp(220px,40vw,380px)] aspect-square">
                <img src={imageSrc} alt={imageAlt} loading="lazy" className="w-full h-full object-cover" />
            </div>
        </div>
    );

    const contentBlock = (
        <div className="flex-1 flex flex-col gap-6">
            <p className="font-glacial font-normal text-color-seofy-white text-t4 leading-relaxed">
                {description}
            </p>

            <ul className="flex flex-col gap-6 pl-15">
                {hashtags.map((tag, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="font-glacial font-bold text-text-t4 text-color-seofy-green shrink-0 mt-0.5">
                            #
                        </span>
                        <span className="font-glacial font-normal text-color-seofy-white text-text-t6">
                            {tag}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="mt-2 flex justify-center">
                <button
                    onClick={() => navigate("/contact")}
                    className="font-glacial font-normal text-text-t5 bg-seofy-btn-darkgreen rounded-full border border-black px-8 py-3 cursor-pointer shadow-[0px_7px_4px_rgba(0,0,0,0.25)]"                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    );

    return (
        <section className="w-full px-6 py-16 md:py-24 text-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">

                {/* Titre + Subtitle en haut, pleine largeur */}
                <div>
                    <h2 className="font-glacial font-bold text-color-seofy-white text-[clamp(1.75rem,4vw,var(--text-h6))] leading-tight">
                        {title}
                    </h2>
                    <p className="font-glacial font-normal mt-2 text-text-t4 text-color-seofy-white opacity-75">
                        {subtitle}
                    </p>
                </div>

                {/* Image + Contenu côte à côte */}
                <div className={`flex flex-col md:flex-row items-center ${imagePosition === "left" ? "gap-6 md:gap-1" : "gap-12 md:gap-16"}`}>
                    {imagePosition === "left" ? (
                        <>
                            {imageBlock}
                            <div className="ml-auto">{contentBlock}</div>
                        </>
                    ) : (
                        <>
                            {contentBlock}
                            {imageBlock}
                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Section;