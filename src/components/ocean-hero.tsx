
'use client';

import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';

export function OceanHero() {
  const { t } = useLocale();

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Fallback for browsers that don't support video or for reduced motion */}
        <div className="h-full w-full bg-primary object-cover motion-safe:hidden">
            <img src="/media/ocean-fallback.svg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-full w-full bg-primary object-cover motion-reduce:block hidden">
            <img src="/media/ocean-fallback.svg" alt="" className="h-full w-full object-cover" />
        </div>

        {/* Video for browsers that support it and user has not preferred reduced motion */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover motion-reduce:hidden"
          aria-hidden="true"
        >
          <source src="/media/ocean.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-black/30"></div>

      <div className="relative z-20 text-center">
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
