import { ChapterWrapper } from 'components';
import { RelatedDocs } from 'components/RelatedDocs/RelatedDocs';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { RouterPath } from 'config/RouterPath';
import { Link, NavLink } from 'react-router';

export function LinkVsNavLink() {
    return (
        <ChapterWrapper title="Link vs NavLink" subtitle="Routing">
            <table>
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Link</th>
                        <th>NavLink</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>/about</code>
                        </td>
                        <td>
                            <Link to="/about">About</Link>
                        </td>
                        <td>
                            <NavLink to="/about">About</NavLink>
                        </td>
                        <td />
                    </tr>
                    <tr>
                        <td>
                            <code>../{RouterPath.USE_NAVIGATE}</code>
                        </td>
                        <td>
                            <Link to={`../${RouterPath.USE_NAVIGATE}`}>Next chapter</Link>
                        </td>
                        <td>
                            <NavLink to={`../${RouterPath.USE_NAVIGATE}`}>Next chapter</NavLink>
                        </td>
                        <td />
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link to=".">Current page</Link>
                        </td>
                        <td>
                            <NavLink to=".">Current page</NavLink>
                        </td>
                        <td />
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link to=".">Current page</Link>
                        </td>
                        <td>
                            <StyledLink to=".">Current page</StyledLink>
                        </td>
                        <td>
                            with <code>active</code> styles
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link to="." reloadDocument>
                                Reload page
                            </Link>
                        </td>
                        <td>
                            <StyledLink to="." reloadDocument>
                                Reload page
                            </StyledLink>
                        </td>
                        <td>
                            <code>reloadDocument</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>../{RouterPath.USE_LOCATION}</code>
                        </td>
                        <td>
                            <Link to={`../${RouterPath.USE_LOCATION}`} replace>
                                useLocation
                            </Link>
                        </td>
                        <td>
                            <StyledLink to={`../${RouterPath.USE_LOCATION}`} replace>
                                useLocation
                            </StyledLink>
                        </td>
                        <td>
                            <code>replace</code>
                        </td>
                    </tr>
                </tbody>
            </table>

            <RelatedDocs
                docs={[
                    {
                        label: 'Link',
                        href: 'https://reactrouter.com/api/components/Link',
                    },
                    {
                        label: 'NavLink',
                        href: 'https://reactrouter.com/api/components/NavLink',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
