export interface ProjectTag {
  label: string;
}

export interface Project {
  title: string;
  description: string;
  slug: string;
  tags: { label: string }[];
  date: string;
  introduction: string;
  background: string;
  useCase: string;
  inspiration: string;
  projectDetails: string;
  technologyStack: string[];
  developmentProcess: string;
  features: string[];
  benefits: string[];
  challenges: string[];
  futurePlans: string[];
  conclusion?: string;
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
    description: string;
  }[];
  images?: {
    url: string;
    alt: string;
    caption: string;
  }[];
}
