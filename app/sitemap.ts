import { MetadataRoute } from 'next'
import { cities } from '@/lib/cities-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fotometrowedding.com'
  const lastModified = new Date()

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/galerija`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/usluge/fotografisanje`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/usluge/snimanje`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/usluge/dron`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ]

  const dynamicCityRoutes = cities.map((city) => ({
    url: `${baseUrl}/vjencanja/${city.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for local SEO
  }))

  return [...staticRoutes, ...dynamicCityRoutes]
}
