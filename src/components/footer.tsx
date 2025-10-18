
'use client';

import { useLocale } from '@/hooks/use-locale';

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-auto border-t bg-background/50 pb-20 pt-8 md:pb-8">
      <div className="container mx-auto flex max-w-7xl justify-center px-4 text-center text-sm text-muted-foreground">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
