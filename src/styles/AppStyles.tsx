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

    @media (min-width: 500px) {
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
    flex-direction: row;
    height: 14.185rem;
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

export const BulletedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
