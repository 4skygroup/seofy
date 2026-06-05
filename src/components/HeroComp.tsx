interface HeroCompProps {
    titre: string;
    desc: string;
    autresdesc?: string;
    img: string;
}

export default function HeroComp({ titre, desc, autresdesc, img }: HeroCompProps) {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-5xl">
                {/* Left content */}
                <div className="flex flex-col items-start justify-center w-full md:w-1/2">
                    <h2 className="text-h5 md:text-h4 font-glacial font-bold text-white mb-6 leading-tight">
                        {titre}
                    </h2>

                    <p className="text-t5 md:text-t4 font-glacial text-seofy-white font-normal mb-6 leading-relaxed">
                        {desc}
                    </p>

                    <p className="text-t5 md:text-t4 font-glacial font-bold text-seofy-green">
                        {autresdesc}
                    </p>
                </div>

                {/* Right image */}
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <img
                        src={img}
                        alt={titre}
                        loading="lazy"
                        className="w-full max-w-sm md:max-w-lg object-contain rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}