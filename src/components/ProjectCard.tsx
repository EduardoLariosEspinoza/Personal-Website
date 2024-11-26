import { Card, DivImg, Img, CardInfo } from "../styles/ProjectCardStyles";
import { ProjectCardProps } from "../types";
import ProjectCardModal from "./ProjectCardModal";

function ProjectCard({
  project,
  onOpen,
  onClose,
  isModalOpen,
}: ProjectCardProps) {
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

      {isModalOpen && (
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
