interface BulletedListProps {
  title: string;
  skills: string[];
}

function BulletedList({ title, skills }: BulletedListProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default BulletedList;
