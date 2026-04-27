import type { GalleryImage } from '@/types'

export const galleryCategories = [
  { value: 'sve', label: 'Sve' },
  { value: 'vjencanje', label: 'Vjenčanja' },
  { value: 'snimanje', label: 'Snimanje' },
  { value: 'dron', label: 'Dron' },
  { value: 'portret', label: 'Portret' },
]

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/wedding-01.jpg',
    alt: 'Vjenčanje — mladenci pod svadbenom kapijom sa cvijećem',
    width: 1200,
    height: 1600,
    category: 'vjencanje',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARC...',
  },
  {
    id: '2',
    src: '/images/gallery/wedding-02.jpg',
    alt: 'Romantičan pogled mladenaca tokom ceremonije',
    width: 1600,
    height: 1067,
    category: 'vjencanje',
    blurDataURL: 'data:image/jpeg;base64,...',
  },
  {
    id: '3',
    src: '/images/gallery/drone-01.jpg',
    alt: 'Snimak dronom — pogled iz zraka na vjenčanje',
    width: 1920,
    height: 1080,
    category: 'dron',
    blurDataURL: 'data:image/jpeg;base64,...',
  },
]
