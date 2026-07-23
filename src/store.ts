import type { Phrase, Reglages } from './types';
import { PHRASES_PAR_DEFAUT } from './data/phrases';

const CLE_PHRASES = 'ppl.phrases.v1';
const CLE_REGLAGES = 'ppl.reglages.v1';

/** Thème préféré du système (sombre si l'appareil est en mode sombre). */
function themeSysteme(): Reglages['theme'] {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'sombre' : 'clair';
  } catch {
    return 'clair';
  }
}

export const REGLAGES_PAR_DEFAUT: Reglages = {
  dureeParDefaut: 10,
  sonFin: true,
  theme: 'clair',
};

/** Génère un identifiant unique simple (suffisant pour un usage local). */
export function nouvelId(prefixe = 'x'): string {
  return `${prefixe}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

export function chargerPhrases(): Phrase[] {
  try {
    const brut = localStorage.getItem(CLE_PHRASES);
    if (!brut) return structuredClone(PHRASES_PAR_DEFAUT);
    const data = JSON.parse(brut) as Phrase[];
    if (!Array.isArray(data) || data.length === 0) {
      return structuredClone(PHRASES_PAR_DEFAUT);
    }
    return data;
  } catch {
    return structuredClone(PHRASES_PAR_DEFAUT);
  }
}

export function sauverPhrases(phrases: Phrase[]): void {
  localStorage.setItem(CLE_PHRASES, JSON.stringify(phrases));
}

export function chargerReglages(): Reglages {
  try {
    const brut = localStorage.getItem(CLE_REGLAGES);
    // Première ouverture : on suit le thème du système.
    if (!brut) return { ...REGLAGES_PAR_DEFAUT, theme: themeSysteme() };
    return { ...REGLAGES_PAR_DEFAUT, ...(JSON.parse(brut) as Partial<Reglages>) };
  } catch {
    return { ...REGLAGES_PAR_DEFAUT, theme: themeSysteme() };
  }
}

export function sauverReglages(reglages: Reglages): void {
  localStorage.setItem(CLE_REGLAGES, JSON.stringify(reglages));
}

/** Réinitialise la banque de phrases à son contenu par défaut. */
export function reinitialiserPhrases(): Phrase[] {
  const copie = structuredClone(PHRASES_PAR_DEFAUT);
  sauverPhrases(copie);
  return copie;
}
