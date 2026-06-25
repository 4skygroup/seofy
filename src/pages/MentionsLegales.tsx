export default function MentionsLegales() {
    const sections = [
        {
            title: "Publisher",
            content: (
                <>
                    <p>This site, accessible at <a href="https://seofyagency.com/" className="text-seofy-green underline">https://seofyagency.com/</a>, is published by:</p>
                    <ul className="mt-3 space-y-1 list-none">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />Company: Visuance Agency</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />Email: <a href="mailto:contact@visuanceagency.com" className="text-seofy-green underline ml-1">contact@visuanceagency.com</a></li>
                    </ul>
                </>
            ),
        },
        {
            title: "1. Hosting",
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />Host: OVH Cloud</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />Website: <a href="https://www.ovhcloud.com/" className="text-seofy-green underline ml-1">https://www.ovhcloud.com/</a></li>
                </ul>
            ),
        },
        {
            title: "2. Intellectual Property",
            content: (
                <p>All content on this site (texts, images, graphics, logo, icons, etc.) is the exclusive property of Seofy, unless otherwise stated. Any reproduction, distribution or exploitation without prior written authorization is strictly prohibited.</p>
            ),
        },
        {
            title: "3. Liability",
            content: (
                <p>Seofy strives to provide information as accurate as possible. However, it cannot be held responsible for omissions, inaccuracies or update failures. The user is solely responsible for the use of the information provided.</p>
            ),
        },
        {
            title: "4. External Links",
            content: (
                <p>This site may contain links to other websites. Seofy cannot be held responsible for the content of these external sites.</p>
            ),
        },
        {
            title: "5. Personal Data",
            content: (
                <p>Information collected through the site is processed in accordance with our privacy policy.</p>
            ),
        },
        {
            title: "6. Applicable Law",
            content: (
                <p>This site is governed by French law. In the event of a dispute, the competent courts shall be those of the jurisdiction of the registered office.</p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-seofy-darkgreen text-seofy-white font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-h6 font-bold text-white mb-2">Legal Notice</h1>
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