'use client';

import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { AudioPlayer } from '@/components/ui/audio-player';
import { tracks } from './config';
import TextReveal from '@/components/motion/text-reveal';
import { Card, CardContent } from '@/components/ui/card';

function Audio() {
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const currentTrack = tracks[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="audio">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              <TextReveal>My Music</TextReveal>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              <TextReveal>
                During COVID-19, I distributed my first album on streaming services such as Apple Music and Spotify.
                Here are some of my tracks.
              </TextReveal>
            </p>
          </div>
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <AudioPlayer
                  key={currentTrack.src}
                  src={currentTrack.src}
                  onNext={tracks.length > 1 ? handleNext : undefined}
                  onPrevious={tracks.length > 1 ? handlePrevious : undefined}
                  onEnded={handleNext}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{currentTrack.title}</h3>
                  <p className="text-sm text-gray-500">{currentTrack.artist}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Audio;
