import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectCardModalProps } from "../types";
import cross from "/cross.svg";
import githubLogo from "/github-logo.png";

const Modal = styled.div`
  position: fixed;
  top: 28vh;
  width: 92%;
  height: 20rem;
  background-color: #17264a;
  align-self: center;
  border-radius: 15px;
  border: #ffffff 1px solid;
  z-index: 1000;
`;

const ModalNav = styled.section`
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  position: relative;
  align-items: center;

  & h4 {
    display: inline-block;
  }

  & img {
    width: 1.8rem;
    position: absolute;
    left: 1rem;
  }
`;

const ModalInfo = styled.section`
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 0 2rem;

  & .screenshot {
    height: 8rem;
    border-radius: 6px;
  }

  & a {
    text-decoration: underline;
    color: #36d2cf;
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  & .github-logo {
    height: 2rem;
  }
`;

function ProjectCardModal({ onClose, project, isOpen }: ProjectCardModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isOpen) return;
      // Node === DOM Element
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);

    // cleanup function. Special syntax for useEffect. This return block is going to be executed BEFORE the effect re-runs (so delete the last eventListener), and when the component unmounts (ej. when the DOM element is removed)
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose, isOpen]); // The onClose fn is defined above, so if changes the useEffect has to know it to call the right function to close the modal

  if (!isOpen) return null;

  return (
    <Modal ref={modalRef} className="modal">
      <ModalNav>
        <img src={cross} alt="Close" onClick={onClose} />
        <h4>{project.title}</h4>
      </ModalNav>

      <ModalInfo>
        <img
          src={project.img}
          alt="Project Screenshot"
          className="screenshot"
        />
        {project.isAvailable ? (
          <>
            <p>
              Visit The Page{" "}
              <a href={project.webUrl} target="_blank">
                {" "}
                Here!
              </a>
            </p>
            <div>
              {project.repoUrl.map((repo) => {
                return (
                  <a href={repo} target="_blank" key={repo.split("/").pop()}>
                    <img src={githubLogo} alt="" className="github-logo" />
                  </a>
                );
              })}
            </div>
          </>
        ) : (
          <p>Unfortunately this project is private and cannot be visited</p>
        )}
      </ModalInfo>
    </Modal>
  );
}

export default ProjectCardModal;
