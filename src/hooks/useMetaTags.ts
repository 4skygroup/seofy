import { useEffect } from 'react';

interface MetaTagConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  hreflang?: Record<string, string>;
}

export const useMetaTags = (config: MetaTagConfig) => {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = config.title;

    // Mettre à jour ou créer les balises meta
    const updateMetaTag = (
      name: string,
      content: string,
      property: boolean = false
    ) => {
      let tag = document.querySelector(
        `meta[${property ? 'property' : 'name'}="${name}"]`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Meta tags basiques
    updateMetaTag('description', config.description);

    // Open Graph
    updateMetaTag('og:title', config.ogTitle || config.title, true);
    updateMetaTag('og:description', config.ogDescription || config.description, true);
    updateMetaTag('og:url', config.canonical, true);
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
    }
    if (config.ogType) {
      updateMetaTag('og:type', config.ogType, true);
    }

    // Twitter Cards
    updateMetaTag('twitter:title', config.twitterTitle || config.title);
    updateMetaTag('twitter:description', config.twitterDescription || config.description);
    if (config.twitterImage) {
      updateMetaTag('twitter:image', config.twitterImage);
    }

    // Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = config.canonical;

    // Schema.org JSON-LD
    if (config.structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"][data-page-schema]') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.setAttribute('data-page-schema', 'true');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(config.structuredData);
    }

    // hreflang pour le multilingue
    if (config.hreflang) {
      // Nettoyer les anciens hreflang
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
        if (el.getAttribute('data-page-hreflang') === 'true') {
          el.remove();
        }
      });

      // Ajouter les nouveaux hreflang
      Object.entries(config.hreflang).forEach(([lang, url]) => {
        const hrefTag = document.createElement('link');
        hrefTag.rel = 'alternate';
        hrefTag.hrefLang = lang;
        hrefTag.href = url;
        hrefTag.setAttribute('data-page-hreflang', 'true');
        document.head.appendChild(hrefTag);
      });
    }
  }, [config]);
};

// Helper pour les breadcrumbs schema
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Helper pour les articles
export const createArticleSchema = (article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    url: article.url,
  };
};

// Helper pour les FAQ
export const createFAQSchema = (items: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

// Helper pour les produits/services
export const createProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  ratingCount?: number;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'EUR',
      },
    }),
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.ratingCount || 0,
      },
    }),
    url: product.url,
  };
};
