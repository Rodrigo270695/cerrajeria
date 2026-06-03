# Conversiones con Google Tag Manager

Contenedor activo: **GTM-TD47QX9S** (Cerrajería Flash).

```env
NEXT_PUBLIC_GTM_ID=GTM-TD47QX9S
```

## Eventos que envía la web

| Evento (Custom Event) | Cuándo se dispara        |
|-----------------------|--------------------------|
| `phone_click`         | Clic en enlace `tel:`    |
| `whatsapp_click`      | Clic en enlace WhatsApp  |

## Configurar en GTM

1. **Activadores** → Nuevo → **Evento personalizado** → `phone_click` (repetir para `whatsapp_click`).
2. **Etiquetas** → Conversión de Google Ads (o GA4) → activador correspondiente.
3. Publicar contenedor.
