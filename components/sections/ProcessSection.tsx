import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Upit',
    description: 'Pošaljite nam poruku sa datumom i detaljima vjenčanja. Odgovaramo u roku od 24 sata.',
  },
  {
    number: '02',
    title: 'Konsultacija',
    description: 'Upoznajmo se — razgovaramo o vašoj viziji, stilu i svim željama za ovaj poseban dan.',
  },
  {
    number: '03',
    title: 'Snimanje',
    description: 'Na dan vjenčanja, mi smo tu za vas — nenametljivo, profesionalno i posvećeno svakom trenutku.',
  },
  {
    number: '04',
    title: 'Isporuka',
    description: 'Fotografije i film isporučujemo u dogovorenom roku. Uspomene koje traju cijeli život.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kako radimo"
            title="Vaše vjenčanje u četiri koraka"
            subtitle="Jednostavan proces koji vam daje miran um dok mi brinemo o svakom detalju"
          />
        </ScrollReveal>
        
        <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-silk" />
          
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="text-center relative">
                {/* Step number circle */}
                <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-6 bg-cream relative z-10">
                  <span className="font-heading font-light text-gold text-lg">{step.number}</span>
                </div>
                
                <h3 className="font-heading font-medium text-obsidian text-xl mb-3">{step.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
