/**
 * Pauses execution for a specified number of milliseconds.
 */
export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
