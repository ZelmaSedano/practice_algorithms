// create a function that checks to see if a given number is a prime number of not - prime numbers are not 1 and no number between 2 and itself divide into it
function isNumPrime(num) {
    if (num === 1) {
        return false;
    } else {
        // loop from 2 to the number before num and see if any of the numbers divide into num 
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                    return false;
            } 
        }

        // as a backup, if the number is a prime, return true
        return true;
    }
}

console.log(isNumPrime(23));