import { DISTRICTS } from "@/lib/districts";

// ── Tipos explícitos ─────────────────────────────────────────────────────────

type QuickServiceIcon = "key" | "door" | "car" | "lock" | "shield";

export type QuickService = {
  id: string;
  label: string;
  icon: QuickServiceIcon;
};

export type Benefit = {
  title: string;
  description: string;
  icon: "clock" | "shield" | "calendar" | "receipt" | "user" | "tool";
};

export type Service = {
  title: string;
  description: string;
  /** Icono SVG pequeño (siempre presente) */
  image: string;
  /** Foto real JPEG — si existe reemplaza al icono en la tarjeta */
  photo?: string;
  alt: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type FAQ = {
  question: string;
  answer: string;
};

// ── Datos ─────────────────────────────────────────────────────────────────────

export const quickServices: QuickService[] = [
  { id: "puertas",     label: "Apertura de Casas",          icon: "door"   },
  { id: "autos",       label: "Apertura de Autos",          icon: "car"    },
  { id: "instalacion", label: "Instalación de Chapas",      icon: "shield" },
  { id: "cambio",      label: "Cambio de Combinación",      icon: "lock"   },
  { id: "cajafuerte",  label: "Apertura de Cajas Fuertes",  icon: "key"    },
];

export const benefits: Benefit[] = [
  {
    title: "Llegamos en menos de 20 minutos",
    description: "Cerrajero móvil que acude a tu ubicación en Lima con la mayor rapidez posible.",
    icon: "clock",
  },
  {
    title: "Apertura sin dañar tu chapa",
    description: "Técnicas profesionales que preservan puerta y cerradura en cada urgencia.",
    icon: "shield",
  },
  {
    title: "Disponibles las 24 horas",
    description: "Atención inmediata de día y de noche, los 7 días de la semana.",
    icon: "calendar",
  },
  {
    title: "Presupuesto claro",
    description: "Te explicamos el trabajo antes de iniciar, con precios asequibles y transparentes.",
    icon: "receipt",
  },
  {
    title: "Cerrajeros especializados",
    description: "Profesionales en cerrajería fina con base en San Borja y cobertura en todo Lima.",
    icon: "user",
  },
  {
    title: "Herramientas completas",
    description: "Equipamiento para puertas, autos, cajas fuertes, chapas digitales y más.",
    icon: "tool",
  },
];

export const services: Service[] = [
  {
    title: "Apertura de Casas y Apartamentos",
    description:
      "Urgencias las 24 horas. Abrimos la puerta de tu casa o departamento sin dañar la chapa ni la cerradura, con técnicos especializados en Lima.",
    image: "/images/services/puertas.svg",
    photo: "/hero/apertura-puertas.webp",
    alt: "Apertura de casas y apartamentos en Lima",
  },
  {
    title: "Apertura de Autos",
    description:
      "Abrimos vehículos de todas las marcas — BMW, Kia, Toyota, Mercedes Benz, Audi y más — en pocos minutos y sin rayones ni daños.",
    image: "/images/services/autos.svg",
    photo: "/hero/apertura-autos.webp",
    alt: "Apertura de autos sin daños en Lima",
  },
  {
    title: "Instalación de Chapas de Cuarto, Baño y Principales",
    description:
      "Instalamos y reparamos chapas para puertas de cuarto, baño y acceso principal. Trabajo limpio, seguro y con garantía.",
    image: "/images/services/instalacion.svg",
    photo: "/hero/instalacion-cerraduras.webp",
    alt: "Instalación de chapas de cuarto, baño y principales en Lima",
  },
  {
    title: "Instalación de Barras Cantol",
    description:
      "Colocamos barras Cantol y sistemas de seguridad adicional para reforzar puertas de madera o fierro en hogares y negocios.",
    image: "/images/services/instalacion.svg",
    photo: "/hero/barras-cantol-servicio.webp",
    alt: "Instalación de barras Cantol en Lima",
  },
  {
    title: "Instalación de Chapas Digitales",
    description:
      "Instalación y configuración de cerraduras digitales, teclados numéricos y sistemas de acceso modernos para mayor comodidad y seguridad.",
    image: "/images/services/cambio.svg",
    photo: "/hero/chapas-digitales-servicio.webp",
    alt: "Instalación de chapas digitales en Lima",
  },
  {
    title: "Cambio de Combinación de Chapa",
    description:
      "Cambiamos la combinación o el cilindro de tu cerradura cuando perdiste las llaves o quieres mayor seguridad, sin reemplazar toda la chapa.",
    image: "/images/services/cambio.svg",
    photo: "/hero/cambio-cerraduras.webp",
    alt: "Cambio de combinación de chapa en Lima",
  },
  {
    title: "Apertura de Cajas Fuertes",
    description:
      "Apertura de cajas fuertes de todas las marcas y modelos. Si extraviaste tus llaves, te brindamos la solución. Nos desplazamos a domicilio.",
    image: "/images/services/caja-fuerte.svg",
    photo: "/hero/caja-fuerte-servicio.webp",
    alt: "Apertura de cajas fuertes en Lima",
  },
];

export const features: Feature[] = [
  {
    title: "Cobertura en todo Lima",
    description:
      "Distritos del centro, sur y este con llegada rápida desde San Borja.",
  },
  {
    title: "Atención 24 horas",
    description:
      "Emergencias de cerrajería las 24 horas, los 7 días de la semana en Lima Metropolitana.",
  },
  {
    title: "Reparación y soldadura",
    description:
      "Reparación de cerraduras y soldadura de chapas con herramientas profesionales.",
  },
  {
    title: "Múltiples métodos de pago",
    description:
      "Facilitamos tu pago con las opciones que necesites al finalizar el trabajo.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Juana López",
    title: "100% recomendado",
    quote:
      "Excelentes profesionales. Llamé y llegaron al toque. Me olvidé la llave dentro de mi depa y me abrieron al instante. Los recomiendo al 100%.",
    rating: 5,
  },
  {
    name: "Manuel Pimentel",
    title: "Excelente atención",
    quote:
      "Servicio puntual y presupuesto claro. Me explicaron cómo se realizaría el trabajo sin ocasionar daños. Rápido y con calidad excepcional.",
    rating: 5,
  },
  {
    name: "Jorge Hurtado",
    title: "¡Qué buen servicio!",
    quote:
      "No tardó más de 20 minutos en llegar. Me había dejado las llaves puestas dentro. Limpio y profesional.",
    rating: 5,
  },
  {
    name: "Rosa Quispe",
    title: "Llegaron muy rápido",
    quote:
      "Se me bloqueó la puerta de entrada un domingo a la noche. Los llamé y en menos de 15 minutos ya estaban aquí. Precio justo y sin romper nada. Muy agradecida.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    title: "Abrieron mi auto perfecto",
    quote:
      "Dejé las llaves dentro de mi Kia y no sabía qué hacer. Me recomendaron este servicio y la verdad superó mis expectativas. Sin rayones, sin daños, rapidísimo.",
    rating: 5,
  },
  {
    name: "Patricia Vargas",
    title: "Profesionales de verdad",
    quote:
      "Cambiaron todas las cerraduras de mi casa en Miraflores. Trabajo impecable, puntual y con garantía. Ya tengo su número guardado para cualquier emergencia.",
    rating: 5,
  },
  {
    name: "Andrés Chávez",
    title: "Respuesta inmediata",
    quote:
      "Llamé a las 2am porque me quedé fuera de mi departamento en San Borja. Atendieron al primer timbrazo y llegaron en 18 minutos. Increíble servicio nocturno.",
    rating: 5,
  },
  {
    name: "Lucía Flores",
    title: "Mi cerrajero de confianza",
    quote:
      "Ya los he llamado dos veces: primero para abrir mi puerta y luego para cambiar la chapa. Siempre el mismo nivel de profesionalismo. Los tengo en favoritos.",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: "¿Realizan el servicio de cerrajeros a domicilio las 24 horas?",
    answer:
      "Sí. Contamos con servicio de cerrajeros a domicilio las 24 horas del día para ayudarte en cualquier inconveniente.",
  },
  {
    question: "¿Cuál es el precio estimado del servicio de cerrajeros a domicilio?",
    answer:
      "El precio depende del tipo de cerradura y el tiempo que demande el trabajo. Nuestros precios son muy asequibles; te orientamos al contactarnos.",
  },
  {
    question: "¿Necesitas un cerrajero a domicilio cerca de ti?",
    answer:
      "Contamos con cerrajeros especializados ubicados estratégicamente en todo Lima, Perú. Contáctanos ahora mismo.",
  },
  {
    question: "¿Por qué elegir nuestro servicio de cerrajeros a domicilio?",
    answer:
      "Somos una de las mejores opciones de cerrajería a domicilio en Lima. La calidad, el precio y un servicio eficaz nos respaldan, como confirman nuestros clientes.",
  },
];

/** @deprecated Usar DISTRICTS de lib/districts.ts */
export const districts = DISTRICTS.map((d) => d.name);

export const footerServices: string[] = [
  "Apertura de casas y apartamentos",
  "Apertura de autos",
  "Instalación de chapas",
  "Instalación de barras Cantol",
  "Instalación de chapas digitales",
  "Cambio de combinación de chapa",
  "Apertura de cajas fuertes",
];

export const carBrands: string[] = [
  "BMW", "Kia", "Lexus", "Volvo", "Mercedes Benz",
  "Toyota", "Audi", "Land Rover", "Mini", "Skoda",
];
