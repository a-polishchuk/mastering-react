import { describe, it, expect } from 'vitest';
import { getMiddle, type Position } from './geometry';

describe('getMiddle', () => {
    it('calculates middle point of two positions with positive coordinates', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 10, y: 10 };
        const result = getMiddle(a, b);

        expect(result.x).toBe(5);
        expect(result.y).toBe(5);
    });

    it('calculates middle point with negative coordinates', () => {
        const a: Position = { x: -10, y: -10 };
        const b: Position = { x: 10, y: 10 };
        const result = getMiddle(a, b);

        expect(result.x).toBe(0);
        expect(result.y).toBe(0);
    });

    it('calculates middle point with decimal coordinates', () => {
        const a: Position = { x: 1.5, y: 2.5 };
        const b: Position = { x: 3.5, y: 4.5 };
        const result = getMiddle(a, b);

        expect(result.x).toBe(2.5);
        expect(result.y).toBe(3.5);
    });

    it('returns same point when both positions are identical', () => {
        const a: Position = { x: 5, y: 5 };
        const b: Position = { x: 5, y: 5 };
        const result = getMiddle(a, b);

        expect(result.x).toBe(5);
        expect(result.y).toBe(5);
    });

    it('handles zero coordinates correctly', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 0, y: 0 };
        const result = getMiddle(a, b);

        expect(result.x).toBe(0);
        expect(result.y).toBe(0);
    });
});
