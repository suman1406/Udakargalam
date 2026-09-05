import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Published Articles',
  description: 'Published research articles related to Dakārgalam, the Bṛhatsaṃhitā and traditional Indian water knowledge.',
  alternates: { canonical: '/published' },
  openGraph: {
    title: 'Published Articles | Dakārgalam',
    description: 'Published research articles related to Dakārgalam, the Bṛhatsaṃhitā and traditional Indian water knowledge.',
    url: '/published',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Published Articles | Dakārgalam',
    description: 'Published research articles related to Dakārgalam, the Bṛhatsaṃhitā and traditional Indian water knowledge.',
  },
};

export default function PublishedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
