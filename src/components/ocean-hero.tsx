
'use client';

import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <div className="relative flex h-[calc(100svh-4rem)] min-h-[32rem] w-full items-center justify-center overflow-hidden sm:h-[calc(100svh-5rem)]">
      <div className="absolute inset-0 z-0 bg-primary">
        <img
          src="/media/ocean-fallback.svg"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/media/ocean-fallback.svg"
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          aria-hidden="true"
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-black/30"></div>

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
