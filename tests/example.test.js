import { test, expect } from 'vitest';

test('sum function works', () => {
    const sum = (a, b) => a + b;
    expect(sum(3, 2)).toBe(5);
});
