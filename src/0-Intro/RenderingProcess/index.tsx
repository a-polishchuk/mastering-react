import { ColoredBlock } from 'components/ColoredBlock';
import { CSSProperties } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';

import classes from './index.module.css';

function getSectionStyle(flex: number): CSSProperties {
  return {
    flex,
    flexDirection: 'column',
    padding: 16,
    borderRadius: 8,
    backgroundColor: generateRandomColor() + '22',
  };
}

function Emoji({ children }: { children: string }): JSX.Element {
  return (
    <div className={classes.emojiWrapper}>
      <div className={classes.emoji}>{children}</div>
    </div>
  );
}

export function RenderingProcess(): JSX.Element {
  return (
    <>
      <h2>React rendering process</h2>
      <h3>🌲 🆚 🌲 ➡️ 🌳</h3>

      <div className={classes.container}>
        <div style={getSectionStyle(2)}>
          <h3 className={classes.header}>Virtual DOM / React Realm</h3>
          <ColoredBlock>
            New render has been triggered (because of some change in the state of the app). React
            calls the root component function. Children component function will be called
            recursively.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New Virtual DOM tree is created now. It consists of React Elements - lightweight
            javascript object which sits in memory and stores representation of a component. They
            have no direct connection to the real DOM elements.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New VDOM now should be compared to the old one (if it exists, of course). Calculated
            diff will be applied to the real DOM.
          </ColoredBlock>
          <div className={classes.bottomLabel}>
            Virtual DOM is a tree data structure of lightweight React Element objects. React can
            generate thousands of React Elements on each render with a great performance.
          </div>
        </div>

        <Emoji>➡️</Emoji>

        <div style={getSectionStyle(1)}>
          <h3 className={classes.header}>Real DOM / Browser Realm</h3>
          <img alt="Real DOM" src="/real-dom.png" className={classes.realDomImage} />
          <div className={classes.bottomLabel}>
            The "real" Document Object Model tree. You can check it on any page by opening the
            browser's Dev Tools panel.
          </div>
        </div>
      </div>
    </>
  );
}
