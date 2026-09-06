
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FileText, Grid, Home, Info, Menu, Newspaper } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from '@/hooks/use-locale';
import { LanguageToggle } from './language-toggle';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const { t } = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/dakargalam', icon: Home, label: t('pages.home.title') },
    { href: '/grantha', icon: FileText, label: t('nav.grantha') },
    { href: '/miscellaneous', icon: Grid, label: t('nav.miscellaneous') },
    { href: '/published', icon: Newspaper, label: t('nav.published') },
    { href: '/about', icon: Info, label: t('nav.about') },
  ];

  const isActive = (href: string) =>
    (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          'relative z-50 flex h-14 items-center border-b border-white/15 bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] sm:h-16'
        )}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-2 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3" title={t('siteTitleFull')}>
            <div className="flex items-center gap-1 rounded-md bg-white p-1 shadow-sm ring-1 ring-white/35">
              <Image
                src="/media/central-sanskrit-university.png"
                alt="Central Sanskrit University"
                width={640}
                height={640}
                className="h-8 w-8 rounded object-contain sm:h-10 sm:w-10"
              />
              <span aria-hidden="true" className="h-7 w-px bg-[hsl(var(--header-bg))]/35 sm:h-8" />
              <Image
                src="/media/amrita-vishwa-vidyapeetham.png"
                alt="Amrita Vishwa Vidyapeetham"
                width={640}
                height={640}
                className="h-8 w-8 rounded object-contain sm:h-10 sm:w-10"
              />
            </div>
            <span className="hidden font-headline text-xl font-bold tracking-tight text-white transition-colors hover:text-white/80 sm:inline lg:text-2xl">
              {t('siteTitle')}
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'rounded-md px-2.5 py-1.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--header-bg))]',
                    isActive(href) && 'bg-white/20 text-white'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <LanguageToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--header-bg))] xl:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(22rem,88vw)] border-l border-primary/15 bg-background p-6">
                <SheetHeader className="pr-8 text-left">
                  <SheetTitle className="font-headline text-2xl">{t('siteTitle')}</SheetTitle>
                  <SheetDescription>{t('pages.home.subtitle')}</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="mt-8 grid gap-2">
                  {navItems.map(({ href, icon: Icon, label }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={cn(
                          'flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-base font-semibold text-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isActive(href) && 'bg-primary/10 text-primary'
                        )}
                      >
                        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        <span>{label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
