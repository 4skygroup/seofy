# Configuration des Headers de sécurité et performance

Cet exemple montre comment configurer les headers sur différents serveurs pour améliorer les Core Web Vitals et la sécurité.

## Apache (.htaccess)

Les headers de sécurité sont déjà configurés dans `.htaccess`:

```apache
# Sécurité
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# Cache
Header set Cache-Control "public, max-age=31536000" ".woff2"
Header set Cache-Control "public, max-age=86400" ".html"
```

## Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name seofyagency.com;
    
    # Compression
    gzip on;
    gzip_types text/html text/plain text/css text/javascript application/javascript application/json;
    gzip_min_length 10240;
    gzip_comp_level 6;
    gzip_vary on;
    gzip_disable "msie6";
    
    # Sécurité
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    
    # Cache
    location ~* \.(woff|woff2|ttf|otf|eot)$ {
        add_header Cache-Control "public, max-age=31536000, immutable" always;
    }
    
    location ~* \.(js|css|jpg|jpeg|png|gif|svg|webp)$ {
        add_header Cache-Control "public, max-age=31536000, immutable" always;
    }
    
    location ~* \.html$ {
        add_header Cache-Control "public, max-age=86400" always;
    }
    
    # Gzip + Brotli
    location ~* \.(js|css|html|svg|json)$ {
        gzip on;
        gzip_static on;
        add_header Vary "Accept-Encoding" always;
    }
}
```

## Cloudflare

Si vous utilisez Cloudflare:

1. **Page Rules** > Créer une règle
   - URL: `seofyagency.com/*`
   - Cache Level: Cache Everything
   - Browser Cache TTL: 1 year

2. **Caching** > Cache Rules
   - Activer Automatic Platform Optimization (APO)

3. **Speed** > Optimization
   - ✓ Auto Minify (CSS, JS, HTML)
   - ✓ Rocket Loader (JavaScript)
   - ✓ Polish (Image Optimization)

4. **Workers** > Ajouter un Worker de redirection

```javascript
// Redirects www to non-www
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === 'www.seofyagency.com') {
      url.hostname = 'seofyagency.com';
      return Response.redirect(url, 301);
    }
    return fetch(request);
  },
};
```

## Vercel (si déployé sur Vercel)

Ajouter `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Netlify

Ajouter `_headers`:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/static/*
  Cache-Control: public, max-age=31536000, immutable
```

## Tests de sécurité et performance

### OWASP Security Headers
https://securityheaders.com

### SSL/TLS
https://www.ssllabs.com/ssltest/

### Performance
- https://pagespeed.web.dev/
- https://gtmetrix.com/
- https://www.webpagetest.org/

### Core Web Vitals
- https://web.dev/measure/
- https://search.google.com/search-console
