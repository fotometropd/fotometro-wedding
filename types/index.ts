export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: 'vjencanje' | 'snimanje' | 'dron' | 'portret'
  blurDataURL: string
  aspectRatio?: string
}

export interface Testimonial {
  text: string
  name: string
  location: string
  year: string
}

export interface ServiceCard {
  id: string
  eyebrow: string
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
}
