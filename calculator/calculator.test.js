import Calculator from './calculator';

const calc = new Calculator();

test('2 + 2 = 4', () => {
    expect(calc.add(2, 2)).toBe(4);
});

test('5 * 2 = 10', () => {
    expect(calc.multiply(5, 2)).toBe(10);
});

test('10 / 2 = 5', () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test('50 - 25 = 25', () => {
    expect(calc.subtract(50, 25)).toBe(25);
});
