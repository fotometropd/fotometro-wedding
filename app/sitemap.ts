import { MetadataRoute } from 'next'

const targetCities = [
  // Bosnia & Herzegovina
  { slug: 'banja-luka' },
  { slug: 'sarajevo' },
  { slug: 'mostar' },
  { slug: 'tuzla' },
  { slug: 'prijedor' },
  { slug: 'bihac' },
  { slug: 'zenica' },
  { slug: 'bijeljina' },
  { slug: 'doboj' },
  { slug: 'trebinje' },
  { slug: 'brcko' },

  // Regional Capitals
  { slug: 'zagreb' },
  { slug: 'beograd' },

  // Coastal Croatia
  { slug: 'split' },
  { slug: 'dubrovnik' },
  { slug: 'zadar' },
  { slug: 'sibenik' },
  { slug: 'makarska' },
  { slug: 'rovinj' },
  { slug: 'opatija' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fotometrowedding.com'
  const lastModified = new Date()

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  ]

  const dynamicCityRoutes = targetCities.map((city) => ({
    url: `${baseUrl}/vjencanja/${city.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...dynamicCityRoutes]
}
