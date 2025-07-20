import { Context, FC, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ProviderComponent = FC<any>;

export function createContextHook<T>(context: Context<T>, provider: ProviderComponent | string) {
    return function useContextHook() {
        const contextValue = useContext(context);
        if (contextValue === undefined) {
            const providerName = getProviderName(provider);
            throw new Error(`this component must be used within a ${providerName}`);
        }
        return contextValue;
    };
}

function getProviderName(provider: ProviderComponent | string) {
    return typeof provider === 'string'
        ? provider
        : provider.name || provider.displayName || 'provider';
}
