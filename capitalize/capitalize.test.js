import capitalize from './capitalize';

test('return first character capitalized', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});

test('return first character capitalized', () => {
    expect(capitalize('wassup')).toBe('Wassup');
});
