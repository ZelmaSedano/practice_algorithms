// create a function to check and see if a given num is a prime
function isNumPrime(num) {
    // 1 is not a prime
    if(num === 1) {
        return false;
    } else {
        // loop from 2 to num, checking to see if any of the numbers divide into num
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }

        return true;
    }
}

console.log(isNumPrime(18));