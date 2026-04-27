import Link from 'next/link'

import { cities } from '@/lib/cities-data'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const topCities = cities.slice(0, 5) // Show top 5 cities

  return (
    <footer className="bg-obsidian border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-6">
              <div className="font-heading text-3xl tracking-widest text-white">FOTOMETRO</div>
              <div className="font-body text-xs tracking-[0.3em] uppercase text-gold/80 mt-1">Wedding</div>
            </Link>
            <p className="font-body text-cream/60 leading-relaxed max-w-sm text-sm">
              Profesionalna fotografija, filmsko snimanje i snimanje dronom. Više od 20 godina iskustva u bilježenju vaših najljepših uspomena.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white mb-6">Navigacija</h4>
            <ul className="space-y-4">
              {['Početna', 'Galerija', 'Usluge', 'O meni', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Početna' ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`}
                    className="font-body text-cream/60 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white mb-6">Pratite nas</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://instagram.com/fotometropd" target="_blank" rel="noopener noreferrer" className="font-body text-cream/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/fotometropd" target="_blank" rel="noopener noreferrer" className="font-body text-cream/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@fotometropd" target="_blank" rel="noopener noreferrer" className="font-body text-cream/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Local SEO / Areas Served */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-white mb-6">Popularne Lokacije</h4>
            <ul className="space-y-3">
              <li className="font-body text-cream/60 text-sm">📍 Prijedor (Studio)</li>
              {topCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/vjencanja/${city.slug}`} className="font-body text-cream/60 hover:text-gold text-sm transition-colors">
                    📍 {city.name}
                  </Link>
                </li>
              ))}
              <li className="font-body text-cream/60 text-sm mt-2 pt-2 border-t border-white/10">✈️ Destination (Evropa)</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-cream/40 text-xs">
            &copy; {currentYear} Fotometro Wedding. Sva prava zadržana.
          </p>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="font-body text-cream/40 hover:text-white text-xs transition-colors">
              Politika privatnosti
            </Link>
            <Link href="/uslovi-koristenja" className="font-body text-cream/40 hover:text-white text-xs transition-colors">
              Uslovi korištenja
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
