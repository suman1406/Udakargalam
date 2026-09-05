
'use client';

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', icon: Home, label: t('siteTitle') },
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
          'sticky top-0 z-50 flex h-16 items-center border-b border-white/15 transition-all duration-300 bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] sm:h-20',
          isScrolled ? 'shadow-md' : ''
        )}
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-2 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3" title={t('siteTitleFull')}>
            <Image
              src="/media/logo.jpg"
              alt={t('siteTitle')}
              width={56}
              height={56}
              className="h-10 w-10 rounded object-cover sm:h-14 sm:w-14"
            />
            <span className="hidden font-headline text-2xl font-bold tracking-tight text-white transition-colors hover:text-white/80 sm:inline lg:text-3xl">
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
                    'rounded-md px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--header-bg))]',
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
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--header-bg))] xl:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
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
