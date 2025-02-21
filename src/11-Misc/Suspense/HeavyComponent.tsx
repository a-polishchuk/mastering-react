import { PropsTable } from 'components';

export function HeavyComponent() {
    return (
        <PropsTable
            title="Heavy Component"
            data={{
                heavyComputationResult: 42,
                computationDuration: `${new Date().getSeconds()} seconds`,
            }}
        />
    );
}
