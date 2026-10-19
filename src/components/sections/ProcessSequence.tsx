'use client';

import { useEffect, useRef, useState } from 'react';
import MotionReveal from '@/components/motion/MotionReveal';
import styles from './ProcessSequence.module.css';

interface ProcessStep {
  index: string;
  title: string;
  description: string;
  label: string;
}

/**
 * Four-stage process with a scroll-linked progress marker.
 * Stays in normal document flow — no pinning or scroll hijacking.
 * Without JS every stage is still readable; only the marker stays at zero.
 */
export default function ProcessSequence({ steps }: { steps: ProcessStep[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (!root) return;
      const vh = window.innerHeight;
      const rect = root.getBoundingClientRect();
      // 0 when the sequence enters the lower viewport, 1 once its end reaches the middle.
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.35))
      );
      root.style.setProperty('--progress', progress.toFixed(3));

      // Stages light up in order as the marker passes them, in every layout.
      const active = progress <= 0.02 ? 0 : Math.ceil(progress * steps.length);
      setActiveCount(active);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [steps.length]);

  return (
    <div ref={rootRef} className={styles.sequence}>
      <div className={styles.progressRow} aria-hidden="true">
        <span className={styles.progressLabel}>
          STAGE {String(Math.max(activeCount, 1)).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
        </span>
        <span className={styles.track}>
          <span className={styles.fill} />
        </span>
      </div>

      <ol className={styles.timeline}>
        {steps.map((step, idx) => (
          <li
            key={step.index}
            className={styles.step}
            data-active={idx < activeCount ? 'true' : undefined}
          >
            <MotionReveal direction="up" delay={idx * 120} className={styles.stepInner}>
              <div className={styles.stepTop}>
                <span className={styles.stepIndex}>{step.index}</span>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              <span className={styles.stepMarker} aria-hidden="true" />
            </MotionReveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
