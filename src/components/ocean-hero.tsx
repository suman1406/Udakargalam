
'use client';

import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <div className="relative flex aspect-[3/2] w-full items-end justify-center overflow-hidden bg-slate-950 sm:h-[calc(100svh-5rem)] sm:min-h-[32rem] sm:aspect-auto sm:items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/dakargalam-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-center sm:object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-slate-950/15 sm:bg-slate-950/45"></div>

      <div className="relative z-20 mb-5 flex flex-col items-center px-4 text-center sm:mb-0">
        <h1
          className={cn(
            'font-headline text-3xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl',
            'animate-fade-in'
          )}
        >
          {t('pages.home.title')}
        </h1>
      </div>
    </div>
  );
}
