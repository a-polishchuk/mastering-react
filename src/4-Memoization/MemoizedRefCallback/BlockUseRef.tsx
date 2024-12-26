import { ColoredBlock } from 'components';
import { useEffect, useRef, useState } from 'react';
import { logTagged } from 'utils/logTagged';

import { BlockProps } from './BlockProps';

export function BlockUseRef({ visible }: BlockProps) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    logTagged('useRef', String(divRef.current));
    if (divRef.current) {
      setRect(divRef.current.getBoundingClientRect());
    }
  }, []);

  if (!visible) {
    return <></>;
  }

  const sizeText = rect ? `${rect.width.toFixed(0)} x ${rect.height.toFixed(0)}` : null;

  return (
    <div ref={divRef} style={{ flex: 1, textAlign: 'center' }}>
      <ColoredBlock>{sizeText}</ColoredBlock>
    </div>
  );
}
