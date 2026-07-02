import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyUs() {
    const { t } = useTranslation();

    return (
        <section className="bg-black pb-10">
            <div className="border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center mx-auto gap-6 sm:gap-8 max-w-6xl text-center sm:text-left">
                <div className="shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-seofy-green flex items-center justify-center">
                    <TrendingUp size={28} className="sm:hidden" color="#31ECAE" strokeWidth={1.5} />
                    <TrendingUp size={36} className="hidden sm:block" color="#31ECAE" strokeWidth={1.5} />
                </div>
                <div>
                    <p className="text-t5 sm:text-t4 font-bold text-seofy-white mb-2">
                        {t("whyUs.title")}
                    </p>
                    <p className="text-t6 text-white leading-relaxed">
                        {t("whyUs.paragraph1")}
                        <br />
                        {t("whyUs.paragraph2")}
                    </p>
                </div>
            </div>
        </section>
    );
}