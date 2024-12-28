import styled from "styled-components";
import referrals from "../data/referrals";
import React from "react";

const RecommendationsDiv = styled.div`
  @media (min-width: 1130px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 6rem;
  }

  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  & p {
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.4rem;
  }
`;

function Recommendations() {
  return (
    <RecommendationsDiv>
      {referrals.map((referral) => {
        return (
          <div key={referral.name}>
            <h3>{referral.name}</h3>
            <p>
              {referral.text.split("\n").map((line) => (
                <React.Fragment key={`${referral.name}${line.slice(0, 10)}`}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        );
      })}
    </RecommendationsDiv>
  );
}

export default Recommendations;
