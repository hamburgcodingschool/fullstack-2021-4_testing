function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return number > 1;
}

function generatePrimes(length) {
    const foundPrimes = [];
    let number = 2;
    while (foundPrimes.length < length) {
        if (isPrime(number)) {
            foundPrimes.push(number);
        }
        number++;
    }
    return foundPrimes;
}

module.exports = {
    generatePrimes,
    isPrime
}