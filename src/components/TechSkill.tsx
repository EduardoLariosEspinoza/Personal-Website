import styled from "styled-components";

interface TechSkillProps {
  tSkill: {
    skill: string;
    img: string;
  };
}

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1600px) {
    justify-content: center;
    gap: 2rem;
  }

  & img {
    width: 30%;
  }
`;

function TechSkill({ tSkill }: TechSkillProps) {
  return (
    <SkillDiv>
      <img src={tSkill.img} alt="" />
      <p>{tSkill.skill}</p>
    </SkillDiv>
  );
}

export default TechSkill;
