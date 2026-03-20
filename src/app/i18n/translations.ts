export type Lang = 'en' | 'es';

/** Variante de frases animadas del hero: 0 natural, 1 startup, 2 tech. */
export type HeroPhraseOptionIndex = 0 | 1 | 2;

export type MessageKey = keyof typeof MESSAGES_EN;

/** Frases del hero por idioma y variante (natural / startup / tech). */
export const HERO_PHRASES_BY_LANG: Record<
  Lang,
  readonly [readonly string[], readonly string[], readonly string[]]
> = {
  en: [
    [
      'scales your business',
      'powers your growth',
      'drives innovation',
      'boosts your efficiency',
      'transforms your ideas',
    ],
    [
      'wins you customers',
      'automates your work',
      'saves you time',
      'increases revenue',
      'gives you control',
    ],
    [
      'runs in real-time',
      'evolves with your business',
      'adapts to your needs',
      'scales without limits',
      'is built for the future',
    ],
  ],
  es: [
    [
      'escala tu negocio',
      'impulsa tu crecimiento',
      'impulsa la innovación',
      'mejora tu eficiencia',
      'transforma tus ideas',
    ],
    [
      'te gana clientes',
      'automatiza tu trabajo',
      'te ahorra tiempo',
      'aumenta tus ingresos',
      'te da el control',
    ],
    [
      'funciona en tiempo real',
      'evoluciona con tu negocio',
      'se adapta a tus necesidades',
      'escala sin límites',
      'está hecho para el futuro',
    ],
  ],
};

export function getHeroPhrases(lang: Lang, option: HeroPhraseOptionIndex): readonly string[] {
  return HERO_PHRASES_BY_LANG[lang][option];
}

const MESSAGES_EN = {
  'header.brandAria': 'TechnologicalCode — home',
  'header.nav.services': 'SERVICES',
  'header.nav.portfolio': 'PORTFOLIO',
  'header.nav.process': 'PROCESS',
  'header.cta': 'GET STARTED',
  'header.lang.label': 'Language',

  'hero.badge': 'SYSTEM STATUS / OPTIMAL',
  'hero.title.prefix': 'We build software that',
  'hero.lead':
    'High-performance architectures, clean APIs, and interfaces that stay fast as you grow — from first deploy to serious scale.',
  'hero.cta.primary': 'START YOUR PROJECT',
  'hero.cta.secondary': 'VIEW PORTFOLIO',
  'hero.scroll': 'SCROLL DOWN',

  'keyCompetencies.title': 'KEY COMPETENCIES',
  'keyCompetencies.leftBody':
    'In a world that evolves every second, moving forward with technology is no longer optional.',
  'keyCompetencies.rightBody':
    "That's why TechnologicalCode exists: to empower modern businesses.",
  'keyCompetencies.aria': 'Key competencies narrative',

  'competencies.title': 'Core Competencies',
  'competencies.lead':
    'Precision-engineered modules designed to integrate seamlessly into high-stakes environments.',
  'competencies.index': 'Service Index 01-04',
  'competencies.web.title': 'Web Dev',
  'competencies.web.desc':
    'Full-stack architectures optimized for millisecond latency and extreme concurrency.',
  'competencies.web.action': 'Initialize',
  'competencies.auto.title': 'Automation',
  'competencies.auto.desc':
    'AI-driven workflows that eliminate operational bottlenecks with autonomous precision.',
  'competencies.auto.action': 'Deploy',
  'competencies.api.title': 'API Design',
  'competencies.api.desc':
    'Robust integration layers built for secure, scalable communication between distributed systems.',
  'competencies.api.action': 'Connect',
  'competencies.rt.title': 'Real-time Apps',
  'competencies.rt.desc':
    'Bi-directional data streaming solutions for live financial, monitoring, and chat platforms.',
  'competencies.rt.action': 'Sync',

  'portfolio.eyebrow': 'Selected Works',
  'portfolio.title': 'Technological Milestones',
  'portfolio.nexus.alt': 'Nexus Alpha Dashboard',
  'portfolio.nexus.category': 'Enterprise Platform',
  'portfolio.nexus.title': 'Nexus Alpha Dashboard',
  'portfolio.nexus.desc':
    'A high-frequency trading interface that processes over 14 million data points per second with sub-5ms rendering latency.',
  'portfolio.vortex.alt': 'Vortex Flow Systems',
  'portfolio.vortex.category': 'Automation Logic',
  'portfolio.vortex.title': 'Vortex Flow Systems',
  'portfolio.vortex.desc':
    'Global logistics engine utilizing predictive modeling to optimize supply chain routes in real-time for Fortune 500 conglomerates.',

  'manifesto.eyebrow': 'The Manifesto',
  'manifesto.title.line1': 'We build scalable, efficient, and',
  'manifesto.title.muted': 'modern software solutions.',
  'manifesto.body':
    "At TechnologicalCode, we don't just write code; we architect technical legacies. Our approach treats every line of software as a strategic asset.",
  'manifesto.stat1': 'Uptime SLA',
  'manifesto.stat2': 'Systems Deployed',

  'cta.title': "Let's build something powerful",
  'cta.lead':
    'Ready to initialize your next project? Secure a slot with our engineering leads to discuss your technical architecture.',
  'cta.primary': 'Initialize Collaboration',
  'cta.secondary': 'Contact HQ',

  'footer.tagline':
    'High-end software engineering agency focused on obsidian-grade performance and architectural integrity.',
  'footer.sitemap': 'Sitemap',
  'footer.legal': 'Legal',
  'footer.connection': 'Connection',
  'footer.link.services': 'Services',
  'footer.link.portfolio': 'Portfolio',
  'footer.link.process': 'Process',
  'footer.link.terms': 'Terms',
  'footer.link.privacy': 'Privacy',
  'footer.link.security': 'Security',
  'footer.link.linkedin': 'LinkedIn',
  'footer.link.github': 'GitHub',
  'footer.link.contact': 'Contact',
  'footer.copy': '© 2024 TechnologicalCode. Engineered for the Obsidian Pulse.',
  'footer.status.server': 'Server: Frankfurt-01',
  'footer.status.network': 'Network: Secure',
} as const;

