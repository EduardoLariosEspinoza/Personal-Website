import { Card, DivImg, Img, CardInfo } from '../styles/ProjectCardStyles'
import { ProjectCardProps } from '../types'

function ProjectCard({project}: ProjectCardProps) {
  return (
    <Card>
      <DivImg>
        <Img src={project.img} alt="Screenshot" />
      </DivImg>
      <CardInfo>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </CardInfo>
    </Card>
  )
}

export default ProjectCard