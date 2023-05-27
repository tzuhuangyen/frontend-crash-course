// Practices 5 - function
// 1.Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
let isEven = (n) => n % 2 == 0;
console.log(isEven(6));


// 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
const isLeapYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(isLeapYear(1900))

// 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
const isPrime = (natureNum) => {
    if (natureNum <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(natureNum); i++) {
        if (natureNum % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(5))


// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
let x = 20;
let y = 9;
let z = 17;
const findMix = (x, y, z)=> {
    if (x > y && x > z) {
        return x;
    } else if (y > z && y > x) {
        return y;
    } else {
        return z;
    }
}

console.log(findMix(x, y, z))