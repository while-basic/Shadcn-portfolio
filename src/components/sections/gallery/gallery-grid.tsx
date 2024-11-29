'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Photo } from '@/types/gallery';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryGridProps {
  photos: Photo[];
}

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedPhoto(photo)}
          >
            <AspectRatio ratio={1}>
              <div className="relative h-full w-full">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-lg font-semibold">{photo.title}</h3>
                    {photo.description && (
                      <p className="mt-2 text-sm">{photo.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </AspectRatio>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPhoto && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPhoto.title}</DialogTitle>
                {selectedPhoto.description && (
                  <DialogDescription>
                    {selectedPhoto.description}
                  </DialogDescription>
                )}
              </DialogHeader>
              <div className="relative mt-4 overflow-hidden rounded-lg">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
