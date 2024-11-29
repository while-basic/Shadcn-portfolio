import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 7;
//

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: 'home.jpg'
  },
  {
    title: 'About',
    href: '/about',
    thumbnail: 'about.jpg'
  },
  {
    title: 'Skills',
    href: '/skills',
    thumbnail: 'skills.jpg'
  },
  {
    title: 'Projects',
    href: '/projects',
    thumbnail: 'projects.jpg'
  },
  {
    title: 'Audio',
    href: '/audio',
    thumbnail: 'audio.jpg'
  },
  {
    title: 'Blog',
    href: '/blog',
    thumbnail: 'blog.jpg'
  },
  {
    title: 'Contact',
    href: '/contact',
    thumbnail: 'contact.jpg'
  }
];

export { linkLimit, links };
