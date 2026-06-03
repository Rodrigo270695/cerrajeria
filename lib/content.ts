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
  { id: "sistema",    label: "Cambio de Sistema",         icon: "key"    },
  { id: "puertas",   label: "Apertura de Puertas",        icon: "door"   },
  { id: "autos",     label: "Apertura de Autos",          icon: "car"    },
  { id: "cerraduras",label: "Cambio de Cerraduras",       icon: "lock"   },
  { id: "instalacion",label:"Instalación de Cerraduras",  icon: "shield" },
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
    description: "Profesionales en cerrajería fina, ubicados estratégicamente en todo Lima.",
    icon: "user",
  },
  {
    title: "Herramientas completas",
    description: "Equipamiento para puertas, autos, cajas fuertes, duplicado de llaves y más.",
    icon: "tool",
  },
];

export const services: Service[] = [
  {
    title: "Apertura de Caja Fuertes",
    description:
      "Apertura rápida de caja fuerte, todas las marcas y modelos. Si extraviaste tus llaves no te preocupes, nosotros te brindamos la solución. Nos desplazamos en moto.",
    image: "/images/services/caja-fuerte.svg",
    photo: "/hero/caja-fuerte-servicio.jpeg",
    alt: "Servicio de apertura de cajas fuertes en Lima",
  },
  {
    title: "Apertura de Puertas de Casas o Residencias",
    description:
      "Atendemos urgencias las 24 horas. Abrimos cerraduras sin comprometer la puerta ni la cerradura, con cerrajeros especializados en apertura de puertas.",
    image: "/images/services/puertas.svg",
    photo: "/hero/apertura-puertas.jpeg",
    alt: "Apertura de puertas de casas y residencias en Lima",
  },
  {
    title: "Cerrajería o Apertura de Autos",
    description:
      "Abrimos autos de marcas como BMW, Kia, Lexus, Volvo, Mercedes Benz, Toyota, Audi y más, en pocos minutos y sin hacer daños.",
    image: "/images/services/autos.svg",
    photo: "/hero/apertura-autos.jpeg",
    alt: "Apertura de vehículos sin daños en Lima",
  },
  {
    title: "Instalación de Cerraduras de Seguridad",
    description:
      "Instalación de cerraduras de seguridad para puertas de madera o fierro, desde las más sencillas hasta las más sofisticadas.",
    image: "/images/services/instalacion.svg",
    photo: "/hero/instalacion-cerraduras.jpeg",
    alt: "Instalación de cerraduras de seguridad",
  },
  {
    title: "Amaestramiento de Cerraduras y Candados",
    description:
      "Una llave maestra puede abrir más de un cilindro. Servicio completo de amaestramiento de cerraduras y candados.",
    image: "/images/services/amaestramiento.svg",
    photo: "/hero/amaestramiento-servicio.jpeg",
    alt: "Amaestramiento de cerraduras y candados",
  },
  {
    title: "Cambio de Cerraduras o Pines",
    description:
      "Ideal cuando perdiste tu llave o sufriste robo de llaves originales. Cambio de cerraduras o pines con rapidez.",
    image: "/images/services/cambio.svg",
    photo: "/hero/cambio-cerraduras.jpeg",
    alt: "Cambio de cerraduras y pines en Lima",
  },
];

export const features: Feature[] = [
  {
    title: "Cobertura en todo Lima",
    description:
      "Distritos del centro, sur y este con llegada rápida gracias a nuestra ubicación estratégica.",
  },
  {
    title: "Duplicado de llaves",
    description:
      "Solución integral: aperturas, cambios, reparación y duplicado en un solo servicio.",
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
  "Apertura de puertas",
  "Apertura de autos",
  "Apertura de cajas fuertes",
  "Cambio de cerraduras y bombines",
  "Instalación de cerraduras",
  "Apertura de todo tipo de cerraduras",
];

export const carBrands: string[] = [
  "BMW", "Kia", "Lexus", "Volvo", "Mercedes Benz",
  "Toyota", "Audi", "Land Rover", "Mini", "Skoda",
];
