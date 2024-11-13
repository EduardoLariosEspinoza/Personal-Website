import { Container, Nav, IntroContainer, InfoContainer, VolleyballImage } from './styles/styledComponents'
import CV from '/CV_en-Nov-2024.pdf'
import volleyBall from './assets/volleyball-01_483-430-min.png'

function App() {

  return (
    <Container>
      <Nav>
        <div>
          <a href={CV} target='_blank'>Discover My CV</a>
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
    </Container>
  )
}

export default App
