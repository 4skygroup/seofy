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
        <div className="w-full overflow-hidden font-glacial px-4 py-6 md:px-12 md:py-12">
            <p className="text-t6 md:text-t5 text-white font-normal tracking-wide mb-7 md:mb-14 pl-8 md:pl-35">
                {description}
            </p>

            <div className="flex flex-wrap items-end justify-center gap-4 md:gap-12 w-full min-h-16 md:min-h-24">
                {keywords.map((kw) => (
                    <span key={kw.label} className="select-none font-bold uppercase text-t7 md:text-t6 tracking-widest" style={{ color: keywordColor, transform: `rotate(${kw.rotate}deg) translateY(${kw.offsetY}px)`, transformOrigin: "left bottom" }}>
                        {kw.label}
                    </span>
                ))}
            </div>
        </div>
    );
}