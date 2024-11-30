import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid white;
  width: 100%;
  min-height: 18.19rem;
  height: auto;

  &:active {
    filter: brightness(50%);
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
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
`;
