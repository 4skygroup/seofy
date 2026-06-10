import ContactForm from "./Contactform.tsx";
import ContactInfoCards from "./Contactinfocards.tsx";

export default function Contact() {
    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] px-6 py-20 lg:px-16 mt-4 md:mt-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

                {/* ── Left column ── */}
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-t3 font-bold leading-tight tracking-tight text-white md:text-h6">
                            Construisons votre croissance ensemble
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
                            Nos experts vous accompagnent dans la définition d'une stratégie digitale alignée sur vos objectifs. Contactez-nous selon le mode d'échange qui vous convient le mieux.
                        </p>
                    </div>

                    <ContactInfoCards />
                </div>

                {/* ── Right column ── */}
                <div>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}