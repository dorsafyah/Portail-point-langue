import { NOTIONS_LISTE } from '../notions';

/** Légende du code couleur des notions. */
export function Legende({ compacte = false }: { compacte?: boolean }) {
  return (
    <div className={`legende ${compacte ? 'legende--compacte' : ''}`}>
      {NOTIONS_LISTE.map((n) => (
        <span
          key={n.id}
          className="legende__item"
          style={{ color: n.couleur, backgroundColor: n.fond, borderColor: n.couleur }}
          title={n.labelLong}
        >
          <span className="legende__pastille" style={{ backgroundColor: n.couleur }} />
          {compacte ? n.label : n.labelLong}
        </span>
      ))}
    </div>
  );
}
