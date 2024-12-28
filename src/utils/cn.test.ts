import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn (classNames)', () => {
    it('should merge multiple class names into a single string', () => {
        expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
    });

    it('should ignore falsy values', () => {
        expect(cn('foo', undefined, 'bar', null, 'baz', false)).toBe('foo bar baz');
    });

    it('should return empty string when no valid class names provided', () => {
        expect(cn(undefined, null, false)).toBe('');
    });

    it('should handle empty strings', () => {
        expect(cn('foo', '', 'bar')).toBe('foo bar');
    });

    it('should handle single class name', () => {
        expect(cn('foo')).toBe('foo');
    });

    it('should handle no arguments', () => {
        expect(cn()).toBe('');
    });

    it('should preserve whitespace in class names', () => {
        expect(cn('foo bar', 'baz')).toBe('foo bar baz');
    });
});
