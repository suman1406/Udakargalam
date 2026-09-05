
'use client';

import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <div className="relative flex h-[calc(100svh-4rem)] min-h-[32rem] w-full items-center justify-center overflow-hidden sm:h-[calc(100svh-5rem)]">
      <div className="absolute inset-0 z-0 bg-primary">
        <Image
          src="/media/groundwater-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-slate-950/45"></div>

      <div className="relative z-20 flex flex-col items-center px-4 text-center">
        <h1
          className={cn(
            'font-headline text-5xl font-bold text-white drop-shadow-lg md:text-7xl lg:text-8xl',
            'animate-fade-in'
          )}
        >
          {t('pages.home.title')}
        </h1>
      </div>
    </div>
  );
}
