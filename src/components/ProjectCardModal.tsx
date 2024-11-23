import styled from "styled-components";
import { ProjectCardModalProps } from "../types";
import { useEffect, useRef } from "react";

const Modal = styled.div`
  position: fixed;
  top: 28vh;
  width: 92%;
  height: 30%;
  background-color: #17264a;
  align-self: center;
  border-radius: 15px;
  border: #ffffff 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
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
      {project.title}
    </Modal>
  );
}

export default ProjectCardModal;
