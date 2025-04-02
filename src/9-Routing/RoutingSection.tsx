import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { LinkVsAnchor } from './LinkVsAnchor';
import { UseNavigate } from './UseNavigate';

export function RoutingSection() {
    return (
        <Section title="Routing">
            <Chapter
                emoji="⚓"
                title="NavLink vs anchor"
                path={RouterPath.LINK_VS_ANCHOR}
                element={<LinkVsAnchor />}
            />
            <Chapter
                emoji="🧭"
                title="useNavigate"
                path={RouterPath.USE_NAVIGATE}
                element={<UseNavigate />}
            />
        </Section>
    );
}
