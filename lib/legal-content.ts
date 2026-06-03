import { SITE } from "@/lib/site";

const updatedAt = "3 de junio de 2026";

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
        "El acceso al sitio implica la aceptación de este aviso legal. El usuario se compromete a un uso lícito del sitio.",
      ],
    },
    {
      title: "4. Propiedad intelectual",
      paragraphs: [
        "Los contenidos del sitio (textos, imágenes, logotipos, diseño) pertenecen a " +
          SITE.name +
          " o se usan con autorización. Queda prohibida su reproducción sin consentimiento.",
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
