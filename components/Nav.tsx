'use client';

import { useEffect, useState } from 'react';
import { useLang } from './LangProvider';
import { NAV } from '@/data/ui';
import type { LangIndex } from '@/data/types';

const LANGS: readonly { index: LangIndex; label: string }[] = [
  { index: 0, label: '中' },
  { index: 1, label: 'EN' },
  { index: 2, label: '日' },
];

const LINKS = NAV.filter((n) => n.href !== '#company');

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={scrolled ? 'nav sc' : 'nav'}>
      <div className="in">
        <a className="brand" href="#top">
          <span className="dot" />
          孫家伃
        </a>
        <nav className="l">
          {LINKS.map((n) => (
            <a key={n.href} href={n.href} className={n.href === '#contact' ? 'cta' : undefined}>
              {t(n.label)}
            </a>
          ))}
          <div className="seg" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l.index} type="button" aria-pressed={lang === l.index} onClick={() => setLang(l.index)}>
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
