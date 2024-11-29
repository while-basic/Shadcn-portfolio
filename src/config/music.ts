interface Track {
  title: string;
  description: string;
  coverImage: string;
  audioUrl: string;
  tags: { label: string }[];
  duration: string;
  releaseDate: string;
}

export const featuredMusic: Track[] = [
  {
    title: "Synthwave Dreams",
    description: "A retro-futuristic journey through electronic soundscapes",
    coverImage: "/images/music/synthwave-dreams.jpg",
    audioUrl: "/audio/synthwave-dreams.mp3",
    tags: [
      { label: "Synthwave" },
      { label: "Electronic" },
      { label: "Instrumental" }
    ],
    duration: "3:45",
    releaseDate: "2024-01"
  },
  {
    title: "Ambient Reflections",
    description: "Peaceful ambient compositions for focus and relaxation",
    coverImage: "/images/music/ambient-reflections.jpg",
    audioUrl: "/audio/ambient-reflections.mp3",
    tags: [
      { label: "Ambient" },
      { label: "Meditation" },
      { label: "Atmospheric" }
    ],
    duration: "5:20",
    releaseDate: "2023-12"
  },
  {
    title: "Digital Horizon",
    description: "Progressive electronic beats with modern sound design",
    coverImage: "/images/music/digital-horizon.jpg",
    audioUrl: "/audio/digital-horizon.mp3",
    tags: [
      { label: "Electronic" },
      { label: "Progressive" },
      { label: "Dance" }
    ],
    duration: "4:15",
    releaseDate: "2023-11"
  }
];
