import styled from 'styled-components'

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

    @media (min-width: 500px) {
      font-size: 1.25rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`

export const InfoContainer = styled.div`
  height: 5.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  & p {
    font-size: 0.75rem;
    font-weight: 300;
  }
`

export const VolleyballImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & img {
    width: 3.75rem;
    height: 3.38769rem;
  }

  @media (min-width: 500px) {
    & img {
      width: 12.9375rem;
      height: 11.6875rem;
    }
  }
`