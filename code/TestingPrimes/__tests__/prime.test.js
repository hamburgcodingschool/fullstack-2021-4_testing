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

describe("isPrimeTest", () => {
    // negative numbers are false
    // 0 and 1 are false
    // 2 is a prime
    // 3 is a prime
    // 9 is not a prime
    // even numbers are not prime
    // 17 is a prime
    // 6317 is a prime
    
    it("fails on negative numbers", () => {    
        expect(prime.isPrime(-1)).toEqual(false);
        expect(prime.isPrime(-10)).toEqual(false);
        expect(prime.isPrime(-100)).toEqual(false);
        expect(prime.isPrime(-252)).toEqual(false);
    });

    it("fails on 0, 1, 9", () => {    
        expect(prime.isPrime(0)).toEqual(false);
        expect(prime.isPrime(1)).toEqual(false);
        expect(prime.isPrime(9)).toEqual(false);
    });

    it("passes on valid primes", () => {    
        expect(prime.isPrime(2)).toEqual(true);
        expect(prime.isPrime(3)).toEqual(true);
        expect(prime.isPrime(17)).toEqual(true);
        expect(prime.isPrime(6317)).toEqual(true);
    }); 
    
    it("fails on even numbers", () => {    
        for (let i = 4; i < 100000; i+=2) {
            expect(prime.isPrime(i)).toEqual(false);
        }
    }); 
});