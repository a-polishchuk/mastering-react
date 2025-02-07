import { describe, it, expect } from 'vitest';
import { getAngle, type Position } from './geometry';

describe('getAngle', () => {
    it('calculates angle of 0 radians for horizontal line to the right', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 1, y: 0 };
        const result = getAngle(a, b);

        expect(result).toBe(0);
    });

    it('calculates angle of PI radians for horizontal line to the left', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: -1, y: 0 };
        const result = getAngle(a, b);

        expect(result).toBe(Math.PI);
    });

    it('calculates angle of PI/2 radians for vertical line up', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 0, y: 1 };
        const result = getAngle(a, b);

        expect(result).toBe(Math.PI / 2);
    });

    it('calculates angle of -PI/2 radians for vertical line down', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 0, y: -1 };
        const result = getAngle(a, b);

        expect(result).toBe(-Math.PI / 2);
    });

    it('calculates angle of PI/4 radians for 45 degrees line', () => {
        const a: Position = { x: 0, y: 0 };
        const b: Position = { x: 1, y: 1 };
        const result = getAngle(a, b);

        expect(result).toBeCloseTo(Math.PI / 4);
    });

    it('calculates same angle regardless of distance between points', () => {
        const a: Position = { x: 0, y: 0 };
        const b1: Position = { x: 1, y: 1 };
        const b2: Position = { x: 2, y: 2 };

        const result1 = getAngle(a, b1);
        const result2 = getAngle(a, b2);

        expect(result1).toBeCloseTo(result2);
    });

    it('calculates angle correctly for arbitrary points', () => {
        const a: Position = { x: 3, y: 4 };
        const b: Position = { x: 7, y: 1 };
        const result = getAngle(a, b);

        // Angle can be calculated manually using atan2
        const expected = Math.atan2(1 - 4, 7 - 3);
        expect(result).toBeCloseTo(expected);
    });
});
