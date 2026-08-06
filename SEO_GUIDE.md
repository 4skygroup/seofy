# 📊 Guide de Configuration SEO - Seofy

## 🎯 Mise en place complète du SEO

Ce document récapitule toutes les optimisations SEO implémentées pour le site Seofy.

---

## ✅ Fichiers SEO créés à la racine

### 1. **robots.txt**
- Permet les crawlers Google, Bing et autres
- Bloque les accès aux répertoires sensibles (/admin, /private, etc.)
- Pointe vers les deux sitemaps (principal et images)

```
Sitemap: https://seofyagency.com/sitemap.xml
Sitemap: https://seofyagency.com/sitemap-images.xml
```

### 2. **sitemap.xml**
- Liste de toutes les URLs publiques
- Inclut les priorités et fréquences de mise à jour
- URLs:
  - `/` (Priorité: 1.0)
  - `/offres` (Priorité: 0.9)
  - `/services/seo-geo` (Priorité: 0.8)
  - `/services/sea-smo` (Priorité: 0.8)

### 3. **sitemap-images.xml**
- Sitemap dédiée aux images pour Google Images
- Améliore la visibilité des images dans les résultats de recherche
- Inclut les descriptions d'images

### 4. **manifest.webmanifest**
- Configuration PWA (Progressive Web App)
- Améliore les signaux Core Web Vitals
- Permet l'installation de l'app sur mobile/desktop
- Configurations:
  - Couleur de thème: `#0f172a`
  - Nom court: "Seofy"
  - Mode d'affichage: standalone

