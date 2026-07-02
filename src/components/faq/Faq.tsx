import { useState } from "react";
import { useTranslation } from "react-i18next";
import { faqData } from "./FaqData.ts";
import { Plus } from "lucide-react";

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const half = Math.ceil(faqData.length / 2);
    const leftItems = faqData.slice(0, half);
    const rightItems = faqData.slice(half);

    const renderItem = (item: typeof faqData[0], _index: number, globalIndex: number) => (
        <div key={item.id} className="border-b border-[#2A2A2A]">
            <button
                onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                className="w-full flex items-center justify-between py-4 text-left group"
                aria-expanded={openIndex === globalIndex}
            >
                <span className="font-glacial text-t5 text-seofy-white pr-4 group-hover:text-seofy-green transition-colors duration-200">
                  {t(`faq.items.${item.id}.question`)}
                </span>
                <div
                    className="shrink-0 w-6 h-6 rounded-full bg-seofy-white flex items-center justify-center transition-transform duration-300"
                    style={{ transform: openIndex === globalIndex ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                    <Plus size={14} color="#07242C" strokeWidth={2.5} />
                </div>
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === globalIndex ? "500px" : "0px", opacity: openIndex === globalIndex ? 1 : 0 }}
            >
                <p className="font-glacial text-t5 text-seofy-white pb-4 leading-relaxed">
                    {t(`faq.items.${item.id}.answer`)}
                </p>
            </div>
        </div>
    );

    return (
        <section className="w-full bg-seofy-darkgreen flex flex-col items-center px-6 py-16">
            <h2 className="font-glacial text-h5 text-seofy-white mb-2 tracking-widest uppercase">
                {t("faq.heading")}
            </h2>
            <div className="w-4 h-0.5 bg-seofy-green mb-12" />

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <div>{leftItems.map((item, i) => renderItem(item, i, i))}</div>
                <div>{rightItems.map((item, i) => renderItem(item, i, half + i))}</div>
            </div>

        </section>
    );
};

export default FAQ;