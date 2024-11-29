import React from 'react';
import SkillCard from './skill-card';
import Reveal from '@/components/reveal';
import { categories } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';

function Skills() {
  return (
    <MotionWrap className="w-full py-12 lg:py-16" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-8">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Skills
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my skills where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="space-y-4 mt-8">
            <Reveal>
              <h3 className="text-2xl font-bold tracking-tighter">{category.name}</h3>
            </Reveal>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={`${category.name}_skill_${index}`}
                  index={categoryIndex * 100 + index + 1}
                  {...skill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionWrap>
  );
}

export default Skills;
