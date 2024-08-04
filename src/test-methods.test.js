import { capitalize, reverseString, calculator } from './test-methods';

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
