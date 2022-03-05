const numbers = [1, 34, 23, 12, 19, 20, 10, 4, 12, 1, 3, 2, 7, 15, 21, 90];

// const singleDigitNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//         singleDigitNumbers.push(numbers[i]);
//     }
// }

// console.log(numbers);
// console.log(singleDigitNumbers);

const singleDigitNumbers = numbers.filter(number => number < 10);

console.log(numbers);
console.log(singleDigitNumbers);