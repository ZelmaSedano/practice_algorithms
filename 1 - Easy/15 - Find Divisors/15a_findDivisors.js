// create a function that finds the divisors of a given num
function findDivisors(num) {
    // create an empty array variable to hold the divisors
    result = [];

    // loop from 2 to num (not including num), pushing any number that divides into num into the result array
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(findDivisors(8));