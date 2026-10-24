'use client';

import { useLang } from './LangProvider';
import { SectionHead } from './SectionHead';
import { Reveal } from './Reveal';
import { EDUCATION, JOBS, RESUME_LABELS } from '@/data/resume';

export function Experience() {
  const { t } = useLang();
  return (
    <section id="experience">
      <SectionHead kicker={`04 / ${t(RESUME_LABELS.kicker).toUpperCase()}`} title={t(RESUME_LABELS.title)} />
      <div className="tl">
        {JOBS.map((j) => (
          <Reveal key={j.id}>
            <div className="job">
              <div className="d">
                {t(j.period)}
                <small>{t(j.place)}</small>
              </div>
              <div>
                <h3>{t(j.company)}</h3>
                <div className="r">{t(j.role)}</div>
                <div className="chips">
                  {j.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b[1]}>{t(b)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="edu">
          <div className="d">
            {t(RESUME_LABELS.edu)}
            <br />
            {t(EDUCATION.period)}
          </div>
          <div>
            <b>{t(EDUCATION.school)}</b>
            <span>{t(EDUCATION.major)}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
