import { Chapter, Section } from 'components/MasterDetail';
import { RouterPath } from 'config/RouterPath';
import { UseFormStatusExample } from './UseFormStatusExample';

// TODO: useActionState
// TODO: useOptimistic
export function React19Section() {
    return (
        <Section title="React 19">
            <Chapter
                emoji="📝"
                title="useFormStatus"
                path={RouterPath.USE_FORM_STATUS}
                element={<UseFormStatusExample />}
            />
        </Section>
    );
}
