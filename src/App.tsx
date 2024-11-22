import ProjectCard from './components/ProjectCard'
import { projects } from "./data/projects.ts"
import { Container, Nav, IntroContainer, InfoContainer, VolleyballImage, CardsContainer, Cards } from './styles/AppStyles.tsx'
import CV from '/CV_en-Nov-2024.pdf'
import volleyBall from './assets/images/volleyball-01_483-430-min.png'

function App() {

  return (
    <Container>
      <Nav>
        <div>
          <a href={CV} target='_blank'>Discover My CV</a>
        </div>
        <div>
          <a href="https://github.com/EduardoLariosEspinoza/Personal-Website" target='_blank'>See This Repo</a>
        </div>
        <div>
          <a href="#contact">Get In Touch</a>
        </div>
      </Nav>

      <IntroContainer>
        <InfoContainer>
          <h1>Eduardo Larios Espinoza</h1>
          <h3>Software Engineer</h3>
          <p>elariosespinoza2@gmail.com</p>
        </InfoContainer>
        <VolleyballImage>
          <img src={volleyBall} alt="Volleyball Ball" />
        </VolleyballImage>
      </IntroContainer>

      <CardsContainer>
        <h1>Selected Work</h1>
        <Cards>
          {projects.map((project) => {
            return (
              <ProjectCard project={project} />
            )
          })}
        </Cards>
      </CardsContainer>
      
    </Container>
  )
}

export default App
