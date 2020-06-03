const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});



test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divides 10 by 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divides 30 by 5 to equal 6', () => {
  expect(calculator.divide(30, 5)).toBe(6);
});

test('multiplies 3 by 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiplies 7 by 3 to equal 21', () => {
  expect(calculator.multiply(7, 3)).toBe(21);
});