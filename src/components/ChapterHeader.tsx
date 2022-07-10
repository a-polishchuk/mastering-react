interface Props {
  title: string;
  subtitle?: string;
}

export function ChapterHeader({ title, subtitle }: Props): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
}
