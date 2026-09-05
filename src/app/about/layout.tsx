import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Project',
  description: 'About Salilargalam.in, the digital outcome of the Ashtaadashi Project implemented by Central Sanskrit University.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About the Project | Dakārgalam',
    description: 'About Salilargalam.in, the digital outcome of the Ashtaadashi Project implemented by Central Sanskrit University.',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Project | Dakārgalam',
    description: 'About Salilargalam.in, the digital outcome of the Ashtaadashi Project implemented by Central Sanskrit University.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
