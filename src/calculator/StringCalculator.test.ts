import { describe, it, expect } from 'vitest';
import { add } from './StringCalculator';

describe('StringCalculator', () => {
    describe('add', () => {
        it('should return 0 for empty string', () => {
            expect(add('')).toBe(0);
        });

        it('should return the number for single number input', () => {
            expect(add('1')).toBe(1);
            expect(add('2')).toBe(2);
        });

        it('should return sum of two numbers', () => {
            expect(add('1,2')).toBe(3);
            expect(add('2,3')).toBe(5);
        });

        it('should return sum of multiple numbers', () => {
            expect(add('1,2,3')).toBe(6);
            expect(add('1,2,3,4')).toBe(10);
        });

        it('should handle new lines between numbers', () => {
            expect(add('1\n2,3')).toBe(6);
            expect(add('1,2\n3')).toBe(6);
            expect(add('1\n2\n3')).toBe(6);
        });

        it('should handle custom delimiters', () => {
            expect(add('//;\n1;2')).toBe(3);
            expect(add('//|\n1|2|3')).toBe(6);
            expect(add('//.\n1.2.3')).toBe(6);
        });

        it('should throw exception for negative numbers', () => {
            expect(() => add('-1')).toThrow('Negative numbers not allowed: -1');
            expect(() => add('1,-2')).toThrow('Negative numbers not allowed: -2');
            expect(() => add('-1,-2')).toThrow('Negative numbers not allowed: -1,-2');
            expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2,-4');
        });
    });
}); 