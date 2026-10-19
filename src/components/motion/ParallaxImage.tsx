'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0.02 to 0.15 recommended
  style?: CSSProperties;
}

/**
 * Lightweight CSS-transform parallax wrapper.
 * Small travel distance, low sensitivity. Disabled on mobile and reduced-motion.
 */
export default function ParallaxImage({
  children,
  className = '',
  speed = 0.06,
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) return;

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const center = rect.top + rect.height / 2 - viewHeight / 2;
        const offset = center * speed * -1;
        // Clamp offset to prevent extreme movement
        const clamped = Math.max(-40, Math.min(40, offset));
        el.style.transform = `translateY(${clamped}px)`;
        ticking.current = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
    >
      {children}
    </div>
  );
}
