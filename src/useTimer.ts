import { useCallback, useEffect, useRef, useState } from 'react';

export interface Minuteur {
  /** Secondes restantes. */
  restant: number;
  /** Durée totale courante (secondes). */
  total: number;
  enMarche: boolean;
  termine: boolean;
  demarrer: () => void;
  pause: () => void;
  basculer: () => void;
  /** Réinitialise avec une nouvelle durée en minutes (par défaut la durée courante). */
  reinitialiser: (minutes?: number) => void;
}

export function useTimer(dureeMinutesInitiale: number, onFin?: () => void): Minuteur {
  const [total, setTotal] = useState(dureeMinutesInitiale * 60);
  const [restant, setRestant] = useState(dureeMinutesInitiale * 60);
  const [enMarche, setEnMarche] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const onFinRef = useRef(onFin);
  onFinRef.current = onFin;

  const stopInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!enMarche) return;
    intervalRef.current = window.setInterval(() => {
      setRestant((r) => {
        if (r <= 1) {
          stopInterval();
          setEnMarche(false);
          onFinRef.current?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return stopInterval;
  }, [enMarche]);

  const demarrer = useCallback(() => {
    setRestant((r) => (r <= 0 ? total : r));
    setEnMarche(true);
  }, [total]);

  const pause = useCallback(() => setEnMarche(false), []);

  const basculer = useCallback(() => {
    setEnMarche((m) => {
      if (!m) setRestant((r) => (r <= 0 ? total : r));
      return !m;
    });
  }, [total]);

  const reinitialiser = useCallback(
    (minutes?: number) => {
      stopInterval();
      setEnMarche(false);
      const nouveauTotal = minutes !== undefined ? Math.round(minutes * 60) : total;
      setTotal(nouveauTotal);
      setRestant(nouveauTotal);
    },
    [total],
  );

  return {
    restant,
    total,
    enMarche,
    termine: restant <= 0,
    demarrer,
    pause,
    basculer,
    reinitialiser,
  };
}

/** Formate un nombre de secondes en mm:ss. */
export function formatMMSS(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
