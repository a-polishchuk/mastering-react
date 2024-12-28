type ClassNamesArg = string | undefined | null | false;

/**
 * Merges array of class names into a single string.
 * Ignores falsy values.
 */
export function cn(...args: ClassNamesArg[]): string {
    return args.filter((arg) => typeof arg === 'string' && arg).join(' ');
}
