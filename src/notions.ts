import type { NotionId } from './types';

export interface NotionMeta {
  id: NotionId;
  /** Libellé court affiché sur la pastille de consigne. */
  label: string;
  /** Libellé long pour la légende. */
  labelLong: string;
  /** Couleur principale (texte, bordure) — distincte de la couleur de la phrase. */
  couleur: string;
  /** Couleur de fond claire de la pastille. */
  fond: string;
}

/**
 * Code couleur des notions. Chaque notion a une teinte distincte, elle-même
 * bien différente du texte de la phrase (gris ardoise), afin que les consignes
 * se distinguent nettement de la phrase, comme demandé.
 */
export const NOTIONS: Record<NotionId, NotionMeta> = {
  nature: {
    id: 'nature',
    label: 'Nature',
    labelLong: 'Nature des mots',
    couleur: '#7c3aed',
    fond: '#f3ecfe',
  },
  'accord-sv': {
    id: 'accord-sv',
    label: 'Accord S-V',
    labelLong: 'Accord sujet-verbe',
    couleur: '#0e7490',
    fond: '#e5f6fb',
  },
  'accord-gn': {
    id: 'accord-gn',
    label: 'Accord GN',
    labelLong: 'Accord dans le groupe nominal',
    couleur: '#15803d',
    fond: '#e7f7ec',
  },
  present: {
    id: 'present',
    label: 'Présent',
    labelLong: "Présent de l'indicatif et ses valeurs",
    couleur: '#c2410c',
    fond: '#fdeee3',
  },
  imparfait: {
    id: 'imparfait',
    label: 'Imparfait',
    labelLong: "Imparfait de l'indicatif",
    couleur: '#1d4ed8',
    fond: '#e6edfd',
  },
  fonction: {
    id: 'fonction',
    label: 'Fonction',
    labelLong: 'Fonctions : COD, COI, attribut du sujet',
    couleur: '#be185d',
    fond: '#fcebf3',
  },
};

export const NOTIONS_LISTE: NotionMeta[] = Object.values(NOTIONS);
