import GlobeMap from "../components/map/GlobeMap.tsx";

export default function Locations() {
    return (
        <div className="bg-black text-white">
            <section className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12 py-12 md:py-25 px-4 md:px-5 bg-[radial-gradient(circle_at_top_left,rgba(82,98,255,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,238,252,0.15)_0%,transparent_45%)]">
                <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
                  <span className="uppercase bg-white/5 flex justify-center items-center py-2 px-4 gap-3 md:gap-4 rounded-full w-fit text-xs md:text-sm">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M10.0125 20C8.6375 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3625 0 9.9875C0 8.6125 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.6375 0 10.0125 0C11.3875 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.6125 20 9.9875C20 11.3625 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3875 20 10.0125 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z"
                          fill="#00DBE9"
                      />
                    </svg>
                    GLOBAL NETWORK
                  </span>

                    <p className="bg-linear-to-r from-white to-[#A0A0A0] bg-clip-text text-transparent text-center font-bold max-w-4xl text-3xl md:text-h4">
                        9 Agences, une vision unique pour votre croissance.
                    </p>

                    <p className="text-[#CFC4C5] text-center text-base md:text-lg max-w-3xl">
                        Un écosystème de 360° composé d'agences spécialisées pour propulser
                        votre marque à l'international.
                    </p>
                </div>

                <hr className="w-full max-w-4xl border-white/10" />

                <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-25 w-fit max-w-4xl justify-items-center">
                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <span className="font-bold text-3xl md:text-h6">9</span>
                        <span className="uppercase text-xs md:text-t5">Agences</span>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <span className="font-bold text-3xl md:text-h6">+250</span>
                        <span className="uppercase text-xs md:text-t5">Experts</span>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <span className="font-bold text-3xl md:text-h6">+500</span>
                        <span className="uppercase text-xs md:text-t5">Clients</span>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center justify-center">
                        <span className="font-bold text-3xl md:text-h6">4</span>
                        <span className="uppercase text-xs md:text-t5">Continents</span>
                    </div>
                </div>
            </section>

            {/* Section Globe inchangée */}
            <section style={{ padding: "20px", backgroundImage: "#000" }}>
                <GlobeMap />
            </section>

            <section className="w-full flex justify-center items-center p-4 md:p-5">
                <div className="max-lg:w-full lg:w-[calc(100%-20px)] max-w-7xl bg-white flex flex-col justify-center items-center py-12 md:py-20 px-5 gap-y-6 md:gap-y-7.5 rounded-r01">
                    <p className="font-bold text-center text-black text-2xl md:text-h5">
                        Bâtir vos succès digitaux avec nous.
                    </p>

                    <button className="text-sm md:text-t2 py-4 md:py-5 px-8 md:px-10 bg-black text-white w-fit rounded-full flex justify-center items-center gap-3">
                        Démarrer un projet
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}