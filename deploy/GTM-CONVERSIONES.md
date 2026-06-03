# Conversiones con Google Tag Manager

El sitio envía eventos al **dataLayer**. El cliente configura las etiquetas de conversión **dentro de GTM** (no hace falta tocar código).

## 1. ID del contenedor

Cuando te pasen el GTM del cliente, ponlo en `.env` (local y VPS):

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Rebuild y reinicia PM2.

## 2. Eventos que ya envía la web

| Evento (Custom Event) | Cuándo se dispara        | Uso en GTM              |
|-----------------------|--------------------------|-------------------------|
| `phone_click`         | Clic en enlace `tel:`    | Conversión llamada      |
| `whatsapp_click`      | Clic en enlace WhatsApp  | Conversión WhatsApp     |
| `cookie_consent`      | Usuario acepta cookies   | Consentimiento / GA4    |

Payload de ejemplo:

```js
{ event: 'phone_click', conversion_type: 'phone' }
{ event: 'whatsapp_click', conversion_type: 'whatsapp' }
{ event: 'cookie_consent', consent: 'granted' }
```

## 3. Crear conversión en GTM (resumen)

1. **Activadores** → Nuevo → **Evento personalizado** → nombre del evento: `phone_click` (repetir para `whatsapp_click`).
2. **Etiquetas** → Nueva etiqueta **Conversión de Google Ads** (o GA4 event) → activador `phone_click`.
3. Publicar contenedor.

## 4. Cookies

GTM **solo carga si el usuario acepta cookies** (banner inferior). Sin aceptar, no hay seguimiento.

## 5. Páginas legales

- `/privacidad`
- `/aviso-legal`

Enlaces en el footer. Google Ads suele pedir URL de política de privacidad en la campaña.
