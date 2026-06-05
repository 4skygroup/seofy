# 🛠️ SCRIPT DE GÉNÉRATION D'IMAGES

Ce fichier fournit des commandes et des outils pour générer rapidement les images manquantes.

## Option 1: Avec ImageMagick (Ligne de commande)

### Installation
```bash
# Windows (avec Chocolatey)
choco install imagemagick

# macOS (avec Homebrew)
brew install imagemagick

# Linux
sudo apt-get install imagemagick
```

### Générer les images OpenGraph

```bash
#!/bin/bash

# Image par défaut
convert -size 1200x630 xc:white \
  -font Arial -pointsize 80 -fill '#0f172a' \
  -gravity center -annotate +0+0 'SEOFY' \
  -font Arial -pointsize 40 -fill '#117352' \
  -gravity south -annotate +0+30 'Agence SEO & Digital Marketing' \
  og-image.jpg

# Image SEO Geo
convert -size 1200x630 xc:'#0f172a' \
  -fill white -gravity center \
  -pointsize 80 -annotate +0-60 'SEO & GEO' \
  -pointsize 40 -annotate +0+60 'Optimisation Locale' \
  seogeo/og-image.jpg

# Image SEA SMO
convert -size 1200x630 xc:'#117352' \
  -fill white -gravity center \
  -pointsize 80 -annotate +0-60 'SEA & SMO' \
  -pointsize 40 -annotate +0+60 'Acquisition Payante' \
  seasmo/og-image.jpg

# Image Offres
convert -size 1200x630 xc:white \
  -fill '#0f172a' -gravity center \
  -pointsize 80 -annotate +0-60 'Nos Offres' \
  -fill '#117352' -pointsize 40 \
  -annotate +0+80 'SEO • SEA • SMO' \
  og-offres.jpg
```

### Optimiser les images JPG

```bash
#!/bin/bash

# Installer jpegoptim
# macOS: brew install jpegoptim
# Linux: sudo apt-get install jpegoptim

# Optimiser tous les JPGs
for file in *.jpg seogeo/*.jpg seasmo/*.jpg; do
  jpegoptim --size=150k "$file" --strip-all
done
```

---

## Option 2: Avec Python/Pillow

### Installation
```bash
pip install Pillow
```

### Script Python

```python
#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image(filename, title, subtitle, bg_color='#ffffff', text_color='#0f172a'):
    """Crée une image OpenGraph 1200x630"""
    
    img = Image.new('RGB', (1200, 630), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Essayer de charger une police, sinon utiliser la police par défaut
    try:
        title_font = ImageFont.truetype("arial.ttf", 120)
        subtitle_font = ImageFont.truetype("arial.ttf", 60)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Calcul des positions
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (1200 - title_width) // 2
    
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (1200 - subtitle_width) // 2
    
    # Dessiner le texte
    draw.text((title_x, 150), title, fill=text_color, font=title_font)
    draw.text((subtitle_x, 380), subtitle, fill='#117352', font=subtitle_font)
    
    # Sauvegarder
    img.save(filename, 'JPEG', quality=85)
    print(f"✓ {filename} créé")

# Créer toutes les images
os.makedirs('seogeo', exist_ok=True)
os.makedirs('seasmo', exist_ok=True)

create_og_image('og-image.jpg', 'SEOFY', 'Agence SEO & Digital Marketing')
create_og_image('seogeo/og-image.jpg', 'SEO & GEO', 'Optimisation Locale', '#0f172a', '#ffffff')
create_og_image('seasmo/og-image.jpg', 'SEA & SMO', 'Acquisition Payante', '#117352', '#ffffff')
create_og_image('og-offres.jpg', 'Nos Offres', 'SEO • SEA • SMO')

print("\n✓ Toutes les images OpenGraph sont créées!")
```

---

## Option 3: Avec des outils en ligne (Gratuit & Rapide)

### 1. Canva
- Aller sur https://www.canva.com
- Template: Social Media / Open Graph 1200x630
- Créer rapidement avec les couleurs Seofy
- Exporter en JPG
- Optimiser avec TinyPNG

### 2. Figma
- Créer un frame 1200x630
- Designer vos images
- Exporter en JPG/PNG

### 3. Photopea (Photoshop en ligne)
- https://www.photopea.com
- Créer des images customisées
- Télécharger les fichiers

---

## Option 4: Utiliser une API/Service

### 1. Cloudinary (Gratuit + API)

