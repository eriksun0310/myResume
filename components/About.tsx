'use client';

import { useLang } from './LangProvider';
import { SectionHead } from './SectionHead';
import { Reveal } from './Reveal';
import { TRAITS } from '@/data/traits';
import { UI } from '@/data/ui';

export function About() {
  const { t } = useLang();
  return (
    <section id="about">
      <SectionHead kicker={`03 / ${t(UI.trK).toUpperCase()}`} title={t(UI.trT)} />
      <div className="traits">
        {TRAITS.map((trait, i) => (
          <Reveal key={trait.title[1]} delay={(i % 3) * 80}>
            <div className="tr" style={{ height: '100%' }}>
              <h3>
                <span className="dot" />
                {t(trait.title)}
              </h3>
              <p>{t(trait.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
