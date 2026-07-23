import type { Phrase } from '../types';

/**
 * Banque de phrases pour la période 1 (6e).
 * Progression : on part de la nature des mots, des accords et du présent, puis
 * on introduit l'imparfait et les fonctions (COD / COI / attribut du sujet).
 * Chaque phrase peut mêler plusieurs notions, comme en classe.
 *
 * Cette banque sert de contenu par défaut : elle est copiée dans le stockage
 * local à la première ouverture, puis vous pouvez la modifier librement dans
 * l'onglet « Édition ».
 */
export const PHRASES_PAR_DEFAUT: Phrase[] = [
  {
    id: 'p01',
    texte: 'Tous les jours, la professeure de français mange une pomme verte.',
    consignes: [
      {
        id: 'p01c1',
        notion: 'nature',
        question: 'Quelle est la nature du mot « verte » ?',
        corrige:
          'Adjectif qualificatif. Il est épithète du nom « pomme » et s’accorde avec lui (féminin singulier).',
      },
      {
        id: 'p01c2',
        notion: 'present',
        question: 'Identifiez le verbe conjugué, puis donnez son temps et son mode.',
        corrige:
          'Le verbe conjugué est « mange » (verbe manger). Il est au présent de l’indicatif.',
      },
      {
        id: 'p01c3',
        notion: 'present',
        question: 'Indiquez la valeur de ce temps dans la phrase.',
        corrige:
          'Valeur d’habitude (action qui se répète), soulignée par le complément « Tous les jours ».',
      },
      {
        id: 'p01c4',
        notion: 'fonction',
        question: 'Quelle est la fonction du groupe « une pomme verte » ?',
        corrige:
          'COD (complément d’objet direct) du verbe « mange » : elle mange quoi ? une pomme verte.',
      },
    ],
  },
  {
    id: 'p02',
    texte: 'Le vieux marin raconte ses aventures aux enfants attentifs.',
    consignes: [
      {
        id: 'p02c1',
        notion: 'nature',
        question: 'Donnez la nature des mots « vieux » et « ses ».',
        corrige:
          '« vieux » : adjectif qualificatif (épithète de « marin »). « ses » : déterminant (possessif).',
      },
      {
        id: 'p02c2',
        notion: 'accord-gn',
        question: 'Justifiez l’accord de l’adjectif « attentifs ».',
        corrige:
          'Adjectif au masculin pluriel : il s’accorde avec le nom « enfants » (masculin pluriel).',
      },
      {
        id: 'p02c3',
        notion: 'fonction',
        question:
          'Quelle est la fonction de « ses aventures » ? et celle de « aux enfants attentifs » ?',
        corrige:
          '« ses aventures » : COD (raconte quoi ?). « aux enfants attentifs » : COI (raconte à qui ?).',
      },
    ],
  },
  {
    id: 'p03',
    texte: 'Chaque matin, les oiseaux chantent dans le grand jardin.',
    consignes: [
      {
        id: 'p03c1',
        notion: 'accord-sv',
        question: 'Identifiez le sujet du verbe « chantent » et justifiez sa terminaison.',
        corrige:
          'Sujet : « les oiseaux » (3e personne du pluriel). Le verbe prend donc la terminaison « -ent ».',
      },
      {
        id: 'p03c2',
        notion: 'nature',
        question: 'Donnez la nature de « grand ».',
        corrige: 'Adjectif qualificatif, épithète du nom « jardin ».',
      },
      {
        id: 'p03c3',
        notion: 'present',
        question: 'Quelle est la valeur du présent employé ici ?',
        corrige: 'Valeur d’habitude (répétition), marquée par « Chaque matin ».',
      },
    ],
  },
  {
    id: 'p04',
    texte: 'Nous finissons nos exercices avant la récréation.',
    consignes: [
      {
        id: 'p04c1',
        notion: 'accord-sv',
        question: 'Quel est le sujet, et pourquoi le verbe se termine-t-il par « -ons » ?',
        corrige:
          'Sujet : « Nous » (1re personne du pluriel). À cette personne, le verbe se termine par « -ons ».',
      },
      {
        id: 'p04c2',
        notion: 'present',
        question: 'Donnez le temps et le mode de « finissons ».',
        corrige: 'Présent de l’indicatif (verbe finir, 2e groupe).',
      },
      {
        id: 'p04c3',
        notion: 'fonction',
        question: 'Quelle est la fonction de « nos exercices » ?',
        corrige: 'COD du verbe « finissons » : nous finissons quoi ? nos exercices.',
      },
    ],
  },
  {
    id: 'p05',
    texte: 'L’eau bout à cent degrés.',
    consignes: [
      {
        id: 'p05c1',
        notion: 'present',
        question: 'Quelle est la valeur du présent dans cette phrase ?',
        corrige:
          'Valeur de vérité générale (présent de vérité générale) : un fait toujours vrai.',
      },
      {
        id: 'p05c2',
        notion: 'accord-sv',
        question: 'Identifiez le sujet du verbe « bout ».',
        corrige: 'Sujet : « L’eau » (3e personne du singulier).',
      },
    ],
  },
  {
    id: 'p06',
    texte: 'Autrefois, les chevaliers portaient de lourdes armures.',
    consignes: [
      {
        id: 'p06c1',
        notion: 'imparfait',
        question: 'Relevez le verbe conjugué, puis donnez son temps et son mode.',
        corrige: '« portaient » : imparfait de l’indicatif (verbe porter).',
      },
      {
        id: 'p06c2',
        notion: 'accord-gn',
        question: 'Justifiez l’accord de l’adjectif « lourdes ».',
        corrige:
          'Adjectif au féminin pluriel : il s’accorde avec le nom « armures » (féminin pluriel).',
      },
      {
        id: 'p06c3',
        notion: 'nature',
        question: 'Quelle est la nature du mot « Autrefois » ?',
        corrige: 'Adverbe (de temps).',
      },
    ],
  },
  {
    id: 'p07',
    texte: 'Le chat noir dort paisiblement sur le canapé.',
    consignes: [
      {
        id: 'p07c1',
        notion: 'nature',
        question: 'Quelle est la nature du mot « paisiblement » ?',
        corrige: 'Adverbe (de manière). Il se termine par « -ment ».',
      },
      {
        id: 'p07c2',
        notion: 'accord-gn',
        question: 'Avec quel nom l’adjectif « noir » s’accorde-t-il ?',
        corrige: 'Avec le nom « chat » (masculin singulier).',
      },
      {
        id: 'p07c3',
        notion: 'fonction',
        question: 'Cette phrase contient-elle un COD ? Justifiez.',
        corrige:
          'Non : « dort » n’a pas de COD ici. « sur le canapé » est un complément circonstanciel de lieu (dort où ?).',
      },
    ],
  },
  {
    id: 'p08',
    texte: 'Ma sœur est une excellente musicienne.',
    consignes: [
      {
        id: 'p08c1',
        notion: 'fonction',
        question: 'Quelle est la fonction du groupe « une excellente musicienne » ?',
        corrige:
          'Attribut du sujet « Ma sœur ». Il est relié au sujet par le verbe d’état « est ».',
      },
      {
        id: 'p08c2',
        notion: 'nature',
        question: 'Quelle est la nature du mot « est » ?',
        corrige: 'Verbe (le verbe être, verbe d’état), conjugué au présent de l’indicatif.',
      },
      {
        id: 'p08c3',
        notion: 'accord-gn',
        question: 'Justifiez l’accord de « excellente ».',
        corrige:
          'Adjectif au féminin singulier : il s’accorde avec « musicienne » (féminin singulier).',
      },
    ],
  },
  {
    id: 'p09',
    texte: 'Les élèves écoutent la maîtresse et recopient la leçon.',
    consignes: [
      {
        id: 'p09c1',
        notion: 'accord-sv',
        question: 'Les deux verbes ont le même sujet : lequel ? Justifiez la terminaison « -ent ».',
        corrige:
          'Sujet commun : « Les élèves » (3e personne du pluriel). Les deux verbes prennent « -ent ».',
      },
      {
        id: 'p09c2',
        notion: 'fonction',
        question: 'Quelle est la fonction de « la leçon » ?',
        corrige: 'COD du verbe « recopient » : ils recopient quoi ? la leçon.',
      },
    ],
  },
  {
    id: 'p10',
    texte: 'Pendant les vacances, nous nagions dans la mer chaque après-midi.',
    consignes: [
      {
        id: 'p10c1',
        notion: 'imparfait',
        question: 'Donnez le temps et le mode de « nagions ».',
        corrige: 'Imparfait de l’indicatif (verbe nager, 1re personne du pluriel).',
      },
      {
        id: 'p10c2',
        notion: 'accord-sv',
        question: 'Identifiez le sujet du verbe.',
        corrige: 'Sujet : « nous » (1re personne du pluriel) → terminaison « -ions ».',
      },
    ],
  },
  {
    id: 'p11',
    texte: 'Ce livre passionnant raconte l’histoire d’un jeune explorateur.',
    consignes: [
      {
        id: 'p11c1',
        notion: 'nature',
        question: 'Donnez la nature des mots « Ce » et « passionnant ».',
        corrige:
          '« Ce » : déterminant (démonstratif). « passionnant » : adjectif qualificatif, épithète de « livre ».',
      },
      {
        id: 'p11c2',
        notion: 'fonction',
        question: 'Quelle est la fonction de « l’histoire d’un jeune explorateur » ?',
        corrige: 'COD du verbe « raconte » : il raconte quoi ?',
      },
    ],
  },
  {
    id: 'p12',
    texte: 'Tu sembles fatigué aujourd’hui.',
    consignes: [
      {
        id: 'p12c1',
        notion: 'fonction',
        question: 'Quelle est la fonction du mot « fatigué » ?',
        corrige:
          'Attribut du sujet « Tu ». Il est introduit par le verbe d’état « sembles ».',
      },
      {
        id: 'p12c2',
        notion: 'present',
        question: 'Donnez le temps et le mode de « sembles ».',
        corrige: 'Présent de l’indicatif (verbe sembler).',
      },
    ],
  },
  {
    id: 'p13',
    texte: 'Les jardiniers plantent des fleurs colorées le long de l’allée.',
    consignes: [
      {
        id: 'p13c1',
        notion: 'accord-gn',
        question: 'Justifiez l’accord de l’adjectif « colorées ».',
        corrige:
          'Adjectif au féminin pluriel : il s’accorde avec « fleurs » (féminin pluriel).',
      },
      {
        id: 'p13c2',
        notion: 'accord-sv',
        question: 'Identifiez le sujet du verbe « plantent ».',
        corrige: 'Sujet : « Les jardiniers » (3e personne du pluriel) → terminaison « -ent ».',
      },
      {
        id: 'p13c3',
        notion: 'fonction',
        question: 'Quelle est la fonction de « des fleurs colorées » ?',
        corrige: 'COD du verbe « plantent ».',
      },
    ],
  },
  {
    id: 'p14',
    texte: 'Quand j’étais petit, je croyais aux fées.',
    consignes: [
      {
        id: 'p14c1',
        notion: 'imparfait',
        question: 'Relevez les deux verbes à l’imparfait.',
        corrige: '« étais » (verbe être) et « croyais » (verbe croire), imparfait de l’indicatif.',
      },
      {
        id: 'p14c2',
        notion: 'fonction',
        question: 'Quelle est la fonction de « aux fées » ?',
        corrige:
          'COI (complément d’objet indirect) : on croit à quelque chose. Le complément est introduit par « à ».',
      },
    ],
  },
  {
    id: 'p15',
    texte: 'La lune brille et les étoiles scintillent dans le ciel.',
    consignes: [
      {
        id: 'p15c1',
        notion: 'accord-sv',
        question: 'Chaque verbe a son propre sujet : identifiez-les et justifiez les terminaisons.',
        corrige:
          '« brille » : sujet « La lune » (singulier). « scintillent » : sujet « les étoiles » (pluriel, « -ent »).',
      },
      {
        id: 'p15c2',
        notion: 'present',
        question: 'Quelle est la valeur du présent employé ici ?',
        corrige: 'Présent de description (on décrit une scène qui se déroule sous nos yeux).',
      },
    ],
  },
  {
    id: 'p16',
    texte: 'Le boulanger vend du pain frais et des croissants dorés.',
    consignes: [
      {
        id: 'p16c1',
        notion: 'accord-gn',
        question: 'Justifiez l’accord des adjectifs « frais » et « dorés ».',
        corrige:
          '« frais » s’accorde avec « pain » (masc. sing., forme identique). « dorés » s’accorde avec « croissants » (masc. pluriel).',
      },
      {
        id: 'p16c2',
        notion: 'fonction',
        question: 'Quelle est la fonction de « du pain frais et des croissants dorés » ?',
        corrige: 'COD du verbe « vend » : il vend quoi ?',
      },
    ],
  },
  {
    id: 'p17',
    texte: 'Vous parlez à votre voisin pendant le cours.',
    consignes: [
      {
        id: 'p17c1',
        notion: 'fonction',
        question: 'Quelle est la fonction de « à votre voisin » ?',
        corrige:
          'COI (complément d’objet indirect) : on parle à quelqu’un. Il est introduit par « à ».',
      },
      {
        id: 'p17c2',
        notion: 'accord-sv',
        question: 'Identifiez le sujet du verbe « parlez ».',
        corrige: 'Sujet : « Vous » (2e personne du pluriel) → terminaison « -ez ».',
      },
    ],
  },
  {
    id: 'p18',
    texte: 'Autrefois, ce village possédait un vieux moulin en pierre.',
    consignes: [
      {
        id: 'p18c1',
        notion: 'imparfait',
        question: 'Donnez le temps et le mode de « possédait ».',
        corrige: 'Imparfait de l’indicatif (verbe posséder, 3e personne du singulier).',
      },
      {
        id: 'p18c2',
        notion: 'nature',
        question: 'Donnez la nature des mots « ce » et « vieux ».',
        corrige:
          '« ce » : déterminant (démonstratif). « vieux » : adjectif qualificatif, épithète de « moulin ».',
      },
      {
        id: 'p18c3',
        notion: 'fonction',
        question: 'Quelle est la fonction de « un vieux moulin en pierre » ?',
        corrige: 'COD du verbe « possédait » : il possédait quoi ?',
      },
    ],
  },
];
