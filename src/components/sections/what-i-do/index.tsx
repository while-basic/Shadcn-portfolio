'use client';

import { whatIDo } from './config';
import { Card, CardContent } from '@/components/ui/card';
import TextReveal from '@/components/motion/text-reveal';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const animation = {
  hide: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1
  }
};

export default function WhatIDo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <TextReveal>What I Do</TextReveal>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            <TextReveal>Combining technical expertise with creative problem-solving</TextReveal>
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {whatIDo.map((item, index) => (
            <motion.div
              key={item.title}
              variants={animation}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  <Link 
                    href="#" 
                    className={cn(
                      "mt-4 inline-flex items-center text-sm font-semibold",
                      "text-gray-900 dark:text-gray-100",
                      "hover:text-gray-700 dark:hover:text-gray-300"
                    )}
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
