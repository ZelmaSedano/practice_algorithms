// create a function that returns the factorial of a given number using recursion
function factorialize(num) {
    // stopping condition
    if(num === 0) {
        return 1;
    }

    return num * factorialize(num-1);
}

console.log(factorialize(5));