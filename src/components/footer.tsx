
'use client';

import { useLocale } from '@/hooks/use-locale';

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-auto border-t bg-background/50 pb-20 pt-8 md:pb-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center text-sm text-muted-foreground md:flex-row">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center space-x-4">
          <span>{t('footer.builtWith')}</span>
          <a
            href="https://github.com/firebase/firebase-studio/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            {t('footer.readmeLink')}
          </a>
        </div>
      </div>
    </footer>
  );
}
