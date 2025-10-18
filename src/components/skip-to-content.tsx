
'use client';

import { useLocale } from '@/hooks/use-locale';

export function SkipToContentLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
    >
      {t('skipToContent')}
    </a>
  );
}
