'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2,
  VolumeX
} from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
  duration: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Christopher Celaya",
    coverArt: "/music/cover1.jpg",
    audioUrl: "/music/track1.mp3",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Urban Pulse",
    artist: "Christopher Celaya",
    coverArt: "/music/cover2.jpg",
    audioUrl: "/music/track2.mp3",
    duration: "4:12"
  },
  // Add more tracks as needed
];

export function Audio() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.volume = newMutedState ? 0 : volume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Music Portfolio</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Track List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Tracks</h2>
          {tracks.map((track, index) => (
            <Card 
              key={track.id}
              className={`transition-all hover:shadow-lg cursor-pointer ${
                currentTrackIndex === index ? 'border-primary' : ''
              }`}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsPlaying(true);
              }}
            >
              <CardContent className="flex items-center p-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={track.coverArt}
                    alt={track.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
                <span className="text-sm text-muted-foreground">{track.duration}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Player */}
        <div className="sticky top-4">
          <Card className="p-6">
            <div className="relative w-full aspect-square mb-6">
              <Image
                src={currentTrack.coverArt}
                alt={currentTrack.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{currentTrack.title}</h2>
              <p className="text-muted-foreground">{currentTrack.artist}</p>
            </div>

            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={[currentTime]}
                  max={duration}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={playPreviousTrack}
                >
                  <SkipBack size={24} />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={playNextTrack}
                >
                  <SkipForward size={24} />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
              </div>
            </div>

            <audio
              ref={audioRef}
              src={currentTrack.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={playNextTrack}
              autoPlay={isPlaying}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
