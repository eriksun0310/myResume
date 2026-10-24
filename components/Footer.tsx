'use client';

import { useLang } from './LangProvider';
import { UI } from '@/data/ui';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="foot">
      <span>© 孫家伃 Sun Chia Yu · {t(UI.ft)}</span>
      <span>github.com/eriksun0310</span>
    </footer>
  );
}
