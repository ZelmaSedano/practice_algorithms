// create a function that finds the factorial for a given number 
    // a factorial is the product of all the numbers below it from 1 to itself, including itself
function factorialize(num) {
    // create a variable to hold the result, making sure to set it to 1 since it'll be multiplied
    result = 1;

    // loop from 1 to num, including num
    for(let i = 1; i <= num; i++) {
        // 1x1 = 1, 2x1 = 2, 3x2 = 6, 4x6 = 24, 5 x 24 = 120
        result = result * i; 
    }

    return result;
}

console.log(factorialize(5));