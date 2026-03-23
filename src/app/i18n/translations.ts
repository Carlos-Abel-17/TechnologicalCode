export type Lang = 'en' | 'es';

/** Variante de frases animadas del hero: 0 natural, 1 startup, 2 tech. */
export type HeroPhraseOptionIndex = 0 | 1 | 2;

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
