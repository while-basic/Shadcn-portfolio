import { Skill, SkillCategory } from '@/types/skill';

const categories: SkillCategory[] = [
  {
    name: 'Development',
    skills: [
      {
        name: 'Frontend Development',
        proficiency: 90,
        items: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
        description: 'Building modern, responsive web applications with React and Next.js',
        thumbnail: '/images/skills/frontend.jpg'
      },
      {
        name: 'Backend Development',
        proficiency: 85,
        items: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'PostgreSQL'],
        description: 'Developing scalable backend services and APIs',
        thumbnail: '/images/skills/backend.jpg'
      },
      {
        name: 'DevOps & Tools',
        proficiency: 80,
        items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux'],
        description: 'Managing development operations and cloud infrastructure',
        thumbnail: '/images/skills/devops.jpg'
      }
    ]
  },
  {
    name: 'Industrial',
    skills: [
      {
        name: 'Preventive Maintenance',
        proficiency: 95,
        items: ['Equipment Maintenance', 'CMMS Systems', 'Maintenance Scheduling'],
        description: 'Expert in preventive maintenance of industrial equipment',
        thumbnail: '/images/skills/preventive-maintenance.jpg'
      },
      {
        name: 'Manufacturing',
        proficiency: 90,
        items: ['Production Line', 'Quality Control', 'Process Optimization'],
        description: 'Extensive experience in industrial manufacturing environments',
        thumbnail: '/images/skills/industrial-manufacturing.jpg'
      },
      {
        name: 'Electrical Systems',
        proficiency: 85,
        items: ['PLC Programming', 'HMI Interfaces', 'Control Systems', 'NFPA 70E'],
        description: 'Strong background in electrical and control systems',
        thumbnail: '/images/skills/electrical.jpg'
      }
    ]
  },
  {
    name: 'Management',
    skills: [
      {
        name: 'Project Management',
        proficiency: 85,
        items: ['Agile', 'Scrum', 'Team Leadership', 'Resource Planning'],
        description: 'Managing technical projects and cross-functional teams',
        thumbnail: '/images/skills/project-management.jpg'
      },
      {
        name: 'Technical Leadership',
        proficiency: 80,
        items: ['Team Mentoring', 'Code Reviews', 'Architecture Design'],
        description: 'Leading technical teams and making architectural decisions',
        thumbnail: '/images/skills/leadership.jpg'
      }
    ]
  }
];

export { categories };
