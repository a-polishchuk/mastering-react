import { Button, ChapterWrapper, Toolbar } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function UseNavigate() {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState<string>(location.pathname);

    const isNavigateImpossible = !path.trim();

    return (
        <ChapterWrapper title="useNavigate" subtitle="Programmatic Navigation">
            <Toolbar>
                <Button text="Go Back" onClick={() => navigate(-1)} />
                <Button text="Go Forward" onClick={() => navigate(1)} />
            </Toolbar>

            <Toolbar>
                <input value={path} onChange={(e) => setPath(e.target.value)} />
                <Button
                    text="Navigate"
                    disabled={isNavigateImpossible}
                    onClick={() => navigate(path)}
                />
                <Button
                    text="Replace"
                    disabled={isNavigateImpossible}
                    onClick={() => navigate(path, { replace: true })}
                />
            </Toolbar>

            <RelatedDocs
                docs={[
                    {
                        label: 'useNavigate',
                        href: 'https://reactrouter.com/api/hooks/useNavigate',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
