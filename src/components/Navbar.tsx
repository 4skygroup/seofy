import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {Globe, MapPin} from "lucide-react";

interface SubItem {
    label: string;
    path: string;
}

interface NavItem {
    label: string;
    path: string;
    external?: boolean;
    subItems?: SubItem[];
}

const navItems: NavItem[] = [
    { label: "The Group", path: "https://www.playtosky.com/", external: true },
    {
        label: "Offers",
        path: "/offres",
        subItems: [
            { label: "SEO / GEO", path: "/services/seo-geo" },
            { label: "SEA / SMO", path: "/services/sea-smo" },
        ],
    },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServicesOpen(true);
    };
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between px-8 py-4">

            {/* Gauche (desktop uniquement) */}
            <div className="hidden md:flex items-center gap-10">
                <NavLink
                    to="/en"
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-glacial text-t6 hover:bg-white/90 transition"
                >
                    <Globe className="w-4 h-4" />
                    English
                </NavLink>

                <NavLink
                    to="/location"
                    className="flex items-center gap-2 text-white hover:text-seofy-green transition-colors"
                >
                    <MapPin className="w-5 h-5" />
                </NavLink>
            </div>

            {/* Logo : centré par rapport au header en desktop */}
            <NavLink
                to="/"
                className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                <img src="/logoSeofy.webp" alt="Seofy" loading="lazy" className="h-9" />
            </NavLink>

            {/* ── Desktop nav ── */}
            <ul className="hidden md:flex items-center gap-10">
                {navItems.map(({ label, path, external, subItems }) => (
                    <li
                        key={path}
                        className="relative"
                        onMouseEnter={subItems ? handleMouseEnter : undefined}
                        onMouseLeave={subItems ? handleMouseLeave : undefined}
                    >
                        {external ? (
                            <a
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-glacial text-t5 text-white hover:text-seofy-green transition-colors duration-200"
                            >
                                {label}
                            </a>
                        ) : (
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `font-glacial text-t5 transition-colors duration-200 flex items-center gap-1 ${
                                        isActive ? "text-seofy-green" : "text-white hover:text-seofy-green"
                                    }`
                                }
                            >
                                {label}
                                {subItems && (
                                    <svg
                                        className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </NavLink>
                        )}

                        {/* Dropdown desktop */}
                        {subItems && servicesOpen && (
                            <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black border border-white/10 rounded-md py-2 w-44 shadow-lg">
                                {subItems.map((sub) => (
                                    <li key={sub.path}>
                                        <NavLink
                                            to={sub.path}
                                            onClick={() => setServicesOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 font-glacial text-t6 transition-colors duration-200 ${
                                                    isActive ? "text-seofy-green" : "text-white hover:text-seofy-green hover:bg-white/5"
                                                }`
                                            }
                                        >
                                            {sub.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <button
                className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative ${menuOpen ? "invisible" : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            {/* ── Mobile menu — ── */}
            <div
                className={`fixed inset-0 bg-seofy-green md:hidden flex flex-col transition-all duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                style={{ zIndex: 40 }}
            >
                {/* Croix de fermeture */}
                <button
                    className="absolute top-5 right-8 text-white text-3xl font-light leading-none"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fermer le menu"
                >
                    ✕
                </button>

                {/* Logo centré */}
                <div className="flex justify-center mt-16 mb-12">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <img src="/logoSeofy.webp" alt="Seofy" className="h-12" />
                    </NavLink>
                </div>

                {/* Langue + localisation (mobile) */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <NavLink
                        to="/en"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-glacial text-t6"
                    >
                        <Globe className="w-4 h-4" />
                        English
                    </NavLink>

                    <NavLink
                        to="/location"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white"
                    >
                        <MapPin className="w-5 h-5" />
                    </NavLink>
                </div>

                {/* Items centrés */}
                <ul className="flex flex-col items-center gap-8 flex-1">
                    {navItems.map(({ label, path, external, subItems }) => (
                        <li key={path} className="text-center">
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-glacial text-t3 text-white"
                                >
                                    {label}
                                </a>
                            ) : subItems ? (
                                <div>
                                    <button
                                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                                        className="font-glacial text-t3 text-white flex items-center gap-2 mx-auto"
                                    >
                                        {label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <ul className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-3 ${mobileServicesOpen ? "max-h-40 mt-4" : "max-h-0"}`}>
                                        {subItems.map((sub) => (
                                            <li key={sub.path}>
                                                <NavLink
                                                    to={sub.path}
                                                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                                                    className="font-glacial text-t3 text-white/80 hover:text-white transition-colors duration-200"
                                                >
                                                    {sub.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <NavLink
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-glacial text-t3 text-white"
                                >
                                    {label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mention en bas */}
                <p className="text-center text-white/50 text-t5 pb-8 font-glacial">
                    A Play To Sky Group Entity
                </p>
            </div>
        </nav>
    );
}