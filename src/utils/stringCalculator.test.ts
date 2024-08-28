import { add } from "./stringCalculator";

describe('add function', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself for a single number input', () => {
        expect(add('1')).toBe(1);
        expect(add('5')).toBe(5);
    });

    test('should return the sum of two comma-separated numbers', () => {
        expect(add('1,2')).toBe(3);
    });

    test('should handle newlines as delimiters', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should support custom single-character delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    test('should support custom multi-character delimiters', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    });

    test('should support multiple custom delimiters', () => {
        expect(add('//[*][%]\n1*2%3')).toBe(6);
    });

    test('should support multiple custom delimiters with different lengths', () => {
        expect(add('//[***][%%]\n1***2%%3')).toBe(6);
    });

    test('should ignore numbers greater than 1000', () => {
        expect(add('2,1001')).toBe(2);
        expect(add('1000,1001')).toBe(1000);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('negative numbers not allowed -2');
        expect(() => add('-1,2,-3')).toThrow('negative numbers not allowed -1,-3');
    });

    test('should handle no numbers after custom delimiter declaration', () => {
        expect(add('//;\n')).toBe(0);
    });

    test('should return the correct sum with mixed delimiters', () => {
        expect(add('//[*][%]\n1*2%3,4\n5')).toBe(15);
    });
});
