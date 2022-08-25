import { CSSProperties } from 'react';

export interface ReactLogoProps {
  size: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function ReactLogo(props: ReactLogoProps): JSX.Element {
  const { color = '#61dafb', size, className, style } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.232 23 20.463"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <circle r={2.05} fill={color} />
      <g stroke={color} fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
}
