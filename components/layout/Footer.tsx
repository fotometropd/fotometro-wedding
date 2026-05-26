import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Brand / Logo */}
        <Link href="/" className="mb-12">
          <div className="font-heading text-2xl tracking-widest text-[#111111]">FOTOMETRO</div>
          <div className="font-body text-[8px] tracking-[0.4em] uppercase text-[#777777] mt-2">Wedding Photography</div>
        </Link>

        {/* Minimal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16">
          <a href="mailto:fotometropd@gmail.com" className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#777777] transition-colors">
            Pošaljite Upit
          </a>
          <a href="https://instagram.com/fotometro_wedding" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#777777] transition-colors">
            Instagram
          </a>
          <a href="https://facebook.com/fotometropd" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#777777] transition-colors">
            Facebook
          </a>
        </div>

        {/* Copyright */}
        <div className="font-body text-[9px] tracking-[0.1em] text-[#999999] uppercase">
          &copy; {currentYear} Fotometro. Sva prava zadržana.
        </div>

      </div>
    </footer>
  )
}
