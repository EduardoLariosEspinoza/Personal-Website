import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ProjectCard from "./components/ProjectCard";
import BulletedList from "./components/BulletedList.tsx";
import TechSkill from "./components/TechSkill.tsx";
import Recommendations from "./components/Recommendations.tsx";
import { languages, positions, softSills, techSills } from "./data/skills.ts";
import { projects } from "./data/projects.ts";
import {
  Container,
  Nav,
  IntroContainer,
  InfoContainer,
  WebDevImage,
  CardsContainer,
  Cards,
  AboutInfo,
  AboutContainer,
  AboutImgDiv,
  BulletedListContainer,
  FormContainer,
  EmailForm,
  SocialsContainer,
  TechSkillsDiv,
  TechSkillsContainer,
  RecommendationsContainer,
} from "./styles/AppStyles.tsx";
import CV from "/CV_en-Nov-2024.pdf";
import githubLogo from "/github-logo.png";
import linkedInLogo from "/logo-linkedin.png";
import webDevImg from "./assets/images/Web-Dev.jpg";
import aboutImg from "./assets/images/javascript.jpg";

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
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

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
        <WebDevImage>
          <img src={webDevImg} alt="Volleyball Ball" />
        </WebDevImage>
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

      <AboutContainer
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
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
            <img src={aboutImg} alt="" />
          </AboutImgDiv>
        </div>
      </AboutContainer>

      <TechSkillsContainer>
        <h2>Tech Skills</h2>
        <TechSkillsDiv>
          {techSills.map((skill) => {
            return <TechSkill tSkill={skill} key={skill.skill} />;
          })}
        </TechSkillsDiv>
      </TechSkillsContainer>

      <BulletedListContainer
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
        <BulletedList title="Soft Skills" skills={softSills} />
        <BulletedList title="Languages" skills={languages} />
        <BulletedList title="Main Roles" skills={positions} />
      </BulletedListContainer>

      <RecommendationsContainer>
        <h2>Recommendations</h2>
        <Recommendations />
      </RecommendationsContainer>

      <FormContainer
        id="contact"
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
        <h2>Send Me An Email</h2>
        <EmailForm ref={form} onSubmit={sendEmail}>
          <label htmlFor="from_name">Name:</label>
          <input type="text" name="from_name" id="from_name" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" required />

          <label htmlFor="reply_to">Email:</label>
          <input type="email" name="reply_to" id="reply_to" required />

          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" required />

          <button type="submit">Send Email</button>
        </EmailForm>
      </FormContainer>

      <SocialsContainer
        className={`${isModalOpen ? "modal-active-background" : null}`}
      >
        <h2>Socials</h2>
        <div>
          <a
            href="https://www.linkedin.com/in/eduardo-larios-espinoza-216185242/"
            target="_blank"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/EduardoLariosEspinoza" target="_blank">
            <img src={githubLogo} alt="Github Logo" />
          </a>
        </div>
      </SocialsContainer>
    </Container>
  );
}

export default App;
