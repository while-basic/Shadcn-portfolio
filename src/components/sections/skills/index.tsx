'use client';

import { categories } from './config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category, index) => (
            <AccordionItem key={category.name} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold">
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <Card className="overflow-hidden">
                        <CardHeader className="relative h-48">
                          <Image
                            src={skill.thumbnail}
                            alt={skill.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <CardTitle className="text-white text-2xl">
                              {skill.name}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-4">
                          <CardDescription>
                            {skill.description}
                          </CardDescription>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Proficiency</span>
                              <span className="text-sm text-muted-foreground">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <Progress value={skill.proficiency} className="h-2" />
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                              <TooltipProvider key={item}>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Badge variant="secondary" className="cursor-help">
                                      {item}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Proficient in {item}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