### 5. **.htaccess**
- Compression Gzip activée (tous fichiers texte, CSS, JS)
- Redirection HTTPS forcée
- Redirection du www vers non-www (https://seofyagency.com)
- Mise en cache des ressources statiques (1 an pour images/fonts, 2 jours pour HTML)
- Blocage des accès aux fichiers cachés

---

## 🏷️ Balises HTML dans le `<head>` - index.html

### Meta tags basiques
```html
<title>Seofy - Agence SEO & Digital Marketing | Augmentez votre visibilité</title>
<meta name="description" content="..." />
<meta name="keywords" content="SEO, référencement, agence SEO, SEA, social media, digital marketing" />
```

### Balises Open Graph (réseaux sociaux)
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://seofyagency.com/og-image.jpg" />
<meta property="og:url" content="https://seofyagency.com/" />
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:image" content="..." />
```

### Balise Canonical
```html
<link rel="canonical" href="https://seofyagency.com/" />
```

### Schema.org JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Seofy",
  "url": "https://seofyagency.com",
  "logo": "https://seofyagency.com/logo.png",
  "contactPoint": { "contactType": "Customer Service", "email": "contact@seofyagency.com" }
}
```

### Configuration PWA

```html

<link rel="manifest" href="/public/manifest.webmanifest"/>
<meta name="theme-color" content="#0f172a"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
```

---

## ⚛️ Hook React: `useMetaTags.ts`

### Utilisation
Le hook `useMetaTags` permet de gérer dynamiquement les meta tags par page:

```typescript
import { useMetaTags } from "../hooks/useMetaTags.ts";

function Home() {
    useMetaTags({
        title: "Seofy - Agence SEO & Digital Marketing",
        description: "Description unique pour cette page",
        canonical: "https://seofyagency.com/",
        ogTitle: "Titre OpenGraph",
        ogDescription: "Description OpenGraph",
        ogImage: "https://seofyagency.com/og-image.jpg",
        structuredData: { /* Schema.org data */ }
    });
    
    return <div>...</div>;
}
```

### Helpers inclus
- `createBreadcrumbSchema()` - Breadcrumbs pour la navigation
- `createArticleSchema()` - Schéma pour les articles
- `createFAQSchema()` - Schéma pour les FAQ
- `createProductSchema()` - Schéma pour les produits/services

---

## 📸 Optimisation des images

### Lazy Loading
Toutes les balises `<img>` incluent `loading="lazy"`:
- Réduit le temps de chargement initial
- Améliore les Core Web Vitals (LCP, CLS, FID)
- Chargement des images uniquement quand visibles

```html
<img src="..." alt="..." loading="lazy" />
```

Fichiers modifiés:
- `Section.tsx`
- `HeroComp.tsx`
- `Navbar.tsx`
- `ServiceCard.tsx`
- `Footer.tsx` (déjà implémenté)

---

## 🗜️ Compression Gzip

### Configuration Vite
Ajout du plugin `vite-plugin-compression`:

```typescript
import compress from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    compress({
      algorithm: "gzip",
      threshold: 10240, // 10KB minimum
    })
  ]
});
```

### Installation
Assurez-vous d'installer la dépendance:
```bash
npm install vite-plugin-compression
```

### Fichiers compressés
- ✅ HTML, CSS, JavaScript
- ✅ JSON, XML
- ✅ SVG
- ✅ Fonts (WOFF, WOFF2, TTF, OTF)

---

## 📋 Checklist de configuration supplémentaire

### À faire avant le déploiement

- [ ] Mettre à jour le domaine `seofyagency.com` dans tous les fichiers (remplacer par le vrai domaine)
- [ ] Générer et ajouter des images OG vraies (`og-image.jpg`)
- [ ] Créer des screenshots pour le manifest (`screenshot-1.png`, `screenshot-2.png`)
- [ ] Mettre à jour le numéro de téléphone dans le schema Organization
- [ ] Ajouter Google Analytics (GA4) dans `index.html`
- [ ] Ajouter Google Search Console verification meta tag
- [ ] Configurer le serveur pour servir les fichiers `.gz` avec compression Gzip
- [ ] Tester avec Google PageSpeed Insights et GTmetrix
- [ ] Soumettre le sitemap à Google Search Console

### Configuration serveur (Apache/Nginx)

**Apache:**
- Le fichier `.htaccess` gère déjà la compression et les redirections

**Nginx:**
```nginx
# Compression Gzip
gzip on;
gzip_types text/html text/plain text/css text/javascript application/javascript application/json;
gzip_min_length 10240;

# HTTPS redirect
server {
    listen 80;
    server_name seofyagency.com www.seofyagency.com;
    return 301 https://$server_name$request_uri;
}

# WWW redirect
server {
    listen 443 ssl http2;
    server_name www.seofyagency.com;
    return 301 https://seofyagency.com$request_uri;
}
```

---

## 🔗 Pages avec meta tags dynamiques

### 1. **Home** (`/`)
- ✅ Title, description, canonical
- ✅ Open Graph, Twitter Cards
- ✅ Breadcrumb schema
- ✅ Organization schema

### 2. **Services/Offres** (`/offres`)
- Page listing des services
- Utilise `ServiceList` et `ServiceCard`

### 3. **SEO & GEO** (`/services/seo-geo`)
- ✅ Title, description uniques
- ✅ Canonical avec chemin correct
- ✅ Breadcrumb schema
- ✅ Open Graph avec image GEO

### 4. **SEA & SMO** (`/services/sea-smo`)
- ✅ Title, description uniques
- ✅ Canonical avec chemin correct
- ✅ Breadcrumb schema
- ✅ Open Graph avec image SEA

---

## 🎯 Indicateurs de succès

Après implémentation, vérifiez avec:

1. **Google Search Console**
   - Soumettre le sitemap
   - Vérifier les erreurs de crawl
   - Vérifier la couverture

2. **Google PageSpeed Insights**
   - Score Performance
   - Core Web Vitals
   - Opportunités

3. **Google Mobile-Friendly Test**
   - Vérifier la compatibilité mobile

4. **Schema.org Validator**
   - Valider les données structurées

5. **GTmetrix**
   - Performance globale
   - Optimisations recommandées

---

## 📞 Support

Pour toute question sur la configuration SEO, consultez:
- [Google Search Central](https://developers.google.com/search)
- [MDN Web Docs - SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)
- [Schema.org](https://schema.org/)

---

**Dernière mise à jour:** 5 Juin 2026
