import { getDistance, Position } from './geometry';

describe('getDistance', () => {
    it('should return 0 when either position is undefined', () => {
        const pos: Position = { x: 1, y: 1 };

        expect(getDistance(undefined, pos)).toBe(0);
        expect(getDistance(pos, undefined)).toBe(0);
        expect(getDistance(undefined, undefined)).toBe(0);
    });

    it('should calculate distance between two points correctly', () => {
        const pos1: Position = { x: 0, y: 0 };
        const pos2: Position = { x: 3, y: 4 };
        expect(getDistance(pos1, pos2)).toBe(5);

        const pos3: Position = { x: 1, y: 1 };
        const pos4: Position = { x: 4, y: 5 };
        expect(getDistance(pos3, pos4)).toBe(5);
    });

    it('should handle negative coordinates', () => {
        const pos1: Position = { x: -1, y: -1 };
        const pos2: Position = { x: 2, y: 2 };

        expect(getDistance(pos1, pos2)).toBe(Math.sqrt(18)); // ≈ 4.24
    });

    it('should return 0 for same positions', () => {
        const pos: Position = { x: 1, y: 1 };
        expect(getDistance(pos, pos)).toBe(0);
        expect(getDistance({ x: 1, y: 1 }, { x: 1, y: 1 })).toBe(0);
    });
});
