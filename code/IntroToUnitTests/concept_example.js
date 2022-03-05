const getSumOfApples = (bucket1, bucket2) => bucket1 + bucket2;

const a = 6;
const b = 3;

const expectation = 9;

const actual = getSumOfApples(a, b);

if (actual == expectation) {
    console.log("Congratulations, your test just passed");
} else {
    console.log("Whoops, seems like your test failed");
}


// WHAT IS TDD
// 1 - Write Tests (the test will fail)
// 2 - Make the test Pass
// 3 - Refactor
