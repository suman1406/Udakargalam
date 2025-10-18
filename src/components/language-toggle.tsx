
'use client';

import { useLocale } from '@/hooks/use-locale';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Locale } from '@/context/locale-context';

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const handleToggle = (newLocale: Locale) => {
    if (locale !== newLocale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="flex items-center rounded-full border bg-secondary/50 p-1 text-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleToggle('sa')}
        className={cn(
          'h-auto rounded-full px-3 py-1',
          locale === 'sa' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground'
        )}
      >
        {t('languageToggle.sanskrit')}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleToggle('en')}
        className={cn(
          'h-auto rounded-full px-3 py-1',
          locale === 'en' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground'
        )}
      >
        {t('languageToggle.english')}
      </Button>
    </div>
  );
}
