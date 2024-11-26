import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectCardModalProps } from "../types";
import cross from "/cross.svg";
import githubLogo from "/github-logo.png";

const Modal = styled.div`
  position: fixed;
  top: 28vh;
  width: 92%;
  height: 30%;
  background-color: #17264a;
  align-self: center;
  border-radius: 15px;
  border: #ffffff 1px solid;
`;

const ModalNav = styled.section`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  position: relative;
  align-items: center;

  & h4 {
    display: inline-block;
  }

  & img {
    position: absolute;
    left: 1rem;
  }
`;

const ModalImg = styled.img`
  height: 8rem;
  border-bottom: 1px solid white;
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
    <Modal onClick={onClose} ref={modalRef} className="modal">
      <ModalNav>
        <img src={cross} alt="Close" />
        <h4>{project.title}</h4>
      </ModalNav>

      <section>
        <ModalImg src={project.img} alt="" />
        {project.isAvailable ? (
          <>
            <a href={project.webUrl}>Visit the Page!</a>
            {project.repoUrl.map((repo) => {
              return (
                <a href={repo} target="_blank" key={repo.split("/").pop()}>
                  <img src={githubLogo} alt="" />
                </a>
              );
            })}
          </>
        ) : (
          <p>Unfortunately this project is private and cannot be visited</p>
        )}
      </section>
    </Modal>
  );
}

export default ProjectCardModal;
