const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://cerrajeriaflash.pe";

export const SITE = {
  name: "Cerrajería Flash",
  title: "Cerrajero en Lima a Domicilio — Atención 24 Horas",
  description:
    "Aperturas de autos, puertas y cajas fuertes. Cambio y reparación de cerraduras. Servicio de cerrajería a domicilio 24 horas en Lima. Llama al 918 282 901.",
  url: siteUrl,
  locale: "es_PE",
  phone: "918 282 901",
  phoneRaw: "918282901",
  phoneE164: "+51918282901",
  email: "info@cerrajeriaflash.pe",
  streetAddress: "Jr. Enrique Seoane 324",
  addressLocality: "San Borja",
  addressRegion: "Lima",
  postalCode: "15036",
  addressCountry: "PE",
  address: "Jr. Enrique Seoane 324, San Borja",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jr.+Enrique+Seoane+324,+San+Borja,+Lima,+Peru",
  geo: {
    latitude: -12.1008,
    longitude: -77.0021,
  },
  whatsappNumber: "51918282901",
  whatsappMessage:
    "Hola, necesito un cerrajero en el distrito de ",
  arrivalTime: "menos de 20 minutos",
  logoPath: "/logoico.png",
  logoSize: 512,
} as const;

export function getSiteLogoUrl(): string {
  return `${SITE.url}${SITE.logoPath}`;
}

export function whatsappUrl(district?: string) {
  const text = district
    ? `${SITE.whatsappMessage}${district}`
    : SITE.whatsappMessage.trim();
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Desde una tarjeta de SERVICIO: incluye distrito si ya está en la página */
export function whatsappServiceUrl(serviceName: string, districtName?: string) {
  const text = districtName
    ? `Hola, quiero el servicio de *${serviceName}* en el distrito de *${districtName}*.`
    : `Hola, quiero el servicio de *${serviceName}*. Mi distrito es: `;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Desde una tarjeta de DISTRITO: el cliente completa el servicio */
export function whatsappDistrictUrl(districtName: string) {
  const text = `Hola, vengo del distrito de *${districtName}* y quiero el servicio de: `;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${SITE.phoneRaw}`;
}
