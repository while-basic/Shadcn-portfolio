import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { InfoIcon } from 'lucide-react';

import { Project } from '@/types/project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/motion/text-reveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
}

function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex h-full flex-col overflow-hidden border border-zinc-950/10 bg-white transition-all duration-300 hover:shadow-lg dark:border-zinc-50/10 dark:bg-zinc-900',
        className
      )}
    >
      <CardContent className="flex-1 p-4">
        <div className="flex flex-col gap-4">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <Image
              src={thumbnail || '/images/projects/placeholder.svg'}
              alt={`Image of ${title}`}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight">
              <TextReveal>{title}</TextReveal>
            </h3>
            <p className="text-sm text-muted-foreground">
              <TextReveal>{description || ''}</TextReveal>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge 
                key={`project-tag_${index}`}
                variant="secondary"
                className="transition-colors duration-300 group-hover:bg-primary/10"
              >
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto transition-colors duration-300 group-hover:bg-primary/10"
                asChild
              >
                <Link href={href}>
                  <InfoIcon className="h-4 w-4" />
                  <span className="sr-only">View project details</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
      <Link href={href} className="absolute inset-0 z-0" />
    </Card>
  );
}

export default ProjectCard;
