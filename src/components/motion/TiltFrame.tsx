'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import styles from './TiltFrame.module.css';

interface TiltFrameProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. Keep small. */
  maxTilt?: number;
}

/**
 * Gentle pointer-driven CSS 3D tilt for a single framed visual.
 * Only active on fine pointers with hover; disabled for reduced motion and touch.
 */
export default function TiltFrame({ children, className = '', maxTilt = 5 }: TiltFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canTilt = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    ).matches;
    if (!canTilt) return;

    let frame = 0;

    function onMove(e: PointerEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--tilt-x', `${(-y * maxTilt).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(x * maxTilt).toFixed(2)}deg`);
      });
    }

    function onLeave() {
      cancelAnimationFrame(frame);
      el?.style.setProperty('--tilt-x', '0deg');
      el?.style.setProperty('--tilt-y', '0deg');
    }

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [maxTilt]);

  return (
    <div className={`${styles.stage} ${className}`.trim()}>
      <div ref={ref} className={styles.tilt}>
        {children}
      </div>
    </div>
  );
}
