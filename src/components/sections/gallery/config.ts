import { Photo } from '@/types/gallery';

export const categories = [
  { id: 'software', name: 'Software Development', count: 4 },
  { id: 'mechatronics', name: 'Mechatronics', count: 4 },
  { id: 'automation', name: 'Industrial Automation', count: 4 },
  { id: 'projects', name: 'Personal Projects', count: 4 },
];

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Data Center Operations',
    description: 'Managed critical and non-critical data center infrastructure at T5 Data Centers',
    src: '/images/gallery/datacenter-1.jpg',
    category: 'automation',
    date: '2021-2022',
    tags: ['CMMS', 'infrastructure', 'maintenance'],
    location: 'San Antonio, Texas'
  },
  {
    id: '2',
    title: 'Industrial Manufacturing',
    description: 'Implemented automation solutions and maintained factory equipment at CM Wire',
    src: '/images/gallery/manufacturing-1.jpg',
    category: 'mechatronics',
    date: '2019-2021',
    tags: ['PLC', 'HMI', 'automation'],
    location: 'Santa Teresa, New Mexico'
  },
  {
    id: '3',
    title: 'MedChat',
    description: 'Large Language Model for medical diagnostics and patient care',
    src: '/images/gallery/medchat-1.jpg',
    category: 'software',
    date: '2023',
    tags: ['AI', 'healthcare', 'LLM']
  },
  {
    id: '4',
    title: 'ChatterSync',
    description: 'AI-powered chatbot system for real-time multi-chatbot interactions',
    src: '/images/gallery/chattersync-1.jpg',
    category: 'software',
    date: '2023',
    tags: ['AI', 'chatbot', 'real-time']
  },
  {
    id: '5',
    title: 'Gemini Pro Vision',
    description: 'Web application leveraging Google\'s Gemini Pro for vision and text analysis',
    src: '/images/gallery/gemini-1.jpg',
    category: 'projects',
    date: '2023',
    tags: ['AI', 'vision', 'web-app']
  },
  {
    id: '6',
    title: 'MIDI Saber',
    description: 'Game development project using JavaScript and Unity for Beat Saber map creation',
    src: '/images/gallery/midi-1.jpg',
    category: 'projects',
    date: '2023',
    tags: ['game-dev', 'unity', 'javascript']
  },
  {
    id: '7',
    title: 'SDXL Image Generation',
    description: 'AI-powered image generation using Stability AI\'s SDXL model through Replicate API. Create high-quality images from text descriptions.',
    src: '/images/gallery/sdxl-1.jpg',
    category: 'software',
    date: '2024',
    tags: ['AI', 'image-generation', 'replicate-api', 'next.js']
  }
];
