const numbers = [1, 2, 3, 4, 5, 6];
const moreNumbers = [7, 8, 9, 10];

const result = [...numbers, ...moreNumbers, 11, 12, 13];

console.log(result);

// const numbers2 = [...numbers];
// numbers2[0] = 1000;

// console.log(numbers);
// console.log(numbers2);