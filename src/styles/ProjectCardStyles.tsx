import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid white;
  width: 100%;
  min-height: 18.19rem;
  height: auto;

  &:active {
    filter: brightness(50%);
  }

  &:hover {
    cursor: pointer;
    position: relative;
    display: block;
    top: -1rem;
    left: -1rem;
    background-color: black;
    filter: brightness(70%);
    /* border: 10px #36d2cf solid; */
  }
`;

export const CardInfo = styled.div`
  padding: 0.5rem 1.15rem 1.15rem;
  min-height: 7.125rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1220px) {
    padding-top: 1rem;
  }

  & h4 {
    color: #36d2cf;
    font-size: 1rem;
    font-weight: 500;
  }

  & p {
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    font-size: 0.6875rem;
    font-weight: 300;
    line-height: 1.125rem;
    text-align: justify;

    @media (min-width: 1220px) {
      font-size: 0.75rem;
    }
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: auto;

  @media (min-width: 1220px) {
    height: 12vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
`;
