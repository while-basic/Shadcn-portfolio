import { AudioTrack } from '@/types/audio';

const tracks: AudioTrack[] = [
  {
    title: "Home (Remix)",
    artist: "C-Cell",
    duration: "4:15",
    src: "/audio/home.mp3",
    coverImage: "/images/audio/default-cover.svg"
  },
  {
    title: "Cantina Band",
    artist: "C-Cell",
    duration: "3:15",
    src: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav", // Placeholder
    coverImage: "/images/audio/default-cover.svg"
  },
  {
    title: "Star Wars",
    artist: "C-Cell",
    duration: "5:20",
    src: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav", // Placeholder
    coverImage: "/images/audio/default-cover.svg"
  },
  {
    title: "Imperial March",
    artist: "C-Cell",
    duration: "4:30",
    src: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav", // Placeholder
    coverImage: "/images/audio/default-cover.svg"
  }
];

export { tracks };
