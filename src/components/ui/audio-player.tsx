'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './button';
import { Slider } from './slider';
import { 
  PlayIcon, 
  PauseIcon, 
  SkipBackIcon, 
  SkipForwardIcon, 
  Volume2Icon,
  VolumeXIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  onEnded?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  className?: string;
}

export function AudioPlayer({ 
  src, 
  onEnded, 
  onNext, 
  onPrevious,
  className 
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset state when src changes
    setIsLoaded(false);
    setIsPlaying(false);
    setCurrentTime(0);

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setIsLoaded(true);
      console.log('Audio loaded:', { duration: audio.duration, currentTime: audio.currentTime });
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
      console.log('Time update:', audio.currentTime);
    }

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setIsLoaded(false);
      setIsPlaying(false);
    }
    
    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    }
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = async () => {
    if (!isLoaded || !audioRef.current) return;
    
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error playing/pausing:', error);
      setIsPlaying(false);
    }
  };

  const handleTimeChange = (value: number[]) => {
    if (!isLoaded || !audioRef.current) return;
    
    try {
      const newTime = value[0] || 0;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      console.log('Time changed to:', newTime);
    } catch (error) {
      console.error('Error setting time:', error);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] || 0;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = 1;
      setVolume(1);
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onEnded?.();
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      <audio 
        ref={audioRef} 
        src={src} 
        preload="auto"
        onLoadStart={() => console.log('Loading started')}
        onLoadedMetadata={() => console.log('Metadata loaded')}
        onLoadedData={() => console.log('Data loaded')}
        onError={(e) => console.error('Audio error:', e)}
      />
      
      <div className="flex items-center justify-center space-x-2">
        {onPrevious && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="h-8 w-8"
            disabled={!isLoaded}
          >
            <SkipBackIcon className="h-4 w-4" />
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          className="h-8 w-8"
          disabled={!isLoaded}
        >
          {isPlaying ? (
            <PauseIcon className="h-4 w-4" />
          ) : (
            <PlayIcon className="h-4 w-4" />
          )}
        </Button>

        {onNext && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="h-8 w-8"
            disabled={!isLoaded}
          >
            <SkipForwardIcon className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <span className="w-12 text-sm tabular-nums">
          {formatTime(currentTime)}
        </span>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={handleTimeChange}
          className="w-full"
          disabled={!isLoaded}
        />
        <span className="w-12 text-sm tabular-nums">
          {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleMuteToggle}
          className="h-8 w-8"
          disabled={!isLoaded}
        >
          {isMuted ? (
            <VolumeXIcon className="h-4 w-4" />
          ) : (
            <Volume2Icon className="h-4 w-4" />
          )}
        </Button>
        <Slider
          value={[volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-24"
          disabled={!isLoaded}
        />
      </div>
    </div>
  );
}
