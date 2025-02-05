import { useEffect, useRef } from "react";
import { ProjectCardModalProps } from "../types";
import cross from "/cross.svg";
import githubLogo from "/github-logo.png";
import { Modal, ModalInfo, ModalNav } from "../styles/ProjectCardModalStyles";

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
            {project.webUrl != "" && (
              <p>
                Visit The Page{" "}
                <a href={project.webUrl} target="_blank">
                  {" "}
                  Here!
                </a>
              </p>
            )}
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
