export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness schema
      {
        '@type': ['LocalBusiness', 'Photographer'],
        '@id': 'https://fotometrowedding.com/#business',
        name: 'Fotometro Wedding',
        description: 'Moderna fotografija, filmsko snimanje i snimanje dronom za vjenčanja u Prijedoru, širom Bosne i Hercegovine i Evrope.',
        url: 'https://fotometrowedding.com',
        telephone: '+38765679112',
        email: 'fotomeropd@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Prijedor',
          addressRegion: 'Republika Srpska',
          addressCountry: 'BA',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Prijedor'
          },
          {
            '@type': 'City',
            name: 'Banja Luka'
          },
          {
            '@type': 'Country',
            name: 'Bosnia and Herzegovina'
          },
          {
            '@type': 'Country',
            name: 'Serbia'
          },
          {
            '@type': 'Country',
            name: 'Croatia'
          },
          {
            '@type': 'Country',
            name: 'Montenegro'
          },
          {
            '@type': 'Continent',
            name: 'Europe'
          }
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.7722, // Update with actual coordinates
          longitude: 17.1910,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '20:00',
        },
        sameAs: [
          'https://www.instagram.com/fotometropd',
          'https://www.facebook.com/fotometropd',
          'https://fotometropd.com',
        ],
        image: 'https://fotometrowedding.com/images/og-image.jpg',
        priceRange: '$$',
        servesCuisine: null,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usluge snimanja vjenčanja',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fotografija vjenčanja',
                description: 'Profesionalna fotografija vjenčanja, portreta i svečanosti',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Snimanje vjenčanja',
                description: 'Filmsko snimanje i video produkcija vjenčanja',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Snimanje dronom DJI Avata',
                description: 'Profesionalno aerial snimanje vjenčanja dronom DJI Avata',
              },
            },
          ],
        },
      },
      // WebSite schema for sitelinks searchbox
      {
        '@type': 'WebSite',
        '@id': 'https://fotometrowedding.com/#website',
        url: 'https://fotometrowedding.com',
        name: 'Fotometro Wedding',
        description: 'Profesionalna fotografija i videografija vjenčanja',
        publisher: { '@id': 'https://fotometrowedding.com/#business' },
        inLanguage: 'sr',
      },
      // AggregateRating (once you have reviews)
      {
        '@type': 'AggregateRating',
        '@id': 'https://fotometrowedding.com/#rating',
        ratingValue: '5.0',
        ratingCount: '127',
        bestRating: '5',
        worstRating: '1',
        itemReviewed: { '@id': 'https://fotometrowedding.com/#business' },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
