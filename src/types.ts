/** Identifiant d'une notion grammaticale travaillée en période 1 (6e). */
export type NotionId =
  | 'nature'
  | 'accord-sv'
  | 'accord-gn'
  | 'present'
  | 'imparfait'
  | 'fonction';

/** Une consigne rattachée à une notion, avec sa correction. */
export interface Consigne {
  id: string;
  notion: NotionId;
  question: string;
  corrige: string;
}

/** Une phrase à analyser et son jeu de consignes. */
export interface Phrase {
  id: string;
  texte: string;
  consignes: Consigne[];
  /** Durée du minuteur propre à cette phrase (en minutes). Sinon, durée par défaut. */
  dureeMinutes?: number;
}

/** Réglages persistés de l'application. */
export interface Reglages {
  /** Durée par défaut du minuteur, en minutes. */
  dureeParDefaut: number;
  /** Signal sonore à la fin du minuteur. */
  sonFin: boolean;
}
