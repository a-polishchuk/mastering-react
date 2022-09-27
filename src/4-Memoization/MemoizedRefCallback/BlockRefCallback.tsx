import { ColoredBlock } from 'components';
import { useState } from 'react';
import { logTagged } from 'utils/logTagged';

import { BlockProps } from './BlockProps';

export function BlockRefCallback({ visible }: BlockProps): JSX.Element {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const hasSize = width !== null && height !== null;
  const sizeText = hasSize ? `${width.toFixed(0)} x ${height.toFixed(0)}` : null;

  const onRefAcquired = (node: HTMLDivElement | null) => {
    logTagged('ref callback', String(node));
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  };

  if (!visible) {
    return <></>;
  }

  return (
    <div ref={onRefAcquired} style={{ flex: 1, textAlign: 'center' }}>
      <ColoredBlock>{sizeText}</ColoredBlock>
    </div>
  );
}
