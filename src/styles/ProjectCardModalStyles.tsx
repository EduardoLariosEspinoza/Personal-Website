import styled from "styled-components";

export const Modal = styled.div`
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

export const ModalNav = styled.section`
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

export const ModalInfo = styled.section`
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
