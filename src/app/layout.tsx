import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { LocaleProvider } from '@/context/locale-context';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipToContentLink } from '@/components/skip-to-content';

export const metadata: Metadata = {
  metadataBase: new URL('https://salilargalam.in'),
  title: {
    default: 'Dakārgalam | India’s Traditional Knowledge on Groundwater',
    template: '%s | Dakārgalam',
  },
  description: 'A digital research resource on Dakārgalam, groundwater knowledge and the Bṛhatsaṃhitā of Varāhamihira.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dakārgalam | India’s Traditional Knowledge on Groundwater',
    description: 'A digital research resource on Dakārgalam, groundwater knowledge and the Bṛhatsaṃhitā of Varāhamihira.',
    url: '/',
    siteName: 'Dakārgalam',
    type: 'website',
    images: [{ url: '/media/logo.jpg', width: 512, height: 512, alt: 'Dakārgalam' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakārgalam | India’s Traditional Knowledge on Groundwater',
    description: 'A digital research resource on Dakārgalam, groundwater knowledge and the Bṛhatsaṃhitā of Varāhamihira.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F4F8' },
    { media: '(prefers-color-scheme: dark)', color: '#101727' },
  ],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:opsz,wght@7..72,400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
      )}>
        <LocaleProvider>
          <SkipToContentLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}
