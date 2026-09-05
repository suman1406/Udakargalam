import type { MetadataRoute } from 'next';

const siteUrl = 'https://salilargalam.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/dakargaladhyaya', priority: 0.9 },
    { path: '/grantha', priority: 0.9 },
    { path: '/published', priority: 0.8 },
    { path: '/miscellaneous', priority: 0.7 },
    { path: '/about', priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
