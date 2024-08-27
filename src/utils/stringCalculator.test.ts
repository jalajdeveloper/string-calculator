import { add } from './stringCalculator';

describe('String Calculator', () => {
    test('returns 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('returns the number for a single number string', () => {
        expect(add("1")).toBe(1);
    });

    test('returns the sum for two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('returns the sum for multiple numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
        expect(add("1\n2,3,4")).toBe(10);
        expect(add("1\n2\n3\n4")).toBe(10);
    });

    test('handles new lines and commas between numbers correctly', () => {
        expect(add("1\n2,3")).toBe(6); 
        expect(add("1\n2\n3")).toBe(6); // New line only
        expect(add("1\n2,3\n4")).toBe(10); // Mixed new lines and commas
        expect(add("1\n2\n3\n4")).toBe(10); // New lines only
    });

    test('supports custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n1|2|3")).toBe(6);
        expect(add("//|\n1|2|3|4")).toBe(10);
        expect(add("//;\n1;2;3")).toBe(6);
    });

    test('throws error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
        expect(() => add("//;\n1;-2;3;-4")).toThrow("negative numbers not allowed -2,-4");
    });
});
