const { printNumbers, reverseArray } = require('./loopUtils');

console.log('Printing numbers from 1 to 10:');
printNumbers(1, 10);

console.log('Reversing an array:');
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log('Original Array:', array);
console.log('Reversed Array:', reversedArray);