import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { ValueLabel } from 'components/ValueLabel';
import { ChapterHeader } from 'components/ChapterHeader';

const STORAGE_KEY = 'chapter-6-current-count';

// TODO: add colored console output to this chapter
// TODO: use LoggedLifecycle component in this section
export function UseEffectBasics() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => setCount((prev) => prev + 1);

  useEffect(
    function updateDocTitle() {
      document.title = `Count: ${count}`;
    },
    [count]
  );

  useEffect(function readFromStorage() {
    try {
      const stringValue = localStorage.getItem(STORAGE_KEY) ?? '0';
      setCount(parseInt(stringValue));
    } catch (error) {
      console.error('could not read from a local storage');
      console.error(error);
    }
  }, []);

  useEffect(
    function writeToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, String(count));
      } catch (error) {
        console.error('could not write to local storage');
        console.error(error);
      }
    },
    [count]
  );

  useEffect(() => {
    console.log(`running effect ${count}`);
    return () => {
      // cleanup function
      console.log(`cleaning up ${count}`);
    };
  }, [count]);

  useEffect(() => {
    console.log('component did mount');
    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('executed AFTER each render');
  }); // ! deps list is missing

  console.log('this log will be printed on each render');

  return (
    <>
      <ChapterHeader title="useEffect" subtitle="useEffect basics" />

      <div style={{ marginTop: 24, marginBottom: 24 }}>
        Current count:
        <ValueLabel value={count} />
      </div>

      <div style={{ width: 150 }}>
        <Button onClick={increaseCount} text="+1" />
      </div>
    </>
  );
}
