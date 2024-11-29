import { Photo } from '@/types/gallery';

export const categories = [
  { id: 'wiring', name: 'Wiring', count: 4 },
  { id: 'electrical', name: 'Electrical', count: 4 },
  { id: 'mechanical', name: 'Mechanical', count: 4 },
  { id: 'cooling', name: 'Cooling', count: 4 },
];

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Server Rack Wiring',
    description: 'Clean cable management in a server rack installation',
    src: '/images/gallery/wiring-1.jpg',
    category: 'wiring',
    date: '2024-01-15',
    tags: ['server', 'cables', 'infrastructure'],
    location: 'Data Center, CA'
  },
  {
    id: '2',
    title: 'Power Distribution',
    description: 'Industrial power distribution panel installation',
    src: '/images/gallery/electrical-1.jpg',
    category: 'electrical',
    date: '2024-01-20',
    tags: ['power', 'industrial', 'installation']
  },
  {
    id: '3',
    title: 'HVAC Installation',
    description: 'Commercial HVAC system setup',
    src: '/images/gallery/mechanical-1.jpg',
    category: 'mechanical',
    date: '2024-02-01',
    tags: ['hvac', 'commercial', 'installation']
  },
  {
    id: '4',
    title: 'Cooling System',
    description: 'Data center cooling infrastructure',
    src: '/images/gallery/cooling-1.jpg',
    category: 'cooling',
    date: '2024-02-05',
    tags: ['cooling', 'datacenter', 'infrastructure']
  },
  {
    id: '5',
    title: 'Network Cabinet',
    description: 'Structured network cabling installation',
    src: '/images/gallery/wiring-2.jpg',
    category: 'wiring',
    date: '2024-02-10',
    tags: ['network', 'cabinet', 'cabling']
  },
  {
    id: '6',
    title: 'Circuit Installation',
    description: 'Custom circuit board installation',
    src: '/images/gallery/electrical-2.jpg',
    category: 'electrical',
    date: '2024-02-15',
    tags: ['circuit', 'electronics', 'custom']
  },
  {
    id: '7',
    title: 'Pump System',
    description: 'Industrial pump system installation',
    src: '/images/gallery/mechanical-2.jpg',
    category: 'mechanical',
    date: '2024-02-20',
    tags: ['pump', 'industrial', 'system']
  },
  {
    id: '8',
    title: 'Chiller Unit',
    description: 'Industrial chiller installation and setup',
    src: '/images/gallery/cooling-2.jpg',
    category: 'cooling',
    date: '2024-02-25',
    tags: ['chiller', 'industrial', 'cooling']
  },
  {
    id: '9',
    title: 'Fiber Optic Installation',
    description: 'High-speed fiber optic cable routing',
    src: '/images/gallery/wiring-3.jpg',
    category: 'wiring',
    date: '2024-03-01',
    tags: ['fiber', 'network', 'installation']
  },
  {
    id: '10',
    title: 'Control Panel',
    description: 'Industrial control panel wiring',
    src: '/images/gallery/electrical-3.jpg',
    category: 'electrical',
    date: '2024-03-05',
    tags: ['control', 'panel', 'industrial']
  },
  {
    id: '11',
    title: 'Ventilation System',
    description: 'Commercial ventilation system installation',
    src: '/images/gallery/mechanical-3.jpg',
    category: 'mechanical',
    date: '2024-03-10',
    tags: ['ventilation', 'commercial', 'system']
  },
  {
    id: '12',
    title: 'Cooling Tower',
    description: 'Industrial cooling tower maintenance',
    src: '/images/gallery/cooling-3.jpg',
    category: 'cooling',
    date: '2024-03-15',
    tags: ['cooling', 'tower', 'maintenance']
  },
  {
    id: '13',
    title: 'Data Center Cabling',
    description: 'Enterprise data center cable management',
    src: '/images/gallery/wiring-4.jpg',
    category: 'wiring',
    date: '2024-03-20',
    tags: ['datacenter', 'cables', 'enterprise']
  },
  {
    id: '14',
    title: 'Emergency Power',
    description: 'Emergency power system installation',
    src: '/images/gallery/electrical-4.jpg',
    category: 'electrical',
    date: '2024-03-25',
    tags: ['emergency', 'power', 'backup']
  },
  {
    id: '15',
    title: 'Pneumatic System',
    description: 'Industrial pneumatic system setup',
    src: '/images/gallery/mechanical-4.jpg',
    category: 'mechanical',
    date: '2024-03-30',
    tags: ['pneumatic', 'industrial', 'system']
  },
  {
    id: '16',
    title: 'Server Room Cooling',
    description: 'Precision cooling for server room',
    src: '/images/gallery/cooling-4.jpg',
    category: 'cooling',
    date: '2024-04-01',
    tags: ['server', 'cooling', 'precision']
  }
];
