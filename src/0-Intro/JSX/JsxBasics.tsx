import { ChapterHeader } from 'components/ChapterHeader';
import { CSSProperties } from 'react';

function JsxIsNot(): JSX.Element {
  const listStyle: CSSProperties = {
    listStyleType: 'circle',
  };
  return (
    <div>
      ❌ JSX <span style={{ color: 'red', fontWeight: 'bold' }}>IS NOT</span>:
      <ul style={listStyle}>
        <li>String</li>
        <li>HTML</li>
        <li>XML</li>
      </ul>
    </div>
  );
}

const codeElement: JSX.Element = <code>React.createElement()</code>;

function JsxIs(): JSX.Element {
  return (
    <div>
      ✅ JSX <span style={{ color: 'green', fontWeight: 'bold' }}>IS</span>:
      <ul>
        <li>JavaScript syntax extension</li>
        <li>Syntactic sugar for {codeElement}</li>
        <li>Expressive and easy-to-use</li>
      </ul>
    </div>
  );
}

function getUrlFor(subject: string): string {
  switch (subject) {
    case 'jsx':
      return 'https://reactjs.org/docs/introducing-jsx.html';
    case 'babel':
      return 'https://babeljs.io/';
    default:
      throw new Error(`I don't know URL for ${subject}`);
  }
}

function FactsAboutJsx(): JSX.Element {
  return (
    <div>
      👽 Facts about JSX:
      <ol>
        <li>JSX is optional</li>
        <li>
          Transpiled by{' '}
          <a href={getUrlFor('babel')} target="_blank" rel="noreferrer">
            Babel
          </a>{' '}
          to {codeElement} calls
        </li>
        <li>JSX is JS, so you can do with JSX everything you can do with regular JS values</li>
        <li>You can use {'any'} expressions inside the JSX</li>
        <li>2 + 2 = {2 + 2} (a fact, but not about JSX)</li>
      </ol>
    </div>
  );
}

export function JsxBasics(): JSX.Element {
  const anchorElement: JSX.Element = (
    <a href={getUrlFor('jsx')} target="_blank" rel="noreferrer">
      JSX
    </a>
  );
  return (
    <div>
      <ChapterHeader
        title="Introduction to JSX"
        subtitle={<span>🤔 What is {anchorElement}?</span>}
      />
      <JsxIsNot />
      <JsxIs />
      <FactsAboutJsx />
    </div>
  );
}
