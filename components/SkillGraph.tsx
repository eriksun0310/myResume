'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';
import { SectionHead } from './SectionHead';
import { Reveal } from './Reveal';
import { SKILL_GROUPS, TAGS, type TagKey } from '@/data/skills';
import { UI } from '@/data/ui';
import type { Tri } from '@/data/types';

const TAG_ORDER = Object.keys(TAGS) as TagKey[];
const HINT: Tri = ['↑ 點一項技能，看它用在哪些作品', '↑ Pick a skill to see where it is used', '↑ スキルを選ぶと、使った作品が光ります'];
const USED: Tri = ['用在', 'Used in', '使用先'];
const ROW = 66;
const NODE = 50;
const PAD = 22;

export function SkillGraph() {
  const { t } = useLang();
  const [g, setG] = useState(0);
  const [sel, setSel] = useState(0);
  const group = SKILL_GROUPS[g];
  const tags = TAG_ORDER.filter((k) => group.items.some((it) => it.tags.includes(k)));
  const rows = Math.max(group.items.length, tags.length);
  const H = PAD * 2 + rows * ROW - (ROW - NODE);
  const offset = (n: number) => PAD + ((rows - n) * ROW) / 2;
  const ly = (i: number) => offset(group.items.length) + i * ROW;
  const ry = (i: number) => offset(tags.length) + i * ROW;
  const skill = group.items[Math.min(sel, group.items.length - 1)];
  const activeTags = new Set<TagKey>(skill.tags);

  function pickGroup(i: number) {
    setG(i);
    setSel(0);
  }

  return (
    <section id="skills">
      <SectionHead kicker={`01 / ${t(UI.mapK).toUpperCase()}`} title={t(UI.mapT)}>
        <p>{t(UI.mapD)}</p>
      </SectionHead>
      <Reveal>
        <div className="tabs" role="tablist">
          {SKILL_GROUPS.map((gr, i) => (
            <button key={gr.title[1]} type="button" aria-pressed={g === i} onClick={() => pickGroup(i)}>
              {t(gr.title)}
            </button>
          ))}
        </div>
        <div className="graph" style={{ height: H }}>
          <svg viewBox={`0 0 1000 ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#B6FF3C" />
                <stop offset="1" stopColor="#9B7BFF" />
              </linearGradient>
            </defs>
            {group.items.map((it, i) =>
              it.tags.map((k) => {
                const j = tags.indexOf(k);
                if (j < 0) return null;
                return <line key={`${i}-${k}`} className={i === sel ? 'on' : undefined} x1={390} y1={ly(i) + NODE / 2} x2={610} y2={ry(j) + NODE / 2} />;
              }),
            )}
          </svg>
          <div className="col cl">
            {group.items.map((it, i) => (
              <button key={it.name[1]} type="button" className={`nd${i === sel ? ' on' : ''}`} style={{ top: ly(i) }} onClick={() => setSel(i)} onMouseEnter={() => setSel(i)}>
                <i />
                {t(it.name)}
              </button>
            ))}
          </div>
          <div className="col cr">
            {tags.map((k, j) => (
              <div key={k} className={`nd r${activeTags.has(k) ? ' on' : ' dim'}`} style={{ top: ry(j) }}>
                {t(TAGS[k])}
                <i />
              </div>
            ))}
          </div>
        </div>
        <div className="gdesc">
          <b>{t(skill.name)}</b>
          <span>{t(skill.desc)}</span>
          <em>
            {t(USED)}：{skill.tags.map((k) => t(TAGS[k])).join(' · ')}
          </em>
        </div>
        <div className="hint">{t(HINT)}</div>
      </Reveal>
    </section>
  );
}
