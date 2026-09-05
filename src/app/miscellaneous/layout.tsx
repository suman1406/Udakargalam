import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supporting Materials',
  description: 'Supporting source materials for the Dakārgalam research project.',
  alternates: { canonical: '/miscellaneous' },
  openGraph: {
    title: 'Supporting Materials | Dakārgalam',
    description: 'Supporting source materials for the Dakārgalam research project.',
    url: '/miscellaneous',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supporting Materials | Dakārgalam',
    description: 'Supporting source materials for the Dakārgalam research project.',
  },
};

export default function MiscellaneousLayout({ children }: { children: React.ReactNode }) {
  return children;
}
