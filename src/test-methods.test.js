import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './test-methods';

test('capitalize first char', () => {
  expect(capitalize('jimmy')).toMatch('Jimmy');
  expect(capitalize('d')).toMatch('D');
  expect(capitalize('')).toMatch('');
});

test('reverse string', () => {
  expect(reverseString('jimmy')).toMatch('ymmij');
  expect(reverseString('dimitrije markovic')).toMatch('civokram ejirtimid');
  expect(reverseString('')).toMatch('');
});

test('add', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(8, 6)).toBe(14);
});

test('subtract', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(0, 8)).toBe(-8);
});

test('divide', () => {
  expect(calculator.divide(8, 2)).toBe(4);
  expect(calculator.divide(16, 4)).toBe(4);
});

test('multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(10, 3)).toBe(30);
});

test('caesar cipher', () => {
  expect(caesarCipher('xyz', 3)).toMatch('abc');
  expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([7, 12, 13, 4, 5, 6, 20, 33])).toEqual({
    average: 12.5,
    min: 4,
    max: 33,
    length: 8,
  });
});
