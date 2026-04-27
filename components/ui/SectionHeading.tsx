interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-heading font-light text-obsidian" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: '1.1' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-stone mt-4 leading-relaxed text-lg">{subtitle}</p>
      )}
    </div>
  )
}
