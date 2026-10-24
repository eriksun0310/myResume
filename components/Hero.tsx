'use client';

import { useRef } from 'react';
import { useLang } from './LangProvider';
import { ageNow, yearsOfExperience } from '@/lib/config';
import { APPS } from '@/data/apps';
import { LEAD, UI } from '@/data/ui';
import type { Tri } from '@/data/types';

const H1: readonly [Tri, Tri] = [
  ['獨立開發者・前端工程師', 'Indie dev & front-end engineer', '個人開発者・フロントエンド'],
  ['10 款以上 App 已上架', '10+ apps shipped', '公開アプリ10本以上'],
];
const AGE: Tri = ['{n} 歲', 'age {n}', '{n}歳'];
const PLACE: Tri = ['台中', 'Taichung', '台中'];
const RESUME: Tri = ['下載履歷 PDF', 'Download résumé (PDF)', '履歴書をダウンロード (PDF)'];
const SINCE: Tri = ['2022.10 起', 'since 2022.10', '2022.10〜'];

/** The three best-performing apps: the strongest sits in the middle, in front. */
const FACTS_TITLE: Tri = ['快速認識我', 'At a glance', 'ひと目でわかる私'];
const FACTS: readonly { k: Tri; v: Tri }[] = [
  { k: ['主力技術', 'Main stack', '主力技術'], v: ['React · Next.js · React Native · TypeScript', 'React · Next.js · React Native · TypeScript', 'React · Next.js · React Native · TypeScript'] },
  { k: ['已上架', 'Shipped', '公開済み'], v: ['10 款以上 App，含學習、生活與遊戲', '10+ apps across learning, lifestyle and games', '学習・ライフスタイル・ゲームなど10本以上'] },
  { k: ['目前', 'Now', '現在'], v: ['公司做機台前端，同時經營自己的 App', 'Front end for machines at work, plus my own apps', '会社では機台のフロントエンド、並行して自分のアプリを運営'] },
  { k: ['想找', 'Looking for', '探している仕事'], v: ['前端、React Native、工業軟體介面相關職缺', 'Front-end, React Native or industrial-software UI roles', 'フロントエンド、React Native、産業ソフトのUI職'] },
];

const PHONES = [
  { cls: 'pw1', id: 'ptalk' },
  { cls: 'pw2', id: 'sushi' },
  { cls: 'pw3', id: 'ninbato' },
].map((p) => ({ ...p, app: APPS.find((a) => a.id === p.id)!, src: `/shots/apps/${p.id}/1.webp` }));

export function Hero() {
  const { t, lang } = useLang();
  const years = yearsOfExperience();
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', String(((e.clientX - r.left) / r.width - 0.5) * 2));
    el.style.setProperty('--my', String(((e.clientY - r.top) / r.height - 0.5) * 2));
  }
  function onLeave() {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  }

  return (
    <div className="hero" id="top">
      <div>
        <span className="pill">
          <span className="dot" />
          {t(UI.openTo).toUpperCase()} · {t(PLACE)}
        </span>
        <h1>
          {t(H1[0])}
          <br />
          <span className="g">{t(H1[1])}</span>
        </h1>
        <p className="id">
          <b>孫家伃 Sun Chia Yu</b> · {t(AGE).replace('{n}', String(ageNow()))} · {t(PLACE)} · {t(SINCE)}
        </p>
        <p className="lead">{t(LEAD).replace('{y}', String(years))}</p>
        <div className="btns">
          <a className="b1" href="#skills">
            {t(UI.cta1)} →
          </a>
          <a className="b2" href="#contact">
            {t(UI.cta2)}
          </a>
          <a className="b2" href={`/resume/Sun-Chia-Yu-Resume-${['zh', 'en', 'ja'][lang]}.pdf`} download>
            {t(RESUME)} ↓
          </a>
        </div>
        <div className="code facts">
          <div className="bar">
            <i />
            <i />
            <i />
            <span>{t(FACTS_TITLE)}</span>
          </div>
          <dl>
            {FACTS.map((f) => (
              <div key={f.k[1]}>
                <dt>{t(f.k)}</dt>
                <dd>{t(f.v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="phones" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
        {PHONES.map((p) => (
          <div className={`phw ${p.cls}`} key={p.cls}>
            <div className="ph">
              <div className="nt" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={t(p.app.name)} loading="eager" />
              <div className="cap">
                {t(p.app.name)}
                {p.app.metric && <small>{t(p.app.metric)}</small>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
