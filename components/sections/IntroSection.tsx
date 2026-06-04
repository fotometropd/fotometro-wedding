import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function IntroSection() {
  return (
    <section id="usluge" className="py-32 sm:py-48 bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-light italic text-[#111111] leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Fotografišemo najljepše trenutke.<br />
            Prijedor, Bosna i Hercegovina.
          </h1>
        </ScrollReveal>
      </div>
    </section>
  )
}
