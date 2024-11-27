import { Card, DivImg, Img, CardInfo } from "../styles/ProjectCardStyles";
import { ProjectCardProps } from "../types";
import ProjectCardModal from "./ProjectCardModal";

function ProjectCard({
  project,
  onClose,
  onOpen,
  selectedProject,
  isModalOpen,
}: ProjectCardProps) {
  const actualProject = project.title.replace(/ /g, "-");

  console.log(selectedProject);

  return (
    <>
      <Card
        onClick={isModalOpen ? onClose : onOpen}
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
        <DivImg>
          <Img src={project.img} alt="Screenshot" />
        </DivImg>
        <CardInfo>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </CardInfo>
      </Card>

      {isModalOpen && selectedProject === actualProject && (
        <ProjectCardModal
          onClose={onClose}
          project={project}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
}

export default ProjectCard;
