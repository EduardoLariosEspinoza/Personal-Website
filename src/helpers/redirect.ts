import { Project } from "../types";

export const goToExternalSite = (project: Project) => {
  if(project.webUrl !== '') {
    window.open(project.webUrl, "_blank", "noopener,noreferrer")
  }
};