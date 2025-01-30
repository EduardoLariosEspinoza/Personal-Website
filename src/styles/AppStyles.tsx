import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 0 10%;
  background: #121725;
`;

export const Nav = styled.nav`
  background: #121725;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.75rem;

    @media (min-width: 660px) {
      font-size: 1.25rem;
    }
  }
`;

export const IntroContainer = styled.section`
  min-height: 6.1875rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  @media (min-width: 760px) {
    margin: 0 0 3rem;
    height: 19rem;
    flex-direction: row;
  }

  @media (min-width: 1220px) {
    margin: 0;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.4rem;
  text-align: center;

  & h3 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  & p {
    font-size: 0.875rem;
    font-weight: 300;
  }

  @media (min-width: 760px) {
    align-items: start;
    flex: 3;
    line-height: 3.5rem;
    height: auto;

    & h1 {
      font-size: 2.8125rem;
      text-align: left;
    }

    & h3 {
      font-size: 1.5rem;
    }

    & p {
      font-size: 1rem;
    }
  }
`;

export const WebDevImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & img {
    border-radius: 20px;
    width: 3.75rem;
    //height: 3.38769rem;

    @media (min-width: 760px) {
      width: 9.375rem;
      //height: 8.46919rem;
    }

    @media (min-width: 1220px) {
      width: 30vh;
      //height: auto;
    }
  }

  @media (min-width: 760px) {
    align-items: flex-end;
    flex: 1;
  }

  @media (min-width: 1220px) {
    align-items: flex-start;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 500px) {
    margin: 0;
  }

  @media (min-width: 1220px) {
    gap: 3rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  @media (min-width: 1220px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

export const AboutContainer = styled.section`
  margin: 0 0 3rem;
  width: 100%;

  & > div {
    @media (min-width: 1220px) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

export const AboutInfo = styled.div`
  @media (min-width: 1220px) {
    width: 40%;
  }

  & h2 {
    margin-bottom: 1.5rem;

    @media (min-width: 1220px) {
      margin-bottom: 3rem;
    }
  }

  & p {
    text-align: justify;

    @media (min-width: 1220px) {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
`;

export const AboutImgDiv = styled.div`
  display: none;

  @media (min-width: 1220px) {
    display: flex;
    width: 50%;
    justify-content: center;

    & img {
      height: 30vh;
      align-self: center;
      border-radius: 15px;
    }
  }
`;

export const ExperiencesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  & p {
    font-size: 0.9rem;
    text-align: justify;
  }
`;

export const ExperiencesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  @media (min-width: 1220px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    row-gap: 4rem;
  }
`;

export const TechSkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TechSkillsDiv = styled.div`
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @media (min-width: 660px) {
    grid-template-columns: repeat(3, 1fr);
    height: 30rem;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const BulletedListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 820px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1220px) {
    justify-content: space-between;
    gap: 10%;
  }
`;

export const RecommendationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormContainer = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1220px) {
    gap: 5rem;
    margin: 0;
  }
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 520px) {
    align-items: center;
  }

  @media (min-width: 1220px) {
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: auto;
    row-gap: 2rem;
  }

  & label {
    @media (min-width: 1220px) {
      font-size: 1rem;
      align-self: flex-start;
    }
  }

  & input,
  textarea {
    width: 80%;
    border-radius: 1.75rem;
    background: #2c344b;
    border: none;
    max-width: 82rem;
  }

  & input {
    height: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    padding-left: 1rem;

    @media (min-width: 1220px) {
      height: 3rem;
      font-size: 1rem;
    }
  }

  & textarea {
    height: 6rem;
    margin-bottom: 2rem;
    padding: 1rem;

    @media (min-width: 1220px) {
      height: 8rem;
    }
  }

  & button {
    width: fit-content;
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: black;
    border-radius: 1.75rem;
    background: #36d2cf;
    border: none;
    align-self: center;

    @media (min-width: 1220px) {
      font-size: 1rem;
      grid-column: 1 / 3;
      margin-top: 2rem;
    }
  }

  & button:hover {
    cursor: pointer;
    background: #b1fcfb;
  }
`;

export const SocialsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 1220px) {
    gap: 3rem;
    align-items: center;
  }

  & div {
    width: 100%;
    display: flex;
    gap: 3rem;

    @media (min-width: 1220px) {
      gap: 5rem;
      justify-content: center;
    }
  }

  & div img {
    width: 2.5rem;

    @media (min-width: 1220px) {
      width: 3rem;
    }
  }
`;
