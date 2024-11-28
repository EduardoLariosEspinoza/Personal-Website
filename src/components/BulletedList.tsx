import styled from "styled-components";

interface BulletedListProps {
  title: string;
  skills: string[];
}

const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ul {
    list-style-position: inside;
  }
`;

function BulletedList({ title, skills }: BulletedListProps) {
  return (
    <SkillsListContainer>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </SkillsListContainer>
  );
}

export default BulletedList;
