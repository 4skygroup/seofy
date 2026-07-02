import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORMSPREE = "https://formspree.io/f/xykqweqr";

type Tab = "callback" | "message";

export default function ContactForm() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<Tab>("callback");

    return (
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-1">
            {/* Tab switcher */}
            <div className="mb-1 grid grid-cols-2 rounded-xl bg-white/5 p-1">
                <button
                    onClick={() => setActiveTab("callback")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
                        activeTab === "callback"
                            ? "bg-white text-black shadow"
                            : "text-white/50 hover:text-white"
                    }`}
                >
                    <Phone className="w-4 h-4" />
                    {t("contact.form.tabs.callback")}
                </button>
                <button
                    onClick={() => setActiveTab("message")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
                        activeTab === "message"
                            ? "bg-white text-black shadow"
                            : "text-white/50 hover:text-white"
                    }`}
                >
                    <Mail className="w-4 h-4" />
                    {t("contact.form.tabs.message")}
                </button>
            </div>

            {/* Form body */}
            <div className="p-5">
                {activeTab === "callback" ? <CallbackForm /> : <MessageForm />}
            </div>
        </div>
    );
}

function CallbackForm() {
    const { t } = useTranslation();
    const subjects = t("contact.form.subjects", { returnObjects: true }) as string[];
    const timeSlots = t("contact.form.timeSlots", { returnObjects: true }) as string[];

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState("");
    const [sujet, setSujet] = useState("");
    const [horaire, setHoraire] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ nom, prenom, tel, sujet, horaire, date, }),
        });

        if (res.ok) {
            setStatus("sent");
            setNom("");
            setPrenom("");
            setTel("");
            setSujet("");
            setHoraire("");
            setDate("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label={t("contact.form.callback.nom")} placeholder={t("contact.form.callback.nomPlaceholder")} value={nom} onChange={setNom} />
                <Field label={t("contact.form.callback.prenom")} placeholder={t("contact.form.callback.prenomPlaceholder")} value={prenom} onChange={setPrenom} />
            </div>
            <Field label={t("contact.form.callback.phone")} placeholder={t("contact.form.callback.phonePlaceholder")} type="tel" value={tel} onChange={setTel} />
            <SelectField label={t("contact.form.callback.subject")} options={subjects} value={sujet} onChange={setSujet} />
            <SelectField label={t("contact.form.callback.time")} options={timeSlots} value={horaire} onChange={setHoraire} />
            <Field label={t("contact.form.callback.date")} placeholder="" type="date" value={date} onChange={setDate} />

            {status === "sent" && (
                <p className="text-sm text-green-400 text-center">{t("contact.form.callback.success")}</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400 text-center">{t("contact.form.callback.error")}</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
            >
                <Phone className="w-4 h-4" />
                {status === "sending" ? t("contact.form.callback.submitting") : t("contact.form.callback.submit")}
            </button>
        </form>
    );
}

function MessageForm() {
    const { t } = useTranslation();
    const subjects = t("contact.form.subjects", { returnObjects: true }) as string[];

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ nom, prenom, email, sujet, message, }),
        });

        if (res.ok) {
            setStatus("sent");
            setNom("");
            setPrenom("");
            setEmail("");
            setSujet("");
            setMessage("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label={t("contact.form.message.nom")} placeholder={t("contact.form.message.nomPlaceholder")} value={nom} onChange={setNom} />
                <Field label={t("contact.form.message.prenom")} placeholder={t("contact.form.message.prenomPlaceholder")} value={prenom} onChange={setPrenom} />
            </div>
            <Field label={t("contact.form.message.email")} placeholder={t("contact.form.message.emailPlaceholder")} type="email" value={email} onChange={setEmail} />
            <SelectField label={t("contact.form.message.subject")} options={subjects} value={sujet} onChange={setSujet} />

            <div className="flex flex-col gap-1.5">
                <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                    {t("contact.form.message.message")}
                </label>
                <textarea
                    rows={4}
                    placeholder={t("contact.form.message.messagePlaceholder")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
                />
            </div>

            {status === "sent" && (
                <p className="text-sm text-green-400 text-center">{t("contact.form.message.success")}</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400 text-center">{t("contact.form.message.error")}</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-t5 font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
            >
                <Mail className="w-4 h-4" />
                {status === "sending" ? t("contact.form.message.submitting") : t("contact.form.message.submit")}
            </button>
        </form>
    );
}

function Field({label, placeholder, type = "text", value, onChange,}: {
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8 [color-scheme:dark]"
            />
        </div>
    );
}

function SelectField({label, options, value, onChange,}: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
}) {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white outline-none transition focus:border-white/30 focus:bg-white/8"
            >
                <option value="" disabled className="bg-[#111] text-white/50">
                    {t("contact.form.selectPlaceholder")}
                </option>
                {options.map((o) => (
                    <option key={o} value={o} className="bg-[#111] text-white">
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}