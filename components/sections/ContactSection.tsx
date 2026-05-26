'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        weddingDate: formData.weddingDate,
        message: formData.message,
      },
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
    <section id="kontakt" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div className="text-obsidian space-y-8">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-stone">Kontaktirajte nas</p>
              <h2 className="font-heading font-light italic text-obsidian" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.1' }}>
                Rezervišite vaš<br />
                <span className="text-stone">poseban dan</span>
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed max-w-sm">
                Kapaciteti su ograničeni. Kontaktirajte nas što prije kako bismo zajedno isplanirali vaše savršeno vjenčanje.
              </p>

              {/* Contact details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-[1px] bg-stone mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-stone/70 text-[10px] tracking-[0.2em] uppercase mb-1">Telefon</p>
                    <a href="tel:+38765679112" className="font-body text-charcoal hover:text-stone transition-colors">
                      +387 65 679 112
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-[1px] bg-stone mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-stone/70 text-[10px] tracking-[0.2em] uppercase mb-1">E-mail</p>
                    <a href="mailto:fotometropd@gmail.com" className="font-body text-charcoal hover:text-stone transition-colors">
                      fotometropd@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-[1px] bg-stone mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-body text-stone/70 text-[10px] tracking-[0.2em] uppercase mb-1">Instagram</p>
                    <a href="https://instagram.com/fotometro_wedding" target="_blank" rel="noopener noreferrer" className="font-body text-charcoal hover:text-stone transition-colors">
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

              {/* Honeypot */}
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
                  <label className="font-body text-stone/80 text-[10px] tracking-[0.2em] uppercase block mb-2">Vaše ime *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ime i prezime"
                    className="w-full bg-transparent border-b border-stone/30 focus:border-charcoal py-3 font-body text-charcoal placeholder:text-stone/40 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-stone/80 text-[10px] tracking-[0.2em] uppercase block mb-2">E-mail adresa *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@primjer.com"
                    className="w-full bg-transparent border-b border-stone/30 focus:border-charcoal py-3 font-body text-charcoal placeholder:text-stone/40 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-stone/80 text-[10px] tracking-[0.2em] uppercase block mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+387 ..."
                    className="w-full bg-transparent border-b border-stone/30 focus:border-charcoal py-3 font-body text-charcoal placeholder:text-stone/40 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="font-body text-stone/80 text-[10px] tracking-[0.2em] uppercase block mb-2">Datum vjenčanja</label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-transparent border-b border-stone/30 focus:border-charcoal py-3 font-body text-charcoal placeholder:text-stone/40 outline-none transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-stone/80 text-[10px] tracking-[0.2em] uppercase block mb-2">Vaša poruka *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Recite nam nešto o vašem vjenčanju..."
                  className="w-full bg-transparent border-b border-stone/30 focus:border-charcoal py-3 font-body text-charcoal placeholder:text-stone/40 outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-transparent border border-stone/30 text-charcoal font-body font-medium text-[10px] tracking-[0.3em] uppercase hover:border-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {status === 'loading' ? 'Slanje...' : 'Pošaljite upit'}
              </button>

              {status === 'success' && (
                <p className="font-body text-green-600 text-sm text-center">
                  Vaša poruka je uspješno poslana! Javićemo se uskoro.
                </p>
              )}
              {status === 'error' && (
                <p className="font-body text-red-600 text-sm text-center">
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
