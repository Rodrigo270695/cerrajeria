import { SITE } from "@/lib/site";

const updatedAt = "3 de junio de 2026";

export const privacyPolicy = {
  title: "Política de privacidad",
  description: `${SITE.name} respeta tu privacidad. Esta política explica qué datos recopilamos, para qué los usamos y cuáles son tus derechos.`,
  updatedAt,
  sections: [
    {
      id: "responsable",
      title: "1. Responsable del tratamiento",
      paragraphs: [
        `${SITE.name} es responsable del tratamiento de los datos personales obtenidos a través del sitio web ${SITE.url.replace("https://", "")}.`,
        `Domicilio: ${SITE.address}. Correo: ${SITE.email}. Teléfono: ${SITE.phone}.`,
      ],
    },
    {
      id: "datos",
      title: "2. Datos que recopilamos",
      paragraphs: [
        "Al navegar en nuestro sitio podemos tratar:",
      ],
      list: [
        "Datos técnicos: dirección IP, tipo de navegador, páginas visitadas, tiempo de visita.",
        "Datos de cookies y tecnologías similares para medición y publicidad.",
        "Datos que nos proporciones al contactarnos por teléfono, WhatsApp o correo.",
      ],
    },
    {
      id: "cookies",
      title: "3. Cookies y Google Tag Manager",
      paragraphs: [
        "Utilizamos cookies propias y de terceros. Con tu consentimiento activamos Google Tag Manager (GTM) y herramientas relacionadas (Google Ads) para analizar el tráfico y medir conversiones (por ejemplo, clics en llamar o WhatsApp).",
        "Puedes aceptar o rechazar las cookies no esenciales desde el banner al entrar al sitio. Si las rechazas, no cargaremos GTM ni scripts de medición.",
      ],
    },
    {
      id: "finalidad",
      title: "4. Finalidad del tratamiento",
      paragraphs: ["Tratamos los datos para:"],
      list: [
        "Prestar el servicio de cerrajería solicitado.",
        "Atender consultas y urgencias.",
        "Medir el rendimiento del sitio y campañas publicitarias.",
        "Mejorar la experiencia del usuario y la seguridad del sitio.",
      ],
    },
    {
      id: "legitimo",
      title: "5. Base legal",
      paragraphs: [
        "El tratamiento se basa en tu consentimiento (cookies/analytics), la ejecución de medidas precontractuales o contractuales (solicitud de servicio) y el interés legítimo del titular (seguridad y mejora del servicio), conforme a la Ley N.° 29733 y su reglamento.",
      ],
    },
    {
      id: "terceros",
      title: "6. Cesión a terceros",
      paragraphs: [
        "Podemos compartir datos con proveedores que nos ayudan a operar el sitio, como Google (Analytics, Ads, Tag Manager). Estos proveedores pueden procesar datos fuera del Perú bajo sus propias políticas.",
      ],
    },
    {
      id: "derechos",
      title: "7. Tus derechos",
      paragraphs: [
        "Puedes ejercer los derechos de acceso, rectificación, cancelación, oposición, revocación del consentimiento y otros previstos en la normativa peruana escribiendo a " + SITE.email + ".",
      ],
    },
    {
      id: "conservacion",
      title: "8. Conservación",
      paragraphs: [
        "Conservamos los datos el tiempo necesario para las finalidades indicadas y para cumplir obligaciones legales.",
      ],
    },
    {
      id: "cambios",
      title: "9. Cambios",
      paragraphs: [
        "Podemos actualizar esta política. Publicaremos la versión vigente en esta misma URL.",
      ],
    },
  ],
} as const;

export const legalNotice = {
  title: "Aviso legal",
  description: `Información legal sobre el titular del sitio web ${SITE.url} y las condiciones generales de uso.`,
  updatedAt,
  sections: [
    {
      title: "1. Titular del sitio",
      paragraphs: [
        `Denominación comercial: ${SITE.name}.`,
        `Sitio web: ${SITE.url}.`,
        `Dirección: ${SITE.address}.`,
        `Teléfono: ${SITE.phone}. Correo electrónico: ${SITE.email}.`,
      ],
    },
    {
      title: "2. Objeto",
      paragraphs: [
        "Este sitio web ofrece información sobre servicios de cerrajería a domicilio en Lima Metropolitana y permite contactar con el negocio por teléfono o WhatsApp.",
      ],
    },
    {
      title: "3. Condiciones de uso",
      paragraphs: [
        "El acceso al sitio implica la aceptación de este aviso legal y de la política de privacidad. El usuario se compromete a un uso lícito del sitio.",
      ],
    },
    {
      title: "4. Propiedad intelectual",
      paragraphs: [
        "Los contenidos del sitio (textos, imágenes, logotipos, diseño) pertenecen a " + SITE.name + " o se usan con autorización. Queda prohibida su reproducción sin consentimiento.",
      ],
    },
    {
      title: "5. Responsabilidad",
      paragraphs: [
        "El titular no se hace responsable de daños derivados de un uso indebido del sitio, interrupciones del servicio o contenidos de sitios enlazados de terceros.",
      ],
    },
    {
      title: "6. Legislación aplicable",
      paragraphs: [
        "Este aviso se rige por la legislación peruana. Para cualquier controversia serán competentes los tribunales de Lima, salvo disposición legal en contrario.",
      ],
    },
  ],
} as const;
