import type { ReactNode } from 'react';

interface Props {
  kicker: string;
  title: string;
  children?: ReactNode;
}

export function SectionHead({ kicker, title, children }: Props) {
  return (
    <div className="sech">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
