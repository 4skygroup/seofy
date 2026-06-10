import { Phone, Mail } from "lucide-react";
import {useState} from "react";

type Tab = "callback" | "message";

const timeSlots = [
    "9h30 – 10h30",
    "10h30 – 11h30",
    "11h30 – 12h30",
    "14h00 – 15h00",
    "15h00 – 16h00",
    "16h00 – 17h00",
    "17h00 – 18h00",
];

const subjects = [
    "SEO & Référencement",
    "Social Ads",
    "Content Marketing",
    "Analytics",
    "Autre",
];

export default function ContactForm() {
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
                    Se faire rappeler
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
                    Envoyer un message
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
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom" placeholder="Dupont" />
                <Field label="Prénom" placeholder="Jean" />
            </div>
            <Field label="Numéro de téléphone" placeholder="+33 6 12 34 56 78" type="tel" />
            <SelectField label="Sujet" options={subjects} />
            <SelectField label="Horaire de l'appel" options={timeSlots} />

            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98]">
                <Phone className="w-4 h-4" />
                Demander un rappel
            </button>
        </div>
    );
}

function MessageForm() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom" placeholder="Nom" />
                <Field label="Prénom" placeholder="Prénom" />
            </div>
            <Field label="Email" placeholder="jean@exemple.com" type="email" />
            <SelectField label="Sujet" options={subjects} />
            <div className="flex flex-col gap-1.5">
                <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Dites-nous en quoi nous pouvons vous aider…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
                />
            </div>

            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-t5 font-semibold text-black transition hover:bg-white/90 active:scale-[0.98]">
                <Mail className="w-4 h-4" />
                Envoyer le message
            </button>
        </div>
    );
}

function Field({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
            />
        </div>
    );
}

function SelectField({
    label,
    options,
}: {
    label: string;
    options: string[];
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white outline-none transition focus:border-white/30 focus:bg-white/8">
                <option value="" disabled selected className="bg-[#111] text-white/50">
                    Sélectionner…
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