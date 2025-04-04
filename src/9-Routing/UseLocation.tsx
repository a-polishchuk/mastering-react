import { ChapterWrapper, PropsTable, Toolbar } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DEFAULT_VALUE = '0';

export function UseLocation() {
    const location = useLocation();
    const navigate = useNavigate();

    const { pathname, search } = location;
    const searchParams = new URLSearchParams(search);
    const a = searchParams.get('a') || DEFAULT_VALUE;
    const b = searchParams.get('b') || DEFAULT_VALUE;

    const updateSearchParams = (param: string, value: string) => {
        const newSearchParams = new URLSearchParams(search);
        newSearchParams.set(param, value.trim() || DEFAULT_VALUE);

        const newUrl = `${pathname}?${newSearchParams.toString()}`;

        navigate(newUrl, { replace: true });
    };

    const handleChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        updateSearchParams('a', e.target.value);
    };

    const handleChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        updateSearchParams('b', e.target.value);
    };

    return (
        <ChapterWrapper title="useLocation" subtitle="React Router">
            <div className="flexColumn">
                <PropsTable title="Location" data={location} />
                <div>
                    <h2>Operands are synced with URL params</h2>
                    <Toolbar>
                        <input
                            type="number"
                            value={a}
                            style={{ width: '50px' }}
                            onChange={handleChangeA}
                        />
                        <span>➕</span>
                        <input
                            type="number"
                            value={b}
                            style={{ width: '50px' }}
                            onChange={handleChangeB}
                        />
                        <span>🟰</span>
                        <span>{(Number(a) + Number(b)).toString()}</span>
                    </Toolbar>
                </div>
            </div>
            <RelatedDocs
                docs={[
                    {
                        label: 'useLocation',
                        href: 'https://reactrouter.com/api/hooks/useLocation',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
