'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';
import { Reveal } from './Reveal';
import { CONFIG } from '@/lib/config';
import { UI } from '@/data/ui';

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${CONFIG.email}`;
    }
  }

  return (
    <Reveal>
      <section className="ct" id="contact">
        <div>
          <h2>{t(UI.ctT)}</h2>
          <p>{t(UI.ctP)}</p>
        </div>
        <div className="acts">
          <button type="button" className="e" onClick={copyEmail}>
            {copied ? t(UI.copied) : CONFIG.email}
          </button>
          <div className="row">
            <a href={`mailto:${CONFIG.email}`}>Email</a>
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={CONFIG.site} target="_blank" rel="noopener noreferrer">
              PTalk ↗
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
