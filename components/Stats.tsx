'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { yearsOfExperience } from '@/lib/config';
import { STATS } from '@/data/ui';

function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? Number(m[1]) : 0;
  const suffix = m ? m[2] : '';
  const [n, setN] = useState(target);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') return;
    setN(0);
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <b ref={ref}>
      {n}
      {suffix}
    </b>
  );
}

export function Stats() {
  const { t } = useLang();
  const years = String(yearsOfExperience());
  return (
    <div className="stats">
      {STATS.map((s) => (
        <div className="stat" key={s.label[1]}>
          <CountUp value={s.value.replace('{y}', years)} />
          <span>{t(s.label)}</span>
        </div>
      ))}
    </div>
  );
}
