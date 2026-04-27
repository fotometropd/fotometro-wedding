import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center">
        <h1 className="font-heading text-gold text-9xl font-light mb-4">404</h1>
        <h2 className="font-heading text-obsidian text-4xl mb-6">Stranica nije pronađena</h2>
        <p className="font-body text-stone mb-10 max-w-md mx-auto">
          Izgleda da ste zalutali. Stranica koju tražite više ne postoji ili je premještena.
        </p>
        <Link 
          href="/"
          className="inline-block px-10 py-4 bg-obsidian text-cream font-body font-medium text-sm tracking-widest uppercase hover:bg-gold transition-colors duration-300"
        >
          Povratak na početnu
        </Link>
      </div>
    </div>
  )
}
