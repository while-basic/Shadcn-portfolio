import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Software Development',
    thumbnail: '/images/skills/software-development.jpg',
    description: `Proficient in Python, JavaScript, Java, C#, HTML, CSS, React, Node.js, SQL, MongoDB, PostgreSQL, and Docker. Experience in developing full-stack applications and integrating with cloud services.`
  },
  {
    name: 'Preventive Maintenance',
    thumbnail: '/images/skills/preventive-maintenance.jpg',
    description: `Expert in preventive maintenance of industrial equipment, including electrical, mechanical, and hydraulic systems. Experience with CMMS systems and maintenance scheduling.`
  },
  {
    name: 'Industrial Manufacturing',
    thumbnail: '/images/skills/industrial-manufacturing.jpg',
    description: `Extensive experience in industrial manufacturing environments, including production line maintenance, quality control, and process optimization.`
  },
  {
    name: 'Project Management',
    thumbnail: '/images/skills/project-management.jpg',
    description: `Skilled in managing technical projects, coordinating with cross-functional teams, and ensuring timely delivery while maintaining quality standards.`
  },
  {
    name: 'Electrical & Electronics',
    thumbnail: '/images/skills/electrical.jpg',
    description: `Strong background in electrical systems, including PLC programming, HMI interfaces, electronic sensors, and industrial control systems. NFPA 70E Electrical Safety certified.`
  }
];

export { trimLen, skills };
