
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, FileText, Home, Info, Newspaper } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from '@/hooks/use-locale';
import { LanguageToggle } from './language-toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, locale } = useLocale();
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
    { href: '/dakargaladhyaya', icon: BookOpen, label: t('nav.dakargaladhyaya') },
    { href: '/grantha', icon: FileText, label: t('nav.grantha') },
    { href: '/published', icon: Newspaper, label: t('nav.published') },
    { href: '/about', icon: Info, label: t('nav.about') },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-20 items-center transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" title={t('siteTitleFull')}>
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary transition-colors hover:text-accent sm:text-2xl">
            {t('siteTitle')}
          </h1>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <TooltipProvider>
            <nav className="hidden items-center space-x-2 rounded-full border bg-secondary/50 p-1 md:flex">
              {navItems.map(({ href, icon: Icon, label }) => {
                // The home icon is only for mobile
                if (href === '/') return null;
                const isActive = pathname === href;
                return (
                  <Tooltip key={href}>
                    <TooltipTrigger asChild>
                      <Link
                        href={href}
                        className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-background hover:text-accent',
                          isActive ? 'bg-background shadow-sm' : ''
                        )}
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </nav>
          </TooltipProvider>
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur-sm md:hidden">
        <div className="mx-auto grid h-16 max-w-lg grid-cols-5 font-medium">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href));
            return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group inline-flex flex-col items-center justify-center px-5 hover:bg-secondary",
                isActive ? "text-accent" : "text-primary"
              )}
              aria-label={label}
            >
              <Icon className="mb-1 h-5 w-5" />
              <span className="text-[10px] font-medium transition-all group-hover:text-accent">
                {label}
              </span>
            </Link>
          )})}
        </div>
      </nav>
    </header>
  );
}
