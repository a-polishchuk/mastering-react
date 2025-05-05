import { Button, ChapterWrapper, RelatedDocs } from 'components';
import { HTMLInputTypeAttribute } from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from 'utils/cn';
import classes from './UseFormStatusExample.module.css';

const ARTIFICIAL_DELAY = 2000;

export function UseFormStatusExample() {
    const handleFormAction = async (_formData: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, ARTIFICIAL_DELAY));
    };

    return (
        <ChapterWrapper title="useFormStatus" subtitle="New hooks in React 19">
            <div className={classes.content}>
                <form action={handleFormAction}>
                    <FormField label="First Name" name="firstName" required />
                    <FormField label="Last Name" name="lastName" required />
                    <div>
                        <SubmitButton />
                    </div>
                </form>
                <RelatedDocs
                    docs={[
                        {
                            label: 'useFormStatus',
                            href: 'https://react.dev/reference/react-dom/hooks/useFormStatus',
                        },
                    ]}
                />
            </div>
        </ChapterWrapper>
    );
}

type FormFieldProps = {
    label: string;
    name: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
};

function FormField({ label, name, type = 'text', required }: FormFieldProps) {
    const { pending } = useFormStatus();

    return (
        <div className={classes.formField}>
            <label htmlFor={name}>{label}:</label>
            <input type={type} name={name} required={required} disabled={pending} />
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            text={pending ? 'Submitting...' : 'Submit'}
            className={cn(pending && classes.blink)}
        />
    );
}
