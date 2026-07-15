import { useTranslation } from "react-i18next";

export default function MentionsLegales() {
  const { t } = useTranslation();

  const publisherItems = ["company", "email"];
  const hostingItems = ["host", "website"];

  const sections = [
    {
      title: t("legal.publisher.title"),
      content: (
        <>
          <p>
            {t("legal.publisher.intro")}{" "}
            <a
              href={t("legal.company.website")}
              className="text-seofy-green underline"
            >
              {t("legal.company.website")}
            </a>
            {t("legal.publisher.introSuffix")}
          </p>

          <ul className="mt-3 space-y-1 list-none">
            {publisherItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />

                {item === "company" && (
                  <>
                    {t("legal.publisher.companyLabel")}{" "}
                    {t("legal.company.name")}
                  </>
                )}

                {item === "email" && (
                  <>
                    {t("legal.publisher.emailLabel")}
                    <a
                      href={`mailto:${t("legal.company.email")}`}
                      className="text-seofy-green underline ml-1"
                    >
                      {t("legal.company.email")}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("legal.hosting.title"),
      content: (
        <ul className="space-y-1 list-none">
          {hostingItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />

              {item === "host" && (
                <>
                  {t("legal.hosting.hostLabel")} {t("legal.company.host")}
                </>
              )}

              {item === "website" && (
                <>
                  {t("legal.hosting.websiteLabel")}
                  <a
                    href={t("legal.company.hostWebsite")}
                    className="text-seofy-green underline ml-1"
                  >
                    {t("legal.company.hostWebsite")}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: t("legal.intellectualProperty.title"),
      content: <p>{t("legal.intellectualProperty.description")}</p>,
    },
    {
      title: t("legal.responsibility.title"),
      content: <p>{t("legal.responsibility.description")}</p>,
    },
    {
      title: t("legal.externalLinks.title"),
      content: <p>{t("legal.externalLinks.description")}</p>,
    },
    {
      title: t("legal.personalData.title"),
      content: <p>{t("legal.personalData.description")}</p>,
    },
    {
      title: t("legal.applicableLaw.title"),
      content: <p>{t("legal.applicableLaw.description")}</p>,
    },
  ];

  return (
    <main className="min-h-screen bg-seofy-darkgreen text-seofy-white font-glacial px-6 py-20 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-h6 font-bold text-white mb-2">
          {t("legal.title")}
        </h1>

        <div className="w-12 h-0.5 bg-seofy-green mb-12" />

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-t2 font-bold text-white mb-3">
                {section.title}
              </h2>

              <div className="text-t5 text-seofy-white/80 leading-relaxed space-y-1">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
