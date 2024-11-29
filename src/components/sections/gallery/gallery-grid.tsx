'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { Photo } from '@/types/gallery';
import { cn } from '@/lib/utils';

interface GalleryGridProps {
  photos: Photo[];
}

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setSelectedIndex(photos.findIndex(p => p.id === photo.id));
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedPhoto(photos[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < photos.length - 1) {
      setSelectedPhoto(photos[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <AnimatePresence>
          {photos.slice(0, 16).map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-md bg-muted"
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 w-full p-2">
                  <h3 className="text-sm font-medium text-white">{photo.title}</h3>
                  {photo.description && (
                    <p className="mt-0.5 text-xs text-white/80 line-clamp-2">{photo.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent 
          className="max-w-5xl"
          onKeyDown={handleKeyDown}
        >
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

              <div className="relative mt-4">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    className="object-contain"
                    priority
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                      }}
                      disabled={selectedIndex === 0}
                      className={cn(
                        "transition-transform duration-200",
                        selectedIndex === 0 && "opacity-50"
                      )}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      disabled={selectedIndex === photos.length - 1}
                      className={cn(
                        "transition-transform duration-200",
                        selectedIndex === photos.length - 1 && "opacity-50"
                      )}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex items-center justify-between sm:justify-between">
                <div className="text-sm text-muted-foreground">
                  {selectedPhoto.date && (
                    <span>Taken on {new Date(selectedPhoto.date).toLocaleDateString()}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  {selectedPhoto.downloadUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedPhoto.downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  )}
                  {selectedPhoto.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedPhoto.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Original
                      </a>
                    </Button>
                  )}
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
