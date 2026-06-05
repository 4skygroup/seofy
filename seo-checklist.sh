#!/bin/bash
# Checklist SEO - Seofy
# Ce script vérifie que tous les éléments SEO sont en place

echo "🔍 Vérification de la configuration SEO pour Seofy..."
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
total=0
passed=0

# Fonction de test
check_file() {
    local file=$1
    local description=$2
    total=$((total + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description - $file"
        passed=$((passed + 1))
    else
        echo -e "${RED}✗${NC} $description - $file"
    fi
}

check_string_in_file() {
    local file=$1
    local search=$2
    local description=$3
    total=$((total + 1))
    
    if grep -q "$search" "$file" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $description"
        passed=$((passed + 1))
    else
        echo -e "${RED}✗${NC} $description"
    fi
}

echo "=== 📁 FICHIERS RACINE ==="
check_file "./robots.txt" "robots.txt"
check_file "./sitemap.xml" "sitemap.xml"
check_file "./sitemap-images.xml" "sitemap-images.xml"
check_file "./manifest.webmanifest" "manifest.webmanifest"
check_file "./.htaccess" ".htaccess"
check_file "./index.html" "index.html"
check_file "./SEO_GUIDE.md" "SEO_GUIDE.md"

echo ""
echo "=== 🏷️  META TAGS DANS HTML ==="
check_string_in_file "./index.html" "og:title" "Open Graph - og:title"
check_string_in_file "./index.html" "og:description" "Open Graph - og:description"
check_string_in_file "./index.html" "twitter:card" "Twitter Cards - twitter:card"
check_string_in_file "./index.html" "rel=\"canonical\"" "Canonical link"
check_string_in_file "./index.html" "manifest.webmanifest" "Manifest link"
check_string_in_file "./index.html" "application/ld+json" "Schema.org JSON-LD"

echo ""
echo "=== ⚛️  FICHIERS REACT ==="
check_file "./src/hooks/useMetaTags.ts" "Hook useMetaTags"
check_file "./src/pages/Home.tsx" "Page Home"
check_file "./src/pages/SeoGeo.tsx" "Page SeoGeo"
check_file "./src/pages/SeaSmo.tsx" "Page SeaSmo"
check_file "./src/pages/Offres.tsx" "Page Offres"

echo ""
echo "=== 📸 LAZY LOADING ==="
check_string_in_file "./src/components/Section.tsx" "loading=\"lazy\"" "Section.tsx - loading lazy"
check_string_in_file "./src/components/HeroComp.tsx" "loading=\"lazy\"" "HeroComp.tsx - loading lazy"
check_string_in_file "./src/components/Navbar.tsx" "loading=\"lazy\"" "Navbar.tsx - loading lazy"
check_string_in_file "./src/components/services/ServiceCard.tsx" "loading=\"lazy\"" "ServiceCard.tsx - loading lazy"

echo ""
echo "=== 🗜️  COMPRESSION GZIP ==="
check_string_in_file "./vite.config.ts" "vite-plugin-compression" "Vite compression plugin"
check_string_in_file "./vite.config.ts" "algorithm.*gzip" "Algorithm set to gzip"
check_string_in_file "./package.json" "vite-plugin-compression" "Dépendance installée"

echo ""
echo "=== 📋 RÉSUMÉ ==="
echo -e "${YELLOW}Tests complétés: $passed/$total${NC}"

if [ $passed -eq $total ]; then
    echo -e "${GREEN}✓ Tous les tests SEO sont passés !${NC}"
    exit 0
else
    failed=$((total - passed))
    echo -e "${RED}✗ $failed tests ont échoué${NC}"
    exit 1
fi
