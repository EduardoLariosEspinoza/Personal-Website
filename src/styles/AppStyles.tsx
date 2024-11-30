import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 10%;
  background: #121725;
`;

export const IntroContainer = styled.section`
  min-height: 6.1875rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  @media (min-width: 760px) {
    margin: 3rem 0;
    height: 19rem;
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

    & h1 {
      font-size: 2.8125rem;
    }

    & h3 {
      font-size: 1.5rem;
    }

    & p {
      font-size: 1rem;
    }
  }
`;

export const VolleyballImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & img {
    width: 3.75rem;
    height: 3.38769rem;
  }

  @media (min-width: 760px) {
    align-items: flex-end;
    flex: 1;

    & img {
      width: 9.375rem;
      height: 8.46919rem;
    }
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 1.25rem;

  @media (min-width: 500px) {
    margin: 0;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const AboutContainer = styled.section`
  margin: 3rem 0;
`;

export const AboutInfo = styled.div`
  & h2 {
    margin-bottom: 1.5rem;
  }

  & p {
    text-align: justify;
  }
`;

export const AboutImgDiv = styled.div`
  display: none;
`;

export const BulletedListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & img {
    display: none;

    @media (min-width: 520px) {
      width: 15rem;
      display: inline-block;
      position: absolute;
      right: 10%;
    }
  }
`;

export const FormContainer = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 520px) {
    align-items: center;
  }

  & input,
  textarea {
    width: 80%;
    border-radius: 1.75rem;
    background: #2c344b;
    border: none;
  }

  & input {
    height: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    padding-left: 1rem;
  }

  & textarea {
    height: 6rem;
    margin-bottom: 2rem;
    padding: 1rem;
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
  }
`;

export const SocialsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;

  & div {
    width: 100%;
    display: flex;
    gap: 3rem;
  }

  & div img {
    width: 2.5rem;
  }
`;
