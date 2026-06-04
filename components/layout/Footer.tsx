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
        </div>

        {/* SEO Location Links (Subtle) */}
        <div className="w-full border-t border-stone/20 pt-12 mb-8">
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-stone mb-6">Dostupni u gradovima</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            <Link href="/vjencanja/banja-luka" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Banja Luka</Link>
            <Link href="/vjencanja/sarajevo" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Sarajevo</Link>
            <Link href="/vjencanja/mostar" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Mostar</Link>
            <Link href="/vjencanja/tuzla" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Tuzla</Link>
            <Link href="/vjencanja/prijedor" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Prijedor</Link>
            <Link href="/vjencanja/bihac" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Bihać</Link>
            <Link href="/vjencanja/zenica" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Zenica</Link>
            <Link href="/vjencanja/bijeljina" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Bijeljina</Link>
            <Link href="/vjencanja/doboj" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Doboj</Link>
            <Link href="/vjencanja/trebinje" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Trebinje</Link>
            <Link href="/vjencanja/brcko" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Brčko</Link>
            
            <Link href="/vjencanja/zagreb" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Zagreb</Link>
            <Link href="/vjencanja/beograd" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Beograd</Link>
            
            <Link href="/vjencanja/split" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Split</Link>
            <Link href="/vjencanja/dubrovnik" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Dubrovnik</Link>
            <Link href="/vjencanja/zadar" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Zadar</Link>
            <Link href="/vjencanja/sibenik" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Šibenik</Link>
            <Link href="/vjencanja/makarska" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Makarska</Link>
            <Link href="/vjencanja/rovinj" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Rovinj</Link>
            <Link href="/vjencanja/opatija" className="font-body text-[10px] text-[#999999] hover:text-[#111111] transition-colors">Opatija</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-body text-[9px] tracking-[0.1em] text-[#999999] uppercase">
          &copy; {currentYear} Fotometro. Sva prava zadržana.
        </div>

      </div>
    </footer>
  )
}
