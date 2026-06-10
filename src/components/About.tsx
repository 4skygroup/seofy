export default function About() {
    return (
        <section className="relative flex items-center justify-center w-full bg-black overflow-hidden min-h-screen py-[clamp(40px,6vh,80px)] px-4">
            <div className="animate-orb-bounce relative flex items-center justify-center">
                <div className="relative flex items-center justify-center rounded-full" style={{ width: "clamp(320px, 70vmin, 580px)", height: "clamp(320px, 70vmin, 580px)", boxShadow: "0 50px 120px -40px rgba(0,215,208,0.45), 0 25px 70px -35px rgba(0,195,195,0.22)" }}>
                    <div className="relative w-full h-full rounded-full overflow-hidden" style={{ background: "radial-gradient(circle at 40% 32%, #102a32 0%, #071820 18%, #030d16 40%, #010709 68%, #000 100%)", boxShadow: "inset 0 -380px 90px -310px rgba(0,252,240,1), inset 0 -315px 130px -270px rgba(0,238,228,0.88), inset 0 -234px 188px -210px rgba(0,215,218,0.52), inset 0 -152px 210px -187px rgba(0,185,200,0.24), inset 205px 0 128px -159px rgba(0,172,188,0.42), inset 128px 0 140px -140px rgba(0,155,175,0.18), inset -205px 0 128px -159px rgba(0,168,185,0.36), inset -128px 0 140px -140px rgba(0,150,172,0.15), inset 0 338px 65px -285px rgba(0,88,118,0.18)" }}>
                        <div className="absolute rounded-full pointer-events-none" style={{ width: "48%", height: "36%", top: "8%", left: "10%", background: "radial-gradient(ellipse at 36% 32%, rgba(12,200,215,0.06) 0%, transparent 65%)" }} />

                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-[12%] text-center">
                            <h2 className="font-glacial font-bold uppercase tracking-[0.2em] text-white mb-3 text-base md:text-h7">
                                About Us
                            </h2>

                            <p
                                className="font-glacial leading-relaxed text-[10px] md:text-t5"
                                style={{
                                    color: "rgba(255, 255, 255, 0.92)",
                                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)"
                                }}
                            >
                                There will be a before and after Seofy. We don’t resort to gimmicks or endless technical reports. We’re a next-generation SEO agency built around a single obsession: ROI.
                                Our team of experts doesn’t just improve your visibility. We implement tailored strategies, executed with precision.
                                <br/>
                                Here, we don’t spend months analyzing—we deliver results.
                                Whether you’re a growing startup or a company looking to strengthen its position, our promise remains the same: a surge in qualified traffic.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="animate-orb-shadow absolute left-1/2 rounded-full pointer-events-none" style={{ bottom: "-45px", width: "55%", height: "18px", background: "radial-gradient(ellipse, rgba(49,236,174,0.4) 0%, transparent 80%)", filter: "blur(8px)" }} />
            </div>
        </section>
    );
}