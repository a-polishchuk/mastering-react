import { vi } from 'vitest';
import { sleep } from './sleep';

describe('sleep', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('works with different time durations', async () => {
        const durations = [0, 100, 500, 1000];

        for (const ms of durations) {
            const sleepPromise = sleep(ms);
            vi.advanceTimersByTime(ms);
            await expect(sleepPromise).resolves.toBeUndefined();
        }
    });

    it('handles zero milliseconds correctly', async () => {
        const startTime = Date.now();
        vi.useRealTimers(); // Use real timers for this test

        await sleep(0);

        const elapsed = Date.now() - startTime;
        expect(elapsed).toBeLessThan(5); // Should resolve almost immediately
    });

    it('does not resolve before the specified time', async () => {
        const duration = 1000;
        let isResolved = false;

        const sleepPromise = sleep(duration);
        sleepPromise.then(() => {
            isResolved = true;
        });

        vi.advanceTimersByTime(duration - 1);
        await Promise.resolve();
        expect(isResolved).toBe(false);

        vi.advanceTimersByTime(1);
        await Promise.resolve();
        expect(isResolved).toBe(true);
    });

    // NOT TODO: this test is checking internal implementation details
    it('uses setTimeout internally', () => {
        const setTimeoutSpy = vi.spyOn(global, 'setTimeout');

        sleep(1000);

        expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

        setTimeoutSpy.mockRestore();
    });
});
