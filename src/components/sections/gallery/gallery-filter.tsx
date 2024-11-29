'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GalleryFilterProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onCategoryChange('all')}
        className={cn(
          'relative',
          selectedCategory === 'all' && 'text-primary'
        )}
      >
        All
        {selectedCategory === 'all' && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 -z-10 rounded-md bg-muted"
          />
        )}
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            'relative',
            selectedCategory === category.id && 'text-primary'
          )}
        >
          {category.name}
          {selectedCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 -z-10 rounded-md bg-muted"
            />
          )}
        </Button>
      ))}
    </div>
  );
}
