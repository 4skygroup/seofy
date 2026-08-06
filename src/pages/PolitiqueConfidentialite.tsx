import { useTranslation } from "react-i18next";
import {useMetaTags} from "../hooks/useMetaTags.ts";

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation();

    useMetaTags({
        title: "Politique de confidentialité | Seofy",
        description: "Consultez la politique de confidentialité de Seofy concernant la collecte, l'utilisation et la protection de vos données personnelles.",
        canonical: "https://seofyagency.com/confidentialite",
        ogTitle: "Politique de confidentialité | Seofy",
        ogDescription: "Consultez la politique de confidentialité de Seofy concernant la protection de vos données personnelles.",
        ogImage: "https://seofyagency.com/og-image.jpg",
        ogType: "website",
        twitterTitle: "Politique de confidentialité | Seofy",
        twitterDescription: "Consultez la politique de confidentialité de Seofy concernant la protection de vos données personnelles.",
        twitterImage: "https://seofyagency.com/og-image.jpg",
        structuredData: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://seofyagency.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Politique de confidentialité",
                    item: "https://seofyagency.com/confidentialite",
                },
            ],
        },
    });

  const sections = [
    {
      title: "collection",
      content: (
        <>
          <p>{t("privacy.sections.collection.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {Object.keys(
              t("privacy.sections.collection.items", {
                returnObjects: true,
              }),
            ).map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
                {t(`privacy.sections.collection.items.${key}`)}
              </li>
            ))}
          </ul>

          <p className="mt-3">{t("privacy.sections.collection.description")}</p>
        </>
      ),
    },
    {
      title: "usage",
      content: (
        <ul className="space-y-1 list-none">
          {Object.keys(
            t("privacy.sections.usage.items", {
              returnObjects: true,
            }),
          ).map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
              {t(`privacy.sections.usage.items.${key}`)}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "legalBasis",
      content: (
        <ul className="space-y-1 list-none">
          {Object.keys(
            t("privacy.sections.legalBasis.items", {
              returnObjects: true,
            }),
          ).map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
              {t(`privacy.sections.legalBasis.items.${key}`)}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "retention",
      content: (
        <ul className="space-y-1 list-none">
          {Object.keys(
            t("privacy.sections.retention.items", {
              returnObjects: true,
            }),
          ).map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
              {t(`privacy.sections.retention.items.${key}`)}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "sharing",
      content: (
        <>
          <p>{t("privacy.sections.sharing.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {Object.keys(
              t("privacy.sections.sharing.items", {
                returnObjects: true,
              }),
            ).map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
                {t(`privacy.sections.sharing.items.${key}`)}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "cookies",
      content: (
        <>
          <p>{t("privacy.sections.cookies.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {Object.keys(
              t("privacy.sections.cookies.items", {
                returnObjects: true,
              }),
            ).map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
                {t(`privacy.sections.cookies.items.${key}`)}
              </li>
            ))}
          </ul>

          <p className="mt-3">{t("privacy.sections.cookies.description")}</p>
        </>
      ),
    },
    {
      title: "rights",
      content: (
        <>
          <p>{t("privacy.sections.rights.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {Object.keys(
              t("privacy.sections.rights.items", {
                returnObjects: true,
              }),
            ).map((key) => (
              <li key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-seofy-green flex-shrink-0" />
                {t(`privacy.sections.rights.items.${key}`)}
              </li>
            ))}
          </ul>

          <p className="mt-3">
            {t("privacy.sections.rights.contactPrefix")}{" "}
            <a
              href="mailto:contact@seofyagency.com"
              className="text-seofy-green underline"
            >
              contact@seofyagency.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: "security",
      content: <p>{t("privacy.sections.security.description")}</p>,
    },
    {
      title: "updates",
      content: (
        <>
          <p>{t("privacy.sections.updates.description")}</p>

          <p className="mt-2 text-seofy-white/50 text-t6">
            {t("privacy.sections.updates.lastUpdate")}
          </p>
        </>
      ),
    },
    {
      title: "contact",
      content: (
        <a
          href="mailto:contact@seofyagency.com"
          className="text-seofy-green underline"
        >
          contact@seofyagency.com
        </a>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-seofy-darkgreen text-seofy-white font-glacial px-6 py-20 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-h6 font-bold text-white mb-2">
          {t("privacy.title")}
        </h1>

        <div className="w-12 h-0.5 bg-seofy-green mb-12" />

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-t2 font-bold text-white mb-3">
                {t(`privacy.sections.${section.title}.title`)}
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
