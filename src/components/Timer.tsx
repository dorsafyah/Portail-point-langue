import type { Minuteur } from '../useTimer';
import { formatMMSS } from '../useTimer';

interface TimerProps {
  minuteur: Minuteur;
  /** Préréglages proposés, en minutes. */
  preregles: number[];
  onChoisirDuree: (minutes: number) => void;
}

export function Timer({ minuteur, preregles, onChoisirDuree }: TimerProps) {
  const { restant, total, enMarche, termine, basculer, reinitialiser } = minuteur;
  const progression = total > 0 ? 1 - restant / total : 0;
  const presqueFini = restant > 0 && restant <= 30;

  const etat = termine ? 'timer--fini' : presqueFini ? 'timer--alerte' : '';

  return (
    <div className={`timer ${etat}`}>
      <div className="timer__cadran" style={{ ['--p' as string]: progression }}>
        <div className="timer__temps" aria-live="polite">
          {termine ? 'Temps écoulé' : formatMMSS(restant)}
        </div>
      </div>

      <div className="timer__actions">
        <button className="btn btn--principal" onClick={basculer} type="button">
          {enMarche ? '⏸ Pause' : restant <= 0 ? '↻ Relancer' : '▶ Démarrer'}
        </button>
        <button className="btn" onClick={() => reinitialiser()} type="button">
          ⟲ Réinitialiser
        </button>
      </div>

      <div className="timer__preregles">
        {preregles.map((m) => (
          <button
            key={m}
            type="button"
            className={`chip ${Math.round(total / 60) === m ? 'chip--actif' : ''}`}
            onClick={() => onChoisirDuree(m)}
          >
            {m} min
          </button>
        ))}
      </div>
    </div>
  );
}
