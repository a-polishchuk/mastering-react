import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { BASE_PATH, RouterPath } from 'config/RouterPath';

export function LinkVsAnchor() {
    return (
        <ChapterWrapper title="NavLink vs anchor" subtitle="Routing">
            <p>
                <a href={`${BASE_PATH}/${RouterPath.ABOUT}`}>about page (anchor tag)</a>
            </p>
            <p>
                <StyledLink to={'/' + RouterPath.ABOUT}>about page (NavLink)</StyledLink>
            </p>
            <RelatedDocs
                docs={[
                    {
                        label: 'NavLink',
                        href: 'https://api.reactrouter.com/v7/functions/react_router.NavLink.html',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
