import styled from 'styled-components'

export const ProjectImg = styled.img`
  width: 100px;
  height: 100px;
`

interface Projects {
  title: string;
  description: string;
  img: string;
}

interface ProjectCardProps {
  project: Projects;
}

function ProjectCard({project}: ProjectCardProps) {
  return (
    <div>
      <div></div>
      <div>
        <h4></h4>
        <p></p>
      </div>
    </div>
  )
}

export default ProjectCard