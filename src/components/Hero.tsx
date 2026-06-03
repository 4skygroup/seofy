export default function Hero() {
    return (
        <section
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse 65% 65% at 50% 50%, #2D7F8B 0%, #1a5a63 25%, #0a2e33 55%, #000000 100%)",
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
                <h1 className="font-glacial font-normal leading-snug tracking-tight text-white max-w-4xl text-h6 md:text-h4">
                    Search Engines (SEO) Agency
                    of AI and Media Buying SEA,
                    Social Ads and Programmatic
                </h1>

                <button className="group flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-t5 font-glacial text-white/90 tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                    Discover our offers
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                </button>
            </div>
        </section>
    )
}