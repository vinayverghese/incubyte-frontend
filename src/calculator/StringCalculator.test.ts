import { describe, it, expect } from 'vitest';
import { add } from './StringCalculator';

describe('StringCalculator', () => {
    describe('add', () => {
        it('should return 0 for empty string', () => {
            expect(add('')).toBe(0);
        });
    });    
}); 