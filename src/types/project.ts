export interface ProjectTag {
  label: string;
}

export interface Project {
  title: string;
  description: string;
  slug: string;
  tags: ProjectTag[];
  date: string;
  introduction?: string;
  background?: string;
  useCase?: string;
  inspiration?: string;
  projectDetails?: string;
  technologyStack?: string[];
  developmentProcess?: string;
  features?: string[];
  benefits?: string[];
  challenges?: string[];
  futurePlans?: string[];
  conclusion?: string;
}
