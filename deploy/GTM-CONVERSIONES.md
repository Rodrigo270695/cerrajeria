# Conversiones con Google Tag Manager

Contenedor: **GTM-TD47QX9S** (Cerrajería Flash).

```env
NEXT_PUBLIC_GTM_ID=GTM-TD47QX9S
```

## Instalación

El snippet oficial va en el HTML:

- **`<head>`** — script GTM (`GoogleTagManagerHead` en `app/layout.tsx`)
- **`<body>`** — `<noscript>` con iframe (`GoogleTagManagerNoScript`)

Tras `npm run build`, `scripts/inject-gtm-html.mjs` inserta las etiquetas en el HTML estático para que Google y “Ver código fuente” las detecten.

## Eventos en la web

| Evento | Cuándo |
|--------|--------|
| `phone_click` | Clic en `tel:` |
| `whatsapp_click` | Clic en WhatsApp |

Configura activadores Custom Event en GTM y publica el contenedor.
