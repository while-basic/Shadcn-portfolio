'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface GalleryFilterProps {
  categories: { id: string; name: string; count?: number }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="relative mb-8 space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCategoryChange('all')}
          className={cn(
            'relative h-9 rounded-full px-4',
            selectedCategory === 'all' && 'text-primary'
          )}
        >
          All
          <Badge variant="secondary" className="ml-2">
            {categories.reduce((acc, cat) => acc + (cat.count || 0), 0)}
          </Badge>
          {selectedCategory === 'all' && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 -z-10 rounded-full bg-muted"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
              'relative h-9 rounded-full px-4',
              selectedCategory === category.id && 'text-primary'
            )}
          >
            {category.name}
            {category.count !== undefined && (
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            )}
            {selectedCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 -z-10 rounded-full bg-muted"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Button>
        ))}
      </div>
      <div className="h-px bg-border" />
    </div>
  );
}
