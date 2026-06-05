# 📸 Images à ajouter au dossier `/public`

Ce fichier liste les images nécessaires pour compléter l'implémentation SEO et le PWA de Seofy.

## Images OpenGraph (Réseaux Sociaux)

Ces images sont utilisées quand le site est partagé sur les réseaux sociaux.

### 1. `/public/og-image.jpg`
- **Dimensions:** 1200x630px
- **Utilisation:** Image par défaut pour tous les partages sociaux
- **Format:** JPG optimisé
- **Contenu:** Logo Seofy + Tagline "Agence SEO & Digital Marketing"
- **Référencé dans:**
  - `index.html` (meta og:image)
  - Toutes les pages (via hook useMetaTags)

### 2. `/public/seogeo/og-image.jpg`
- **Dimensions:** 1200x630px
- **Utilisation:** Image pour la page SEO & GEO
- **Format:** JPG optimisé
- **Contenu:** Graphique ou icône SEO Geo + texte "SEO & GEO"
- **Référencé dans:** `src/pages/SeoGeo.tsx`

### 3. `/public/seasmo/og-image.jpg`
- **Dimensions:** 1200x630px
- **Utilisation:** Image pour la page SEA & SMO
- **Format:** JPG optimisé
- **Contenu:** Graphique ou icône SEA/SMO + texte "SEA & SMO"
- **Référencé dans:** `src/pages/SeaSmo.tsx`

### 4. `/public/og-offres.jpg`
- **Dimensions:** 1200x630px
- **Utilisation:** Image pour la page Offres/Services
- **Format:** JPG optimisé
- **Contenu:** Montage des deux services (SEO + SEA)
- **Référencé dans:** `src/pages/Offres.tsx`

## Screenshots PWA

Ces images sont utilisées pour l'installation de l'app en tant que PWA.

### 1. `/public/screenshot-1.png`
- **Dimensions:** 540x720px (format étroit/mobile)
- **Format:** PNG
- **Contenu:** Vue complète du site sur mobile
- **Référencé dans:** `manifest.webmanifest` (form_factor: "narrow")

### 2. `/public/screenshot-2.png`
- **Dimensions:** 1280x720px (format large/desktop)
- **Format:** PNG
- **Contenu:** Vue du site sur desktop
- **Référencé dans:** `manifest.webmanifest` (form_factor: "wide")

## Format et Optimisation

### Pour les images OpenGraph (JPG)

```bash
# Avec ImageMagick
convert -size 1200x630 canvas:white \
  -fill black -pointsize 72 -gravity center \
  -annotate +0+0 "SEOFY" og-image.jpg

# Optimisation
jpegoptim --size=150k og-image.jpg --strip-all
```

### Pour les screenshots PWA (PNG)

```bash
# Optimisation
pngquant --quality=80-90 screenshot-1.png -o screenshot-1-optimized.png
optipng -o2 screenshot-1-optimized.png
```

## Checklist des images

- [ ] `/public/og-image.jpg` - Image par défaut (1200x630px)
- [ ] `/public/seogeo/og-image.jpg` - Image SEO Geo (1200x630px)
- [ ] `/public/seasmo/og-image.jpg` - Image SEA SMO (1200x630px)
- [ ] `/public/og-offres.jpg` - Image Offres (1200x630px)
- [ ] `/public/screenshot-1.png` - Screenshot mobile (540x720px)
- [ ] `/public/screenshot-2.png` - Screenshot desktop (1280x720px)

## Serveurs d'images recommandés

Si vous voulez redimensionner les images dynamiquement:

### Imgix
```html
<meta property="og:image" content="https://seofy.imgix.net/og-image.jpg?w=1200&h=630&fit=crop" />
```

### Cloudinary
```html
<meta property="og:image" content="https://res.cloudinary.com/seofy/image/upload/w_1200,h_630,c_fill/og-image.jpg" />
```

## Considérations de performance

### Compression
- JPG: Viser ~100-150KB maximum
- PNG: Viser ~200-300KB maximum
- Utiliser des outils comme TinyPNG ou Squoosh

### Format WebP
Ajouter également des versions WebP pour les navigateurs modernes:
```html
<picture>
  <source type="image/webp" srcset="og-image.webp">
  <img src="og-image.jpg" alt="Seofy">
</picture>
```

### Responsive Images
Pour les images du site (pas OpenGraph):
```html
<img 
  src="image-sm.jpg" 
  srcset="image-md.jpg 768w, image-lg.jpg 1200w" 
  loading="lazy"
  alt="Description"
/>
```

## Validation

Une fois les images ajoutées, testez avec:

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/sharing/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/

Exemple de validation Facebook:
```
https://developers.facebook.com/tools/debug/sharing/?q=https%3A%2F%2Fseofyagency.com%2F
```
