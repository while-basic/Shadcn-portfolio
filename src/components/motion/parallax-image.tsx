'use client';

import React, { RefObject } from 'react';
import Image, { ImageProps } from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxImageProps extends Omit<ImageProps, 'src' | 'ref'> {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  containerClassName?: string;
  parallaxOptions?: {
    yStart?: string;
    yEnd?: string;
    scaleStart?: number;
    scaleEnd?: number;
  };
  src: ImageProps['src'];
  alt: string;
}

const ParallaxImage = ({
  className,
  containerRef,
  containerClassName,
  parallaxOptions,
  src,
  alt,
  ...props
}: ParallaxImageProps) => {
  const {
    yStart = '-10%',
    yEnd = '10%',
    scaleStart = 1,
    scaleEnd = 1.5
  } = parallaxOptions || {};

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [yStart, yEnd]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, scaleEnd]);

  return (
    <motion.div
      className={cn('relative w-full overflow-hidden', containerClassName)}
      style={{ y, scale }}
    >
      <Image className={cn('object-cover', className)} fill src={src} alt={alt} {...props} />
    </motion.div>
  );
};

ParallaxImage.displayName = 'ParallaxImage';

export default ParallaxImage;
