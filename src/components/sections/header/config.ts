import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 9;
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
    title: 'What I Do',
    href: '/#what-i-do',
    thumbnail: 'what-i-do.jpg'
  },
  {
    title: 'Skills',
    href: '/skills',
    thumbnail: 'skills.jpg'
  },
  {
    title: 'Experience',
    href: '/experience',
    thumbnail: 'experience.jpg'
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
