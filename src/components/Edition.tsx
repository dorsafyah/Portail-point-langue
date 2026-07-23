import { useRef, useState } from 'react';
import type { Consigne, NotionId, Phrase } from '../types';
import { NOTIONS_LISTE } from '../notions';
import { nouvelId } from '../store';

interface EditionProps {
  phrases: Phrase[];
  onChange: (phrases: Phrase[]) => void;
  onReinitialiser: () => void;
}

function phraseVierge(): Phrase {
  return {
    id: nouvelId('p'),
    texte: '',
    consignes: [{ id: nouvelId('c'), notion: 'nature', question: '', corrige: '' }],
  };
}

export function Edition({ phrases, onChange, onReinitialiser }: EditionProps) {
  const [selection, setSelection] = useState(0);
  const fichierRef = useRef<HTMLInputElement>(null);

  const maj = (nouvelles: Phrase[]) => onChange(nouvelles);

  const majPhrase = (patch: Partial<Phrase>) => {
    const copie = phrases.slice();
    copie[selection] = { ...copie[selection], ...patch };
    maj(copie);
  };

  const majConsigne = (idx: number, patch: Partial<Consigne>) => {
    const p = phrases[selection];
    const consignes = p.consignes.slice();
    consignes[idx] = { ...consignes[idx], ...patch };
    majPhrase({ consignes });
  };

  const ajouterConsigne = () => {
    const p = phrases[selection];
    majPhrase({
      consignes: [
        ...p.consignes,
        { id: nouvelId('c'), notion: 'nature', question: '', corrige: '' },
      ],
    });
  };

  const supprimerConsigne = (idx: number) => {
    const p = phrases[selection];
    majPhrase({ consignes: p.consignes.filter((_, i) => i !== idx) });
  };

  const ajouterPhrase = () => {
    const copie = [...phrases, phraseVierge()];
    maj(copie);
    setSelection(copie.length - 1);
  };

  const dupliquerPhrase = () => {
    const src = phrases[selection];
    const copie = structuredClone(src);
    copie.id = nouvelId('p');
    copie.consignes = copie.consignes.map((c) => ({ ...c, id: nouvelId('c') }));
    const nouvelles = phrases.slice();
    nouvelles.splice(selection + 1, 0, copie);
    maj(nouvelles);
    setSelection(selection + 1);
  };

  const supprimerPhrase = () => {
    if (phrases.length <= 1) {
      alert('Il doit rester au moins une phrase.');
      return;
    }
    if (!confirm('Supprimer cette phrase ?')) return;
    const nouvelles = phrases.filter((_, i) => i !== selection);
    maj(nouvelles);
    setSelection(Math.max(0, selection - 1));
  };

  const exporter = () => {
    const blob = new Blob([JSON.stringify(phrases, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'phrases-point-langue.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importer = async (file: File) => {
    try {
      const texte = await file.text();
      const data = JSON.parse(texte) as Phrase[];
      if (!Array.isArray(data) || data.length === 0) throw new Error('vide');
      // Validation minimale
      const ok = data.every(
        (p) => typeof p.texte === 'string' && Array.isArray(p.consignes),
      );
      if (!ok) throw new Error('format');
      maj(data);
      setSelection(0);
      alert(`${data.length} phrase(s) importée(s).`);
    } catch {
      alert('Fichier invalide. Attendu : un export JSON de cette application.');
    }
  };

  const p = phrases[selection];

  return (
    <div className="edition">
      <aside className="edition__liste">
        <div className="edition__liste-entete">
          <h2>Phrases ({phrases.length})</h2>
          <button className="btn btn--petit btn--valider" onClick={ajouterPhrase} type="button">
            + Nouvelle
          </button>
        </div>
        <ul>
          {phrases.map((ph, i) => (
            <li key={ph.id}>
              <button
                type="button"
                className={`edition__item ${i === selection ? 'edition__item--actif' : ''}`}
                onClick={() => setSelection(i)}
              >
                <span className="edition__item-num">{i + 1}</span>
                <span className="edition__item-texte">
                  {ph.texte || <em>(phrase vide)</em>}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="edition__outils">
          <button className="btn btn--petit" onClick={exporter} type="button">
            ⭳ Exporter
          </button>
          <button
            className="btn btn--petit"
            onClick={() => fichierRef.current?.click()}
            type="button"
          >
            ⭱ Importer
          </button>
          <input
            ref={fichierRef}
            type="file"
            accept="application/json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) importer(f);
              e.target.value = '';
            }}
          />
          <button
            className="btn btn--petit btn--danger"
            onClick={() => {
              if (confirm('Rétablir la banque de phrases par défaut ? Vos modifications seront perdues.'))
                onReinitialiser();
            }}
            type="button"
          >
            ↺ Banque par défaut
          </button>
        </div>
      </aside>

      <section className="edition__form">
        {p ? (
          <>
            <label className="champ">
              <span className="champ__label">Phrase à analyser</span>
              <textarea
                className="champ__saisie"
                rows={2}
                value={p.texte}
                placeholder="Saisissez la phrase du jour…"
                onChange={(e) => majPhrase({ texte: e.target.value })}
              />
            </label>

            <label className="champ champ--court">
              <span className="champ__label">Durée du minuteur (min) — laisser vide pour la valeur par défaut</span>
              <input
                className="champ__saisie"
                type="number"
                min={1}
                max={60}
                value={p.dureeMinutes ?? ''}
                placeholder="défaut"
                onChange={(e) =>
                  majPhrase({
                    dureeMinutes: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
              />
            </label>

            <div className="edition__consignes">
              <div className="edition__consignes-entete">
                <h3>Consignes</h3>
                <button className="btn btn--petit btn--valider" onClick={ajouterConsigne} type="button">
                  + Consigne
                </button>
              </div>

              {p.consignes.map((c, i) => (
                <div key={c.id} className="carte-consigne">
                  <div className="carte-consigne__entete">
                    <span className="carte-consigne__num">Consigne {i + 1}</span>
                    <select
                      className="champ__saisie champ__select"
                      value={c.notion}
                      onChange={(e) =>
                        majConsigne(i, { notion: e.target.value as NotionId })
                      }
                    >
                      {NOTIONS_LISTE.map((n) => (
                        <option key={n.id} value={n.id}>
                          {n.labelLong}
                        </option>
                      ))}
                    </select>
                    <button
                      className="btn btn--petit btn--danger"
                      onClick={() => supprimerConsigne(i)}
                      type="button"
                      disabled={p.consignes.length <= 1}
                    >
                      Supprimer
                    </button>
                  </div>
                  <textarea
                    className="champ__saisie"
                    rows={2}
                    placeholder="Consigne (question posée aux élèves)…"
                    value={c.question}
                    onChange={(e) => majConsigne(i, { question: e.target.value })}
                  />
                  <textarea
                    className="champ__saisie champ__saisie--corrige"
                    rows={2}
                    placeholder="Corrigé (affiché à la fin du rituel)…"
                    value={c.corrige}
                    onChange={(e) => majConsigne(i, { corrige: e.target.value })}
                  />
                </div>
              ))}
            </div>

            <div className="edition__form-actions">
              <button className="btn" onClick={dupliquerPhrase} type="button">
                ⧉ Dupliquer
              </button>
              <button className="btn btn--danger" onClick={supprimerPhrase} type="button">
                🗑 Supprimer la phrase
              </button>
            </div>
            <p className="edition__note">
              Les modifications sont enregistrées automatiquement sur cet appareil.
            </p>
          </>
        ) : (
          <p>Sélectionnez une phrase.</p>
        )}
      </section>
    </div>
  );
}
