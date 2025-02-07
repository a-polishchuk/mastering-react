import { render, screen } from '@testing-library/react';
import { Switch, Case, DefaultCase } from './Switch';

describe('Switch', () => {
    it('renders Case when value matches exactly', () => {
        render(
            <Switch value={1}>
                <Case value={1}>
                    <div>Matched Case</div>
                </Case>
                <Case value={2}>
                    <div>Wrong Case</div>
                </Case>
                <DefaultCase>
                    <div>Default Case</div>
                </DefaultCase>
            </Switch>,
        );

        expect(screen.getByText('Matched Case')).toBeInTheDocument();
        expect(screen.queryByText('Wrong Case')).not.toBeInTheDocument();
        expect(screen.queryByText('Default Case')).not.toBeInTheDocument();
    });

    it('renders Case when condition returns true', () => {
        render(
            <Switch<number> value={5}>
                <Case<number> condition={(value: number) => value > 3}>
                    <div>Greater than 3</div>
                </Case>
                <Case<number> condition={(value: number) => value < 3}>
                    <div>Less than 3</div>
                </Case>
                <DefaultCase>
                    <div>Default Case</div>
                </DefaultCase>
            </Switch>,
        );

        expect(screen.getByText('Greater than 3')).toBeInTheDocument();
        expect(screen.queryByText('Less than 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Default Case')).not.toBeInTheDocument();
    });

    it('renders DefaultCase when no matches found', () => {
        render(
            <Switch<number> value={2}>
                <Case value={1}>
                    <div>Case One</div>
                </Case>
                <Case<number> condition={(value: number) => value > 5}>
                    <div>Greater than 5</div>
                </Case>
                <DefaultCase>
                    <div>Default Case</div>
                </DefaultCase>
            </Switch>,
        );

        expect(screen.queryByText('Case One')).not.toBeInTheDocument();
        expect(screen.queryByText('Greater than 5')).not.toBeInTheDocument();
        expect(screen.getByText('Default Case')).toBeInTheDocument();
    });

    it('returns null when no matches and no DefaultCase', () => {
        const { container } = render(
            <Switch value={3}>
                <Case value={1}>
                    <div>Case One</div>
                </Case>
                <Case value={2}>
                    <div>Case Two</div>
                </Case>
            </Switch>,
        );

        expect(container.firstChild).toBeNull();
    });

    it('works with string values', () => {
        render(
            <Switch value="hello">
                <Case value="hi">
                    <div>Hi Case</div>
                </Case>
                <Case value="hello">
                    <div>Hello Case</div>
                </Case>
                <DefaultCase>
                    <div>Default Case</div>
                </DefaultCase>
            </Switch>,
        );

        expect(screen.getByText('Hello Case')).toBeInTheDocument();
    });

    it('renders first matching case when multiple cases match', () => {
        render(
            <Switch<number> value={5}>
                <Case<number> condition={(value: number) => value > 3}>
                    <div>First Match</div>
                </Case>
                <Case<number> condition={(value: number) => value > 5}>
                    <div>Second Match</div>
                </Case>
                <DefaultCase>
                    <div>Default Case</div>
                </DefaultCase>
            </Switch>,
        );

        expect(screen.getByText('First Match')).toBeInTheDocument();
        expect(screen.queryByText('Second Match')).not.toBeInTheDocument();
        expect(screen.queryByText('Default Case')).not.toBeInTheDocument();
    });
});
