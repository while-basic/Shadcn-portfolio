interface WhatIDoItem {
  title: string;
  description: string;
  icon: string;
}

const whatIDo: WhatIDoItem[] = [
  {
    title: 'SYSTEMS INTEGRATION',
    description: 'Specializing in connecting integrated systems, from industrial machinery to modern software platforms, ensuring seamless operation and optimal performance.',
    icon: '🔄'
  },
  {
    title: 'SOFTWARE DEVELOPMENT',
    description: 'Self-taught programmer, creating efficient solutions that solve real-world problems.',
    icon: '💻'
  },
  {
    title: 'INDUSTRIAL TECHNOLOGY',
    description: 'Experienced in maintaining and optimizing pneumatic, hydraulic, water, and electrical systems, bringing reliability to complex industrial operations.',
    icon: '⚙️'
  },
  {
    title: 'AUDIO ENGINEERING & MUSIC PRODUCTION',
    description: 'Passionate about crafting high-quality sound experiences through recording, mixing, and music production, combining technical expertise with creative vision.',
    icon: '🎧'
  }
];

export { whatIDo };
export type { WhatIDoItem };
