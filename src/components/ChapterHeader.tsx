import { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: ReactNode;
}

export function ChapterHeader({ title, subtitle }: Props): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
}
