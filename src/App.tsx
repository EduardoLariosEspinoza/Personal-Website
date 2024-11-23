import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects.ts";
import {
  Container,
  Nav,
  IntroContainer,
  InfoContainer,
  VolleyballImage,
  CardsContainer,
  Cards,
  CardsContainerTitle,
} from "./styles/AppStyles.tsx";
import CV from "/CV_en-Nov-2024.pdf";
import volleyBall from "./assets/images/volleyball-01_483-430-min.png";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation(); // Only trigger the event linked to its component
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Nav isModalOpen={isModalOpen}>
        <div>
          <a href={CV} target="_blank">
            Discover My CV
          </a>
        </div>
        <div>
          <a
            href="https://github.com/EduardoLariosEspinoza/Personal-Website"
            target="_blank"
          >
            See This Repo
          </a>
        </div>
        <div>
          <a href="#contact">Get In Touch</a>
        </div>
      </Nav>

      <IntroContainer isModalOpen={isModalOpen}>
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
        <CardsContainerTitle isModalOpen={isModalOpen}>
          Selected Work
        </CardsContainerTitle>
        <Cards>
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                onClose={closeModal}
                onOpen={openModal}
                isModalOpen={isModalOpen}
              />
            );
          })}
        </Cards>
      </CardsContainer>
    </Container>
  );
}

export default App;
