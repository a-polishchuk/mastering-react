import { AlienSvg } from 'assets/AlienSvg';

interface Props {
  size: number;
  hovered: boolean;
}

export function AlienAvatar({ size, hovered }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      {hovered && (
        <>
          <div style={{ position: 'absolute', transform: 'translate(10%, 0%)' }}>
            <AlienSvg size={size} fillColor="#0000FF" style={{ opacity: 0.2 }} />
          </div>
          <div style={{ position: 'absolute', transform: 'translate(-10%, 0%)' }}>
            <AlienSvg size={size} fillColor="#FF0000" style={{ opacity: 0.2 }} />
          </div>
        </>
      )}
      <AlienSvg size={size} />
    </div>
  );
}
