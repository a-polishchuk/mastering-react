import { generateRandomColor } from './generateRandomColor';

describe('generateRandomColor', () => {
    it('should return a string', () => {
        const result = generateRandomColor();
        expect(typeof result).toBe('string');
    });

    it('should return a hex color format', () => {
        const result = generateRandomColor();
        expect(result).toMatch(/^#[0-9a-f]{6}$/i);
    });

    it('should start with #', () => {
        const result = generateRandomColor();
        expect(result.startsWith('#')).toBe(true);
    });

    it('should have exactly 7 characters (including #)', () => {
        const result = generateRandomColor();
        expect(result.length).toBe(7);
    });

    it('should generate different colors on multiple calls', () => {
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        const color3 = generateRandomColor();

        // While theoretically possible to get the same color twice,
        // it's extremely unlikely with random generation
        const uniqueColors = new Set([color1, color2, color3]);
        expect(uniqueColors.size).toBeGreaterThan(1);
    });

    it('should generate valid hex values', () => {
        for (let i = 0; i < 100; i++) {
            const result = generateRandomColor();
            const hexPart = result.slice(1); // Remove #

            // Check if hex part is a valid hex number
            expect(parseInt(hexPart, 16)).not.toBeNaN();
        }
    });
});
