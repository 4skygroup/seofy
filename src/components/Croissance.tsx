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
}

const Croissance: React.FC<SemanticSeoHeroProps> = ({
    title,
    subtitle,
    description,
    hashtags,
    ctaLabel,
    imageSrc,
    imageAlt = "",
}) => {

    const navigate = useNavigate();

    return (
        <section className="w-full px-6 py-16 md:py-24 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Left content */}
                <div className="flex-1 flex flex-col gap-6">
                    <div>
                        <h2 className="font-glacial font-bold text-color-seofy-white text-[clamp(1.75rem,4vw,var(--text-h6))] leading-tight">
                            {title}
                        </h2>
                        <p className="font-glacial font-normal mt-2 text-text-t4 text-color-seofy-white opacity-75">
                            {subtitle}
                        </p>
                    </div>

                    <p className="font-glacial font-normal text-color-seofy-white text-text-t5 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    <ul className="flex flex-col gap-4">
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

                    <div className="mt-2">
                        <button
                            onClick={() => navigate("/contact")}
                            className="font-glacial font-normal text-text-t5 text-color-seofy-green rounded-full border border-color-seofy-green px-8 py-3 transition-colors duration-200 hover:bg-color-seofy-green hover:text-color-seofy-darkgreen cursor-pointer"
                        >
                            {ctaLabel}
                        </button>
                    </div>
                </div>

                {/* Right image */}
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                    <div className="rounded-2xl overflow-hidden w-[clamp(220px,40vw,380px)] aspect-square">
                        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Croissance;