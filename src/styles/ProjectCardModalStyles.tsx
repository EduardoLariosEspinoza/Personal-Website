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
  pointer-events: auto;

  @media (min-width: 820px) {
    width: 35rem;
    border-width: 2px;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  @media (min-width: 1220px) {
    width: 40rem;
    height: 25rem;
    transform: translate(-50%, -10%);
  }
`;

export const ModalNav = styled.section`
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  position: relative;
  align-items: center;

  @media (min-width: 1220px) {
    height: 5rem;
  }

  & h4 {
    display: inline-block;

    @media (min-width: 1220px) {
      font-size: 1.25rem;
    }
  }

  & img {
    width: 1.8rem;
    position: absolute;
    left: 1rem;

    @media (min-width: 1220px) {
      width: 2rem;
    }
  }

  & img:hover {
    cursor: pointer;
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

  @media (min-width: 1220px) {
    height: 20rem;
    justify-content: space-around;
  }

  & .screenshot {
    height: 8rem;
    border-radius: 6px;

    @media (min-width: 1220px) {
      height: 10rem;
    }
  }

  & p {
    @media (min-width: 1220px) {
      font-size: 1rem;
    }
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

    @media (min-width: 1220px) {
      height: 3rem;
    }
  }
`;
