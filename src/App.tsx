import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  AboutInfo,
  AboutContainer,
  AboutImgDiv,
  BulletedListContainer,
} from "./styles/AppStyles.tsx";
import CV from "/CV_en-Nov-2024.pdf";
import volleyBall from "./assets/images/volleyball-01_483-430-min.png";
import aboutK from "./assets/images/About-Kafka.png";
import BulletedList from "./components/BulletedList.tsx";
import { languages, softSills, techSills } from "./data/skills.ts";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>();
  const form = useRef<HTMLFormElement>(null);

  const closeModal = () => setIsModalOpen(false);
  const openModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation(); // Only trigger the event linked to its component
    setSelectedProject(
      event.currentTarget.querySelector("h4")?.textContent?.replace(/ /g, "-")
    );
    setIsModalOpen(true);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_0qav3e7",
        "template_ank87uo",
        form.current,
        "vhGdLRbz6O8APY2ls"
      )
      .then(
        () => {
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <Container>
      <Nav className={`${isModalOpen ? "modal-active-background" : null}`}>
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

      <IntroContainer
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
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
        <h2 className={`${isModalOpen ? "modal-active-background" : null}`}>
          Selected Work
        </h2>
        <Cards>
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                onClose={closeModal}
                onOpen={openModal}
                selectedProject={selectedProject}
                isModalOpen={isModalOpen}
                key={project.title.replace(/ /g, "-")}
              />
            );
          })}
        </Cards>
      </CardsContainer>

      <AboutContainer>
        <div>
          <AboutInfo>
            <h2>About Me</h2>
            <p>
              I am a Software Engineer with 2 years of experience in web
              development and a big desire to keep growing at this profession,
              so I am currently in the search for opportunities to learn new
              things and skills, gain knowledge, and be able to quit my comfort
              zone. <br /> <br /> At my professional experiences I have been
              able to work in different steps of the software development
              process as the requirements gathering, mock up, coding, and
              testing, mainly.
            </p>
          </AboutInfo>
          <AboutImgDiv>
            <img src={aboutK} alt="" />
          </AboutImgDiv>
        </div>
      </AboutContainer>

      <BulletedListContainer>
        <BulletedList title="Tech Skills" skills={techSills} />
        <BulletedList title="Soft Skills" skills={softSills} />
        <BulletedList title="Languages" skills={languages} />
      </BulletedListContainer>

      <section>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="from_name">Name:</label>
          <input type="text" name="from_name" id="from_name" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" required />

          <label htmlFor="reply_to">Email:</label>
          <input type="email" name="reply_to" id="reply_to" required />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" required />

          <button type="submit">Send</button>
        </form>
      </section>
    </Container>
  );
}

export default App;
