import { MouseEventHandler } from "react";

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
  onClose: () => void;
  onOpen: MouseEventHandler<HTMLDivElement>;
  selectedProject: string | undefined;
  isModalOpen: boolean;
}

export interface ProjectCardModalProps {
  project: Project;
  onClose: () => void;
  isOpen: boolean;
}
