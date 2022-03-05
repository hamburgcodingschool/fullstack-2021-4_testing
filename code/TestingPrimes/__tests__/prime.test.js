const prime = require("../prime");

test("returns array of 5 prime numbers", () => {
    const actual = prime.generatePrimes(5); // expected to return an array with the first 5 prime numbers
    const expected = [2, 3, 5, 7, 11];

    expect(actual).toEqual(expected);
});

test("returns array of 10 prime numbers", () => {
    const actual = prime.generatePrimes(10);
    const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    expect(actual).toEqual(expected);
});