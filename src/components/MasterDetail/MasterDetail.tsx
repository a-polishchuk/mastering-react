import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, FC, ReactElement, Suspense, useCallback, useState } from 'react';

import { EasterEgg } from './EasterEgg';
import { EmptyScreen } from './EmptyScreen';
import { ExpandCollapseButton } from './ExpandCollapseButton';
import { Loading } from './Loading';
import classes from './MasterDetail.module.css';
import { MasterDetailContext, MasterDetailState } from './MasterDetailContext';
import { SectionProps } from './Section';

const COLLAPSED_WIDTH = '25px';

const buildMasterStyle = (expanded: boolean): CSSProperties => ({
  minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
  maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
  width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export interface MasterDetailProps {
  children: ReactElement<SectionProps>[];
}

export function MasterDetail({ children }: MasterDetailProps): JSX.Element {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [DetailComponent, setDetailComponent] = useState<FC | null>(null);
  const [expanded, toggleExpanded] = useToggle(true);
  const masterStyle = buildMasterStyle(expanded);

  useDocumentTitle(selectedTitle);

  const selectChapter = useCallback((title: string | null, component: FC | null) => {
    setSelectedTitle(title);
    // NOTE: we're passing a setter function here, because component is a function itself
    setDetailComponent(() => component);
  }, []);

  const contextValue: MasterDetailState = {
    selectedTitle,
    DetailComponent,
    selectChapter,
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.master} style={masterStyle}>
          {expanded && (
            <MasterDetailContext.Provider value={contextValue}>
              {children}
            </MasterDetailContext.Provider>
          )}
        </div>

        <div className={classes.detail}>
          <Suspense fallback={<Loading />}>
            {DetailComponent ? <DetailComponent /> : <EmptyScreen />}
          </Suspense>
        </div>

        <div className={classes.masterExpandContainer} style={masterStyle}>
          <div className={classes.masterExpandButton}>
            <ExpandCollapseButton expanded={expanded} onToggle={toggleExpanded} />
          </div>
        </div>
      </div>
      <EasterEgg />
    </>
  );
}
