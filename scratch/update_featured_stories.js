const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let code = `'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const stories = [
`;

files.forEach((f, i) => {
  const aspect = i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]';
  let mt = 'mt-0';
  if (i % 2 !== 0) mt = 'md:mt-32';
  else if (i > 1 && i % 2 === 0) mt = 'mt-0 md:-mt-16';

  code += `  {
    id: ${i + 1},
    title: '',
    location: '',
    image: '/images/gallery/${f}',
    aspectRatio: '${aspect}',
    marginTop: '${mt}'
  },
`;
});

code += `]

export function FeaturedStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index % 2 === 0 ? 0 : 0.2}>
              <div className={\`group block \${story.marginTop}\`}>
                <div className={\`relative w-full \${story.aspectRatio} overflow-hidden mb-6 bg-[#f7f7f7]\`}>
                  <Image
                    src={story.image}
                    alt={"Fotometro Wedding"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'components', 'sections', 'FeaturedStories.tsx'), code);
console.log('Updated FeaturedStories.tsx with ' + files.length + ' images.');
