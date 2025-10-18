
'use client';

import type { ReactNode } from 'react';
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import en from '@/locales/en.json';
import sa from '@/locales/sa.json';

export type Locale = 'en' | 'sa';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: any;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const translations = { en, sa };

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('sa');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'sa'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);
  
  // Set initial lang attribute
  useEffect(() => {
    if(isMounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, isMounted]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    translations: translations[locale],
  }), [locale, setLocale]);
  
  if (!isMounted) {
    return null; // or a loading component
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
