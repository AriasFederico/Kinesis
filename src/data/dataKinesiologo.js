import logo from '../assets/logo.png';

const CLINIC_NAME = 'Kinesis';
const SECOND_NAME = 'CENTRO DE KINESIOLOGÍA & FISIOTERAPIA';
const PHONE_NUMBER = '5491112345678'; // Número sin espacios ni símbolos (+, -, etc.)

// Helper function para armar la URL de WhatsApp limpia
const buildWaLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const dataKinesiologo = {
  logo: {
    clinicName: CLINIC_NAME,
    secondName: SECOND_NAME,
    src: logo,
  },

  header: {
    clinicName: CLINIC_NAME,
    nav_links: [
      { text: 'Inicio', href: '#' },
      { text: 'Servicios', href: '#services' },
      { text: 'Nosotros', href: '#about' },
      { text: 'Ubicación', href: '#location' },
    ],
    cta: {
      text: 'Reservar',
      href: buildWaLink('Hola!, me gustaría agendar un turno.'),
    },
  },

  hero: {
    topSection: '- KINESIOLOGÍA & MOVIMIENTO',
    title: 'La arquitectura del ', // con ::before 'humano'
    text: 'Restauramos la libertad de tu cuerpo con precisión clínica y calidez humana. Cada sesión es un viaje hacia tu equilibrio físico.',
    ctas: [
      {
        text: 'Reservar por WhatsApp',
        href: buildWaLink('Hola!, me gustaría agendar un turno.'),
      },
      { text: 'Ver servicios', href: '#services', variant: 'secondary' },
    ],
  },

  team: {
    top_section: '- EL COLECTIVO',
    title: 'Especialistas en cada zona del cuerpo',
    text: 'Destacamos la habilidad y la especialización por encima de la apariencia. Cada profesional enfoca su práctica en un área concreta del sistema músculo-esquelético.',
    items: [
      {
        name: 'Lic. Marina Sosa',
        speciality: 'Kinesiología Deportiva',
        exp: '12 años de práctica',
      },
      {
        name: 'Lic. Tomás Rinaldi',
        speciality: 'Rehabilitación Postural',
        exp: '9 años de práctica',
      },
      {
        name: 'Lic. Sofía Beltrán',
        speciality: 'Fisioterapia Traumato.',
        exp: '14 años de práctica',
      },
    ],
  },

  coverages: {
    top_section: '- COBERTURA',
    title: 'Obras sociales',
    text: 'Trabajamos con las principales obras sociales y prepagas. Verificá tu cobertura antes de tu primera sesión escribiéndonos por WhatsApp.',
    items: [
      'Swiss Medical',
      'OSPERGHYAR',
      'Union Personal',
      'OSDE',
      'Galeno',
      'Omint',
      'Medifé',
      'IOMA',
      'OSUTHGRA',
      'PAMI',
      'OSECAC',
      'AcaSalud',
    ],
  },

  services: {
    topSection: '- ESPECIALIDADES',
    title: 'Tres caminos hacia', // con ::before 'el equilibrio',
    items: [
      {
        id: '01',
        title: 'Rehabilitación',
        text: 'Recuperación guiada tras lesiones o cirugías. Diseñamos programas progresivos que restauran la función, la fuerza y la confianza en tu cuerpo.',
        src: 'https://media.base44.com/images/public/6a601fd5ea6251144ad44d01/9cfdba2f9_generated_93b0eff8.png',
        duration: '.6',
      },
      {
        id: '02',
        title: 'Kinesiología Deportiva',
        text: 'Optimización del rendimiento y prevención de lesiones para atletas. Tratamiento manual y movimiento consciente al servicio de tu meta.',
        src: 'https://media.base44.com/images/public/6a601fd5ea6251144ad44d01/98b9a6197_generated_7dbcb1f5.png',
        duration: '.9',
      },
      {
        id: '03',
        title: 'Corrección Postural',
        text: 'Reeducación postural integral. Liberamos tensiones crónicas y realineamos tu cuerpo para un bienestar sostenible en el día a día.',
        src: 'https://media.base44.com/images/public/6a601fd5ea6251144ad44d01/6ba65ae08_generated_636916f7.png',
        duration: '1.2',
      },
    ],
  },

  about: {
    topSection: '- FILOSOFÍA',
    title: 'Un espacio pensado para tu', // con ::beffore 'recuperacion'
    text: [
      'Creemos en una kinesiología que escucha antes de tocar. Combinamos evaluación clínica precisa con un trato cálido y personalizado, porque cada cuerpo cuenta una historia única.',
      'Nuestro consultorio es un refugio de calma: luz natural, líneas limpias y silencio. El entorno adecuado para que tu cuerpo haga lo que mejor sabe hacer: sanar.',
    ],
    src: 'https://media.base44.com/images/public/6a601fd5ea6251144ad44d01/9bcd13c8b_generated_eaedc4ab.png',
  },

  testimonies: {
    topSection: '- VOCES QUE SANAN',
    title: 'Historias de', // con after:: 'de recuperación'
    items: [
      {
        text: 'Después de mi cirugía de rodilla creí que no volvería a caminar sin dolor. El acompañamiento fue paciente, preciso y profundamente humano. Hoy vuelvo a senderismo.',
        user: 'María González',
        adjetive: 'Rehabilitación post-quirúrgica',
        duration: '.6',
      },
      {
        text: 'Como corredor de larga distancia, las lesiones eran constantes. El enfoque no solo trató el síntoma: entendió mi cuerpo y me devolvió confianza en cada zancada.',
        user: 'Lucas Fernández',
        adjetive: 'Kinesiología deportiva',
        duration: '.9',
      },
      {
        text: 'Años de dolor de espalda por el trabajo de oficina se disolvieron en pocas sesiones. La calma del consultorio y la escucha real marcaron toda la diferencia.',
        user: 'Carla Méndez',
        adjetive: 'Corrección postural',
        duration: '1.2',
      },
      {
        text: 'Años de dolor de espalda por el trabajo de oficina se disolvieron en pocas sesiones. La calma del consultorio y la escucha real marcaron toda la diferencia.',
        user: 'Carla Méndez',
        adjetive: 'Corrección postural',
        duration: '1.2',
      },
      {
        text: 'Años de dolor de espalda por el trabajo de oficina se disolvieron en pocas sesiones. La calma del consultorio y la escucha real marcaron toda la diferencia.',
        user: 'Carla Méndez',
        adjetive: 'Corrección postural',
        duration: '1.2',
      },
      {
        text: 'Años de dolor de espalda por el trabajo de oficina se disolvieron en pocas sesiones. La calma del consultorio y la escucha real marcaron toda la diferencia.',
        user: 'Carla Méndez',
        adjetive: 'Corrección postural',
        duration: '1.2',
      },
    ],
  },

  location: {
    topSection: '- DÓNDE ENCONTRARNOS',
    title: 'Te esperamos en', // con :beffore 'el centro',
    coordenatesMap: `34°55'28.1"S 57°58'13.5"W`,

    card: {
      topSection: 'CONSULTORIO KINESIS',
      data: [
        {
          icon: 'compass',
          title: 'Av. Corrientes 1234, Piso 5',
          text: 'Buenos Aires, C1043',
        },
        {
          icon: 'clock',
          title: 'Lun a Vie · 9:00 — 20:00',
          text: 'Sábados · 9:00 — 13:00',
        },
        { icon: 'tel', title: '+54 9 11 0000-0000' },
      ],
      cta: {
        text: 'Reservar por WhatsApp',
        href: buildWaLink('Hola!, me gustaría agendar un turno.'),
      },
    },
  },

  ctaSection: {
    topSection: '- EMPEZÁ HOY -',
    title: 'Reserva tu ', // con ::before 'primera sesión',
    text: 'Un mensaje es el primer paso - Respondemos en minutos',
    cta: buildWaLink('Hola!, me gustaría agendar un turno.'),
    rrss: [
      { icon: 'instagram', href: '/' },
      { icon: 'facebook', href: '/' },
      { icon: 'tiktok', href: '/' },
    ],
  },

  footer: {
    clinicName: CLINIC_NAME,
  },
};
