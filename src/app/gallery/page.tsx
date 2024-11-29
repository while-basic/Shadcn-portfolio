'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { GalleryGrid } from '@/components/sections/gallery/gallery-grid';
import { GalleryFilter } from '@/components/sections/gallery/gallery-filter';
import TextReveal from '@/components/motion/text-reveal';
import { categories, photos } from '@/components/sections/gallery/config';

export default function GalleryPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 hover:bg-transparent"
        >
          <ChevronLeft size={20} />
          Back
        </Button>
      </div>

      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          <TextReveal>Photo Gallery</TextReveal>
        </h1>
        <p className="text-muted-foreground">
          <TextReveal>
            A curated collection of my work across various categories.
          </TextReveal>
        </p>
      </div>

      <GalleryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <GalleryGrid photos={filteredPhotos} />
    </motion.div>
  );
}
