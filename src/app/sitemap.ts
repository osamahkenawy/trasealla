import { MetadataRoute } from 'next';
import { locales } from '../i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain
  
  // Define all your routes
  const routes = [
    '',
    '/about',
    '/visa-services',
    '/destination',
    '/destination/destination-details',
    '/tour',
    '/tour/tour-details',
    '/activities',
    '/activities/activities-details',
    '/team',
    '/team/team-details',
    '/blog',
    '/blog-sidebar',
    '/blog/blog-details',
    '/contact',
    '/home2',
    '/home3'
  ];

  // Generate sitemap entries for each locale and route
  const sitemapEntries = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
        ),
      },
    }))
  );

  return sitemapEntries;
}
