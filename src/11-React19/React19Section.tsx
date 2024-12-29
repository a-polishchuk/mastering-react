import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { UseFormStatusExample } from './UseFormStatusExample';
import { UseOptimisticExample } from './UseOptimisticExample';

export function React19Section() {
    return (
        <Section title="React 19">
            <Chapter
                emoji="📝"
                title="useFormStatus"
                path={RouterPath.USE_FORM_STATUS}
                element={<UseFormStatusExample />}
            />
            <Chapter
                emoji="👍"
                title="useOptimistic"
                path={RouterPath.USE_OPTIMISTIC}
                element={<UseOptimisticExample />}
            />
            <Chapter
                emoji="🎬"
                title="useActionState"
                path={RouterPath.USE_ACTION_STATE}
                element={<div>Coming soon...</div>}
            />
        </Section>
    );
}
