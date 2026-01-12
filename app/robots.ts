import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Assuming these might exist or will exist
    },
    sitemap: 'https://abal.et/sitemap.xml',
  };
}
