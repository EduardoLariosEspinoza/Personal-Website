
export interface Projects {
  title: string;
  description: string;
  img: string;
  repoUrl: string;
  webUrl: string;
}

export interface ProjectCardProps {
  project: Projects;
}