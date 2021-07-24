// create a function that finds the divisors of a given num
function findDivisors(num) {
    // create a variable (arr) to hold the divisors
    result = [];

    //
    for(let i = 2; i <= num; i++) {
        if(num % i === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(findDivisors(15));