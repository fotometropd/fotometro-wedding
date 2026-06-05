import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function AboutMinimalSection() {
  return (
    <section id="o-meni" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left: Vertical Portrait */}
          <ScrollReveal direction="left">
            <div className="relative w-full aspect-[3/4] bg-[#f7f7f7]">
              <Image
                src="/images/gallery/fotometrowedding (48).jpg"
                alt="Fotometro Wedding Photographer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right: Delicate Text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              <h2 className="font-heading font-light text-[#111111]" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.2' }}>
                Posvećeni bilježenju autentičnih emocija i bezvremenske ljepote.
              </h2>

              <div className="space-y-6 font-body text-[#555555] text-[15px] leading-loose font-light">
                <p>
                  Više od dvije decenije, naš studio u Prijedoru je mjesto gdje nastaju priče. Vjerujemo da su najljepše fotografije one koje nastaju spontano, u trenucima iskrene radosti, suza i zagrljaja.
                </p>
                <p>
                  Naš pristup je dokumentaran i nenametljiv. Ne režiramo vaše vjenčanje; mi ga bilježimo onakvim kakvo ono zaista jeste. Od proslava u Bosni i Hercegovini do luksuznih destinacijskih vjenčanja širom Evrope, tu smo da stvorimo vizuelno naslijeđe za generacije koje dolaze.
                </p>
              </div>

              <div className="pt-6">
                <Link href="viber://chat?number=%2B38765679112" className="inline-block border-b border-[#111111] pb-1 font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#777777] hover:border-[#777777] transition-colors">
                  Kontaktirajte nas
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
