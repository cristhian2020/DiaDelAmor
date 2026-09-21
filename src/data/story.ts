
export interface Memory {
  id: number;
  title: string;
  date: string;
  location: string;
  note: string;
  image?: string;
  images?: string[];
  rotation?: number; // ángulo sutil de inclinación para estética polaroid
}

export interface LoveReason {
  id: number;
  title: string;
  description: string;
  tag: string;
}

export interface StoryConfig {
  couple: {
    partner1: string;
    partner2: string;
    togetherSince: string; // Formato ISO: YYYY-MM-DDTHH:mm:ss
    anniversaryDateText: string;
  };
  hero: {
    preTitle: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  counter: {
    title: string;
    subtitle: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    memories: Memory[];
  };
  reasons: {
    title: string;
    subtitle: string;
    items: LoveReason[];
  };
  letter: {
    title: string;
    subtitle: string;
    sealText: string;
    date: string;
    to: string;
    body: string[];
    closing: string;
    from: string;
  };
  music?: {
    title: string;
    url: string;
  };
  finale: {
    quote: string;
    author: string;
    celebrationText: string;
    buttonText: string;
  };
}

export const storyData: StoryConfig = {
  music: {
    title: "Nuestra Canción",
    url: "/assets/musica.mp3",
  },
  couple: {
    partner1: "Guadalupe",
    partner2: "Cristhian",
    togetherSince: "2023-12-25T20:00:00", 
    anniversaryDateText: "25 de Diciembre de 2023",
  },
  hero: {
    preTitle: "Nuestra Historia de Amor",
    title: "Cada segundo a tu lado es mi momento favorito",
    subtitle: "Una pequeña colección de nuestros recuerdos, nuestras risas y el camino que seguimos construyendo juntos día tras día.",
    buttonText: "Descubrir nuestra historia",
  },
  counter: {
    title: "El Tiempo Contigo",
    subtitle: "Los mejores días, horas y latidos de mi vida desde que empezamos a caminar juntos:",
  },
  timeline: {
    title: "Nuestros Momentos Inolvidables",
    subtitle: "Pasa el cursor o toca cada Polaroid para descubrir la anécdota detrás de la foto.",
    memories: [
      {
        id: 1,
        title: "El Primer Desayuno/Cita",
        date: "29 de Diciembre, 2023",
        location: "Aquel rincón donde todo empezó",
        note: "Las horas pasaron como minutos. Supe que tus ojos tenían la calidez que siempre había buscado.",
        image: "/assets/primera cita.jpeg",
        rotation: -2.5,
      },
      {
        id: 2,
        title: "Nuestra Primera Escapada",
        date: "30 de Diciembre, 2024",
        location: "Corani",
        note: "El frío de la noche, una manta compartida y la certeza de que nunca querría soltarte la mano.",
        image: "/assets/corani.jpeg",
        rotation: 3,
      },
      {
        id: 3,
        title: "Viaje a Uyuni",
        date: "12 de Febrero, 2026",
        location: "Uyuni Bolivia",
        note: "En Uyuni senti que toque el cielo con mis manos y estava de la mano contigo.",
        images: [
          "/assets/uyuni2.jpeg",
          "/assets/uyuni1.jpeg",
          "/assets/uyuni3.jpeg",
        ],
        rotation: -1.8,
      },
      {
        id: 4,
        title: "Viajecito a la Paz",
        date: "16 de Febrero, 2026",
        location: "La Paz Bolivia",
        note: "Que bien la pasamos en la paz nuestra ciudad maravilla.",
        image: "/assets/la paz2.jpeg",
        rotation: 2.2,
      },
      {
        id: 5,
        title: "Me celebraste mi primer cumpleaños",
        date: "27 de Abril, 2024",
        location: "Dumbo",
        note: "Ese dia fue tan especial para mi, me hiciste sentir tan especial en mi dia, por tus palabras y por estar siempre a mi lado.",
        images: [
          "/assets/cumple.jpeg",
          "/assets/cumple2.jpeg",
          "/assets/cunple3.jpeg",
        ],
        rotation: -3,
      },
      {
        id: 6,
        title: "Celebrando tu cumple",
        date: "12 de Febrero",
        location: "Pastas",
        note: "Recuerdo este dia por que te festeje tu cumple y lo pasamos riquisimo!",
        image: "/assets/cumpleOsa.jpeg",
        rotation: 1.5,
      },
        {
        id: 7,
        title: "Comiedo Pollito Kingdom",
        date: "Siempre gg",
        location: "Kingdom",
        note: "Lo que mas me gusta hacer es comerme un pollito Kingdom contigo :D",
        image: "/assets/kindon.jpeg",
        rotation: 1.5,
      },
        {
        id: 8,
        title: " En una Boda",
        date: "22 de Agosto",
        location: "Cliza Bolivia",
        note: "En esta boda me di cuenta que la pasaria increíble contigo y que eres la indicada para mi :D",
        image: "/assets/boda.jpeg",
        rotation: 1.5,
      }
      ,
        {
        id: 9,
        title: " Y muchos planes mas ",
        date: "Pasado, Presente y Futuro",
        location: "Juntos",
        note: "Ajdunto aqui citas , paseos y  muchos planes que tivemos juntos <3",
        images: [
          "/assets/cita.jpeg",
          "/assets/cita2.jpeg",
          "/assets/manilla.jpeg",
          "/assets/teatro.jpeg",
          "/assets/alacita.jpeg",],
        rotation: 1.5,
      }
    ],
  },
  reasons: {
    title: "Razones por las que te Amo",
    subtitle: "Podría escribir un libro entero, pero aquí hay algunas de las muchas cosas que hacen que me enamore de ti una y otra vez.",
    items: [
      {
        id: 1,
        title: "Tu forma de sonreír",
        description: "Esa sonrisa espontánea que ilumina cualquier día gris y contagia paz con solo mirarla.",
        tag: "Luz y alegría",
      },
      {
        id: 2,
        title: "Tu ternura infinita",
        description: "La manera tan dulce y sincera con la que cuidas los pequeños detalles y me haces sentir especial.",
        tag: "Incondicional",
      },
      {
        id: 3,
        title: "Nuestras pláticas interminables",
        description: "Poder hablar de todo y de nada por horas sin darnos cuenta de cómo vuela el tiempo.",
        tag: "Conexión única",
      },
      {
        id: 4,
        title: "Tu abrazo como hogar",
        description: "Ese instante en el que me abrazas y todo el ruido del mundo desaparece. Eres mi refugio.",
        tag: "Mi lugar seguro",
      },
      {
        id: 5,
        title: "Tu pasión y valentía",
        description: "Ver el empeño que pones en tus sueños y cómo nunca te rindes ante las dificultades.",
        tag: "Admiración pura",
      },
      {
        id: 6,
        title: "Ser equipo contigo",
        description: "Caminar juntos, celebrando cada victoria y apoyándonos en cada reto con complicidad.",
        tag: "Compañerismo",
      },
    ],
  },
  letter: {
    title: "Una Carta Para Ti",
    subtitle: "Toca el sello para abrir el sobre y leer lo que guarda mi corazón.",
    sealText: "Con Amor",
    date: "21 de Septiembre",
    to: "Para la persona que cambió mi mundo:",
    body: [
      "A veces las palabras cotidianas se quedan cortas para expresar todo lo que representas en mi vida. Llegaste sin anunciarte, pero te convertiste en la respuesta a preguntas que ni siquiera sabía que tenía.",
      "Amo cada faceta tuya: tu risa cuando algo te divierte de verdad, la seriedad con la que defiendes lo que crees, y la dulzura con la que me miras cuando crees que no me doy cuenta.",
      "Gracias por convertir los días normales en recuerdos memorables, por elegirme, por entenderme incluso en mis silencios y por enseñarme que el amor verdadero no es perfecto, pero sí es cálido, seguro y profundamente libre.",
      "Prometo seguir cuidando de ti, soñar a tu lado y recordarte cada día lo profundamente afortunado  que soy de tenerte Guadalupe mi Osita. "
    ],
    closing: "Por siempre y para siempre,",
    from: "Tu Oso Mugroso :D.",
  },
  finale: {
    quote: "Si tuviera que volver a vivir mi vida, te buscaría mucho antes para poder amarte más tiempo.",
    author: "Para siempre juntos",
    celebrationText: "¡Feliz Día del Amor y la Amistad!",
    buttonText: "Hacer llover amor 💖",
  }
};
