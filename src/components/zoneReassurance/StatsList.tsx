import { useTranslation } from "react-i18next";
import StatsCard from "./StatsCard";

export default function StatsList() {
    const { t } = useTranslation();

    const stats = [
        {
            value: "+128%",
            label: t("stats.traffic"),
        },
        {
            value: "+73%",
            label: t("stats.keywords"),
        },
        {
            value: "+48%",
            label: t("stats.conversions"),
        },
    ];

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[24px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-black to-emerald-500/10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="col-span-1 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center justify-center py-8 sm:py-10 border-b sm:border-b-0 border-white/10 last:border-b-0">
                                    <StatsCard value={stat.value} label={stat.label} />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col justify-center px-8 py-8 sm:py-10 border-t lg:border-t-0 lg:border-l border-cyan-500/10">
                            <span className="mb-4 text-h6 leading-none text-seofy-green">❝</span>

                            <p className="text-t5 md:text-t4 leading-relaxed text-white/90">
                                {t("stats.testimonial")}
                            </p>

                            <span className="mt-4 text-t6 font-medium text-white/60">
                                — {t("stats.testimonialAuthor")}
                            </span>
                        </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,rgba(50,240,210,0.15),transparent_40%),radial-gradient(circle_at_right,rgba(50,240,210,0.15),transparent_40%)]" />
                </div>
            </div>
        </section>
    );
}