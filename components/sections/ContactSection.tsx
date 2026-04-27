'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: '',
    honeypot: '', // Spam protection
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) return

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          weddingDate: formData.weddingDate,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', weddingDate: '', message: '', honeypot: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div className="text-cream space-y-8">
              <p className="text-eyebrow">Kontaktirajte nas</p>
              <h2 className="font-heading font-light italic text-cream" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.1' }}>
                Rezervišite vaš<br />
                <span className="text-gold-light">poseban dan</span>
              </h2>
              <p className="font-body text-cream/60 leading-relaxed max-w-sm">
                Kapaciteti su ograničeni. Kontaktirajte nas što prije kako bismo zajedno isplanirali vaše savršeno vjenčanje.
              </p>

              {/* Contact details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-px bg-gold mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-cream/40 text-xs tracking-widest uppercase mb-1">Telefon</p>
                    <a href="tel:+38765679112" className="font-body text-cream hover:text-gold transition-colors">
                      +387 65 679 112
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-px bg-gold mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-cream/40 text-xs tracking-widest uppercase mb-1">E-mail</p>
                    <a href="mailto:fotometropd@gmail.com" className="font-body text-cream hover:text-gold transition-colors">
                      fotometropd@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-px bg-gold mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-cream/40 text-xs tracking-widest uppercase mb-1">Instagram</p>
                    <a href="https://instagram.com/fotometro_wedding" target="_blank" rel="noopener noreferrer" className="font-body text-cream hover:text-gold transition-colors">
                      @fotometro_wedding
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Honeypot - hidden from real users */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-cream/50 text-xs tracking-widest uppercase block mb-2">Vaše ime *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ime i prezime"
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold py-3 font-body text-cream placeholder:text-cream/30 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-cream/50 text-xs tracking-widest uppercase block mb-2">E-mail adresa *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@primjer.com"
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold py-3 font-body text-cream placeholder:text-cream/30 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-cream/50 text-xs tracking-widest uppercase block mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+387 ..."
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold py-3 font-body text-cream placeholder:text-cream/30 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-cream/50 text-xs tracking-widest uppercase block mb-2">Datum vjenčanja</label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold py-3 font-body text-cream placeholder:text-cream/30 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-cream/50 text-xs tracking-widest uppercase block mb-2">Vaša poruka *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Recite nam nešto o vašem vjenčanju..."
                  className="w-full bg-transparent border-b border-cream/20 focus:border-gold py-3 font-body text-cream placeholder:text-cream/30 outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gold text-obsidian font-body font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Slanje...' : 'Pošaljite upit'}
              </button>

              {status === 'success' && (
                <p className="font-body text-green-400 text-sm text-center">
                  Vaša poruka je uspješno poslana! Javićemo se uskoro.
                </p>
              )}
              {status === 'error' && (
                <p className="font-body text-red-400 text-sm text-center">
                  Došlo je do greške. Molimo pokušajte ponovo ili nas pozovite direktno.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
