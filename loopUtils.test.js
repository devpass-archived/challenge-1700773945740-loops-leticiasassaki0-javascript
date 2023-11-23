const { printNumbers, reverseArray } = require('./loopUtils');

test('Print numbers from 1 to 5', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  printNumbers(1, 5);
  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith(2);
  expect(consoleSpy).toHaveBeenCalledWith(3);
  expect(consoleSpy).toHaveBeenCalledWith(4);
  expect(consoleSpy).toHaveBeenCalledWith(5);
  consoleSpy.mockRestore();
});

test('Reverse an array', () => {
  const array = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(array);
  expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
});