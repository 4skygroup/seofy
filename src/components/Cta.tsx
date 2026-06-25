import {Rocket} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function Cta() {
    const navigate = useNavigate();
    return (
        <section className="bg-black">
            {/* CTA Banner */}
            <div className="w-full max-w-6xl mt-12 mx-auto rounded-xl flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-6 gap-6 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-full border-2 border-seofy-green flex items-center justify-center shrink-0">
                        <Rocket size={22} color="#31ECAE" />
                    </div>
                    <div>
                        <p className="font-glacial text-t5 sm:text-t4 font-bold text-seofy-white">Ready to boost your visibility on Google?</p>
                        <p className="font-glacial text-t5 text-seofy-white opacity-70">Get a free SEO audit and discover growth opportunities for your website.</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/contact")}
                    className="w-full sm:w-auto shrink-0 bg-seofy-green rounded-4xl text-black font-glacial text-t6 font-bold px-5 py-3 whitespace-nowrap hover:bg-seofy-green hover:text-seofy-darkgreen transition-colors duration-200"
                >
                    Get my SEO audit →
                </button>
            </div>
        </section>
    )
}

