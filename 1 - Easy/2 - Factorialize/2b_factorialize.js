// create a function that returns the factorial of a given number
function factorialize(num) {
    // create a variable to hold the result
    result = 1;         // 1 'cuz multiplying

    // loop from 1 to num, including num, multiplying the current number with the product of the last number
    for(let i = 1; i <= num; i++) {
        result = result * i;    // 1x1=1, 2x1=2, 2x3=6, 3x4=24
    }

    return result;
}

console.log(factorialize(4));