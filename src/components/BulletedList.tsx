import styled from "styled-components";

interface BulletedListProps {
  title: string;
  skills: string[];
}

const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1260px) {
    gap: 3rem;
  }

  & ul {
    list-style-position: inside;
  }

  & ul li {
    @media (min-width: 1260px) {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
`;

function BulletedList({ title, skills }: BulletedListProps) {
  return (
    <SkillsListContainer>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill) => {
          return <li key={skill.replace(/[^a-zA-Z0-9\s]/g, "")}>{skill}</li>;
        })}
      </ul>
    </SkillsListContainer>
  );
}

export default BulletedList;