const MESSAGES_ES: Record<MessageKey, string> = {
  'header.brandAria': 'TechnologicalCode — inicio',
  'header.nav.services': 'SERVICIOS',
  'header.nav.portfolio': 'PORTAFOLIO',
  'header.nav.process': 'PROCESO',
  'header.cta': 'COMENZAR',
  'header.lang.label': 'Idioma',

  'hero.badge': 'ESTADO DEL SISTEMA / ÓPTIMO',
  'hero.title.prefix': 'Construimos software que',
  'hero.lead':
    'Arquitecturas de alto rendimiento, APIs claras e interfaces que siguen siendo rápidas a medida que creces: del primer deploy a escala seria.',
  'hero.cta.primary': 'INICIA TU PROYECTO',
  'hero.cta.secondary': 'VER PORTAFOLIO',
  'hero.scroll': 'DESPLAZA',

  'keyCompetencies.title': 'COMPETENCIAS CLAVE',
  'keyCompetencies.leftBody':
    'En un mundo que evoluciona cada segundo, avanzar con la tecnología ya no es opcional.',
  'keyCompetencies.rightBody':
    'Por eso existe TechnologicalCode: para impulsar negocios modernos.',
  'keyCompetencies.aria': 'Narrativa de competencias clave',

  'competencies.title': 'Competencias clave',
  'competencies.lead':
    'Módulos diseñados con precisión para integrarse sin fricción en entornos de alto riesgo.',
  'competencies.index': 'Índice de servicios 01-04',
  'competencies.web.title': 'Desarrollo web',
  'competencies.web.desc':
    'Arquitecturas full stack optimizadas para latencia en milisegundos y concurrencia extrema.',
  'competencies.web.action': 'Inicializar',
  'competencies.auto.title': 'Automatización',
  'competencies.auto.desc':
    'Flujos impulsados por IA que eliminan cuellos de botella operativos con precisión autónoma.',
  'competencies.auto.action': 'Desplegar',
  'competencies.api.title': 'Diseño de APIs',
  'competencies.api.desc':
    'Capas de integración sólidas para comunicación segura y escalable entre sistemas distribuidos.',
  'competencies.api.action': 'Conectar',
  'competencies.rt.title': 'Apps en tiempo real',
  'competencies.rt.desc':
    'Streaming bidireccional para finanzas en vivo, monitorización y plataformas de chat.',
  'competencies.rt.action': 'Sincronizar',

  'portfolio.eyebrow': 'Trabajos seleccionados',
  'portfolio.title': 'Hitos tecnológicos',
  'portfolio.nexus.alt': 'Panel Nexus Alpha',
  'portfolio.nexus.category': 'Plataforma enterprise',
  'portfolio.nexus.title': 'Nexus Alpha Dashboard',
  'portfolio.nexus.desc':
    'Interfaz de trading de alta frecuencia que procesa más de 14 millones de puntos de datos por segundo con latencia de renderizado inferior a 5 ms.',
  'portfolio.vortex.alt': 'Vortex Flow Systems',
  'portfolio.vortex.category': 'Lógica de automatización',
  'portfolio.vortex.title': 'Vortex Flow Systems',
  'portfolio.vortex.desc':
    'Motor logístico global con modelado predictivo para optimizar rutas de cadena de suministro en tiempo real para grandes corporaciones.',

  'manifesto.eyebrow': 'El manifiesto',
  'manifesto.title.line1': 'Construimos soluciones de software',
  'manifesto.title.muted': 'escalables, eficientes y modernas.',
  'manifesto.body':
    'En TechnologicalCode no solo escribimos código; arquitecturamos legados técnicos. Tratamos cada línea de software como un activo estratégico.',
  'manifesto.stat1': 'SLA de disponibilidad',
  'manifesto.stat2': 'Sistemas desplegados',

  'cta.title': 'Construyamos algo potente',
  'cta.lead':
    '¿Listo para iniciar tu próximo proyecto? Reserva un espacio con nuestros leads de ingeniería para hablar de tu arquitectura técnica.',
  'cta.primary': 'Iniciar colaboración',
  'cta.secondary': 'Contactar sede',

  'footer.tagline':
    'Agencia de ingeniería de software de alto nivel, enfocada en rendimiento obsidiana e integridad arquitectónica.',
  'footer.sitemap': 'Mapa del sitio',
  'footer.legal': 'Legal',
  'footer.connection': 'Conexión',
  'footer.link.services': 'Servicios',
  'footer.link.portfolio': 'Portafolio',
  'footer.link.process': 'Proceso',
  'footer.link.terms': 'Términos',
  'footer.link.privacy': 'Privacidad',
  'footer.link.security': 'Seguridad',
  'footer.link.linkedin': 'LinkedIn',
  'footer.link.github': 'GitHub',
  'footer.link.contact': 'Contacto',
  'footer.copy': '© 2024 TechnologicalCode. Diseñado para el pulso obsidiano.',
  'footer.status.server': 'Servidor: Frankfurt-01',
  'footer.status.network': 'Red: segura',
};

export const MESSAGES: Record<Lang, Record<MessageKey, string>> = {
  en: MESSAGES_EN as Record<MessageKey, string>,
  es: MESSAGES_ES,
};