```bash
# Upload et optimisation automatique
curl -X POST \
  https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload \
  -F file=@og-image.jpg \
  -F api_key=YOUR_API_KEY \
  -F format=jpg \
  -F quality=auto
```

### 2. ImgIX

```html
<!-- Les images sont optimisées automatiquement -->
<meta property="og:image" content="https://seofy.imgix.net/og-image.jpg?w=1200&h=630&fit=crop&auto=compress" />
```

---

## Screenshots PWA (540x720 et 1280x720)

### Avec Puppeteer (Node.js)

```bash
npm install puppeteer
```

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173'); // Votre serveur local
  
  // Screenshot mobile (540x720)
  await page.setViewport({ width: 540, height: 1080 });
  await page.screenshot({ path: 'screenshot-1.png' });
  
  // Screenshot desktop (1280x720)
  await page.setViewport({ width: 1280, height: 720 });
  await page.screenshot({ path: 'screenshot-2.png' });
  
  await browser.close();
})();
```

### Avec un navigateur (Manuel)

1. Ouvrir le site en développement: `npm run dev`
2. Redimensionner la fenêtre à 540x720
3. Prendre une capture d'écran
4. Répéter pour 1280x720

---

## Optimisation des images

### TinyPNG (https://tinypng.com)
```bash
# Via API
curl --user api:YOUR_API_KEY \
  --data-binary @image.png \
  -o image-compressed.png \
  https://api.tinify.com/output
```

### ImageOptim (macOS)
- Glisser-déposer les images
- Optimisation automatique

### Squoosh (https://squoosh.app)
- Interface web
- Compression en direct
- Conversion WebP

---

## Commande complète (All-in-one)

```bash
#!/bin/bash

echo "🖼️  Génération des images SEO..."

# Créer les répertoires
mkdir -p seogeo seasmo

# Génération avec ImageMagick (si disponible)
if command -v convert &> /dev/null; then
  echo "📸 Création des images OpenGraph..."
  
  # Image par défaut
  convert -size 1200x630 xc:white \
    -font Arial -pointsize 80 -fill '#0f172a' \
    -gravity center -annotate +0+0 'SEOFY' \
    og-image.jpg
  
  # Images services
  convert -size 1200x630 xc:'#0f172a' -fill white \
    -gravity center -pointsize 80 -annotate +0+0 'SEO & GEO' \
    seogeo/og-image.jpg
  
  convert -size 1200x630 xc:'#117352' -fill white \
    -gravity center -pointsize 80 -annotate +0+0 'SEA & SMO' \
    seasmo/og-image.jpg
  
  convert -size 1200x630 xc:white -fill '#0f172a' \
    -gravity center -pointsize 80 -annotate +0+0 'Nos Offres' \
    og-offres.jpg
  
  echo "✓ Images créées"
else
  echo "⚠️  ImageMagick non installé"
  echo "Installez avec: brew install imagemagick (macOS) ou apt-get install imagemagick (Linux)"
fi

# Optimisation JPG (si jpegoptim disponible)
if command -v jpegoptim &> /dev/null; then
  echo "🗜️  Optimisation des images..."
  for file in *.jpg seogeo/*.jpg seasmo/*.jpg; do
    [ -f "$file" ] && jpegoptim --size=150k "$file" --strip-all
  done
  echo "✓ Images optimisées"
fi

echo "🎉 Génération terminée!"
```

---

## Stockage des fichiers

### Structure finale
```
public/
├── og-image.jpg
├── og-offres.jpg
├── screenshot-1.png
├── screenshot-2.png
├── seogeo/
│   └── og-image.jpg
├── seasmo/
│   └── og-image.jpg
└── ... (autres fichiers existants)
```

---

## Checklist de vérification

- [ ] Images créées
- [ ] Images optimisées (< 150KB chacune)
- [ ] Images en bon format (JPG pour OpenGraph, PNG pour screenshots)
- [ ] Dimensions correctes (1200x630 pour OG, 540x720 et 1280x720 pour PWA)
- [ ] Noms de fichiers corrects
- [ ] Fichiers placés au bon endroit

---

## Test final

```bash
# Vérifier les tailles des fichiers
ls -lh *.jpg seogeo/*.jpg seasmo/*.jpg screenshot-*.png

# Résultat attendu:
# -rw-r--r-- 1 user 100K Jun 5 og-image.jpg
# -rw-r--r-- 1 user  95K Jun 5 seogeo/og-image.jpg
# ... etc
```

✅ **Une fois les images créées, vous pouvez déployer!**
