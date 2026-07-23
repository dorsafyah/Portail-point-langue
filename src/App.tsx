import { useEffect, useState } from 'react';
import type { Phrase, Reglages } from './types';
import {
  chargerPhrases,
  chargerReglages,
  reinitialiserPhrases,
  sauverPhrases,
  sauverReglages,
} from './store';
import { Rituel } from './components/Rituel';
import { Edition } from './components/Edition';

type Onglet = 'rituel' | 'edition';

/** Indice de la « phrase du jour » : déterministe, avance d'une phrase par jour. */
function indexDuJour(nb: number): number {
  if (nb <= 0) return 0;
  const jours = Math.floor(Date.now() / 86_400_000);
  return jours % nb;
}

export function App() {
  const [phrases, setPhrases] = useState<Phrase[]>(() => chargerPhrases());
  const [reglages, setReglages] = useState<Reglages>(() => chargerReglages());
  const [onglet, setOnglet] = useState<Onglet>('rituel');
  const [index, setIndex] = useState(() => indexDuJour(chargerPhrases().length));
  const [reglagesOuverts, setReglagesOuverts] = useState(false);

  useEffect(() => {
    sauverPhrases(phrases);
  }, [phrases]);

  useEffect(() => {
    sauverReglages(reglages);
  }, [reglages]);

  // Garde l'index dans les bornes si la banque change de taille.
  useEffect(() => {
    if (index >= phrases.length) setIndex(Math.max(0, phrases.length - 1));
  }, [phrases.length, index]);

  const majReglages = (patch: Partial<Reglages>) =>
    setReglages((r) => ({ ...r, ...patch }));

  return (
    <div className="app">
      <header className="entete">
        <div className="entete__marque">
          <span className="entete__logo" aria-hidden>
            ✎
          </span>
          <div>
            <h1 className="entete__titre">Portail Point Langue</h1>
            <p className="entete__sous-titre">Rituel d’analyse de la langue — 6e</p>
          </div>
        </div>

        <nav className="onglets" aria-label="Navigation principale">
          <button
            type="button"
            className={`onglet ${onglet === 'rituel' ? 'onglet--actif' : ''}`}
            onClick={() => setOnglet('rituel')}
          >
            Rituel
          </button>
          <button
            type="button"
            className={`onglet ${onglet === 'edition' ? 'onglet--actif' : ''}`}
            onClick={() => setOnglet('edition')}
          >
            Édition
          </button>
        </nav>

        <div className="entete__actions">
          {onglet === 'rituel' && (
            <button
              type="button"
              className="btn btn--petit"
              onClick={() => setIndex(indexDuJour(phrases.length))}
              title="Sélectionner la phrase du jour"
            >
              📅 Phrase du jour
            </button>
          )}
          <button
            type="button"
            className="btn btn--petit"
            onClick={() => setReglagesOuverts((v) => !v)}
            aria-expanded={reglagesOuverts}
          >
            ⚙ Réglages
          </button>
        </div>
      </header>

      {reglagesOuverts && (
        <div className="reglages">
          <label className="champ champ--court">
            <span className="champ__label">Durée par défaut du minuteur (min)</span>
            <input
              className="champ__saisie"
              type="number"
              min={1}
              max={60}
              value={reglages.dureeParDefaut}
              onChange={(e) =>
                majReglages({ dureeParDefaut: Math.max(1, Number(e.target.value) || 1) })
              }
            />
          </label>
          <label className="reglages__interrupteur">
            <input
              type="checkbox"
              checked={reglages.sonFin}
              onChange={(e) => majReglages({ sonFin: e.target.checked })}
            />
            Signal sonore à la fin du minuteur
          </label>
          <p className="reglages__aide">
            Les données (phrases, corrigés, réglages) sont stockées sur cet appareil et
            l’application fonctionne hors-ligne une fois chargée.
          </p>
        </div>
      )}

      <main className="contenu">
        {onglet === 'rituel' ? (
          <Rituel
            phrases={phrases}
            index={Math.min(index, Math.max(0, phrases.length - 1))}
            setIndex={setIndex}
            reglages={reglages}
          />
        ) : (
          <Edition
            phrases={phrases}
            onChange={setPhrases}
            onReinitialiser={() => setPhrases(reinitialiserPhrases())}
          />
        )}
      </main>
    </div>
  );
}
