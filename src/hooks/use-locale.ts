
'use client';

import { useContext, useCallback } from 'react';
import { LocaleContext } from '@/context/locale-context';

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  const { translations, locale, setLocale } = context;

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let result = translations;
      for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
          // In a real app, you might want to log this error
          // console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      return result as string;
    },
    [translations]
  );

  return { t, locale, setLocale };
};
