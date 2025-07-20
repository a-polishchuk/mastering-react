import { Context, FC, ReactNode, useContext } from 'react';

type ProviderComponent = FC<{ children: ReactNode }>;

export function createContextHook<T>(context: Context<T>, provider: ProviderComponent | string) {
    return function useContextHook() {
        const contextValue = useContext(context);
        if (contextValue === null || contextValue === undefined) {
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
