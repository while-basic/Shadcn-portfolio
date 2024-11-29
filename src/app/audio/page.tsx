'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { AudioPlayer } from '@/components/ui/audio-player';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { tracks } from '@/components/sections/audio/config';
import TextReveal from '@/components/motion/text-reveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AudioPage() {
  const router = useRouter();

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
          <TextReveal>Music Portfolio</TextReveal>
        </h1>
        <p className="text-muted-foreground">
          <TextReveal>
            During my journey as a producer, I&apos;ve created various tracks spanning different genres.
            Here&apos;s a collection of my work.
          </TextReveal>
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Tracks</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={track.coverImage || '/images/audio/default-cover.svg'}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                  <AudioPlayer
                    src={track.src}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.slice(0, 3).map((track, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={track.coverImage || '/images/audio/default-cover.svg'}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                  <AudioPlayer
                    src={track.src}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.slice(1, 4).map((track, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={track.coverImage || '/images/audio/default-cover.svg'}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                  <AudioPlayer
                    src={track.src}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
