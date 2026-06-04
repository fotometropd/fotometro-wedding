export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: 'vjencanje' | 'snimanje' | 'dron' | 'portret'
  blurDataURL?: string
  aspectRatio?: string
}

