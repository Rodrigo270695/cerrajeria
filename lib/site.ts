export const SITE = {
  name: "Cerrajero.pe",
  title: "Cerrajero en Lima a Domicilio — Atención 24 Horas",
  description:
    "Aperturas de autos, puertas y cajas fuertes. Cambio y reparación de cerraduras. Servicio de cerrajería a domicilio 24 horas en Lima. Llama al 917 065 037.",
  url: "https://cerrajero.pe",
  locale: "es_PE",
  phone: "917 065 037",
  phoneRaw: "917065037",
  phoneE164: "+51917065037",
  email: "info@cerrajero.pe",
  address: "Claudio Galeno 224, San Borja 15036",
  mapsUrl: "https://g.page/cerrajeroenlima24horas?share",
  whatsappNumber: "51917065037",
  whatsappMessage:
    "Hola, necesito un cerrajero en el distrito de ",
  arrivalTime: "menos de 20 minutos",
} as const;

export function whatsappUrl(district?: string) {
  const text = district
    ? `${SITE.whatsappMessage}${district}`
    : SITE.whatsappMessage.trim();
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Desde una tarjeta de SERVICIO: el cliente completa el distrito */
export function whatsappServiceUrl(serviceName: string) {
  const text = `Hola, quiero el servicio de *${serviceName}*. Mi distrito o ciudad es: `;
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
