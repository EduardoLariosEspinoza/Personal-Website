interface TitleTextDivProps {
  title: string;
  children: React.ReactNode;
}

function TitleTextDiv({ title, children }: Readonly<TitleTextDivProps>) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default TitleTextDiv;
