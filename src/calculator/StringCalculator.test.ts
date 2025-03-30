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
    });    
}); 