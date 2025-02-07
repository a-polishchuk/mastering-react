import { updateArrayElement } from './updateArrayElement';

describe('updateArrayElement', () => {
    it('updates element at specified index', () => {
        const array = [1, 2, 3, 4, 5];
        const result = updateArrayElement(array, 2, 10);

        expect(result).toEqual([1, 2, 10, 4, 5]);
    });

    it('returns a new array instance', () => {
        const array = [1, 2, 3];
        const result = updateArrayElement(array, 1, 5);

        expect(result).not.toBe(array);
        expect(Array.isArray(result)).toBe(true);
    });

    it('does not modify the original array', () => {
        const array = [1, 2, 3];
        const originalArray = [...array];
        updateArrayElement(array, 1, 5);

        expect(array).toEqual(originalArray);
    });

    it('works with array of objects', () => {
        const array = [
            { id: 1, value: 'one' },
            { id: 2, value: 'two' },
            { id: 3, value: 'three' },
        ];
        const newItem = { id: 2, value: 'updated' };

        const result = updateArrayElement(array, 1, newItem);

        expect(result[1]).toEqual(newItem);
        expect(result[0]).toBe(array[0]); // Other elements should remain the same reference
        expect(result[2]).toBe(array[2]);
    });

    it('returns same array content when updating with the same value', () => {
        const array = [1, 2, 3];
        const result = updateArrayElement(array, 1, 2);

        expect(result).toEqual(array);
        expect(result).not.toBe(array); // Still should be a new instance
    });

    it('handles empty array', () => {
        const array: number[] = [];
        const result = updateArrayElement(array, 0, 1);

        expect(result).toEqual([]);
        expect(result).not.toBe(array);
    });

    it('handles out of bounds index', () => {
        const array = [1, 2, 3];
        const result = updateArrayElement(array, 5, 10);

        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(array);
    });

    it('handles negative index', () => {
        const array = [1, 2, 3];
        const result = updateArrayElement(array, -1, 10);

        expect(result).toEqual([1, 2, 3]);
        expect(result).not.toBe(array);
    });
});
