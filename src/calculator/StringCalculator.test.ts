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

        it('should return sum of multiple numbers', () => {
            expect(add('1,2,3')).toBe(6);
            expect(add('1,2,3,4')).toBe(10);
        });
    });    
}); 