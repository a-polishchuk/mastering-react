import { Button, ChapterWrapper } from 'components';
import { useFormStatus } from 'react-dom';
import classes from './UseFormStatusExample.module.css';

export function UseFormStatusExample() {
    const handleFormAction = async (_formData: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    return (
        <ChapterWrapper title="useFormStatus" subtitle="New hooks in React 19">
            <form action={handleFormAction}>
                <div className={classes.formField}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" autoComplete="off" />
                </div>
                <div className={classes.formField}>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" autoComplete="off" />
                </div>
                <div className={classes.formField}>
                    <SubmitButton />
                </div>
            </form>
        </ChapterWrapper>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            text={pending ? 'Submitting...' : 'Submit'}
            className={pending ? classes.blink : ''}
        />
    );
}
