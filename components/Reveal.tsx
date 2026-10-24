'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Fades its children in as they scroll into view.
 * Content is visible by default: it is only hidden once we know JS is running and the block is below the fold,
 * and a timer reveals everything anyway so nothing can stay invisible.
 */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add('in');
    if (typeof IntersectionObserver === 'undefined' || el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('pre');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    const onScroll = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        show();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = window.setTimeout(show, 4000);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, []);
  return (
    <div ref={ref} className={`rv ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
