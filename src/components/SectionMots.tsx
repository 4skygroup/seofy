import React from "react";

interface Keyword {
    label: string;
    rotate: number;
    offsetY: number;
    offsetX: string;
}

interface FloatingKeywordsBannerProps {
    description: string;
    keywords: Keyword[];
    keywordColor: string;
}

export default function SectionMots({ description, keywords, keywordColor }: FloatingKeywordsBannerProps) {
    return (
        <div className="w-full overflow-hidden bg-seofy-darkgreen font-glacial px-4 py-6 md:px-12 md:py-12">
            <p className="text-t6 md:text-t5 text-white font-normal tracking-wide mb-7 md:mb-14 pl-8 md:pl-35">
                {description}
            </p>

            <div className="flex items-end justify-center gap-6 md:gap-12 w-full h-16 md:h-24">
                {keywords.map((kw) => (
                    <span key={kw.label} className="select-none font-bold uppercase text-t7 md:text-t6 tracking-widest" style={{ color: keywordColor, transform: `rotate(${kw.rotate}deg) translateY(${kw.offsetY}px)`, transformOrigin: "left bottom", whiteSpace: "nowrap" }}>
                        {kw.label}
                    </span>
                ))}
            </div>
        </div>
    );
}
