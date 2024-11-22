
export interface Project {
  title: string;
  description: string;
  img: string;
  repoUrl: string[];
  webUrl: string;
  isAvailable: boolean;
}

export interface ProjectCardProps {
  project: Project;
}