export default function PolitiqueConfidentialite() {
    const sections = [
        {
            title: "1. Data Collection",
            content: (
                <>
                    <p>We collect certain data when you:</p>
                    <ul className="mt-3 space-y-1 list-none">
                        {["Fill out a contact form", "Browse the site", "Subscribe to a newsletter"].map((item) => (
                            <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                        ))}
                    </ul>
                    <p className="mt-3">Data collected may include: name, email, phone, company, IP address…</p>
                </>
            ),
        },
        {
            title: "2. Use of Data",
            content: (
                <ul className="space-y-1 list-none">
                    {["Respond to your requests", "Improve user experience", "Send communications (with consent)", "Analyze site traffic"].map((item) => (
                        <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                    ))}
                </ul>
            ),
        },
        {
            title: "3. Legal Basis",
            content: (
                <ul className="space-y-1 list-none">
                    {["Your consent", "Performance of a contract", "Legitimate interest (service improvement)"].map((item) => (
                        <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                    ))}
                </ul>
            ),
        },
        {
            title: "4. Retention Period",
            content: (
                <ul className="space-y-1 list-none">
                    {["3 years after last contact for prospects", "10 years for billing-related data"].map((item) => (
                        <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                    ))}
                </ul>
            ),
        },
        {
            title: "5. Data Sharing",
            content: (
                <>
                    <p>Your data is never sold. It may be shared only with:</p>
                    <ul className="mt-3 space-y-1 list-none">
                        {["Our technical providers (hosting, analytics…)", "Authorities when legally required"].map((item) => (
                            <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            title: "6. Cookies",
            content: (
                <>
                    <p>This site uses cookies to:</p>
                    <ul className="mt-3 space-y-1 list-none">
                        {["Measure audience", "Improve navigation"].map((item) => (
                            <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                        ))}
                    </ul>
                    <p className="mt-3">You can accept, decline or configure cookies via the consent banner.</p>
                </>
            ),
        },
        {
            title: "7. Your Rights (GDPR)",
            content: (
                <>
                    <p>In accordance with regulations, you have the right to:</p>
                    <ul className="mt-3 space-y-1 list-none">
                        {["Access", "Rectification", "Erasure", "Object", "Portability"].map((item) => (
                            <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />{item}</li>
                        ))}
                    </ul>
                    <p className="mt-3">To exercise your rights: <a href="mailto:contact@seofyagency.com" className="text-seofy-green underline">contact@seofyagency.com</a></p>
                </>
            ),
        },
        {
            title: "8. Security",
            content: (
                <p>We implement all necessary measures to protect your data against unauthorized access, loss or disclosure.</p>
            ),
        },
        {
            title: "9. Policy Updates",
            content: (
                <>
                    <p>This policy may be updated at any time.</p>
                    <p className="mt-2 text-seofy-white/50 text-t6">Last updated: 06/24/2026</p>
                </>
            ),
        },
        {
            title: "10. Contact",
            content: (
                <a href="mailto:contact@seofyagency.com" className="text-seofy-green underline">contact@seofyagency.com</a>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-seofy-darkgreen text-seofy-white font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-h6 font-bold text-white mb-2">Privacy Policy</h1>
                <div className="w-12 h-0.5 bg-seofy-green mb-12" />
                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-t2 font-bold text-white mb-3">{section.title}</h2>
                            <div className="text-t5 text-seofy-white/80 leading-relaxed space-y-1">{section.content}</div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}