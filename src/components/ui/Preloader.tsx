import type { CSSProperties } from 'react';

/**
 * Brand loading screen. Pure CSS: it plays on the first visit of a session and
 * removes itself, so it never depends on JavaScript to get out of the way.
 * Rules live in globals.css (`.ccc-preloader`).
 */
export default function Preloader() {
  return (
    <div className="ccc-preloader" aria-hidden="true">
      <div className="ccc-preloader__inner">
        <div className="ccc-preloader__mark">
          {['C', 'C', 'C'].map((letter, i) => (
            <span key={i} style={{ '--i': i } as CSSProperties}>
              {letter}
            </span>
          ))}
          <span className="ccc-preloader__dot" style={{ '--i': 3 } as CSSProperties}>
            .
          </span>
        </div>
        <p className="ccc-preloader__tag">Covai Creative Corner</p>
        <div className="ccc-preloader__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
