import { Photo } from '@/types/gallery';

export const categories = [
  { id: 'nature', name: 'Nature' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'street', name: 'Street' },
  { id: 'events', name: 'Events' },
];

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Mountain Sunrise',
    description: 'A beautiful sunrise over the mountains',
    src: '/images/gallery/placeholder.svg',
    category: 'nature',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Modern Building',
    description: 'Contemporary architecture in downtown',
    src: '/images/gallery/placeholder.svg',
    category: 'architecture',
    date: '2024-01-20',
  },
  {
    id: '3',
    title: 'Street Life',
    description: 'Capturing the essence of city life',
    src: '/images/gallery/placeholder.svg',
    category: 'street',
    date: '2024-02-01',
  },
  {
    id: '4',
    title: 'Portrait Study',
    description: 'Environmental portrait series',
    src: '/images/gallery/placeholder.svg',
    category: 'portraits',
    date: '2024-02-05',
  },
  {
    id: '5',
    title: 'Concert Night',
    description: 'Live music performance',
    src: '/images/gallery/placeholder.svg',
    category: 'events',
    date: '2024-02-10',
  },
  {
    id: '6',
    title: 'Forest Path',
    description: 'A serene walk through the forest',
    src: '/images/gallery/placeholder.svg',
    category: 'nature',
    date: '2024-02-15',
  },
  {
    id: '7',
    title: 'City Lights',
    description: 'Urban landscape at night',
    src: '/images/gallery/placeholder.svg',
    category: 'street',
    date: '2024-02-20',
  },
  {
    id: '8',
    title: 'Historic Building',
    description: 'Classic architectural design',
    src: '/images/gallery/placeholder.svg',
    category: 'architecture',
    date: '2024-02-25',
  },
  // Add more photos as needed
];
