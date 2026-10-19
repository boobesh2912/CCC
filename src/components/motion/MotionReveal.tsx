'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from 'react';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  style?: CSSProperties;
  as?: ElementType;
  /** Above-the-fold content: play a CSS-only entrance on load instead of waiting for scroll/hydration. */
  immediate?: boolean;
}

/**
 * Scroll-triggered reveal component using Intersection Observer.
 *
 * Hidden state lives in CSS (`.js .reveal`), so content stays visible when
 * JavaScript is unavailable. Reduced-motion users get content immediately.
 */
export default function MotionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 650,
  once = true,
  threshold = 0.15,
  style,
  as: Component = 'div',
  immediate = false,
}: MotionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, immediate]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  const revealStyle = {
    '--reveal-from': translateMap[direction],
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    ...style,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={`${immediate ? 'reveal-now' : 'reveal'} ${className}`.trim()}
      style={revealStyle}
    >
      {children}
    </Component>
  );
}
