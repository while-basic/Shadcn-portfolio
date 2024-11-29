export interface Skill {
  name: string;
  proficiency: number;
  items: string[];
  description: string;
  thumbnail: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
