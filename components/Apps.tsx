'use client';

import { useLang } from './LangProvider';
import { SectionHead } from './SectionHead';
import { Reveal } from './Reveal';
import { CONFIG } from '@/lib/config';
import { APPS, SHOTS, STORE_LINKS, type App } from '@/data/apps';
import { UI } from '@/data/ui';

const COLORS: Record<string, string> = {
  flip: '#FF5A4D',
  turn: '#4BA3FF',
  slice: '#FF8FC7',
  sushi: '#FF8A7A',
  ninbato: '#9B7BFF',
  koko: '#7DF9D2',
  nichi: '#FFB020',
  pizza: '#FFB020',
  rooster: '#FF8A7A',
  lockin: '#B6FF3C',
  ptalk: '#7DF9D2',
  qimen: '#9B7BFF',
};

/** Best results first. The strongest app gets the big card, the next three a medium card, the rest a compact one. */
const TOP = ['sushi'];
const MID = ['ptalk', 'ninbato', 'pizza'];
const byId = (id: string) => APPS.find((a) => a.id === id);
const pick = (ids: string[]) => ids.map(byId).filter((a): a is App => Boolean(a));
const used = new Set([...TOP, ...MID]);
const REST = APPS.filter((a) => !used.has(a.id)).sort((a, b) => Number(a.dev) - Number(b.dev));

type Size = 'big' | 'mid' | 'small';

function Card({ app, size, delay }: { app: App; size: Size; delay: number }) {
  const { t } = useLang();
  const links = STORE_LINKS[app.id];
  const count = size === 'big' ? 3 : 2;
  const shots = (SHOTS[app.id] ?? []).slice(0, count);
  const imgCls = (s: string) => (app.id === 'wood' ? 'pc' : s.endsWith('.webp') ? 'pt' : app.id === 'flip' ? 'pb' : undefined);
  return (
    <Reveal delay={delay}>
      <div className={`ap ${size}`}>
        <div className="orb" style={{ background: COLORS[app.id] ?? '#9B7BFF' }} />
        {shots.length > 0 && (
          <div className="shots">
            {shots.map((s) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={s} src={s} alt={t(app.name)} loading="lazy" className={imgCls(s)} />
            ))}
          </div>
        )}
        <div className="body">
          <div className="tg">
            <span className={app.dev ? 'st d' : 'st'} />
            {t(app.type)}
          </div>
          <h3>{t(app.name)}</h3>
          <p>{t(app.line)}</p>
          {app.metric && <div className={app.dev ? 'm d' : 'm'}>{t(app.metric)}</div>}
          {links && (
            <div className="sl2">
              {links.ios && (
                <a href={links.ios} target="_blank" rel="noopener noreferrer">
                  App Store ↗
                </a>
              )}
              {links.android && (
                <a href={links.android} target="_blank" rel="noopener noreferrer">
                  Google Play ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Apps() {
  const { t } = useLang();
  return (
    <section id="apps">
      <SectionHead kicker={`02 / ${t(UI.appK).toUpperCase()}`} title={t(UI.appT)}>
        <p>{t(UI.appD)}</p>
      </SectionHead>
      <div className="tier1">
        {pick(TOP).map((a) => (
          <Card key={a.id} app={a} size="big" delay={0} />
        ))}
      </div>
      <div className="tier2">
        {pick(MID).map((a, i) => (
          <Card key={a.id} app={a} size="mid" delay={i * 70} />
        ))}
      </div>
      <div className="tier3">
        {REST.map((a, i) => (
          <Card key={a.id} app={a} size="small" delay={(i % 4) * 60} />
        ))}
      </div>
      <div className="more">
        <a className="b2" href={CONFIG.site} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          {t(UI.site)} ↗
        </a>
      </div>
    </section>
  );
}
