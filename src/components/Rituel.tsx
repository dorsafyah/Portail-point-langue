import { useEffect, useMemo, useState } from 'react';
import type { Phrase, Reglages } from '../types';
import { NOTIONS } from '../notions';
import { useTimer } from '../useTimer';
import { jouerSignalFin } from '../beep';
import { Timer } from './Timer';

interface RituelProps {
  phrases: Phrase[];
  index: number;
  setIndex: (i: number) => void;
  reglages: Reglages;
}

const PREREGLES = [8, 10, 15];

export function Rituel({ phrases, index, setIndex, reglages }: RituelProps) {
  const phrase = phrases[index];
  const dureeInitiale = phrase?.dureeMinutes ?? reglages.dureeParDefaut;

  const minuteur = useTimer(dureeInitiale, () => {
    if (reglages.sonFin) jouerSignalFin();
  });
  const { reinitialiser } = minuteur;

  const [corrigeVisible, setCorrigeVisible] = useState(false);

  // Au changement de phrase : on masque le corrigé et on recale le minuteur.
  useEffect(() => {
    setCorrigeVisible(false);
    reinitialiser(phrase?.dureeMinutes ?? reglages.dureeParDefaut);
  }, [index, phrase?.dureeMinutes, reglages.dureeParDefaut, reinitialiser]);

  const notionsPresentes = useMemo(() => {
    const set = new Set(phrase?.consignes.map((c) => c.notion));
    return set;
  }, [phrase]);

  if (!phrase) {
    return (
      <div className="vide">
        <p>Aucune phrase disponible. Ajoutez-en une dans l’onglet « Édition ».</p>
      </div>
    );
  }

  const precedent = () => setIndex((index - 1 + phrases.length) % phrases.length);
  const suivant = () => setIndex((index + 1) % phrases.length);

  return (
    <div className="rituel">
      <section className="scene">
        <div className="scene__entete">
          <span className="scene__compteur">
            Phrase {index + 1} / {phrases.length}
          </span>
        </div>

        <p className="phrase">{phrase.texte}</p>

        <div className="consignes">
          <h2 className="consignes__titre">Consignes</h2>
          <ol className="consignes__liste">
            {phrase.consignes.map((c, i) => (
              <li key={c.id} className="consigne">
                <div className="consigne__ligne">
                  <span className="consigne__num">{i + 1}</span>
                  <span className="consigne__texte">{c.question}</span>
                  <span className="consigne__badge">{NOTIONS[c.notion].label}</span>
                </div>
                {corrigeVisible && (
                  <div className="consigne__corrige">
                    <strong>Corrigé.</strong> {c.corrige}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="scene__pied">
          <button className="btn btn--fantome" onClick={precedent} type="button">
            ← Précédente
          </button>
          <button
            className={`btn ${corrigeVisible ? 'btn--fantome' : 'btn--valider'}`}
            onClick={() => setCorrigeVisible((v) => !v)}
            type="button"
          >
            {corrigeVisible ? 'Masquer le corrigé' : '✓ Afficher le corrigé'}
          </button>
          <button className="btn btn--fantome" onClick={suivant} type="button">
            Suivante →
          </button>
        </div>
      </section>

      <aside className="panneau">
        <Timer
          minuteur={minuteur}
          preregles={PREREGLES}
          onChoisirDuree={(m) => reinitialiser(m)}
        />
        <div className="panneau__notions">
          <h3>Notions travaillées</h3>
          <ul>
            {[...notionsPresentes].map((n) => (
              <li key={n}>
                <span className="puce" />
                {NOTIONS[n].labelLong}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
