'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { LangIndex, Tri } from '@/data/types';

interface LangContextValue {
  lang: LangIndex;
  setLang: (l: LangIndex) => void;
  /** Pick the current language out of a trilingual tuple. */
  t: (tri: Tri) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'yu-lang';

function detectLang(): LangIndex {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === '0' || saved === '1' || saved === '2') return Number(saved) as LangIndex;
  } catch {
    /* storage can be blocked */
  }
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('ja')) return 2;
  if (nav.startsWith('zh')) return 0;
  return 1;
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Start with Chinese on the server and the first client render, then switch after mount
  // so the markup always matches during hydration.
  const [lang, setLangState] = useState<LangIndex>(0);

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = ['zh-Hant', 'en', 'ja'][lang];
    document.title = ['孫家伃 Sun Chia Yu｜作品集', 'Sun Chia Yu | Portfolio', '孫家伃 Sun Chia Yu｜ポートフォリオ'][lang];
  }, [lang]);

  const setLang = useCallback((l: LangIndex) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, String(l));
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LangContextValue>(() => ({ lang, setLang, t: (tri) => tri[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
